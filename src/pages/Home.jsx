import React from 'react';
import usePageTitle from '../hooks/usePageTitle';
import Hero from '../components/Hero';
import AboutSnippet from '../components/AboutSnippet';
import WhyJoshika from '../components/WhyJoshika';
import Stats from '../components/Stats';
import CTA from '../components/CTA';

const Home = () => {
    usePageTitle('Home');
    return (
        <div>
            <Hero />
            <AboutSnippet />
            <WhyJoshika />
            <Stats />
            <CTA />
        </div>
    );
};

export default Home;
