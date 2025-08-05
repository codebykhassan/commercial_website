import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";

const Contact = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow mt-16">
                <div className="bg-construction-blue text-white py-20">
                    <div className="container">
                        <h1 className="mb-4 text-center">Contact Us</h1>
                        <p className="text-xl text-center max-w-3xl mx-auto text-white/80">
                            Get in touch with our team to discuss your project needs or request a free quote.
                        </p>
                    </div>
                </div>
                <div className="container py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2">
                            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                            <ContactForm />
                        </div>
                        <div className="lg:col-span-1">
                            <ContactInfo />
                        </div>
                    </div>
                </div>
                <div className="h-96 w-full">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215685241556!2d-73.98509668459473!3d40.74881797932848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1619398305232!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        loading="lazy"
                        title="Google Map"
                    ></iframe>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Contact;