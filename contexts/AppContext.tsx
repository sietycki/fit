import React, { createContext, useReducer, useContext, useEffect, ReactNode } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { AppName, GlobalState, AppStatePerApp, Action, AppContextType } from '../types';

const defaultRecoveryStats = {
    totalSessions: 0,
    streak: 0,
    lastRecoveryDate: null,
    favoriteProtocol: null,
    protocolCounts: { A: 0, B: 0, C: 0 },
};

const defaultAppStatePerApp = (sport: 'roller-skating' | 'push-pull'): AppStatePerApp => ({
    selectedSport: sport,
    level: null,
    userAssessment: null,
    workoutsCompleted: 0,
    lastWorkoutDate: null,
    trainingHistory: [],
    activeTab: 'dashboard',
    recoveryStats: { ...defaultRecoveryStats },
    skillProgress: {},
    exerciseProgress: {},
    maxRepsTest: {},
});


const initialState: GlobalState = {
    currentApp: null,
    apps: {
        rolki: defaultAppStatePerApp('roller-skating'),
        pushPull: defaultAppStatePerApp('push-pull'),
    },
};

const appReducer = (state: GlobalState, action: Action): GlobalState => {
    switch (action.type) {
        case 'SELECT_APP':
            return { ...state, currentApp: action.payload };
        
        case 'SWITCH_APP':
             return { ...state, currentApp: null };

        case 'SUBMIT_ASSESSMENT': {
            const { appName, assessment } = action.payload;
            return {
                ...state,
                apps: {
                    ...state.apps,
                    [appName]: {
                        ...state.apps[appName],
                        userAssessment: assessment,
                        level: assessment.level,
                        activeTab: 'dashboard',
                    },
                },
            };
        }
        case 'SAVE_WORKOUT': {
            const { appName, workout, exerciseProgress } = action.payload;
            const today = new Date().toISOString().split('T')[0];
            const appData = state.apps[appName];
            
            let newMaxRepsTest = appData.maxRepsTest;

            // If this is the first workout, treat it as a test and save the max reps
            if (appData.workoutsCompleted === 0) {
                const testResults: { [key: string]: number } = {};
                workout.exercises.forEach(ex => {
                    if (ex.reps && ex.reps.length > 0) {
                        testResults[ex.name] = ex.reps[0];
                    }
                });
                newMaxRepsTest = testResults;
            }

            return {
                ...state,
                apps: {
                    ...state.apps,
                    [appName]: {
                        ...appData,
                        trainingHistory: [...appData.trainingHistory, workout],
                        workoutsCompleted: appData.workoutsCompleted + 1,
                        lastWorkoutDate: today,
                        exerciseProgress: {
                            ...appData.exerciseProgress,
                            ...exerciseProgress,
                        },
                        maxRepsTest: newMaxRepsTest,
                    },
                },
            };
        }
        case 'RESET_APP_DATA': {
            const appName = action.payload;
            return {
                ...state,
                apps: {
                    ...state.apps,
                    [appName]: defaultAppStatePerApp(appName === 'rolki' ? 'roller-skating' : 'push-pull'),
                },
            };
        }
        case 'SET_ACTIVE_TAB': {
            const { appName, tab } = action.payload;
            return {
                 ...state,
                apps: {
                    ...state.apps,
                    [appName]: {
                        ...state.apps[appName],
                        activeTab: tab,
                    },
                },
            };
        }
        case 'UPDATE_RECOVERY_STATS': {
            const { appName, protocol } = action.payload;
            const appData = state.apps[appName];
            const today = new Date().toISOString().split('T')[0];
            const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
            
            const newCounts = {
                ...appData.recoveryStats.protocolCounts,
                [protocol]: (appData.recoveryStats.protocolCounts[protocol] || 0) + 1,
            };

            const newStreak = appData.recoveryStats.lastRecoveryDate === yesterday ? appData.recoveryStats.streak + 1 : 1;
            
            const favoriteProtocol = Object.keys(newCounts).reduce((a, b) => newCounts[a] > newCounts[b] ? a : b);

            return {
                ...state,
                apps: {
                    ...state.apps,
                    [appName]: {
                        ...appData,
                        recoveryStats: {
                           ...appData.recoveryStats,
                           totalSessions: appData.recoveryStats.totalSessions + 1,
                           lastRecoveryDate: today,
                           streak: newStreak,
                           protocolCounts: newCounts,
                           favoriteProtocol,
                        }
                    }
                }
            };
        }
        case 'UPDATE_SKILL_STATUS': {
            const { appName, skillId, status } = action.payload;
            if (appName !== 'rolki') return state;
            
            const appData = state.apps[appName];
            return {
                ...state,
                apps: {
                    ...state.apps,
                    [appName]: {
                        ...appData,
                        skillProgress: {
                            ...appData.skillProgress,
                            [skillId]: status,
                        },
                    },
                },
            };
        }
        default:
            return state;
    }
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [storedState, setStoredState] = useLocalStorage<GlobalState>('multiSportTrainingApp', initialState);
    const [state, dispatch] = useReducer(appReducer, storedState);

    useEffect(() => {
        setStoredState(state);
    }, [state, setStoredState]);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = (): AppContextType => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useAppContext must be used within an AppContextProvider');
    }
    return context;
};