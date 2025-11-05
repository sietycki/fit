import React, { useState, useMemo } from 'react';
import Card from '../components/Card';
import { useAppContext } from '../contexts/AppContext';
import { SKILLS_DB_ROLKI } from '../constants';
import { Skill, SkillStatus } from '../types';

const categoryInfo: Record<Skill['category'], {
    title: string;
    description: string;
    bg: string;
    border: string;
    text: string;
    progress: string;
}> = {
    basic: {
        title: '🟢 Podstawy i Kontrola',
        description: 'Fundamenty, na których zbudujesz wszystko inne. Opanuj te ruchy, aby czuć się pewnie i bezpiecznie na rolkach.',
        bg: 'bg-green-900/50',
        border: 'border-green-700',
        text: 'text-green-300',
        progress: 'bg-green-500',
    },
    slides: {
        title: '🔵 Hamowanie i Slajdy',
        description: 'Kluczowa kategoria dla bezpieczeństwa i kontroli. Od prostego hamowania po zaawansowane, stylowe slajdy do zatrzymywania się z dużej prędkości.',
        bg: 'bg-blue-900/50',
        border: 'border-blue-700',
        text: 'text-blue-300',
        progress: 'bg-blue-500',
    },
    jumps: {
        title: '🟠 Skoki i Graby',
        description: 'Naucz się odrywać od ziemi! Skoki budują eksplozywność i otwierają drzwi do pokonywania przeszkód oraz trików w powietrzu.',
        bg: 'bg-orange-900/50',
        border: 'border-orange-700',
        text: 'text-orange-300',
        progress: 'bg-orange-500',
    },
    spins: {
        title: '🟡 Obroty (Spiny)',
        description: 'Opanuj sztukę rotacji. Spiny są podstawą wielu trików freestylowych i tanecznych, poprawiając równowagę i koordynację.',
        bg: 'bg-yellow-900/50',
        border: 'border-yellow-700',
        text: 'text-yellow-300',
        progress: 'bg-yellow-500',
    },
    manuals: {
        title: '🟣 Manuale (Jazda na 2 kółkach)',
        description: 'Test Twojej równowagi. Jazda na dwóch kółkach to stylowy sposób na urozmaicenie przejazdów i podstawa do zaawansowanych kombinacji.',
        bg: 'bg-purple-900/50',
        border: 'border-purple-700',
        text: 'text-purple-300',
        progress: 'bg-purple-500',
    },
    wizard: {
        title: '🔮 Wizard Skating (Flow)',
        description: 'Kreatywna i płynna jazda łącząca w sobie taniec, freestyle i niezwykłą kontrolę. Tutaj technika spotyka się ze sztuką.',
        bg: 'bg-pink-900/50',
        border: 'border-pink-700',
        text: 'text-pink-300',
        progress: 'bg-pink-500',
    },
    slalom: {
        title: '💠 Slalom & Footwork',
        description: 'Precyzyjna praca nóg i płynne przejścia między pachołkami. Slalom rozwija niesamowitą kontrolę, równowagę i rytm.',
        bg: 'bg-teal-900/50',
        border: 'border-teal-700',
        text: 'text-teal-300',
        progress: 'bg-teal-500',
    },
    grinds: {
        title: '🛠️ Grindy (Jazda Agresywna)',
        description: 'Podstawy jazdy agresywnej. Grindy to ślizganie się po rurkach i krawędziach na specjalnej części płozy. Wymaga odwagi i precyzji.',
        bg: 'bg-slate-800/50',
        border: 'border-slate-600',
        text: 'text-slate-300',
        progress: 'bg-slate-500',
    }
};

const DetailSection: React.FC<{ title: string, icon: React.ReactNode, children: React.ReactNode }> = ({ title, icon, children }) => (
    <div className="mt-4">
        <h5 className="font-semibold text-gray-300 flex items-center gap-2 mb-2">
            {icon}
            {title}
        </h5>
        {children}
    </div>
);


const SkillCard: React.FC<{ skill: Skill; allSkillsMap: { [id: string]: Skill } }> = ({ skill, allSkillsMap }) => {
    const { state, dispatch } = useAppContext();
    const [isExpanded, setIsExpanded] = useState(false);
    const currentApp = state.currentApp!;
    const skillProgress = state.apps[currentApp].skillProgress || {};

    const currentStatus = skillProgress[skill.id] || 'not_started';

    const handleStatusChange = (e: React.MouseEvent, status: SkillStatus) => {
        e.stopPropagation(); // Prevent card from toggling when clicking buttons
        dispatch({
            type: 'UPDATE_SKILL_STATUS',
            payload: { appName: currentApp, skillId: skill.id, status }
        });
    };

    const statuses: { id: SkillStatus, label: string }[] = [
        { id: 'not_started', label: 'Do nauki' },
        { id: 'in_progress', label: 'W trakcie' },
        { id: 'mastered', label: 'Opanowane' }
    ];

    const statusColors = {
        not_started: 'bg-gray-600 hover:bg-gray-500',
        in_progress: 'bg-yellow-600 hover:bg-yellow-500',
        mastered: 'bg-green-600 hover:bg-green-500'
    };
    
    const activeStatusColor = {
        not_started: 'bg-gray-500 ring-2 ring-gray-300',
        in_progress: 'bg-yellow-500 ring-2 ring-yellow-300',
        mastered: 'bg-green-500 ring-2 ring-green-300'
    };

    const difficultyBadgeColor = {
        beginner: 'bg-green-500/20 text-green-300',
        intermediate: 'bg-blue-500/20 text-blue-300',
        advanced: 'bg-yellow-500/20 text-yellow-300',
        expert: 'bg-red-500/20 text-red-300',
    }

    const statusBorderColors = {
        not_started: 'hover:border-cyan-500/50',
        in_progress: '!border-yellow-500 !border-2',
        mastered: '!border-green-500 !border-2'
    };

    return (
        <Card className={`cursor-pointer transition-all duration-300 ${statusBorderColors[currentStatus]}`} onClick={() => setIsExpanded(!isExpanded)}>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-1">
                        <h4 className="font-bold text-lg text-gray-100">{skill.name}</h4>
                        {skill.video && (
                           <a href={skill.video} target="_blank" rel="noopener noreferrer" title="Obejrzyj tutorial na YouTube" className="text-red-500 hover:text-red-400" onClick={(e) => e.stopPropagation()}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.73,18.78 17.93,18.84C17.13,18.91 16.44,18.94 15.84,18.94L15,19C12.81,19 11.2,18.84 10.17,18.56C9.27,18.31 8.69,17.73 8.44,16.83C8.31,16.36 8.22,15.73 8.16,14.93C8.09,14.13 8.06,13.44 8.06,12.84L8,12C8,9.81 8.16,8.2 8.44,7.17C8.69,6.27 9.27,5.69 10.17,5.44C10.64,5.31 11.27,5.22 12.07,5.16C12.87,5.09 13.56,5.06 14.16,5.06L15,5C17.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z" /></svg>
                            </a>
                        )}
                    </div>
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${difficultyBadgeColor[skill.difficulty]}`}>{skill.difficulty.charAt(0).toUpperCase() + skill.difficulty.slice(1)}</span>
                </div>
                <div className="flex-shrink-0 flex gap-2 mt-4 sm:mt-0 self-start sm:self-center">
                    {statuses.map(status => (
                        <button
                            key={status.id}
                            onClick={(e) => handleStatusChange(e, status.id)}
                            title={status.label}
                            className={`px-3 py-1.5 text-xs font-bold text-white rounded-md transition-all ${currentStatus === status.id ? activeStatusColor[status.id] : statusColors[status.id]}`}
                        >
                            {status.label}
                        </button>
                    ))}
                </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mt-4">{skill.description}</p>
            
            {isExpanded && (
                <div className="mt-4 border-t border-gray-700 pt-4 animate-fade-in-up">
                    
                    {skill.prerequisites.length > 0 && (
                        <DetailSection title="Wymagania" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0l-1.5-1.5a2 2 0 112.828-2.828l1.5 1.5 3-3a2 2 0 010 2.828l-3 3a2 2 0 01-2.828 0l-1.5-1.5a2 2 0 112.828-2.828l1.5 1.5zM8 10a1 1 0 011-1h6a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd" /></svg>}>
                            <ul className="flex flex-wrap gap-2 mt-1">
                                {skill.prerequisites.map(id => (
                                    <li key={id} className="text-xs text-cyan-300 bg-cyan-900/50 px-2 py-1 rounded-md">{allSkillsMap[id]?.name || id}</li>
                                ))}
                            </ul>
                        </DetailSection>
                    )}

                    <DetailSection title="Kluczowe Wskazówki" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>}>
                         <ul className="space-y-1 list-inside text-sm text-gray-300">
                           {skill.keyPoints.map((point, i) => <li key={i}>{point}</li>)}
                        </ul>
                    </DetailSection>

                    <DetailSection title="Najczęstsze Błędy" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>}>
                        <ul className="space-y-1 list-inside text-sm text-gray-300">
                           {skill.commonMistakes.map((mistake, i) => <li key={i}>{mistake}</li>)}
                        </ul>
                    </DetailSection>

                    {skill.gearTips && (
                         <DetailSection title="Wskazówki Sprzętowe" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor"><path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" /></svg>}>
                            <p className="text-sm text-gray-300">{skill.gearTips}</p>
                        </DetailSection>
                    )}
                </div>
            )}
        </Card>
    );
};

const SkillCategory: React.FC<{
    category: Skill['category'];
    skills: Skill[];
    allSkillsMap: { [id: string]: Skill };
}> = ({ category, skills, allSkillsMap }) => {
    const { state } = useAppContext();
    const currentApp = state.currentApp!;
    const skillProgress = state.apps[currentApp].skillProgress || {};

    const info = categoryInfo[category];
    
    const masteredCount = skills.filter(s => skillProgress[s.id] === 'mastered').length;
    const totalCount = skills.length;
    const progressPercentage = totalCount > 0 ? (masteredCount / totalCount) * 100 : 0;

    const sortedSkills = useMemo(() => {
        const sortOrder: { [key in SkillStatus]: number } = {
            not_started: 0,
            in_progress: 1,
            mastered: 2,
        };

        return [...skills].sort((a, b) => {
            const statusA = skillProgress[a.id] || 'not_started';
            const statusB = skillProgress[b.id] || 'not_started';
            return sortOrder[statusA] - sortOrder[statusB];
        });
    }, [skills, skillProgress]);


    return (
        <div className={`p-6 rounded-lg border ${info.border} ${info.bg}`}>
            <h3 className={`text-2xl font-bold mb-1 ${info.text}`}>{info.title}</h3>
            <p className="text-sm text-gray-400 mb-4 max-w-2xl">{info.description}</p>
            <div className="w-full bg-gray-700 rounded-full h-2.5 mb-2">
                <div className={`${info.progress} h-2.5 rounded-full transition-all duration-500`} style={{ width: `${progressPercentage}%` }}></div>
            </div>
            <p className="text-sm text-gray-400 mb-6">{masteredCount} z {totalCount} opanowane ({Math.round(progressPercentage)}%)</p>
            <div className="space-y-4">
                {sortedSkills.map(skill => <SkillCard key={skill.id} skill={skill} allSkillsMap={allSkillsMap} />)}
            </div>
        </div>
    );
};

const Skills: React.FC = () => {
    const allSkillsMap = useMemo(() => 
        SKILLS_DB_ROLKI.reduce((acc, skill) => {
            acc[skill.id] = skill;
            return acc;
        }, {} as { [id: string]: Skill }), 
    []);

    const skillsByCategory = SKILLS_DB_ROLKI.reduce((acc, skill) => {
        if (!acc[skill.category]) {
            acc[skill.category] = [];
        }
        acc[skill.category].push(skill);
        return acc;
    }, {} as { [key in Skill['category']]: Skill[] });

    const categoryOrder: Skill['category'][] = ['basic', 'slides', 'jumps', 'spins', 'manuals', 'wizard', 'slalom', 'grinds'];

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold text-gray-100">🛹 Biblioteka Umiejętności</h1>
            <p className="text-gray-400 -mt-6">Śledź swoje postępy w nauce. Kliknij na dowolny skill, aby zobaczyć szczegółową instrukcję.</p>
            
            {categoryOrder.map(category => 
                skillsByCategory[category] && (
                    <SkillCategory 
                        key={category}
                        category={category}
                        skills={skillsByCategory[category]}
                        allSkillsMap={allSkillsMap}
                    />
                )
            )}
            {/* Hidden class names for Tailwind JIT compiler */}
            <div className="hidden bg-orange-900/50 border-orange-700 text-orange-300 bg-orange-500 bg-pink-900/50 border-pink-700 text-pink-300 bg-pink-500 bg-teal-900/50 border-teal-700 text-teal-300 bg-teal-500 bg-slate-800/50 border-slate-600 text-slate-300 bg-slate-500"></div>
        </div>
    );
};

export default Skills;