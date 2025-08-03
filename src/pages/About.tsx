import React from 'react';
import { Users, Award, Clock, Globe } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Users, value: '500+', label: 'Clients Served' },
    { icon: Award, value: '10+', label: 'Years Experience' },
    { icon: Clock, value: '24/7', label: 'Support Available' },
    { icon: Globe, value: '99.9%', label: 'Success Rate' },
  ];

  return (
    <div className="pt-20 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About CyberKenya</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading Kenya's digital transformation with innovative solutions and unwavering commitment to excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At CyberKenya, we're dedicated to bridging the digital divide and empowering individuals and businesses 
              across Kenya with comprehensive digital services. From government documentation to cybersecurity, 
              we provide expert solutions that simplify complex processes.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our team combines local expertise with international standards to deliver services that meet the unique 
              needs of the Kenyan market. We believe in making digital services accessible, secure, and efficient for everyone.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="bg-cyan-100 text-cyan-800 px-4 py-2 rounded-full text-sm font-medium">Government Certified</span>
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">Security Experts</span>
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">24/7 Support</span>
            </div>
          </div>
          <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="bg-white/20 rounded-full p-1 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span>Local expertise with global standards</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="bg-white/20 rounded-full p-1 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span>Comprehensive digital service portfolio</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="bg-white/20 rounded-full p-1 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span>Secure and confidential processes</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="bg-white/20 rounded-full p-1 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span>Dedicated customer success team</span>
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
    </div>
  );
}