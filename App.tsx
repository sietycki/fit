
import React from 'react';
import { useAppContext } from './contexts/AppContext';
import AppSelection from './views/AppSelection';
import Assessment from './views/Assessment';
import MainLayout from './components/MainLayout';

const App: React.FC = () => {
    const { state } = useAppContext();

    const currentAppState = state.currentApp ? state.apps[state.currentApp] : null;

    if (!state.currentApp || !currentAppState) {
        return <AppSelection />;
    }

    if (!currentAppState.level || !currentAppState.userAssessment) {
        return <Assessment />;
    }

    return <MainLayout />;
};

export default App;
