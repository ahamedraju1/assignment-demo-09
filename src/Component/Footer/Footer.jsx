import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router';

const Footer = () => {

    return (
        <footer className="w-full bg-gray-100 py-10">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
              
                <div>
                    <h2 className="text-2xl font-bold  ">Gadegtsy</h2>
                    <p className="mt-4">
                        Your ultimate gadget subscription service for the latest tech trends.
                    </p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold   mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><Link to="/terms" className="hover:text-white">Terms & Conditions</Link></li>
                        <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                        <li><Link to="/about" className="hover:text-white">About Us</Link></li>
                        <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold   mb-4">Follow Us</h3>
                    <div className="flex space-x-4 text-xl">
                        <a href="https://facebook.com" target="_blank" className="hover:text-blue-500"><FaFacebook /></a>
                        <a href="https://instagram.com" target="_blank" className="hover:text-pink-500"><FaInstagram /></a>
                        <a href="https://twitter.com" target="_blank" className="hover:text-blue-400"><FaTwitter /></a>
                        <a href="https://linkedin.com" target="_blank" className="hover:text-blue-600"><FaLinkedin /></a>
                    </div>
                </div>

            </div>

            <div className="text-center text-gray-500 mt-8 text-sm border-t border-gray-700 pt-4">
                © {new Date().getFullYear()} Gadegtsy. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;