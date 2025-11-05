
import React, { useState, useEffect, useCallback } from 'react';
import Card from '../components/Card';
import { useAppContext } from '../contexts/AppContext';
import Button from '../components/Button';
import { RECOVERY_PROTOCOLS } from '../constants';
import StatCard from '../components/StatCard';

const Recovery: React.FC = () => {
    const { state, dispatch } = useAppContext();
    const currentApp = state.currentApp!;
    const { recoveryStats } = state.apps[currentApp];
    
    const [activeProtocol, setActiveProtocol] = useState<string | null>(null);
    const [currentStep, setCurrentStep] = useState(0);
    const [timeRemaining, setTimeRemaining] = useState(0);
    const [isPaused, setIsPaused] = useState(true);

    const protocolSteps = activeProtocol ? RECOVERY_PROTOCOLS[activeProtocol] : [];

    const startProtocol = (protocol: string) => {
        setActiveProtocol(protocol);
        setCurrentStep(0);
        setTimeRemaining(RECOVERY_PROTOCOLS[protocol][0].duration);
        setIsPaused(false);
    };

    const stopProtocol = useCallback((completed = false) => {
        if (completed) {
            dispatch({ type: 'UPDATE_RECOVERY_STATS', payload: { appName: currentApp, protocol: activeProtocol! } });
            alert(`Protokół ${activeProtocol} zakończony!`);
        }
        setActiveProtocol(null);
        setCurrentStep(0);
        setTimeRemaining(0);
        setIsPaused(true);
    }, [activeProtocol, currentApp, dispatch]);

    useEffect(() => {
        if (!activeProtocol || isPaused) return;

        const timer = setInterval(() => {
            setTimeRemaining(prev => {
                if (prev <= 1) {
                    if (currentStep < protocolSteps.length - 1) {
                        const nextStep = currentStep + 1;
                        setCurrentStep(nextStep);
                        return protocolSteps[nextStep].duration;
                    } else {
                        clearInterval(timer);
                        stopProtocol(true);
                        return 0;
                    }
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [activeProtocol, isPaused, currentStep, protocolSteps, stopProtocol]);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-100">🧘 Protokoły Regeneracji</h1>
            
            {activeProtocol ? (
                <Card className="bg-gray-800 border-cyan-500 border-2">
                    <h3 className="text-xl font-bold text-center text-gray-100">⏱️ Timer - Opcja {activeProtocol}</h3>
                    <div className="text-center my-6">
                        <div className="text-6xl font-mono font-bold text-cyan-400">{formatTime(timeRemaining)}</div>
                        <p className="mt-2 text-gray-300">{protocolSteps[currentStep]?.name}</p>
                        <p className="text-sm text-gray-500">Krok: {currentStep + 1}/{protocolSteps.length}</p>
                    </div>
                    <div className="flex gap-4">
                        <Button onClick={() => setIsPaused(!isPaused)} variant="secondary">{isPaused ? '▶️ Wznów' : '⏸️ Pauza'}</Button>
                        <Button onClick={() => stopProtocol(false)} variant="danger">⏹️ Zakończ</Button>
                    </div>
                </Card>
            ) : (
                <>
                    <Card className="bg-sky-900/50 border-sky-700">
                        <h3 className="font-bold text-sky-300">📊 Badania 2024-2025: Foam Rolling DZIAŁA!</h3>
                        <ul className="text-sm list-disc list-inside mt-2 text-sky-200 space-y-1">
                            <li><strong>Jump Performance:</strong> +23% (Foam Rolling)</li>
                            <li><strong>Lactate Reduction:</strong> -15% (Foam Rolling)</li>
                            <li><strong>DOMS (zakwasy):</strong> Znacząco niższe</li>
                        </ul>
                    </Card>

                    <Card>
                        <h3 className="font-bold text-lg mb-4 text-gray-100">🔄 Wybierz Protokół Recovery:</h3>
                        <div className="space-y-4">
                           <div className="p-4 bg-gray-700/50 rounded-lg border-l-4 border-green-500">
                                <h4 className="font-bold text-green-300">OPTION A: Foam Rolling Only (4:30 min)</h4>
                                <Button onClick={() => startProtocol('A')} className="!w-auto px-4 py-2 text-sm mt-2">⏱️ START TIMER</Button>
                           </div>
                           <div className="p-4 bg-gray-700/50 rounded-lg border-l-4 border-blue-500">
                                <h4 className="font-bold text-blue-300">OPTION B: Foam Rolling + Contrast Therapy (15 min)</h4>
                                <Button onClick={() => startProtocol('B')} className="!w-auto px-4 py-2 text-sm mt-2">⏱️ START TIMER</Button>
                           </div>
                           <div className="p-4 bg-gray-700/50 rounded-lg border-l-4 border-orange-500">
                                <h4 className="font-bold text-orange-300">OPTION C: Active Recovery (15 min)</h4>
                                <Button onClick={() => startProtocol('C')} className="!w-auto px-4 py-2 text-sm mt-2">⏱️ START TIMER</Button>
                           </div>
                        </div>
                    </Card>
                    
                    <Card>
                        <h3 className="text-xl font-bold mb-4 text-gray-100">📊 Twoje Statystyki Recovery</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <StatCard icon="🔄" value={recoveryStats.totalSessions} label="Sesje" />
                            <StatCard icon="🔥" value={recoveryStats.streak} label="Streak (dni)" />
                            <StatCard icon="⭐" value={recoveryStats.favoriteProtocol ? `Opcja ${recoveryStats.favoriteProtocol}` : '-'} label="Ulubiony" valueClassName="text-base" />
                            <StatCard icon="📅" value={recoveryStats.lastRecoveryDate || "Brak"} label="Ostatnia sesja" valueClassName="text-base" />
                        </div>
                    </Card>
                </>
            )}
        </div>
    );
};

export default Recovery;