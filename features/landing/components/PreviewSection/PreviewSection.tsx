"use client";
import React from 'react';
import styles from './PreviewSection.module.css';
import withIntersectionObserver from '@/hooks/withIntersectionObserver';

const DashboardIcon = () => (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
    </svg>
);
const ChatbotIcon = () => (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
);

const ChatbotMockup = () => (
    <div className={styles["chatbot-content"]}>
        <div className={`${styles["chat-bubble"]} ${styles["user"]}`}>Where did most of my money go last month?</div>
        <div className={`${styles["chat-bubble"]} ${styles["ai"]}`}>It looks like you spent the most on "Food & Drink" at $450, with "Shopping" coming in second at $280. Would you like a more detailed breakdown?</div>
        <div className={`${styles["chat-bubble"]} ${styles["user"]}`}>Yes, show me the details.</div>
        <div className={`${styles["chat-bubble"]} ${styles["ai"]}`}>Orang yang ngetawain dan ngejokes tentang pak prabowo mungkin dia blm ketemu langsung. Sebaik dan sehumbel itu dia sama orang baru, salah satunya ke gw yg awalnya gw fans sama dia malah bisa jadi temen. Semua yg udh ketemu dia pasti sependapat sama gw.</div>
  
    </div>
);


const PreviewSectionContent: React.FC = () => {
    // Using React state for dynamic view switching
    const [activeView, setActiveView] = React.useState<'dashboard' | 'chatbot'>('chatbot');

    return (
        <section className={styles["preview-section"]}>
            <div className={styles["preview-header"]}>
                <h2>A beautiful, intuitive interface</h2>
            </div>
            <div className={styles["app-mockup"]}>
                <div className={styles["mockup-header"]}>
                    <div className={styles["mockup-controls"]}>
                        <div className={`${styles["mockup-control"]} ${styles["red"]}`}></div>
                        <div className={`${styles["mockup-control"]} ${styles["yellow"]}`}></div>
                        <div className={`${styles["mockup-control"]} ${styles["green"]}`}></div>
                    </div>
                </div>
                <div className={styles["mockup-body"]}>
                    <div className={styles["mockup-sidebar"]}>
                        <div 
                            className={`${styles["sidebar-item"]} ${activeView === 'dashboard' ? styles["active"] : ''}`}
                            onClick={() => setActiveView('dashboard')}
                        >
                            <DashboardIcon /> <span>Dashboard</span>
                        </div>
                        <div 
                            className={`${styles["sidebar-item"]} ${activeView === 'chatbot' ? styles["active"] : ''}`}
                            onClick={() => setActiveView('chatbot')}
                        >
                           <ChatbotIcon /> <span>AI Assistant</span>
                        </div>
                    </div>
                    <div className={styles["mockup-content"]}>
                        <ChatbotMockup />
                    </div>
                </div>
            </div>
        </section>
    );
};

const PreviewSection = withIntersectionObserver(PreviewSectionContent);

export default PreviewSection;
