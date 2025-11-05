
import React, { useState } from 'react';
import Card from '../components/Card';
import { useAppContext } from '../contexts/AppContext';
import Button from '../components/Button';
import Modal from '../components/Modal';

const Settings: React.FC = () => {
    const { state, dispatch } = useAppContext();
    const [isResetModalOpen, setIsResetModalOpen] = useState(false);
    
    const currentApp = state.currentApp!;
    const currentAppState = state.apps[currentApp];
    const { level } = currentAppState;

    const appNames = {
        rolki: '🚴 ROLKI',
        pushPull: '💪 POMPKI & PODCIĄGANIE',
    };
    
    const levelNames = {
        beginner: 'Początkujący',
        intermediate: 'Średniozaawansowany',
        advanced: 'Zaawansowany'
    };
    
    const handleSwitchApp = () => {
        if(window.confirm("Czy na pewno chcesz przełączyć program? Twoje postępy w obecnym programie zostaną zapisane.")) {
            dispatch({ type: 'SWITCH_APP' });
        }
    }
    
    const handleResetData = () => {
        dispatch({ type: 'RESET_APP_DATA', payload: currentApp });
        setIsResetModalOpen(false);
    };

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-100">⚙️ Ustawienia</h1>

            <Card>
                <h3 className="text-xl font-bold mb-4 text-gray-100">👤 Profil</h3>
                <p>Aktualny sport: <strong className="text-cyan-400">{appNames[currentApp]}</strong></p>
                <p>Twój poziom: <strong className="text-cyan-400">{level ? levelNames[level] : '-'}</strong></p>
            </Card>

            <Card>
                <h3 className="text-xl font-bold mb-4 text-gray-100">🎯 Przełącz Aplikację</h3>
                <p className="text-gray-400 mb-4 text-sm">Możesz przełączyć się na drugi program treningowy. Twoje postępy zostaną zapisane i będziesz mógł wrócić do nich później.</p>
                <Button onClick={handleSwitchApp} variant="secondary">
                    🔄 Przełącz na inny program
                </Button>
            </Card>

            <Card className="bg-red-900/40 border-red-700/50">
                <h2 className="text-xl font-bold text-red-300">🔴 Niebezpieczna Strefa</h2>
                <p className="text-red-300 my-2"><strong>⚠️ UWAGA:</strong> Spowoduje to usunięcie WSZYSTKICH danych dla programu <strong>{appNames[currentApp]}</strong>.</p>
                <Button variant="danger" onClick={() => setIsResetModalOpen(true)} className="mt-4">
                    🔄 Resetuj Wszystkie Dane
                </Button>
                <p className="text-xs text-gray-400 mt-2">Historia treningów, ocena formy i ustawienia zostaną bezpowrotnie usunięte.</p>
            </Card>

            <Modal
                isOpen={isResetModalOpen}
                onClose={() => setIsResetModalOpen(false)}
                title="⚠️ Potwierdź Reset Danych"
            >
                <p className="text-gray-300">Czy na pewno chcesz usunąć wszystkie dane dla programu <strong>{appNames[currentApp]}</strong>?</p>
                <p className="font-bold text-red-500 my-4">Tej operacji nie można cofnąć.</p>
                <div className="flex justify-end gap-4 mt-6">
                    <Button onClick={() => setIsResetModalOpen(false)} variant="secondary" className="!w-auto px-6">
                        Anuluj
                    </Button>
                    <Button onClick={handleResetData} variant="danger" className="!w-auto px-6">
                        Tak, resetuj
                    </Button>
                </div>
            </Modal>
        </div>
    );
};

export default Settings;