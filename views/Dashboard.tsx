
import React from 'react';
import { useAppContext } from '../contexts/AppContext';
import Card from '../components/Card';
import StatCard from '../components/StatCard';
import Button from '../components/Button';
import { TabName } from '../types';

const Dashboard: React.FC = () => {
    const { state, dispatch } = useAppContext();
    const currentApp = state.currentApp!;
    const currentAppState = state.apps[currentApp];
    const { workoutsCompleted, trainingHistory, lastWorkoutDate, level, recoveryStats } = currentAppState;
    
    const avgRpe = trainingHistory.length > 0
        ? (trainingHistory.reduce((sum, t) => sum + parseFloat(t.avgRpe), 0) / trainingHistory.length).toFixed(1)
        : '-';

    const levelNames = {
        beginner: 'Początkujący',
        intermediate: 'Średniozaawansowany',
        advanced: 'Zaawansowany'
    };
    
    const handleStartTraining = () => {
        dispatch({ type: 'SET_ACTIVE_TAB', payload: { appName: currentApp, tab: 'training' } });
    }
    const handleGoToRecovery = () => {
        dispatch({ type: 'SET_ACTIVE_TAB', payload: { appName: currentApp, tab: 'recovery' } });
    }

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-100">Twój Dashboard</h1>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <StatCard icon="🏋️" value={`${workoutsCompleted}`} label="Ukończone treningi" />
                <StatCard icon="📊" value={avgRpe} label="Średnie RPE" />
                <StatCard icon="📅" value={lastWorkoutDate || 'Brak'} label="Ostatni trening" valueClassName="text-base"/>
                <StatCard icon="🎯" value={level ? levelNames[level] : '-'} label="Twój poziom" valueClassName="text-lg"/>
            </div>

            {workoutsCompleted === 0 ? (
                <Card className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white">
                    <h3 className="text-xl font-bold">🎯 Wykonaj swoje pierwsze ćwiczenia!</h3>
                    <p className="mt-2 opacity-90">Rozpocznij swój pierwszy trening i śledź postępy.</p>
                    <Button onClick={handleStartTraining} className="mt-4 bg-white text-cyan-600 hover:bg-gray-100 w-auto px-6 py-2">
                        🚀 Rozpocznij pierwszy trening
                    </Button>
                </Card>
            ) : (
                <Card>
                     <h3 className="text-xl font-bold text-gray-100">✅ Świetnie! Wykonałeś {workoutsCompleted} treningów</h3>
                    <p className="mt-2 text-gray-400">Kontynuuj swój postęp!</p>
                     <Button onClick={handleStartTraining} className="mt-4 w-auto px-6 py-2">
                        🏋️ Rozpocznij kolejny trening
                    </Button>
                </Card>
            )}

            {workoutsCompleted > 0 && (
                 <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                        <h3 className="font-bold text-lg text-gray-100">🧘 Status Recovery</h3>
                        <p className="text-sm text-gray-400 mt-2"><strong>Ostatni foam rolling:</strong> <span className="font-medium text-gray-200">{recoveryStats.lastRecoveryDate || 'Brak'}</span></p>
                        <p className="text-sm text-gray-400 mt-1"><strong>Ten tydzień:</strong> <span className="font-medium text-gray-200">{recoveryStats.totalSessions}</span> sesji</p>
                        <div className="mt-3 p-3 bg-emerald-900/50 border border-emerald-700 rounded-lg text-sm text-emerald-200">
                           <strong>💡 Efekty Recovery:</strong><br />
                            Jump +12%, DOMS -30%, Szybsza regeneracja
                        </div>
                        <Button onClick={handleGoToRecovery} className="mt-4 !bg-emerald-500 hover:!bg-emerald-600 text-white w-auto px-4 py-2 text-sm">
                            🧘 Przejdź do Recovery
                        </Button>
                    </Card>
                    <Card>
                        <h3 className="font-bold text-lg text-gray-100">{currentApp === 'rolki' ? '🤸 Proprioceptive Progress' : '🤸 Upper Body Progress'}</h3>
                         <p className="text-sm text-gray-400 mt-2"><strong>Balance score:</strong> <span className="font-medium text-gray-200">B/D</span></p>
                         <p className="text-sm text-gray-400 mt-1"><strong>Agility drills ten tydzień:</strong> <span className="font-medium text-gray-200">0</span></p>
                         <div className={`mt-3 p-3 rounded-lg border text-sm ${currentApp === 'rolki' ? 'bg-sky-900/50 border-sky-700 text-sky-200' : 'bg-green-900/50 border-green-700 text-green-200'}`}>
                           {currentApp === 'rolki' ? (
                                <><strong>🚴 Na rolkach:</strong> Lepsza kontrola, -45% kontuzji kostki, +30% agility</>
                           ) : (
                                <><strong>💪 Górna część ciała:</strong> Lepsze scapular stability, -40% kontuzji barków, +20% siła</>
                           )}
                        </div>
                    </Card>
                 </div>
            )}

            {trainingHistory.length > 0 && (
                <Card>
                    <h3 className="text-xl font-bold mb-4 text-gray-100">📊 Ostatnie Treningi</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-400">
                            <thead className="text-xs text-gray-300 uppercase bg-gray-700/50">
                                <tr>
                                    <th scope="col" className="px-6 py-3">Data</th>
                                    <th scope="col" className="px-6 py-3">Ćwiczenia</th>
                                    <th scope="col" className="px-6 py-3">Średnie RPE</th>
                                    <th scope="col" className="px-6 py-3">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {trainingHistory.slice(-5).reverse().map((t, index) => (
                                    <tr key={index} className="bg-gray-800 border-b border-gray-700 hover:bg-gray-700/50">
                                        <td className="px-6 py-4 font-medium text-gray-100">{t.date}</td>
                                        <td className="px-6 py-4">{t.exercises.length}</td>
                                        <td className="px-6 py-4">{t.avgRpe}</td>
                                        <td className="px-6 py-4 text-green-400">✅ Ukończony</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Card>
            )}
        </div>
    );
};

export default Dashboard;