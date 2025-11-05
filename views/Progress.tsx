
import React from 'react';
import Card from '../components/Card';
import { useAppContext } from '../contexts/AppContext';

const Progress: React.FC = () => {
    const { state } = useAppContext();
    const currentApp = state.currentApp!;
    const { trainingHistory } = state.apps[currentApp];

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-100">📊 Twoje Postępy</h1>

            {trainingHistory.length === 0 ? (
                <Card>
                    <p className="text-center text-gray-400">Brak historii treningów. Wykonaj pierwszy trening, aby zobaczyć swoje postępy!</p>
                </Card>
            ) : (
                <Card>
                    <h3 className="text-xl font-bold mb-4 text-gray-100">Historia Treningów</h3>
                     <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-400">
                            <thead className="text-xs text-gray-300 uppercase bg-gray-700/50 rounded-t-lg">
                                <tr>
                                    <th scope="col" className="px-6 py-3">Data</th>
                                    <th scope="col" className="px-6 py-3">Trening #</th>
                                    <th scope="col" className="px-6 py-3">Ćwiczenia</th>
                                    <th scope="col" className="px-6 py-3">Śr. RPE</th>
                                    <th scope="col" className="px-6 py-3">Recovery</th>
                                </tr>
                            </thead>
                            <tbody>
                                {trainingHistory.slice().reverse().map((t, index) => (
                                    <tr key={index} className="bg-gray-800 border-b border-gray-700 hover:bg-gray-700/50">
                                        <td className="px-6 py-4 font-medium text-gray-100">{t.date}</td>
                                        <td className="px-6 py-4">{t.workoutNumber}</td>
                                        <td className="px-6 py-4">{t.exercises.length}</td>
                                        <td className="px-6 py-4">{t.avgRpe}</td>
                                        <td className="px-6 py-4">{`Opcja ${t.recovery}`}</td>
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

export default Progress;