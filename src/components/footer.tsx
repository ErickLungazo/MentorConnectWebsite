import React from "react";
import Logo from "@/assets/logo.png";

const Footer = () => {
    return (
        <section className="py-10 bg-white sm:pt-16 lg:pt-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-y-12 gap-x-8 xl:gap-x-12">
                    {/* MentorConnect Branding */}
                    <div className="col-span-2 md:col-span-4 xl:pr-8">
                        <img
                            className="w-auto h-9"
                            src={Logo}
                            alt="MentorConnect Logo"
                        />
                        <p className="text-base leading-relaxed text-gray-600 mt-7">
                            Empowering mentorship through AI-driven matchmaking. Find mentors, gain insights, and accelerate your career journey.
                        </p>
                        <a
                            href="/contact"
                            className="inline-flex items-center justify-center px-6 py-4 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700 mt-7"
                        >
                            Contact Us
                        </a>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2">
                        <p className="text-base font-semibold text-gray-900">Quick Links</p>
                        <ul className="mt-6 space-y-5">
                            <li><a href="/about" className="footer-link">About Us</a></li>
                            <li><a href="/features" className="footer-link">Features</a></li>
                            <li><a href="/pricing" className="footer-link">Pricing</a></li>
                            <li><a href="/careers" className="footer-link">Careers</a></li>
                        </ul>
                    </div>

                    {/* Mentee Resources */}
                    <div className="lg:col-span-2">
                        <p className="text-base font-semibold text-gray-900">Mentee Resources</p>
                        <ul className="mt-6 space-y-5">
                            <li><a href="/resources" className="footer-link">Resource Library</a></li>
                            <li><a href="/mentorship-guides" className="footer-link">Mentorship Guides</a></li>
                            <li><a href="/job-matching" className="footer-link">AI Job Matching</a></li>
                            <li><a href="/career-tips" className="footer-link">Career Tips</a></li>
                        </ul>
                    </div>

                    {/* Mentor Resources */}
                    <div className="lg:col-span-2">
                        <p className="text-base font-semibold text-gray-900">Mentor Resources</p>
                        <ul className="mt-6 space-y-5">
                            <li><a href="/become-a-mentor" className="footer-link">Become a Mentor</a></li>
                            <li><a href="/mentorship-best-practices" className="footer-link">Best Practices</a></li>
                            <li><a href="/community-forum" className="footer-link">Community Forum</a></li>
                            <li><a href="/mentor-dashboard" className="footer-link">Mentor Dashboard</a></li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div className="lg:col-span-2">
                        <p className="text-base font-semibold text-gray-900">Connect with Us</p>
                        <div className="flex space-x-3 mt-6">
                            <a href="#" className="social-icon">
                                <img src="/assets/facebook.svg" alt="Facebook" className="w-6 h-6" />
                            </a>
                            <a href="#" className="social-icon">
                                <img src="/assets/twitter.svg" alt="Twitter" className="w-6 h-6" />
                            </a>
                            <a href="#" className="social-icon">
                                <img src="/assets/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
                            </a>
                            <a href="#" className="social-icon">
                                <img src="/assets/instagram.svg" alt="Instagram" className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <hr className="mt-16 mb-10 border-gray-200" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <p className="text-sm text-gray-600">© {new Date().getFullYear()} MentorConnect. All Rights Reserved.</p>
                    <ul className="flex space-x-4">
                        <li><a href="/privacy-policy" className="text-sm text-gray-600 hover:text-blue-600">Privacy Policy</a></li>
                        <li><a href="/terms" className="text-sm text-gray-600 hover:text-blue-600">Terms of Service</a></li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Footer;
