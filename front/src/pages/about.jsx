import { FaTools, FaCheckCircle, FaHandshake } from "react-icons/fa";

const About = () => {
    return (
        <div className="bg-gray-100 min-h-screen py-10 px-5 md:px-20">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
                    About <span className="text-blue-600">Rocky Auto Parts</span>
                </h1>
                <p className="text-gray-600 text-center mb-6">
                    Welcome to Rocky Auto Parts, your one-stop destination for high-quality parts.</p>
                <p className="text-gray-600 text-center mb-6"> 
                     We are committed to providing top-notch products to keep
                    your vehicles running smoothly and efficiently.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mt-8">
                    <div className="text-center p-4 bg-blue-50 rounded-lg shadow">
                        <FaTools className="text-blue-600 text-5xl mx-auto mb-3" />
                        <h2 className="text-xl font-semibold text-gray-800">Quality Parts</h2>
                        <p className="text-gray-600 text-sm mt-2">
                            We source only the best auto parts to ensure durability and
                            performance.
                        </p>
                    </div>

                    <div className="text-center p-4 bg-blue-50 rounded-lg shadow">
                        <FaCheckCircle className="text-blue-600 text-5xl mx-auto mb-3" />
                        <h2 className="text-xl font-semibold text-gray-800">Trusted Service</h2>
                        <p className="text-gray-600 text-sm mt-2">
                            Our team is dedicated to offering reliable service and expert
                            advice.
                        </p>
                    </div>

                    <div className="text-center p-4 bg-blue-50 rounded-lg shadow">
                        <FaHandshake className="text-blue-600 text-5xl mx-auto mb-3" />
                        <h2 className="text-xl font-semibold text-gray-800">Customer Satisfaction</h2>
                        <p className="text-gray-600 text-sm mt-2">
                            Your satisfaction is our priority, and we strive to exceed your
                            expectations.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
