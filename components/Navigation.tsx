
import React from 'react';

interface NavigationProps {
    onNavigate: (id: string) => void;
    activeSection: string;
}

const Navigation: React.FC<NavigationProps> = ({ onNavigate, activeSection }) => {
    const navItems = [
        { id: 'operations', label: 'الرؤية والتشغيل', baseClass: 'bg-primary-stone text-white hover:bg-gray-700', activeClass: 'ring-2 ring-offset-2 ring-offset-soft-sand ring-primary-stone scale-110' },
        { id: 'ai_tools', label: 'الميزة التكنولوجية', baseClass: 'bg-trust-blue text-white hover:bg-blue-700', activeClass: 'ring-2 ring-offset-2 ring-offset-soft-sand ring-trust-blue scale-110' },
        { id: 'strategy', label: 'التنفيذ والنمو', baseClass: 'bg-gray-200 text-primary-stone hover:bg-gray-300', activeClass: 'ring-2 ring-offset-2 ring-offset-soft-sand ring-gray-400 scale-110' },
        { id: 'financials', label: 'الأداء المالي', baseClass: 'bg-accent-amber text-primary-stone hover:bg-yellow-500', activeClass: 'ring-2 ring-offset-2 ring-offset-soft-sand ring-accent-amber scale-110' },
    ];
    
    return (
        <nav className="sticky top-4 z-20 bg-white/80 backdrop-blur-md p-3 shadow-lg rounded-xl mb-8 flex justify-center items-center gap-2 md:gap-4 overflow-x-auto">
            {navItems.map((item) => (
                <button
                    key={item.id}
                    onClick={() => onNavigate(item.id)}
                    aria-current={activeSection === item.id ? 'page' : undefined}
                    className={`px-4 py-2 rounded-lg text-sm md:text-base font-semibold whitespace-nowrap transition-all duration-300 shadow-md ${item.baseClass} ${activeSection === item.id ? item.activeClass : 'hover:scale-105 hover:shadow-lg'}`}
                >
                    {item.label}
                </button>
            ))}
        </nav>
    );
};

export default Navigation;
