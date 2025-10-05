
import React, { type ReactNode } from 'react';

interface AiToolCardProps {
    title: string;
    description: string;
    children: ReactNode;
    icon: ReactNode;
    borderColor: string;
}

const AiToolCard: React.FC<AiToolCardProps> = ({ title, description, children, icon, borderColor }) => (
    <div className={`p-6 bg-gray-50/50 rounded-xl border-2 ${borderColor} shadow-lg`}>
        <h4 className={`text-lg font-bold flex items-center mb-4 text-gray-800`}>
            <span className="w-8 h-8 mr-3">{icon}</span> {title}
        </h4>
        <p className="text-gray-600 mb-4 text-sm">{description}</p>
        {children}
    </div>
);

export default AiToolCard;
