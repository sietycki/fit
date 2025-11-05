
import React, { useState } from 'react';
import { useAppContext } from '../contexts/AppContext';
import { Level, UserAssessment } from '../types';
import Button from '../components/Button';
import Card from '../components/Card';

const Assessment: React.FC = () => {
    const { state, dispatch } = useAppContext();
    const currentApp = state.currentApp!;
    
    const [answers, setAnswers] = useState({
        experience: '',
        strength: '',
        skill: '',
        specificExperience: '',
        injuries: '',
    });

    const isRolki = currentApp === 'rolki';

    const questions = [
        { id: 'experience', q: 'Ile lat masz doświadczenia treningowego?', a: ['Brak doświadczenia', '1-2 lata', '2-5 lat', 'Ponad 5 lat'] },
        { id: 'strength', q: isRolki ? 'Ile przysiadów możesz wykonać bez przerwy?' : 'Ile pompek możesz wykonać bez przerwy?', a: ['Mniej niż 10', '10-20', '20-40', 'Więcej niż 40'] },
        { id: 'skill', q: isRolki ? 'Czy potrafisz wykonać przysiad na jednej nodze?' : 'Czy potrafisz wykonać podciągnięcie?', a: ['Nie', 'Z pomocą', 'Częściowo', 'Tak, pełne wykonanie'] },
        { id: 'specificExperience', q: isRolki ? 'Ile doświadczenia z jazdą na rolkach?' : 'Ile doświadczenia z pompkami/podciąganiem?', a: ['Zupełnie nowy', 'Początkujący (miesiąc)', 'Średnio (kilka miesięcy)', 'Zaawansowany'] },
        { id: 'injuries', q: isRolki ? 'Czy masz kontuzje nóg?' : 'Czy masz kontuzje górnej części ciała?', a: ['Tak', 'Nie'] }
    ];

    const handleAnswerChange = (questionId: string, value: string) => {
        setAnswers(prev => ({ ...prev, [questionId]: value }));
    };

    const handleSubmit = () => {
        const values = Object.values(answers);
        if (values.some(v => v === '')) {
            alert('Proszę odpowiedzieć na wszystkie pytania!');
            return;
        }

        // Fix: Explicitly cast value to string before parsing to fix 'unknown' type error.
        const scores = values.map(v => parseInt(String(v), 10));
        const totalScore = scores.reduce((sum, score) => sum + score, 0);

        let level: Level = 'beginner';
        if (totalScore >= 12) level = 'advanced';
        else if (totalScore >= 7) level = 'intermediate';

        const assessmentData: UserAssessment = {
            experience: scores[0],
            strength: scores[1],
            skill: scores[2],
            specificExperience: scores[3],
            injuries: scores[4],
            score: totalScore,
            level: level,
            date: new Date().toISOString(),
        };

        dispatch({ type: 'SUBMIT_ASSESSMENT', payload: { appName: currentApp, assessment: assessmentData } });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
            <Card className="w-full max-w-2xl">
                <h1 className="text-2xl font-bold text-center mb-2 text-gray-100">📋 Ocena Początkowej Formy</h1>
                <p className="text-center text-gray-400 mb-6">Odpowiedz na 5 pytań, aby dostosować program do Ciebie.</p>
                
                <div className="space-y-6">
                    {questions.map((q, qIndex) => (
                        <div key={q.id} className="p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                            <h3 className="font-semibold text-gray-200">{`${qIndex + 1}. ${q.q}`}</h3>
                            <div className="mt-2 space-y-2">
                                {q.a.map((option, aIndex) => (
                                    <label key={aIndex} className="flex items-center p-2 rounded-md hover:bg-gray-700 cursor-pointer">
                                        <input
                                            type="radio"
                                            name={q.id}
                                            value={q.id === 'injuries' ? (aIndex === 0 ? '0' : '1') : aIndex.toString()}
                                            checked={answers[q.id as keyof typeof answers] === (q.id === 'injuries' ? (aIndex === 0 ? '0' : '1') : aIndex.toString())}
                                            onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                                            className="h-4 w-4 text-cyan-500 bg-gray-600 border-gray-500 focus:ring-cyan-500"
                                        />
                                        <span className="ml-3 text-sm text-gray-300">{option}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                
                <Button onClick={handleSubmit} className="mt-8 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600">
                    🚀 Generuj Plan
                </Button>
            </Card>
        </div>
    );
};

export default Assessment;