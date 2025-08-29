'use client';

import { useState, useRef } from 'react';

interface FormData {
  name: string;
  role: string;
  bio: string;
  skills: string;
  email: string;
  linkedin: string;
  colorScheme: string;
  designStyle: string;
}

const colorSchemeOptions = [
  { name: 'Navy & Orange', value: 'navy blue and orange', colors: ['#1e3a8a', '#f97316'] },
  { name: 'Blue & White', value: 'blue and white', colors: ['#3b82f6', '#ffffff'] },
  { name: 'Green & Gray', value: 'green and gray', colors: ['#10b981', '#6b7280'] },
  { name: 'Purple & Pink', value: 'purple and pink', colors: ['#8b5cf6', '#ec4899'] },
  { name: 'Custom', value: '', colors: [] }
];

const designStyleOptions = [
  'Minimalist',
  'Maximalist', 
  'Bento',
  'Modern',
  'Classic',
  'Creative'
];

export default function Home() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    role: '',
    bio: '',
    skills: '',
    email: '',
    linkedin: '',
    colorScheme: 'navy blue and orange',
    designStyle: 'Minimalist'
  });

  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const [copied, setCopied] = useState(false);
  const [showCustomColor, setShowCustomColor] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  const isFormValid = formData.name && formData.role && formData.bio && formData.skills;

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleColorSchemeChange = (value: string) => {
    setFormData(prev => ({ ...prev, colorScheme: value }));
    setShowCustomColor(value === '');
  };

  const generatePrompt = () => {
    const contactInfo = [];
    if (formData.email) contactInfo.push(`Email: ${formData.email}`);
    if (formData.linkedin) contactInfo.push(`LinkedIn: ${formData.linkedin}`);
    
    const contactString = contactInfo.length > 0 ? contactInfo.join(', ') : 'No contact info provided';
    
    const prompt = `Create a modern personal portfolio website for ${formData.name}, a ${formData.role}.

Bio: ${formData.bio}

Skills: ${formData.skills}

Contact info: ${contactString}

Use ${formData.colorScheme} colors and a ${formData.designStyle} design style.`;
    
    setGeneratedPrompt(prompt);
    
    // Smooth scroll to result
    setTimeout(() => {
      resultRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedPrompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-orange-50">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-orange-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-orange-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4 pt-16">
        <div className="w-full max-w-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-3">
              Portfolio Prompt Generator
            </h1>
            <p className="text-lg text-gray-600 max-w-lg mx-auto leading-relaxed">
              Generate personalized portfolio website prompts for Lovable. Created for the MIT Women's Summit 2025.
            </p>
          </div>

          {/* Main Card */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8">
            {/* Form */}
            <form onSubmit={(e) => { e.preventDefault(); generatePrompt(); }} className="space-y-6">
              {/* Required Fields */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Role <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.role}
                    onChange={(e) => handleInputChange('role', e.target.value)}
                    className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                    placeholder="e.g., Full Stack Developer"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Bio <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={formData.bio}
                  onChange={(e) => handleInputChange('bio', e.target.value)}
                  className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none placeholder-gray-400"
                  rows={3}
                  placeholder="Tell us about yourself, your experience, and what drives you..."
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Skills <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={formData.skills}
                  onChange={(e) => handleInputChange('skills', e.target.value)}
                  className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none placeholder-gray-400"
                  rows={2}
                  placeholder="e.g., React, Node.js, Python, AWS, Docker..."
                  required
                />
              </div>

              {/* Optional Fields */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    LinkedIn
                  </label>
                  <input
                    type="url"
                    value={formData.linkedin}
                    onChange={(e) => handleInputChange('linkedin', e.target.value)}
                    className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>
              </div>

              {/* Color Scheme Selection */}
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-gray-900">
                  Color Scheme
                </label>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  {colorSchemeOptions.map((option) => (
                    <button
                      key={option.name}
                      type="button"
                      onClick={() => handleColorSchemeChange(option.value)}
                      className={`p-4 rounded-xl border-2 transition-all duration-200 bg-white/50 backdrop-blur-sm ${
                        formData.colorScheme === option.value
                          ? 'border-blue-500 bg-blue-50/50 shadow-lg scale-105'
                          : 'border-gray-200 hover:border-gray-300 hover:bg-white/70'
                      }`}
                    >
                    <div className="text-sm font-medium text-gray-900 mb-2">
                         {option.name}
                       </div>
                      {option.colors.length > 0 && (
                        <div className="flex gap-1 justify-center">
                          {option.colors.map((color, index) => (
                            <div
                              key={index}
                              className="w-5 h-5 rounded-full border border-gray-200 shadow-sm"
                              style={{ backgroundColor: color }}
                            />
                          ))}
                        </div>
                      )}
                    </button>
                  ))}
                </div>
                
                {showCustomColor && (
                  <div className="mt-3">
                    <input
                      type="text"
                      value={formData.colorScheme}
                      onChange={(e) => handleInputChange('colorScheme', e.target.value)}
                      className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                      placeholder="e.g., purple and gold, dark blue and silver..."
                    />
                  </div>
                )}
              </div>

              {/* Design Style Selection */}
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-gray-900">
                  Design Style
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {designStyleOptions.map((style) => (
                    <button
                      key={style}
                      type="button"
                      onClick={() => handleInputChange('designStyle', style)}
                      className={`px-4 py-3 rounded-xl border-2 transition-all duration-200 ${
                        formData.designStyle === style
                          ? 'border-blue-500 bg-blue-500 text-white shadow-lg scale-105'
                          : 'border-gray-200 bg-white/50 backdrop-blur-sm hover:border-gray-300 hover:bg-white/70'
                      }`}
                    >
                      {style}
                    </button>
                  ))}
                </div>
              </div>

              {/* Generate Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={!isFormValid}
                  className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-200 ${
                    isFormValid
                      ? 'bg-blue-600 text-white hover:shadow-xl hover:scale-[1.02] transform'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Generate Portfolio Prompt
                </button>
              </div>
            </form>

            {/* Generated Result */}
            {generatedPrompt && (
              <div ref={resultRef} className="mt-8 pt-8 border-t border-gray-200/50">
                <div className="bg-gradient-to-r from-blue-50/50 to-orange-50/50 rounded-2xl p-6 border border-blue-200/30">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Generated Prompt
                    </h3>
                    <button
                      onClick={copyToClipboard}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${
                        copied
                          ? 'bg-green-500 text-white'
                          : 'bg-blue-500 text-white hover:shadow-lg'
                      }`}
                    >
                      {copied ? (
                        <>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Copied!
                        </>
                      ) : (
                        <>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                          Copy
                        </>
                      )}
                    </button>
                  </div>
                  <div className="bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-white/50">
                    <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                      {generatedPrompt}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="text-center mt-8">
            <p className="text-gray-500 flex items-center justify-center gap-2">
              Powered by 
              <img 
                src="/PRIORIWISE FINAL LOGO_ORANGE.svg" 
                alt="Prioriwise" 
                className="h-6 w-auto"
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
