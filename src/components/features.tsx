import React from 'react';

const Features = () => {
    return (
        <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-xl mx-auto text-center">
                    <div
                        className="inline-flex px-4 py-1.5 mx-auto rounded-full bg-gradient-to-r from-fuchsia-600 to-blue-600">
                        <p className="text-xs font-semibold tracking-widest text-white uppercase">Powerful Features</p>
                    </div>
                    <h2 className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                        Unlock Your Potential with MentorConnect
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-gray-600">
                        MentorConnect is designed to empower mentees by providing AI-driven mentorship, career guidance,
                        and valuable networking opportunities.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-5 mt-12 sm:grid-cols-3 lg:mt-20 lg:gap-x-12">
                    <div className="transition-all duration-200 bg-white hover:shadow-xl">
                        <div className="py-10 px-9">
                            <svg className="w-16 h-16 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                            </svg>
                            <h3 className="mt-8 text-lg font-semibold text-black">AI-Powered Mentor Matching</h3>
                            <p className="mt-4 text-base text-gray-600">
                                Get matched with the best mentors based on your skills, interests, and goals using
                                cutting-edge AI algorithms.
                            </p>
                        </div>
                    </div>

                    <div className="transition-all duration-200 bg-white hover:shadow-xl">
                        <div className="py-10 px-9">
                            <svg className="w-16 h-16 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                                      d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/>
                            </svg>
                            <h3 className="mt-8 text-lg font-semibold text-black">Career Guidance & Job Matching</h3>
                            <p className="mt-4 text-base text-gray-600">
                                Access curated career resources and AI-driven job recommendations to connect with
                                employers and internship opportunities.
                            </p>
                        </div>
                    </div>

                    <div className="transition-all duration-200 bg-white hover:shadow-xl">
                        <div className="py-10 px-9">
                            <svg className="w-16 h-16 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                            </svg>
                            <h3 className="mt-8 text-lg font-semibold text-black">Accessible & Inclusive Learning</h3>
                            <p className="mt-4 text-base text-gray-600">
                                Enjoy text-to-voice, gesture-based navigation, and personalized learning tools to
                                enhance your mentorship experience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Features;