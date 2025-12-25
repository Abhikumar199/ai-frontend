import { Link } from 'react-router-dom';

const Contributors = () => {
  const contributors = [
    { name: 'Alex Chen', contributions: 'UI/UX Design', projects: '5 projects' },
    { name: 'Sarah Wilson', contributions: 'Data Science', projects: '8 projects' },
    { name: 'Tom Rodriguez', contributions: 'DevOps', projects: '3 projects' },
    { name: 'Emma Davis', contributions: 'Testing & QA', projects: '12 projects' },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <nav className="mb-6">
        <Link to="/people" className="text-blue-600 hover:underline">People</Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-600">Contributors</span>
      </nav>

      <h1 className="text-4xl font-bold text-gray-800 mb-4">Contributors</h1>
      <p className="text-lg text-gray-600 mb-12">
        Amazing individuals who contribute their expertise to our projects.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {contributors.map((contributor, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{contributor.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{contributor.contributions}</p>
                <p className="text-gray-600">{contributor.projects}</p>
              </div>
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                {contributor.name.split(' ').map(n => n[0]).join('')}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contributors;
