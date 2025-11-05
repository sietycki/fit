import React, { useState, useEffect, useRef, useMemo } from 'react';
import Card from '../components/Card';
import { useAppContext } from '../contexts/AppContext';
import Button from '../components/Button';
import { EXERCISES_DB_ROLKI, EXERCISES_DB_PUSH_PULL, RECOVERY_PROTOCOLS } from '../constants';
import { WorkoutDataItem, TrainingHistoryItem, ExerciseProgress } from '../types';

type ViewMode = 'exercise' | 'resting' | 'recovery_selection' | 'recovery_timer' | 'finished';

const Training: React.FC = () => {
    const { state, dispatch } = useAppContext();
    const currentApp = state.currentApp!;
    const { level, exerciseProgress: allExerciseProgress, workoutsCompleted, maxRepsTest } = state.apps[currentApp];
    
    const isFirstWorkout = workoutsCompleted === 0;

    const [viewMode, setViewMode] = useState<ViewMode>('exercise');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [workoutData, setWorkoutData] = useState<WorkoutDataItem[]>([]);
    
    // Recovery state
    const [recoveryProtocol, setRecoveryProtocol] = useState<string | null>(null);
    const [recCurrentStep, setRecCurrentStep] = useState(0);
    const [recTimeRemaining, setRecTimeRemaining] = useState(0);
    const [recIsPaused, setRecIsPaused] = useState(false);
    const [progressions, setProgressions] = useState<{exerciseName: string, newGoal: string}[]>([]);


    const exercises = (currentApp === 'rolki' ? EXERCISES_DB_ROLKI : EXERCISES_DB_PUSH_PULL)[level!];
    const currentExercise = exercises[currentIndex];
    
    // Exercise Inputs
    const [reps, setReps] = useState(['', '', '']);
    const [maxRepsInput, setMaxRepsInput] = useState('');
    const [rpe, setRpe] = useState(6);
    const [power, setPower] = useState(3);
    const [synergy, setSynergy] = useState(3);

    const goalReps = useMemo(() => {
        if (isFirstWorkout || currentExercise.timed) return currentExercise.goalReps;
        
        const max = maxRepsTest[currentExercise.name];
        if (!max) return currentExercise.goalReps; // Fallback if test data is missing

        const baseGoal = Math.max(5, Math.round(max * 0.7));
        const currentProgress = allExerciseProgress[currentExercise.name];
        return currentProgress?.targetReps ?? baseGoal;

    }, [isFirstWorkout, currentExercise, maxRepsTest, allExerciseProgress]);

    const goalDuration = useMemo(() => {
        if (!currentExercise.timed) return 0;
        const currentProgress = allExerciseProgress[currentExercise.name];
        return currentProgress?.targetDuration ?? currentExercise.goalReps;
    }, [currentExercise, allExerciseProgress]);


    // Timers
    const [restTimeRemaining, setRestTimeRemaining] = useState(0);
    const [exerciseTimer, setExerciseTimer] = useState(0);
    const [isExerciseTimerActive, setIsExerciseTimerActive] = useState(false);
    const exerciseTimerIntervalRef = useRef<number | null>(null);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    // Reset inputs for new exercise
    useEffect(() => {
        setReps([goalReps.toString(), goalReps.toString(), goalReps.toString()]);
        setMaxRepsInput('');
        setPower(currentExercise.powerIntentRequired || 3);
        setRpe(isFirstWorkout ? 10 : 6);
        setSynergy(3);
        setExerciseTimer(0);
        setIsExerciseTimerActive(false);
        if(exerciseTimerIntervalRef.current) clearInterval(exerciseTimerIntervalRef.current);
    }, [currentIndex, currentExercise, goalReps, isFirstWorkout]);

    // Rest Timer Logic
    useEffect(() => {
        if (viewMode !== 'resting' || restTimeRemaining <= 0) return;
        const timer = setInterval(() => {
            setRestTimeRemaining(prev => prev - 1);
        }, 1000);
        return () => clearInterval(timer);
    }, [viewMode, restTimeRemaining]);
    
    // Action when rest timer finishes
    useEffect(() => {
        if (viewMode === 'resting' && restTimeRemaining <= 0) {
            setCurrentIndex(prev => prev + 1);
            setViewMode('exercise');
        }
    }, [viewMode, restTimeRemaining]);


    // Exercise Timer Logic (Stopwatch)
    useEffect(() => {
        if (isExerciseTimerActive) {
            exerciseTimerIntervalRef.current = window.setInterval(() => {
                setExerciseTimer(prev => prev + 1);
            }, 1000);
        } else {
            if(exerciseTimerIntervalRef.current) clearInterval(exerciseTimerIntervalRef.current);
        }
        return () => {
            if(exerciseTimerIntervalRef.current) clearInterval(exerciseTimerIntervalRef.current);
        };
    }, [isExerciseTimerActive]);


    // Recovery Timer Logic
    useEffect(() => {
        if (viewMode !== 'recovery_timer' || recIsPaused || !recoveryProtocol) return;
        const protocolSteps = RECOVERY_PROTOCOLS[recoveryProtocol!];
        const timer = setInterval(() => {
            setRecTimeRemaining(prev => {
                if (prev <= 1) {
                    if (recCurrentStep < protocolSteps.length - 1) {
                        const nextStep = recCurrentStep + 1;
                        setRecCurrentStep(nextStep);
                        return protocolSteps[nextStep].duration;
                    } else {
                        clearInterval(timer);
                        finishWorkout();
                        return 0;
                    }
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [viewMode, recIsPaused, recCurrentStep, recoveryProtocol]);

    const handleSaveExercise = () => {
        const newEntry: WorkoutDataItem = {
            name: currentExercise.name,
            rpe, power, synergy,
        };

        if (currentExercise.timed) {
            newEntry.duration = exerciseTimer;
        } else if (isFirstWorkout) {
            newEntry.reps = [parseInt(maxRepsInput || '0')];
        } else {
            newEntry.reps = [parseInt(reps[0] || '0'), parseInt(reps[1] || '0'), parseInt(reps[2] || '0')];
        }

        const updatedWorkoutData = [...workoutData, newEntry];
        setWorkoutData(updatedWorkoutData);
        
        if (currentIndex < exercises.length - 1) {
            setRestTimeRemaining(currentExercise.restTime);
            setViewMode('resting');
        } else {
            setViewMode('recovery_selection');
        }
    };
    
    const handleSelectRecovery = (protocol: string) => {
        setRecoveryProtocol(protocol);
        setRecCurrentStep(0);
        setRecTimeRemaining(RECOVERY_PROTOCOLS[protocol][0].duration);
        setRecIsPaused(false);
        setViewMode('recovery_timer');
    };

    const calculateProgressions = () => {
        if (isFirstWorkout) return { newProgress: {}, summary: [] };

        const newProgress: ExerciseProgress = {};
        const summary: {exerciseName: string, newGoal: string}[] = [];
        
        workoutData.forEach(item => {
            const exerciseDef = exercises.find(e => e.name === item.name);
            if (!exerciseDef) return;
    
            const lastGoal = item.reps ? goalReps : goalDuration;

            if (item.reps && item.rpe <= 7) {
                const allSetsMetOrExceeded = item.reps.every(rep => rep >= lastGoal);
                if (allSetsMetOrExceeded) {
                    const newTargetReps = lastGoal + 1;
                    newProgress[item.name] = { targetReps: newTargetReps };
                    summary.push({ exerciseName: item.name, newGoal: `${newTargetReps} powtórzeń` });
                }
            } else if (item.duration && item.rpe <= 7) {
                if (item.duration >= lastGoal) {
                    const newTargetDuration = lastGoal + 5;
                    newProgress[item.name] = { targetDuration: newTargetDuration };
                    summary.push({ exerciseName: item.name, newGoal: `${newTargetDuration} sekund` });
                }
            }
        });
        
        return { newProgress, summary };
    };
    
    const finishWorkout = () => {
        const avgRpe = (workoutData.reduce((sum, d) => sum + d.rpe, 0) / workoutData.length).toFixed(1);
        const { newProgress, summary } = calculateProgressions();
        setProgressions(summary);

        const newWorkout: TrainingHistoryItem = {
            date: new Date().toISOString().split('T')[0],
            exercises: workoutData,
            avgRpe: avgRpe,
            recovery: recoveryProtocol!,
            workoutNumber: state.apps[currentApp].workoutsCompleted + 1,
        };

        dispatch({ type: 'SAVE_WORKOUT', payload: { appName: currentApp, workout: newWorkout, recoveryProtocol: recoveryProtocol!, exerciseProgress: newProgress } });
        dispatch({ type: 'UPDATE_RECOVERY_STATS', payload: { appName: currentApp, protocol: recoveryProtocol! } });
        setViewMode('finished');
    }

    const renderContent = () => {
        switch (viewMode) {
            case 'exercise':
                const goalString = isFirstWorkout
                    ? 'MAX powtórzeń (do upadku)'
                    : currentExercise.timed
                    ? `${goalDuration} sekund`
                    : `3 serie x ${goalReps} powtórzeń`;
                
                const previousGoal = currentExercise.timed
                    ? currentExercise.goalReps !== goalDuration ? ` (Poprzednio: ${currentExercise.goalReps}s)` : ''
                    : goalReps !== currentExercise.goalReps ? ` (Baza: ${Math.max(5, Math.round((maxRepsTest[currentExercise.name] || 0) * 0.7))} | Poprzednio: ${goalReps - 1})` : '';

                return (
                    <Card>
                        <div className="text-center font-bold bg-gray-700/50 p-2 rounded-md mb-4 text-gray-200 flex justify-between items-center">
                           <span>Ćwiczenie {currentIndex + 1}/{exercises.length}</span>
                           <span className="text-lg">{currentExercise.name}</span>
                        </div>

                        {isFirstWorkout && (
                             <div className="p-4 mb-4 bg-yellow-900/50 border-l-4 border-yellow-500 text-yellow-200">
                                <h4 className="font-bold">🧪 To jest Twój Trening Testowy!</h4>
                                <p className="text-sm mt-1">Wykonaj jedną serię każdego ćwiczenia na <strong>maksymalną</strong> liczbę powtórzeń (do upadku mięśniowego). Twoje wyniki posłużą do stworzenia spersonalizowanego planu na kolejne tygodnie.</p>
                            </div>
                        )}
                        
                        <div className="my-4 p-4 bg-gray-900/50 border border-gray-700 rounded-lg">
                            <h4 className="font-bold text-gray-200 mb-2">Jak wykonać ćwiczenie:</h4>
                            <p className="text-gray-300 whitespace-pre-wrap leading-relaxed text-sm">{currentExercise.description}</p>
                        </div>

                        <p><strong>Cel:</strong> <span className="font-bold text-cyan-400">{goalString} {previousGoal && !isFirstWorkout && '🔥'}</span> <span className="text-xs text-gray-400">{previousGoal}</span></p>
                        <p className="text-sm text-gray-400 mt-2">💡 {currentExercise.tip}</p>
                        <p className="text-sm mt-2">{currentExercise.breathing}</p>
                        <p className="text-sm mt-2">{currentExercise.tempo}</p>
                        {currentExercise.warning && <p className="text-sm mt-2 p-2 bg-red-900/50 border-l-4 border-red-500 text-red-300">{currentExercise.warning}</p>}
                        
                        {currentExercise.timed ? (
                            <div className="my-4 text-center">
                                <p className="text-sm font-medium text-gray-300">Czas ćwiczenia</p>
                                <div className="text-6xl font-mono font-bold text-cyan-400 my-2">{formatTime(exerciseTimer)}</div>
                                <div className="flex gap-2 justify-center">
                                    <Button className="!w-auto px-4" onClick={() => setIsExerciseTimerActive(!isExerciseTimerActive)} variant={isExerciseTimerActive ? 'secondary' : 'primary'}>{isExerciseTimerActive ? 'Pauza' : 'Start'}</Button>
                                    <Button className="!w-auto px-4" onClick={() => { setIsExerciseTimerActive(false); setExerciseTimer(0); }} variant="danger">Reset</Button>
                                </div>
                            </div>
                        ) : isFirstWorkout ? (
                             <div className="my-4">
                                <label className="text-sm font-medium text-gray-300">MAX Ilość Powtórzeń</label>
                                <input type="number" value={maxRepsInput} onChange={e => setMaxRepsInput(e.target.value)} className="w-full p-2 border border-gray-600 bg-gray-700 rounded-md text-white text-lg text-center focus:ring-cyan-500 focus:border-cyan-500"/>
                            </div>
                        ) : (
                            <div className="grid grid-cols-3 gap-4 my-4">
                                {[0,1,2].map(i => (
                                    <div key={i}>
                                        <label className="text-sm font-medium text-gray-300">Seria {i+1}</label>
                                        <input type="number" value={reps[i]} onChange={e => {const newReps = [...reps]; newReps[i] = e.target.value; setReps(newReps);}} className="w-full p-2 border border-gray-600 bg-gray-700 rounded-md text-white focus:ring-cyan-500 focus:border-cyan-500"/>
                                    </div>
                                ))}
                            </div>
                        )}
                        
                        <div className="space-y-4">
                            <div>
                                <label className="text-gray-300">RPE (1-10): <strong className="text-cyan-400">{rpe}</strong></label>
                                <input type="range" min="1" max="10" value={rpe} onChange={e => setRpe(parseInt(e.target.value))} className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer range-thumb:bg-cyan-500"/>
                            </div>
                            <div>
                                <label className="text-gray-300">⚡ Power Intent (1-5): <strong className="text-cyan-400">{power}</strong></label>
                                <input type="range" min="1" max="5" value={power} onChange={e => setPower(parseInt(e.target.value))} className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"/>
                            </div>
                            <div>
                                <label className="text-gray-300">🧠 Muscle Synergy (1-5): <strong className="text-cyan-400">{synergy}</strong></label>
                                <input type="range" min="1" max="5" value={synergy} onChange={e => setSynergy(parseInt(e.target.value))} className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"/>
                            </div>
                        </div>

                        <Button onClick={handleSaveExercise} className="mt-6">
                            {currentIndex < exercises.length - 1 ? (isFirstWorkout ? '✅ Zapisz i Następne Ćwiczenie' : '✅ Zapisz i Odpocznij') : '✅ Zakończ i Przejdź do Recovery'}
                        </Button>
                    </Card>
                );
            case 'resting':
                return (
                    <Card className="text-center bg-gray-800 border-cyan-500 border-2">
                        <h2 className="text-2xl font-bold text-gray-100 mb-2">🧊 Czas na przerwę!</h2>
                        <p className="text-gray-400">Następne ćwiczenie: {exercises[currentIndex + 1].name}</p>
                        <div className="text-8xl font-mono font-bold text-cyan-400 my-6">{formatTime(restTimeRemaining)}</div>
                        <Button onClick={() => setRestTimeRemaining(0)} variant="secondary">Pomiń Przerwę ⏭️</Button>
                    </Card>
                );
            case 'recovery_selection':
                 return (
                    <Card>
                        <h2 className="text-2xl font-bold text-center text-gray-100">🧘 Regeneracja po treningu</h2>
                        <p className="text-center text-gray-400 mt-2">Wybierz protokół regeneracji, aby zakończyć trening.</p>
                        <div className="mt-6 space-y-4">
                            <div onClick={() => handleSelectRecovery('A')} className="p-4 bg-green-900/50 rounded-lg border-2 border-green-700 hover:bg-green-800/50 cursor-pointer">
                                <h4 className="font-bold text-green-300">OPTION A: Foam Rolling Only (4:30 min)</h4>
                            </div>
                            <div onClick={() => handleSelectRecovery('B')} className="p-4 bg-blue-900/50 rounded-lg border-2 border-blue-700 hover:bg-blue-800/50 cursor-pointer">
                                <h4 className="font-bold text-blue-300">OPTION B: Foam Rolling + Contrast Therapy (15 min)</h4>
                            </div>
                             <div onClick={() => handleSelectRecovery('C')} className="p-4 bg-orange-900/50 rounded-lg border-2 border-orange-700 hover:bg-orange-800/50 cursor-pointer">
                                <h4 className="font-bold text-orange-300">OPTION C: Active Recovery (15 min)</h4>
                            </div>
                        </div>
                    </Card>
                );
            case 'recovery_timer':
                const protocolSteps = RECOVERY_PROTOCOLS[recoveryProtocol!];
                return (
                    <Card className="bg-gray-800 border-cyan-500 border-2">
                        <h3 className="text-xl font-bold text-center text-gray-100">⏱️ Timer - Opcja {recoveryProtocol}</h3>
                        <div className="text-center my-6">
                            <div className="text-6xl font-mono font-bold text-cyan-400">{formatTime(recTimeRemaining)}</div>
                            <p className="mt-2 text-gray-300">{protocolSteps[recCurrentStep]?.name}</p>
                            <p className="text-sm text-gray-500">Krok: {recCurrentStep + 1}/{protocolSteps.length}</p>
                        </div>
                        <div className="flex gap-4">
                            <Button onClick={() => setRecIsPaused(!recIsPaused)} variant="secondary">{recIsPaused ? '▶️ Wznów' : '⏸️ Pauza'}</Button>
                            <Button onClick={finishWorkout} variant="primary">✅ Zakończ</Button>
                        </div>
                    </Card>
                );
            case 'finished':
                const avgRpe = (workoutData.reduce((sum, d) => sum + d.rpe, 0) / workoutData.length).toFixed(1);
                 return (
                    <Card className="bg-green-900/50 border-green-700 text-center">
                        <h2 className="text-3xl font-bold text-green-300">✅ {isFirstWorkout ? 'Test Ukończony!' : 'Trening Zakończony!'}</h2>
                        <p className="mt-4 text-gray-300">{isFirstWorkout ? 'Świetnie! Twój spersonalizowany plan jest gotowy. Następny trening będzie już dopasowany do Twoich wyników.' : 'Świetna robota! Twój postęp został zapisany.'}</p>
                        <div className="mt-4 text-left bg-gray-800 p-4 rounded-lg space-y-2">
                           <p><strong>Średnie RPE:</strong> {avgRpe}/10</p>
                           <p><strong>Protokół Recovery:</strong> Opcja {recoveryProtocol}</p>
                        </div>
                        {progressions.length > 0 && (
                            <div className="mt-4 text-left bg-cyan-900/50 border border-cyan-700 p-4 rounded-lg">
                                <h4 className="font-bold text-cyan-300 mb-2">🚀 Progresje na następny trening:</h4>
                                <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                                    {progressions.map(p => (
                                        <li key={p.exerciseName}><strong>{p.exerciseName}:</strong> Cel zwiększony do {p.newGoal}.</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        <Button onClick={() => dispatch({type: 'SET_ACTIVE_TAB', payload: { appName: currentApp, tab: 'dashboard'}})} className="mt-6">🏠 Wróć do Dashboard</Button>
                    </Card>
                );
        }
    };

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-100">{isFirstWorkout ? 'Test Treningowy' : (currentApp === 'rolki' ? 'Trening Nóg' : 'Trening Push-Pull')}</h1>
            {renderContent()}
        </div>
    );
};

export default Training;