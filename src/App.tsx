import React from 'react';
import Header from "./components/header.tsx";
import Hero from "@/components/hero.tsx";
import Features from "@/components/features.tsx";
import Stats from "@/components/stats.tsx";
import Pricing from "@/components/pricing.tsx";
import Team from "@/components/team.tsx";
import Blog from "@/components/blog.tsx";
import FAQs from "@/components/faqs.tsx";
import CTA from "@/components/cta.tsx";
import Footer from "@/components/footer.tsx";


const App = () => {
    return (
        <div>
            <Hero/>
            <Features/>
            <Stats/>
            <Pricing/>
            <Team/>
            <Blog/>
            <FAQs/>
            <CTA/>
            <Footer/>
        </div>
    );
};

export default App;