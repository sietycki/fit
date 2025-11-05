
import React from 'react';

interface StatCardProps {
    icon: string;
    value: string | number;
    label: string;
    valueClassName?: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, label, valueClassName = '' }) => {
    return (
        <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <div className="text-3xl mb-2">{icon}</div>
            <div className={`text-4xl font-bold text-cyan-400 ${valueClassName}`}>{value}</div>
            <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">{label}</div>
        </div>
    );
};

export default StatCard;