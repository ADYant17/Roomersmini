import React from 'react';
import Hero from './Hero';
import Features from './Features';
import HowItWorks from './HowItWorks';
import SafetyStats from './SafetyStats';
import CallToAction from './CallToAction';

const LandingPage = ({ onNavigate }) => {
    return (
        <>
            <Hero onNavigate={onNavigate} />
            <Features />
            <HowItWorks />
            <SafetyStats />
            <CallToAction onNavigate={onNavigate} />
        </>
    );
};

export default LandingPage;
