
import React from 'react';
import { useAppContext } from '../contexts/AppContext';
import { AppName } from '../types';

const AppCard: React.FC<{
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    color: string;
    hoverColor: string;
    onClick: () => void;
}> = ({ title, subtitle, description, features, color, hoverColor, onClick }) => (
    <div
        onClick={onClick}
        className={`cursor-pointer group my-4 p-6 border-2 border-gray-700 rounded-lg bg-gray-800/50 transition-all duration-300 hover:border-${hoverColor} hover:shadow-lg hover:-translate-y-1`}
    >
        <h2 className="text-xl font-bold text-gray-100 mb-2">{title}</h2>
        <p className="text-gray-300 text-sm mb-3">
            <strong>{subtitle}</strong><br />
            {description}
        </p>
        <div className={`bg-${color}/10 p-3 rounded-md text-sm text-${color}`}>
            {features.map((feature, i) => (
                <div key={i}>{feature}</div>
            ))}
        </div>
        <div className={`text-${hoverColor} font-bold mt-4 transition-all duration-300 group-hover:tracking-wider`}>
            ➜ Wybierz
        </div>
    </div>
);

const AppSelection: React.FC = () => {
    const { dispatch } = useAppContext();

    const selectApp = (appName: AppName) => {
        dispatch({ type: 'SELECT_APP', payload: appName });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
            <div className="bg-gray-800 p-8 rounded-xl max-w-2xl w-full shadow-2xl border border-gray-700">
                <h1 className="text-center text-3xl font-bold text-gray-100 mb-2">
                    🏋️ Program Treningowy
                </h1>
                <p className="text-center text-gray-400 mb-8">
                    Wybierz program do ćwiczenia
                </p>

                <AppCard
                    title="🚴 ROLKI"
                    subtitle="In-line Skating"
                    description="Program treningu nóg: moc, szybkość, równowaga, stabilność"
                    features={['📊 25 zasad treningowych', '⚡ 6 ćwiczeń na skoczność', '🧘 Obowiązkowy recovery']}
                    color="cyan-400"
                    hoverColor="cyan-300"
                    onClick={() => selectApp('rolki')}
                />

                <AppCard
                    title="💪 POMPKI & PODCIĄGANIE"
                    subtitle="Push-Pull Training"
                    description="Program górnej części ciała: siła, hipertrofia, skill moves"
                    features={['📊 25 zasad treningowych', '⚡ 3-fazowy periodization', '🧘 Obowiązkowy recovery']}
                    color="violet-400"
                    hoverColor="violet-300"
                    onClick={() => selectApp('pushPull')}
                />
                 {/* Hidden colors for tailwind JIT compiler */}
                <div className="hidden border-cyan-300 border-violet-300 bg-cyan-400/10 text-cyan-400 bg-violet-400/10 text-violet-400 text-cyan-300 text-violet-300"></div>

                <p className="text-center text-gray-500 mt-8 text-xs">
                    Dane dla każdego programu są zapisywane osobno
                </p>
            </div>
        </div>
    );
};

export default AppSelection;