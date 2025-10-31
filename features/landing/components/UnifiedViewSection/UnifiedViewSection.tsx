"use client";
import React from 'react';
import styles from './UnifiedViewSection.module.css';
import withIntersectionObserver from '@/hooks/withIntersectionObserver';

const UnifiedViewSectionContent = () => {
    return (
        <section className={styles["unified-view-section"]}>
            <div className={styles["unified-header"]}>
                <h2>Tired of the financial chaos?</h2>
                <p>Managing money is confusing — especially when your savings, e-wallets, and crypto live in different places.</p>
            </div>
            
            <div className={styles["unified-flow"]}>
                <div className={styles["source-cards"]}>
                    <div className={styles["source-card"]}><span>Bank Account</span><span>•••• 1234</span></div>
                    <div className={styles["source-card"]}><span>E-Wallet</span><span>•••• 5678</span></div>
                    <div className={styles["source-card"]}><span>Crypto</span><span>•••• 9876</span></div>
                </div>

                <div className={styles["flow-arrow"]}>&rarr;</div>

                <div className={styles["zentra-card"]}>
                    <div className={styles["zentra-card-header"]}>
                        <span className={styles["zentra-logo-icon"]}>Z</span>
                        <span>Total Net Worth</span>
                    </div>
                    <p className={styles["zentra-card-balance"]}>Rp4.611.564</p>
                    <p className={styles["zentra-card-label"]}>Across all 3 accounts</p>
                </div>
            </div>
        </section>
    );
};

const UnifiedViewSection = withIntersectionObserver(UnifiedViewSectionContent);

export default UnifiedViewSection;
