
import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import OperationsSection from './components/OperationsSection';
import AiToolsSection from './components/AiToolsSection';
import StrategySection from './components/StrategySection';
import FinancialsSection from './components/FinancialsSection';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import { SECTION_IDS } from './constants';

const App: React.FC = () => {
    const [activeSection, setActiveSection] = useState(SECTION_IDS[0]);
    const [isScrollButtonVisible, setIsScrollButtonVisible] = useState(false);
    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        if (observer.current) {
            observer.current.disconnect();
        }

        observer.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: '-50% 0px -50% 0px',
                threshold: 0,
            }
        );

        const currentObserver = observer.current;
        SECTION_IDS.forEach((id) => {
            const element = document.getElementById(id);
            if (element) {
                currentObserver.observe(element);
            }
        });

        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsScrollButtonVisible(true);
            } else {
                setIsScrollButtonVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            if (currentObserver) {
                currentObserver.disconnect();
            }
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const animationObserver = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove('opacity-0', 'translate-y-5');
                        entry.target.classList.add('opacity-100', 'translate-y-0');
                        obs.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
            }
        );

        SECTION_IDS.forEach((id) => {
            const element = document.getElementById(id);
            if (element) {
                animationObserver.observe(element);
            }
        });

        return () => {
            animationObserver.disconnect();
        };
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="min-h-screen bg-soft-sand text-primary-stone font-sans" dir="rtl">
            <div className="container mx-auto p-4 md:p-8">
                <Header />
                <Navigation onNavigate={scrollToSection} activeSection={activeSection} />

                <main className="space-y-8">
                    <OperationsSection id={SECTION_IDS[0]} />
                    <AiToolsSection id={SECTION_IDS[1]} />
                    <StrategySection id={SECTION_IDS[2]} />
                    <FinancialsSection id={SECTION_IDS[3]} />
                </main>
                
                <Footer />
            </div>
            <ScrollToTopButton isVisible={isScrollButtonVisible} />
        </div>
    );
};

export default App;
