import React from 'react';
import { Users, Award, Clock, Globe } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Users, value: '500+', label: 'Clients Protected' },
    { icon: Award, value: '10+', label: 'Years Experience' },
    { icon: Clock, value: '24/7', label: 'Monitoring' },
    { icon: Globe, value: '99.9%', label: 'Uptime' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About CyberKenya</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading Kenya's cybersecurity landscape with innovative solutions and unwavering commitment to digital protection.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At CyberKenya, we're dedicated to creating a secure digital environment for businesses across Kenya and East Africa. 
              Our team of certified cybersecurity experts combines global best practices with local expertise to deliver 
              comprehensive security solutions.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We believe that cybersecurity is not just about technology—it's about people, processes, and continuous innovation. 
              Our approach focuses on understanding your unique business needs and crafting tailored security strategies that grow with your organization.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="bg-cyan-100 text-cyan-800 px-4 py-2 rounded-full text-sm font-medium">ISO 27001 Certified</span>
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">CISSP Experts</span>
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">24/7 SOC</span>
            </div>
          </div>
          <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-8 text-white">
            <h4 className="text-2xl font-bold mb-6">Why Choose Us?</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="bg-white/20 rounded-full p-1 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span>Local expertise with global security standards</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="bg-white/20 rounded-full p-1 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span>Proactive threat detection and response</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="bg-white/20 rounded-full p-1 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span>Compliance with international regulations</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="bg-white/20 rounded-full p-1 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span>Dedicated customer support team</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-cyan-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}