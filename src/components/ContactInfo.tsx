import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactInfo = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-6">
                <div className="flex items-start">
                    <div className="mr-4 bg-construction-orange/10 p-3 rounded-full">
                        <Phone className="h-6 w-6 text-construction-orange" />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">Phone</h3>
                        <p className="text-construction-gray-dark">+1 (905) 925-7447</p>
                    </div>
                </div>

                <div className="flex items-start">
                    <div className="mr-4 bg-construction-orange/10 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-construction-orange" />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">Email</h3>
                        <p className="text-construction-gray-dark">Mirzobuildpro@gmail.com</p>
                    </div>
                </div>

                <div className="flex items-start">
                    <div className="mr-4 bg-construction-orange/10 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-construction-orange" />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">Address</h3>
                        <p className="text-construction-gray-dark">4866 Bathurst Streets</p>
                        <p className="text-construction-gray-dark">M2R 1X4</p>
                    </div>
                </div>

                <div className="flex items-start">
                    <div className="mr-4 bg-construction-orange/10 p-3 rounded-full">
                        <Clock className="h-6 w-6 text-construction-orange" />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">Working Hours</h3>
                        <p className="text-construction-gray-dark">Monday-Friday: 8AM - 5PM</p>
                        <p className="text-construction-gray-dark">Saturday-Sunday: Closed</p>
                    </div>
                </div>
            </div>

            <div className="mt-8 p-6 bg-construction-gray-light rounded-lg">
                <h3 className="font-bold text-lg mb-3">Ready to get started?</h3>
                <p className="text-construction-gray-dark mb-4">
                    Contact us today for a free consultation and let us bring your construction vision to life.
                </p>
                <a
                    href="tel:+19059257447"
                    className="inline-flex items-center text-construction-orange font-medium hover:underline"
                >
                    <Phone className="h-4 w-4 mr-2" />
                    Call Us Now
                </a>
            </div>
        </div>
    );
};

export default ContactInfo;