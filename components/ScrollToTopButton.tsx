
import React from 'react';

interface ScrollToTopButtonProps {
    isVisible: boolean;
}

const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({ isVisible }) => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            onClick={scrollToTop}
            aria-label="العودة للأعلى"
            className={`fixed bottom-6 right-6 z-50 p-3 bg-trust-blue text-white rounded-full shadow-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-trust-blue transition-all duration-300 ease-in-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
            }`}
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
        </button>
    );
};

export default ScrollToTopButton;
