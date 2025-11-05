import { Dispatch } from 'react';

export type AppName = 'rolki' | 'pushPull';
export type Level = 'beginner' | 'intermediate' | 'advanced';
export type TabName = 'dashboard' | 'training' | 'progress' | 'education' | 'recovery' | 'settings' | 'skills';

export interface Skill {
    id: string;
    name: string;
    description: string;
    difficulty: 'beginner' | 'intermediate' | 'advanced' | 'expert';
    category: 'basic' | 'wizard' | 'manuals' | 'slides' | 'jumps' | 'spins' | 'slalom' | 'grinds';
    video: string;
    prerequisites: string[];
    keyPoints: string[];
    commonMistakes: string[];
    gearTips?: string;
}

export type SkillStatus = 'not_started' | 'in_progress' | 'mastered';

export interface Exercise {
    name: string;
    video: string;
    goal: string;
    tip: string;
    breathing: string;
    tempo: string;
    benefit: string;
    description: string;
    goalReps: number; // For timed exercises, this is goal duration in seconds
    powerIntentRequired?: number;
    warning?: string;
    phase?: string;
    restTime: number; // Rest time in seconds
    timed?: boolean;
}

export interface WorkoutDataItem {
    name: string;
    reps?: number[];
    duration?: number; // Duration for timed exercises in seconds
    rpe: number;
    power: number;
    synergy: number;
}

export interface TrainingHistoryItem {
    date: string;
    exercises: WorkoutDataItem[];
    avgRpe: string;
    recovery: string;
    workoutNumber: number;
}

export interface UserAssessment {
    experience: number;
    strength: number;
    skill: number;
    specificExperience: number;
    injuries: number;
    score: number;
    level: Level;
    date: string;
}

export type ExerciseProgress = { [exerciseName: string]: { targetReps?: number; targetDuration?: number } };

export interface AppStatePerApp {
    selectedSport: 'roller-skating' | 'push-pull';
    level: Level | null;
    userAssessment: UserAssessment | null;
    workoutsCompleted: number;
    lastWorkoutDate: string | null;
    trainingHistory: TrainingHistoryItem[];
    activeTab: TabName;
    recoveryStats: RecoveryStats;
    skillProgress: { [key: string]: SkillStatus };
    exerciseProgress: ExerciseProgress;
    maxRepsTest: { [exerciseName: string]: number };
}

export interface GlobalState {
    currentApp: AppName | null;
    apps: {
        rolki: AppStatePerApp;
        pushPull: AppStatePerApp;
    };
}

export type Action =
    | { type: 'SELECT_APP'; payload: AppName }
    | { type: 'SUBMIT_ASSESSMENT'; payload: { appName: AppName; assessment: UserAssessment } }
    | { type: 'SAVE_WORKOUT'; payload: { appName: AppName; workout: TrainingHistoryItem, recoveryProtocol: string, exerciseProgress: ExerciseProgress } }
    | { type: 'SWITCH_APP' }
    | { type: 'RESET_APP_DATA'; payload: AppName }
    | { type: 'SET_ACTIVE_TAB'; payload: { appName: AppName; tab: TabName } }
    | { type: 'UPDATE_RECOVERY_STATS'; payload: { appName: AppName, protocol: string }}
    | { type: 'UPDATE_SKILL_STATUS'; payload: { appName: AppName; skillId: string; status: SkillStatus } };


export interface AppContextType {
    state: GlobalState;
    // Fix: Use Dispatch<Action> instead of React.Dispatch<Action>
    dispatch: Dispatch<Action>;
}

export interface RecoveryStats {
    totalSessions: number;
    streak: number;
    lastRecoveryDate: string | null;
    favoriteProtocol: string | null;
    protocolCounts: { [key: string]: number };
}