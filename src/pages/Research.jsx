import React from 'react';
import { Brain, Zap, Cpu, BookOpen, Eye, Network } from 'lucide-react';

export default function Research() {
  const researchAreas = [
    {
      title: "Spiking Neural Networks",
      description: "Developing biologically plausible neural network models that communicate through discrete spikes, enabling temporal information processing and energy-efficient computation.",
      icon: Brain,
      highlights: [
        "Event-driven computation",
        "Temporal coding mechanisms",
        "Plasticity and learning rules"
      ]
    },
    {
      title: "Neuromorphic Vision Systems",
      description: "Creating event-based vision sensors and processing algorithms inspired by biological retinas, achieving microsecond-level response times with minimal power consumption.",
      icon: Eye,
      highlights: [
        "Dynamic vision sensors",
        "Real-time object tracking",
        "Low-latency processing"
      ]
    },
    {
      title: "Brain-Computer Interfaces",
      description: "Bridging the gap between neural systems and digital devices through advanced signal processing and machine learning techniques.",
      icon: Cpu,
      highlights: [
        "Neural signal decoding",
        "Adaptive interfaces",
        "Real-time feedback systems"
      ]
    },
    {
      title: "Cognitive Architectures",
      description: "Designing computational frameworks that replicate key aspects of human cognition, including memory, attention, and decision-making processes.",
      icon: BookOpen,
      highlights: [
        "Memory systems",
        "Attention mechanisms",
        "Decision-making models"
      ]
    },
    {
      title: "Neuromorphic Hardware",
      description: "Developing specialized chip architectures that implement brain-inspired computing at scale with unprecedented energy efficiency.",
      icon: Zap,
      highlights: [
        "Custom ASIC design",
        "Analog/digital hybrid systems",
        "Scalable architectures"
      ]
    },
    {
      title: "Neural Network Optimization",
      description: "Research into efficient training methods and network compression techniques for neuromorphic systems.",
      icon: Network,
      highlights: [
        "Network pruning",
        "Quantization methods",
        "Transfer learning"
      ]
    }
  ];

  return (
    <div className="pt-16">
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Research Areas</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Exploring the intersection of neuroscience, computer science, and artificial intelligence to create the next generation of computing systems
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {researchAreas.map((area, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl shadow-sm hover:shadow-lg transition-all p-8">
                <div className="flex flex-col md:flex-row md:items-start md:space-x-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mb-4 md:mb-0">
                    <area.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{area.title}</h3>
                    <p className="text-gray-600 mb-4">{area.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900">Key Highlights:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        {area.highlights.map((highlight, hIdx) => (
                          <li key={hIdx}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Recent Publications</h2>
          <div className="space-y-6">
            {[
              {
                title: "Efficient Spike-Timing-Dependent Plasticity in Neuromorphic Hardware",
                authors: "Chen, S., Rodriguez, M., Watson, E.",
                journal: "Nature Neuroscience",
                year: "2024"
              },
              {
                title: "Event-Based Vision for Real-Time Robotics Applications",
                authors: "Watson, E., Chen, S.",
                journal: "IEEE Transactions on Neural Networks",
                year: "2024"
              },
              {
                title: "Energy-Efficient Deep Learning through Neuromorphic Computing",
                authors: "Rodriguez, M., Chen, S., Watson, E.",
                journal: "Science Advances",
                year: "2023"
              }
            ].map((pub, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{pub.title}</h3>
                <p className="text-gray-600 mb-1">{pub.authors}</p>
                <p className="text-sm text-gray-500">{pub.journal} ({pub.year})</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}