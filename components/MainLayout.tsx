
import React from 'react';
import { useAppContext } from '../contexts/AppContext';
import { TabName } from '../types';
import Dashboard from '../views/Dashboard';
import Training from '../views/Training';
import Progress from '../views/Progress';
import Education from '../views/Education';
import Recovery from '../views/Recovery';
import Settings from '../views/Settings';
import Skills from '../views/Skills';

const MainLayout: React.FC = () => {
    const { state, dispatch } = useAppContext();
    const currentApp = state.currentApp!;
    const currentAppState = state.apps[currentApp];
    const activeTab = currentAppState.activeTab;
    
    const appNames = {
        rolki: '🚴 ROLKI',
        pushPull: '💪 POMPKI & PODCIĄGANIE',
    };

    const handleTabSwitch = (tab: TabName) => {
        dispatch({ type: 'SET_ACTIVE_TAB', payload: { appName: currentApp, tab } });
    };

    const handleAppSwitch = () => {
        dispatch({ type: 'SWITCH_APP' });
    };
    
    const baseNavItems: { name: TabName, label: string, icon: string }[] = [
        { name: 'dashboard', label: 'Dashboard', icon: '🏠' },
        { name: 'training', label: 'Trening', icon: '🏋️' },
        { name: 'progress', label: 'Postępy', icon: '📊' },
        { name: 'education', label: 'Edukacja', icon: '📚' },
        { name: 'recovery', label: 'Recovery', icon: '🧘' },
        { name: 'settings', label: 'Ustawienia', icon: '⚙️' },
    ];

    const navItems = [...baseNavItems];
    if (currentApp === 'rolki') {
        const progressIndex = navItems.findIndex(item => item.name === 'progress');
        navItems.splice(progressIndex + 1, 0, { name: 'skills', label: 'Skills', icon: '🛹' });
    }
    
    const renderContent = () => {
        switch(activeTab) {
            case 'dashboard': return <Dashboard />;
            case 'training': return <Training />;
            case 'progress': return <Progress />;
            case 'skills': return currentApp === 'rolki' ? <Skills /> : <Dashboard />;
            case 'education': return <Education />;
            case 'recovery': return <Recovery />;
            case 'settings': return <Settings />;
            default: return <Dashboard />;
        }
    };

    return (
        <div className="min-h-screen bg-gray-900">
            <div className="bg-gray-800 py-2 px-4 text-center text-sm text-gray-300 border-b border-gray-700">
                <strong>{appNames[currentApp]}</strong>
                <span className="mx-2">|</span>
                <button onClick={handleAppSwitch} className="bg-none border-none text-cyan-400 cursor-pointer font-bold underline text-sm">
                    🔄 Zmień
                </button>
            </div>
            
            <nav className="sticky top-0 bg-gray-800/80 backdrop-blur-md shadow-lg z-40 border-b border-gray-700/50">
                <div className="max-w-4xl mx-auto px-2 sm:px-4">
                    <div className="flex justify-center items-center space-x-1 sm:space-x-2 overflow-x-auto py-2">
                        {navItems.map(item => (
                            <button
                                key={item.name}
                                onClick={() => handleTabSwitch(item.name)}
                                className={`flex-shrink-0 px-3 sm:px-4 py-2 text-xs sm:text-sm rounded-md font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-800 ${
                                    activeTab === item.name
                                    ? 'bg-cyan-500 text-white shadow'
                                    : 'text-gray-400 hover:bg-gray-700 hover:text-white'
                                }`}
                            >
                                <span className="mr-1.5 sm:mr-2">{item.icon}</span>
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>
            </nav>
            
            <main className="max-w-4xl mx-auto p-4 sm:p-6">
                {renderContent()}
            </main>
        </div>
    );
};

export default MainLayout;