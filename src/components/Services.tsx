import React from 'react';
import { Shield, Eye, Lock, Wifi, Server, FileCheck, Globe, GraduationCap, Plane, Palette, Users, Monitor, Code, UserCheck } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: FileCheck,
      title: 'Government Services',
      description: 'Complete assistance with government digital services and documentation processes.',
      features: ['KRA Services', 'SHA Registration', 'NTSA Services', 'E-citizen Support', 'NSSF Processing', 'ETIMS Setup', 'Good Conduct Certificate', 'Passport Applications', 'Covid Certificates', 'TSC Services', 'CRB Clearance']
    },
    {
      icon: GraduationCap,
      title: 'Academic Services',
      description: 'Comprehensive academic support from applications to research assistance.',
      features: ['HEF Applications', 'KUCCPS Support', 'Computer Training', 'University Applications', 'Academic Writing', 'Research Assistance', 'CV & Cover Letters', 'Scholarship Applications']
    },
    {
      icon: Plane,
      title: 'Travel & Visa Services',
      description: 'Professional travel documentation and visa application assistance.',
      features: ['Visa Applications', 'Travel Bookings', 'Document Processing', 'Travel Insurance', 'Flight Reservations', 'Hotel Bookings']
    },
    {
      icon: Palette,
      title: 'Graphic Design',
      description: 'Professional design solutions for your business branding and marketing needs.',
      features: ['Logo Design', 'Business Cards', 'Branding Solutions', 'Marketing Materials', 'Social Media Graphics', 'Print Design']
    },
    {
      icon: Users,
      title: 'Online Applications',
      description: 'Expert assistance with various online application processes and submissions.',
      features: ['University Applications', 'Government Services', 'Job Applications', 'Academic Services', 'Professional Applications', 'Document Submission']
    },
    {
      icon: Monitor,
      title: 'Computer Training',
      description: 'Master essential computer skills with our expert-led training sessions and courses.',
      features: ['Basic IT Literacy', 'Microsoft Office', 'Advanced Software', 'Digital Skills', 'Online Safety', 'Productivity Tools']
    },
    {
      icon: Code,
      title: 'Website Creation',
      description: 'Professional website development and digital presence solutions for your business.',
      features: ['Website Development', 'Domain Registration', 'SEO Optimization', 'E-commerce Sites', 'Maintenance', 'Hosting Services']
    },
    {
      icon: Shield,
      title: 'Cyber Security',
      description: 'Comprehensive cybersecurity solutions to protect your digital assets and privacy.',
      features: ['Secure Browsing', 'Antivirus Installation', 'Privacy Protection', 'Data Security', 'Network Security', 'Security Training']
    },
    {
      icon: UserCheck,
      title: 'Virtual Assistance',
      description: 'Professional virtual assistant services tailored to boost your productivity.',
      features: ['Administrative Support', 'Data Entry', 'Email Management', 'Scheduling', 'Research Tasks', 'Customer Support']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Digital Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select a Service to Get Started! Comprehensive digital solutions designed to meet all your personal and business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 group hover:border-cyan-200">
                <div className="bg-gradient-to-br from-cyan-500 to-blue-600 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.slice(0, 6).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                  {service.features.length > 6 && (
                    <li className="flex items-center space-x-3 text-sm text-gray-500 italic">
                      <div className="w-2 h-2 bg-gray-400 rounded-full flex-shrink-0"></div>
                      <span>And more...</span>
                    </li>
                  )}
                </ul>
                <button className="mt-6 w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Get Started
                </button>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
            Request a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}