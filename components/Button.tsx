
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'danger';
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseClasses = 'w-full text-white font-bold py-3 px-4 rounded-lg transition-transform transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800';

    const variantClasses = {
        primary: 'bg-cyan-500 hover:bg-cyan-600 focus:ring-cyan-500 text-white',
        secondary: 'bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 text-white',
        danger: 'bg-red-600 hover:bg-red-700 focus:ring-red-500',
    };

    return (
        <button
            className={`${baseClasses} ${variantClasses[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;