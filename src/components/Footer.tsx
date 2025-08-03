import React from 'react';
import { Shield, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    'About Us',
    'Services',
    'Solutions',
    'Resources',
    'Blog',
    'Careers'
  ];

  const services = [
    'Cybersecurity Consulting',
    'Threat Detection',
    'Data Protection',
    'Network Security',
    'Cloud Security',
    'Compliance'
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Shield className="h-8 w-8 text-cyan-400" />
              <span className="text-2xl font-bold">CyberKenya</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Leading Kenya's cybersecurity landscape with innovative solutions and expert protection 
              against evolving digital threats. Securing your digital future, today.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-cyan-400" />
                <span className="text-gray-300">info@cyberkenya.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-cyan-400" />
                <span className="text-gray-300">+254 700 123 456</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-cyan-400" />
                <span className="text-gray-300">Nairobi, Kenya</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 CyberKenya. All rights reserved. | Privacy Policy | Terms of Service
            </div>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-cyan-600 p-2 rounded-lg transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-cyan-600 p-2 rounded-lg transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-cyan-600 p-2 rounded-lg transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}