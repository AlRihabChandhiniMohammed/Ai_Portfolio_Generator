import React, { useState } from 'react';
import { User, Briefcase, Code, Mail, Download, Sparkles, Loader2 } from 'lucide-react';

const AIPortfolioGenerator = () => {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    email: '',
    phone: '',
    location: '',
    linkedin: '',
    github: '',
    website: '',
    skills: '',
    experience: '',
    projects: '',
    education: '',
    bio: '',
    colorScheme: 'blue'
  });

  const [generatedPortfolio, setGeneratedPortfolio] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [currentStep, setCurrentStep] = useState('form');

  const colorSchemes = {
    blue: {
      primary: 'bg-blue-600',
      secondary: 'bg-blue-100',
      accent: 'text-blue-600',
      gradient: 'from-blue-600 to-purple-600'
    },
    green: {
      primary: 'bg-green-600',
      secondary: 'bg-green-100',
      accent: 'text-green-600',
      gradient: 'from-green-600 to-teal-600'
    },
    purple: {
      primary: 'bg-purple-600',
      secondary: 'bg-purple-100',
      accent: 'text-purple-600',
      gradient: 'from-purple-600 to-pink-600'
    },
    orange: {
      primary: 'bg-orange-600',
      secondary: 'bg-orange-100',
      accent: 'text-orange-600',
      gradient: 'from-orange-600 to-red-600'
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const enhanceContent = (content, type) => {
    // Simulate AI content enhancement
    const enhancements = {
      bio: "A passionate and results-driven professional with expertise in creating innovative solutions. Committed to continuous learning and delivering exceptional value through technical excellence and creative problem-solving.",
      skills: content.split(',').map(skill => skill.trim()).filter(skill => skill).join(' • '),
      experience: content || "Experienced professional with a strong background in technology and innovation, consistently delivering high-quality solutions and driving organizational success.",
      projects: content || "Developed multiple innovative projects showcasing technical expertise and creative problem-solving abilities, with focus on user experience and scalable solutions."
    };
    
    return enhancements[type] || content;
  };

  const generatePortfolio = async () => {
    setIsGenerating(true);
    
    // Simulate AI processing delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const enhanced = {
      ...formData,
      bio: enhanceContent(formData.bio, 'bio'),
      skills: enhanceContent(formData.skills, 'skills'),
      experience: enhanceContent(formData.experience, 'experience'),
      projects: enhanceContent(formData.projects, 'projects')
    };

    setGeneratedPortfolio(enhanced);
    setIsGenerating(false);
    setCurrentStep('preview');
  };

  const PortfolioPreview = ({ data, scheme }) => (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className={`bg-gradient-to-r ${scheme.gradient} text-white py-20`}>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="w-32 h-32 bg-white rounded-full mx-auto mb-6 flex items-center justify-center">
            <User className="w-16 h-16 text-gray-600" />
          </div>
          <h1 className="text-5xl font-bold mb-4">{data.name}</h1>
          <p className="text-xl mb-6 opacity-90">{data.title}</p>
          <div className="flex justify-center space-x-6">
            {data.email && (
              <a href={`mailto:${data.email}`} className="flex items-center space-x-2 hover:opacity-80">
                <Mail className="w-5 h-5" />
                <span>{data.email}</span>
              </a>
            )}
            {data.location && (
              <span className="flex items-center space-x-2">
                <span>📍</span>
                <span>{data.location}</span>
              </span>
            )}
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className={`text-3xl font-bold mb-8 ${scheme.accent}`}>About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            {data.bio}
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className={`py-16 ${scheme.secondary}`}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className={`text-3xl font-bold mb-8 ${scheme.accent}`}>Skills & Expertise</h2>
          <div className="text-lg text-gray-700">
            {data.skills}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className={`text-3xl font-bold mb-8 ${scheme.accent}`}>Experience</h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <p className="text-lg text-gray-700 leading-relaxed">
              {data.experience}
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className={`py-16 ${scheme.secondary}`}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className={`text-3xl font-bold mb-8 ${scheme.accent}`}>Projects</h2>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <p className="text-lg text-gray-700 leading-relaxed">
              {data.projects}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={`py-16 bg-gradient-to-r ${scheme.gradient} text-white`}>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
          <div className="flex justify-center space-x-8">
            {data.linkedin && (
              <a href={data.linkedin} className="hover:opacity-80">
                <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                  <span>LinkedIn</span>
                </div>
              </a>
            )}
            {data.github && (
              <a href={data.github} className="hover:opacity-80">
                <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                  <span>GitHub</span>
                </div>
              </a>
            )}
            {data.website && (
              <a href={data.website} className="hover:opacity-80">
                <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                  <span>Website</span>
                </div>
              </a>
            )}
          </div>
        </div>
      </section>
    </div>
  );

  if (currentStep === 'preview' && generatedPortfolio) {
    return (
      <div>
        <div className="fixed top-4 left-4 z-50">
          <button
            onClick={() => setCurrentStep('form')}
            className="bg-white shadow-lg px-4 py-2 rounded-lg border hover:bg-gray-50"
          >
            ← Back to Editor
          </button>
        </div>
        <PortfolioPreview data={generatedPortfolio} scheme={colorSchemes[generatedPortfolio.colorScheme]} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-8 h-8 text-blue-600 mr-2" />
            <h1 className="text-4xl font-bold text-gray-800">AI Portfolio Generator</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Create a stunning portfolio website in minutes with AI-powered content enhancement
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                <User className="w-5 h-5 mr-2" />
                Personal Information
              </h3>
              
              <input
                type="text"
                name="name"
                placeholder="Full Name *"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
              
              <input
                type="text"
                name="title"
                placeholder="Professional Title *"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
              
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              
              <input
                type="text"
                name="location"
                placeholder="Location"
                value={formData.location}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                <Code className="w-5 h-5 mr-2" />
                Professional Links
              </h3>
              
              <input
                type="url"
                name="linkedin"
                placeholder="LinkedIn Profile"
                value={formData.linkedin}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              
              <input
                type="url"
                name="github"
                placeholder="GitHub Profile"
                value={formData.github}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              
              <input
                type="url"
                name="website"
                placeholder="Personal Website"
                value={formData.website}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />

              {/* Color Scheme */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Color Scheme
                </label>
                <select
                  name="colorScheme"
                  value={formData.colorScheme}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="blue">Ocean Blue</option>
                  <option value="green">Forest Green</option>
                  <option value="purple">Royal Purple</option>
                  <option value="orange">Sunset Orange</option>
                </select>
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-6 mb-8">
            <div>
              <label className="block text-lg font-semibold text-gray-800 mb-2">
                Professional Bio
              </label>
              <textarea
                name="bio"
                placeholder="Tell us about yourself... (AI will enhance this)"
                value={formData.bio}
                onChange={handleInputChange}
                rows="3"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-lg font-semibold text-gray-800 mb-2">
                Skills & Technologies
              </label>
              <input
                type="text"
                name="skills"
                placeholder="React, Node.js, Python, AWS... (comma separated)"
                value={formData.skills}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-lg font-semibold text-gray-800 mb-2">
                Work Experience
              </label>
              <textarea
                name="experience"
                placeholder="Describe your work experience... (AI will enhance this)"
                value={formData.experience}
                onChange={handleInputChange}
                rows="3"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-lg font-semibold text-gray-800 mb-2">
                Projects & Achievements
              </label>
              <textarea
                name="projects"
                placeholder="Describe your key projects... (AI will enhance this)"
                value={formData.projects}
                onChange={handleInputChange}
                rows="3"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Generate Button */}
          <div className="text-center">
            <button
              onClick={generatePortfolio}
              disabled={!formData.name || !formData.title || isGenerating}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 mx-auto"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Generating with AI...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  <span>Generate AI Portfolio</span>
                </>
              )}
            </button>
            <p className="text-sm text-gray-500 mt-2">
              * Name and title are required
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <Sparkles className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800 mb-2">AI-Enhanced Content</h3>
            <p className="text-gray-600 text-sm">Professional content generation and enhancement</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <Briefcase className="w-8 h-8 text-green-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800 mb-2">Professional Design</h3>
            <p className="text-gray-600 text-sm">Modern, responsive portfolio layouts</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <Download className="w-8 h-8 text-purple-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800 mb-2">Instant Generation</h3>
            <p className="text-gray-600 text-sm">Get your portfolio ready in minutes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIPortfolioGenerator;