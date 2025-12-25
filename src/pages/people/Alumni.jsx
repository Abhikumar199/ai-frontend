import { Link } from 'react-router-dom';

const Alumni = () => {
  const alumni = [
    {
      name: 'David Kim',
      role: 'Former CTO',
      period: '2020-2023',
      currentRole: 'Senior AI Engineer at TechCorp',
      achievements: 'Led the development of our core AI infrastructure'
    },
    {
      name: 'Lisa Zhang',
      role: 'Former Research Lead',
      period: '2019-2022',
      currentRole: 'AI Researcher at Stanford',
      achievements: 'Published 15+ papers in top-tier conferences'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <nav className="mb-6">
        <Link to="/people" className="text-blue-600 hover:underline">People</Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-600">Alumni</span>
      </nav>

      <h1 className="text-4xl font-bold text-gray-800 mb-4">Alumni</h1>
      <p className="text-lg text-gray-600 mb-12">
        Celebrating the exceptional individuals who helped build our foundation.
      </p>

      <div className="space-y-6">
        {alumni.map((person, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <h3 className="text-xl font-semibold text-gray-800 mr-3">{person.name}</h3>
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                    {person.period}
                  </span>
                </div>
                <p className="text-blue-600 font-medium mb-2">{person.role}</p>
                <p className="text-gray-600 mb-2">{person.achievements}</p>
                <p className="text-sm text-gray-500">Now: {person.currentRole}</p>
              </div>
              <div className="mt-4 md:mt-0 md:ml-6">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {person.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alumni;
