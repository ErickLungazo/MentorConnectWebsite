import React from "react";

const pricingPlans = [
    {
        name: "Basic",
        price: 0,
        paymentType: "Free Forever",
        features: [
            "Access to AI-powered mentor matching",
            "Basic career guidance & resources",
            "Limited mentorship sessions per month",
            "Community Q&A and discussion forums",
        ],
        buttonClass: "bg-gray-600 hover:bg-gray-700 focus:bg-gray-700",
    },
    {
        name: "Premium",
        price: 1900,
        paymentType: "Monthly Subscription",
        features: [
            "Priority mentor matching with AI",
            "Unlimited mentorship sessions",
            "Exclusive career development webinars",
            "AI-powered resume review & feedback",
            "Advanced job matching with AI scoring",
        ],
        buttonClass:
            "bg-gradient-to-r from-green-600 to-blue-600 hover:opacity-80 focus:opacity-80",
    },
    {
        name: "Enterprise",
        price: 9900,
        paymentType: "Monthly Subscription",
        features: [
            "Custom mentorship programs for universities & companies",
            "Dedicated success manager",
            "Integration with HR & recruitment platforms",
            "Real-time analytics & performance tracking",
            "AI-powered mentor-mentee progress monitoring",
        ],
        buttonClass: "bg-indigo-600 hover:bg-indigo-700 focus:bg-indigo-700",
    },
];

const Pricing: React.FC = () => {
    return (
        <section className="py-10 bg-white sm:py-16 lg:py-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                        MentorConnect Pricing Plans
                    </h2>
                    <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
                        Choose the right plan to maximize your mentorship journey.
                    </p>
                </div>

                <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 text-center lg:max-w-full lg:mt-16 lg:grid-cols-3">
                    {pricingPlans.map((plan, index) => (
                        <div
                            key={index}
                            className={`overflow-hidden bg-white border-2 border-gray-100 rounded-md ${
                                index === 1 ? "shadow-lg" : ""
                            }`}
                        >
                            <div className="p-8 xl:px-12">
                                <h3 className="text-base font-semibold text-purple-600">
                                    {plan.name}
                                </h3>
                                <p className="text-5xl font-bold text-black mt-7">
                                    {plan.price === 0 ? "Free" : `Ksh. ${plan.price}`}
                                </p>
                                <p className="mt-3 text-base text-gray-600">{plan.paymentType}</p>

                                <ul className="inline-flex flex-col items-start space-y-5 text-left mt-9">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="inline-flex items-center space-x-2">
                                            <svg
                                                className="flex-shrink-0 w-5 h-5 text-indigo-500"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <span className="text-base font-medium text-gray-900">
                        {feature}
                      </span>
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href="#"
                                    className={`inline-flex items-center justify-center px-10 py-4 mt-10 text-base font-semibold text-white transition-all duration-200 rounded-md ${plan.buttonClass}`}
                                    role="button"
                                >
                                    {plan.price === 0 ? "Get Started" : "Upgrade Now"}
                                </a>
                                {plan.price !== 0 && (
                                    <p className="mt-4 text-sm text-gray-500">
                                        14 Days Moneyback Guarantee
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
