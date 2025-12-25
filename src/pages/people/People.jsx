import { Link, useLocation } from 'react-router-dom';

const People = () => {
  const location = useLocation();
  
  const sections = [
    {
      title: 'Core Team',
      path: '/people/core',
      description: 'Meet our core team members who drive innovation',
      icon: '⭐',
      color: 'bg-blue-500'
    },
    {
      title: 'Contributors',
      path: '/people/contributors',
      description: 'Talented individuals contributing to our projects',
      icon: '🤝',
      color: 'bg-green-500'
    },
    {
      title: 'Alumni',
      path: '/people/alumni',
      description: 'Former team members who helped shape our journey',
      icon: '🎓',
      color: 'bg-purple-500'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Our People</h1>
      <p className="text-lg text-gray-600 mb-12">
        Discover the amazing individuals who make our AI initiatives possible.
      </p>

      {/* Navigation Pills */}
      <div className="flex flex-wrap gap-4 mb-12">
        <Link 
          to="/people" 
          className={`px-4 py-2 rounded-full transition-colors ${
            location.pathname === '/people' 
              ? 'bg-blue-600 text-white' 
              : 'bg-white text-gray-600 hover:bg-gray-100'
          }`}
        >
          Overview
        </Link>
        <Link 
          to="/people/core" 
          className={`px-4 py-2 rounded-full transition-colors ${
            location.pathname === '/people/core' 
              ? 'bg-blue-600 text-white' 
              : 'bg-white text-gray-600 hover:bg-gray-100'
          }`}
        >
          Core Team
        </Link>
        <Link 
          to="/people/contributors" 
          className={`px-4 py-2 rounded-full transition-colors ${
            location.pathname === '/people/contributors' 
              ? 'bg-blue-600 text-white' 
              : 'bg-white text-gray-600 hover:bg-gray-100'
          }`}
        >
          Contributors
        </Link>
        <Link 
          to="/people/alumni" 
          className={`px-4 py-2 rounded-full transition-colors ${
            location.pathname === '/people/alumni' 
              ? 'bg-blue-600 text-white' 
              : 'bg-white text-gray-600 hover:bg-gray-100'
          }`}
        >
          Alumni
        </Link>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {sections.map((section, index) => (
          <Link key={index} to={section.path} className="group">
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
              <div className={`w-12 h-12 ${section.color} rounded-lg flex items-center justify-center text-white text-xl mb-4`}>
                {section.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                {section.title}
              </h3>
              <p className="text-gray-600">{section.description}</p>
              <div className="mt-4 text-blue-600 font-medium group-hover:underline">
                Learn More →
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default People;
