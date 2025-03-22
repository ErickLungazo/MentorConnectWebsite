import React from "react";

const CTA = () => {
    return (
        <section className="py-10 bg-white sm:py-16 lg:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-2xl mx-auto text-center">
                    {/* Profile Images */}
                    <div className="flex items-center justify-center">
                        <div className="w-20 h-20 -mr-6 overflow-hidden bg-gray-300 rounded-full">
                            <img
                                className="object-cover w-full h-full"
                                src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/2/female-avatar-1.jpg"
                                alt="Mentor"
                            />
                        </div>

                        <div className="relative overflow-hidden bg-gray-300 border-8 border-white rounded-full w-28 h-28">
                            <img
                                className="object-cover w-full h-full"
                                src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/2/male-avatar-1.jpg"
                                alt="Mentee"
                            />
                        </div>

                        <div className="w-20 h-20 -ml-6 overflow-hidden bg-gray-300 rounded-full">
                            <img
                                className="object-cover w-full h-full"
                                src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/2/female-avatar-2.jpg"
                                alt="Mentor"
                            />
                        </div>
                    </div>

                    {/* CTA Heading */}
                    <h2 className="mt-8 text-3xl font-bold leading-tight text-black lg:mt-12 sm:text-4xl lg:text-5xl">
                        Join <span className="border-b-8 border-yellow-300">10,000+</span> students & professionals
                    </h2>

                    {/* CTA Description */}
                    <p className="max-w-xl mx-auto mt-6 text-xl text-gray-600 md:mt-10">
                        Unlock career-changing mentorship! Get matched with experienced professionals, gain valuable insights, and accelerate your career growth with <strong>MentorConnect.</strong>
                    </p>

                    {/* CTA Button */}
                    <a
                        href="/signup"
                        className="inline-flex items-center justify-center px-4 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md lg:mt-12 hover:bg-blue-700 focus:bg-blue-700"
                        role="button"
                    >
                        <svg
                            className="w-5 h-5 mr-2 -ml-1"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                        </svg>
                        Get Started Now
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CTA;
