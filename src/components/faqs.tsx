import React from "react";

const faqs = [
    {
        question: "What is MentorConnect?",
        answer: "MentorConnect is an AI-powered mentorship platform that connects students with experienced mentors, offering career guidance, networking opportunities, and skill-based mentorship."
    },
    {
        question: "How do I create an account on MentorConnect?",
        answer: "You can sign up with your email and set a password. Students can also link their academic profiles, while mentors register by providing their expertise and availability."
    },
    {
        question: "How does AI-powered mentor matching work?",
        answer: "Our AI analyzes your skills, interests, and career goals to match you with the most suitable mentor. The system improves its recommendations based on feedback and progress."
    },
    {
        question: "Can I choose my own mentor?",
        answer: "Yes! While our AI suggests mentors, you can also browse mentor profiles and request mentorship from those who align with your career goals."
    },
    {
        question: "Is MentorConnect free to use?",
        answer: "MentorConnect offers free access to mentorship resources and AI-driven guidance. Some advanced mentorship programs may require a premium subscription."
    },
    {
        question: "What accessibility features are available?",
        answer: "MentorConnect includes text-to-voice support, gesture-based navigation, and a UI optimized for screen readers to ensure accessibility for all users."
    },
    {
        question: "Does MentorConnect offer internship opportunities?",
        answer: "Yes! We partner with companies and use AI to match mentees with relevant internship opportunities based on their skills and interests."
    },
    {
        question: "How does AI-powered job matching work?",
        answer: "Our AI fetches your bio, retrieves job postings, and evaluates the best job match based on your skills, interests, and experience, providing a match score and reason."
    },
    {
        question: "How do I contact support?",
        answer: "You can reach out to our support team at [support@mentorconnect.com](mailto:support@mentorconnect.com) for any assistance."
    }
];

const FAQs = () => {
    return (
        <section className="py-10 bg-white sm:py-16 lg:py-24">
            <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                    Frequently Asked Questions
                </h2>

                <div className="flow-root mt-12 sm:mt-16">
                    <div className="divide-y divide-gray-200 -my-9">
                        {faqs.map((faq, index) => (
                            <div key={index} className="py-9">
                                <p className="text-xl font-semibold text-black">{faq.question}</p>
                                <p className="mt-3 text-base text-gray-600">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQs;
