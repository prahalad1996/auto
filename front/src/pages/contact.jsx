import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
    return (
        <>
            <div className="relative bg-red-500 w-full h-full bg-gray-100 p-6 justi">
                <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-6">
                    <h2 className="absilute text-3xl font-bold text-center text-gray-800 mb-6">Contact Rocky Auto Parts</h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-700 mb-4">Get in Touch</h3>
                            <p className="text-gray-600 mb-4">Have questions? Reach out to us and we'll respond as soon as possible.</p>
                            <form className="space-y-4 gap-3">
                                <input type="text" placeholder="Your Name" className="w-full p-3 m-3 border rounded-lg" /><br></br>
                                <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-lg" /><br></br>
                                <textarea placeholder="Your Message" rows="4" className="w-full p-3 border rounded-lg"></textarea><br></br>
                                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">Send Message</button>
                            </form>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-gray-700 mb-4">Contact Information</h3>
                            <p className="flex items-center gap-3 text-gray-700"><FaMapMarkerAlt /> 123 Auto Parts Street, City, Country</p>
                            <p className="flex items-center gap-3 text-gray-700"><FaPhone /> +91 9340933486</p>
                            <p className="flex items-center gap-3 text-gray-700"><FaEnvelope /> contact@rockyautoparts.com</p>
                            <p className="flex items-center gap-3 text-gray-700">
                                <FaWhatsapp /> <a href="https://wa.me/9340933486" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">Chat on WhatsApp</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div >
                <iframe
                    title="Rocky Auto Parts Location"
                    className="w-full lg:w-[1200px] h-[800px] rounded-lg shadow-md"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509619!2d144.9559283156829!3d-37.81720974202198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzcuwrA0OCc1OS4yIlMgMTQ0wrA1NycwNi44IkU!5e0!3m2!1sen!2sus!4v1633747011344!5m2!1sen!2sus"
                    allowFullScreen="True"
                    loading="lazy">
                </iframe>
            </div>
        </>
    );
}

export default Contact;
