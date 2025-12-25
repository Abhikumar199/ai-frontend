import { Link } from 'react-router-dom';

const Core = () => {
  const coreMembers = [
    {
      name: 'John Doe',
      role: 'AI Research Lead',
      bio: 'Expert in machine learning and deep learning architectures.',
      image: 'https://via.placeholder.com/300x300',
      linkedin: '#',
      github: '#'
    },
    {
      name: 'Jane Smith',
      role: 'Frontend Architect',
      bio: 'Specialized in React and modern frontend technologies.',
      image: 'https://via.placeholder.com/300x300',
      linkedin: '#',
      github: '#'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <nav className="mb-6">
        <Link to="/people" className="text-blue-600 hover:underline">People</Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-600">Core Team</span>
      </nav>

      <h1 className="text-4xl font-bold text-gray-800 mb-4">Core Team</h1>
      <p className="text-lg text-gray-600 mb-12">
        Meet the dedicated individuals who lead our AI initiatives.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {coreMembers.map((member, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src={member.image} 
              alt={member.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
              <p className="text-blue-600 font-medium mb-3">{member.role}</p>
              <p className="text-gray-600 mb-4">{member.bio}</p>
              
              <div className="flex space-x-3">
                <a href={member.linkedin} className="text-blue-600 hover:text-blue-800">
                  LinkedIn
                </a>
                <a href={member.github} className="text-gray-600 hover:text-gray-800">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Core;
