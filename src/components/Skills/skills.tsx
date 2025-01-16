import React from 'react';
import { User, GraduationCap, Code2 } from 'lucide-react';

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen py-20 bg-black/90">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 fade-in">About Me</h2>
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="fade-in bg-gray-900/50 p-8 rounded-lg border border-gray-800 hover:border-purple-500 transition-all duration-300">
            <div className="flex items-start gap-6">
              <User className="w-12 h-12 text-purple-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-3">Me</h3>
                <p className="text-gray-300 leading-relaxed">
                  Hello! My full legal name is "Chankyu Nehemiah Kim", my preferred
                  name is "Nehemiah Kim", and my friends call me "Nemo". I am a
                  Korean-American born in Georgia and raised in Indiana and Virginia.
                  I am 20 years old and I enjoy playing the piano, cello, drums, bass,
                  electric guitar, and acoustic guitar. I also play tennis and 
                  volleyball.
                </p>
              </div>
            </div>
          </div>

          <div className="fade-in bg-gray-900/50 p-8 rounded-lg border border-gray-800 hover:border-purple-500 transition-all duration-300">
            <div className="flex items-start gap-6">
              <GraduationCap className="w-12 h-12 text-purple-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-3">Education</h3>
                <p className="text-gray-300 leading-relaxed">
                  I am a Computer Engineering third year student at the University of Virginia, 
                  pursuing my degree with a minor in Data Science from August 2022 
                  to May 2026, maintaining a GPA of 3.5/4.0. As a member of ML@UVA, the 
                  Mechatronics and Robotics Society, and Viva Lab, I apply advanced 
                  technologies in web development, data systems, and deep learning.
                </p>
              </div>
            </div>
          </div>

          <div className="fade-in bg-gray-900/50 p-8 rounded-lg border border-gray-800 hover:border-purple-500 transition-all duration-300">
            <div className="flex items-start gap-6">
              <Code2 className="w-12 h-12 text-purple-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-3">Skills</h3>
                <p className="text-gray-300 leading-relaxed">
                  My skills span a comprehensive range of software development 
                  and data science technologies. In programming, I am proficient 
                  in Python, Java, JavaScript, SQL, and React. My machine learning expertise 
                  includes working with TensorFlow, LangChain, and OpenAI API. I focus 
                  on model development, data processing, and web development. I
                  also love public speaking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;