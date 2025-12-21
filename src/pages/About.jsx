import React from 'react';
import { Brain, Target, Users, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-16">
      <section className="bg-gradient-to-r from-blue-900 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">About Neuromorphix</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Pioneering the future of computing through brain-inspired artificial intelligence and neuromorphic engineering
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-4">
                At Neuromorphix, we are dedicated to revolutionizing computing by drawing inspiration from the most powerful processor known to us: the human brain.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Our interdisciplinary team combines expertise in neuroscience, computer science, and engineering to develop cutting-edge neuromorphic systems that are more efficient, adaptive, and intelligent than traditional computing architectures.
              </p>
              <p className="text-lg text-gray-600">
                We believe that by understanding and emulating the principles of biological neural networks, we can unlock new frontiers in artificial intelligence and create technology that serves humanity's greatest challenges.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 h-96 flex items-center justify-center">
              <Brain className="w-48 h-48 text-blue-600" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">
                Pushing the boundaries of what's possible in computing
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600">
                Maintaining the highest standards in research and development
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Collaboration</h3>
              <p className="text-gray-600">
                Working together across disciplines for breakthrough discoveries
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Impact</h3>
              <p className="text-gray-600">
                Creating technology that makes a real difference
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Our Team</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            We are a collaborative team driven by excellence, learning, and innovation. Our founders, researchers, and engineers—ranging from fresh graduates to experienced professionals—work together in an environment where ideas thrive and impactful neuromorphic research takes shape.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Mr. Abhishek Kumar", role: "Founder & Principal Investigator", specialty:" MS AI & Data Science | Research Trainee in Computational Neuroscience" },
            //   { name: "Dr. Michael Rodriguez", role: "Lead Engineer", specialty: "Neuromorphic Hardware" },
            //   { name: "Dr. Emily Watson", role: "AI Research Director", specialty: "Brain-Computer Interfaces" }
            ].map((member, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}