import React, { useRef, useState } from "react";
import { Send, Phone, MapPin, Mail, PhoneCall } from "lucide-react";
import emailjs from "@emailjs/browser";
import Spinner from "@/components/ui/Spinner";
export default function Contact() {
    const form = useRef();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState(null);

    const validateForm = () => {
        let tempErrors = {};
        let isValid = true;

        if (!formData.name.trim()) {
            tempErrors.name = "Name is required";
            isValid = false;
        }

        if (!formData.email.trim()) {
            tempErrors.email = "Email is required";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = "Email is invalid";
            isValid = false;
        }

        if (!formData.subject.trim()) {
            tempErrors.subject = "Subject is required";
            isValid = false;
        }

        if (!formData.message.trim()) {
            tempErrors.message = "Message is required";
            isValid = false;
        }

        setErrors(tempErrors);
        return isValid;
    };

    const sendEmail = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            setStatus("Please fill in all required fields correctly.");
            return;
        }

        try {
            setIsLoading(true);
            emailjs
                .sendForm(
                    "service_3etsg7h", // e.g., service_xxxxx
                    "template_twl2cs4", // e.g., template_xxxxx
                    form.current,
                    "53XaDKmLfACvmL_2z" // e.g., your public API key
                )
                .then(
                    (result) => {
                        console.log("Success:", result.text);
                        setStatus("Message sent successfully!");
                        setIsLoading(false);
                    },
                    (error) => {
                        console.error("Error:", error.text);
                        setStatus(error.text || "Failed to send message.");
                        setIsLoading(false);
                    }
                );

            e.target.reset();
        } catch (error) {
            setStatus(
                error.message || "There was an error sending your message."
            );
            setIsLoading(false);
        }
    };

    return (
        <main
            className="pt-20 lg:pt-[0rem] bg-[#04081A]
 text-white min-h-screen"
        >
            <section className="hero min-h-screen flex items-center relative px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                                    Get in Touch
                                </h2>
                                <p className="text-gray-300 text-lg">
                                    Have a question or want to work together?
                                    Drop us a message!
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <div className="bg-purple-500/10 p-3 rounded-lg">
                                        <Mail className="w-6 h-6 text-purple-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">Email</h3>
                                        <p className="text-gray-400">
                                            mohamed.mounir2425@gmail.com
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="bg-pink-500/10 p-3 rounded-lg">
                                        <MapPin className="w-6 h-6 text-pink-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">
                                            Location
                                        </h3>
                                        <p className="text-gray-400">
                                            Cairo, Egypt
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="bg-green-500/10 p-3 rounded-lg">
                                        <PhoneCall className="w-6 h-6 text-green-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">Phone</h3>
                                        <p className="text-gray-400">
                                            +02 1112149090
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl shadow-xl">
                            <form
                                // onSubmit={handleSubmit}
                                ref={form}
                                onSubmit={sendEmail}
                                className="space-y-6"
                            >
                                <div className="grid grid-cols-1 gap-6">
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                                                errors.name
                                                    ? "border-red-500"
                                                    : "border-gray-700"
                                            } focus:border-blue-500 focus:outline-none transition-colors`}
                                            value={formData.name}
                                            name="name  "
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    name: e.target.value,
                                                })
                                            }
                                        />
                                        {errors.name && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {errors.name}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Your Email"
                                            className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                                                errors.email
                                                    ? "border-red-500"
                                                    : "border-gray-700"
                                            } focus:border-blue-500 focus:outline-none transition-colors`}
                                            value={formData.email}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    email: e.target.value,
                                                })
                                            }
                                        />
                                        {errors.email && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {errors.email}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Subject"
                                            name="subject"
                                            className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                                                errors.subject
                                                    ? "border-red-500"
                                                    : "border-gray-700"
                                            } focus:border-blue-500 focus:outline-none transition-colors`}
                                            value={formData.subject}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    subject: e.target.value,
                                                })
                                            }
                                        />
                                        {errors.subject && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {errors.subject}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <textarea
                                            placeholder="Your Message"
                                            name="message"
                                            rows="4"
                                            className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                                                errors.message
                                                    ? "border-red-500"
                                                    : "border-gray-700"
                                            } focus:border-blue-500 focus:outline-none transition-colors resize-none`}
                                            value={formData.message}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    message: e.target.value,
                                                })
                                            }
                                        ></textarea>
                                        {errors.message && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {errors.message}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity"
                                >
                                    <span>Send Message</span>
                                    {isLoading ? (
                                        <Spinner />
                                    ) : (
                                        <Send className="w-4 h-4" />
                                    )}
                                </button>
                            </form>

                            {/* Status Message */}
                            {status && (
                                <div
                                    className={`mt-4 text-center ${
                                        status.includes("success")
                                            ? "text-green-400"
                                            : "text-red-400"
                                    }`}
                                >
                                    <p>{status}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
