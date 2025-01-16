import React from 'react';
import { ExternalLink } from 'lucide-react';

const worksData = [
  {
    title: "GraphRAG vs. RAG: Advancing Complex Data Analysis for Government Datasets",
    description: "Working on a client project at ML@UVA for the Logistics Management Institute (LMI), exploring Microsoft's GraphRAG technology as well as other RAG algorithms to enhance retrieval-augmented generation (RAG) for complex, multi-hop reasoning questions on government-specific datasets.",
    image: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    link: "https://github.com/Nemo0men/RAG-Evaluation-Pipeline"
  },
  {
    title: "UVA Course Catalog (2024)",
    description: "Developed a JavaFX CRUD Course Review App with a team, enabling students to log in, write, view, and manage reviews for UVA courses, featuring a UI, SQLite database for persistence, and JSON output generation.",
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    link: "https://github.com/Nemo0men/UVACourseCatalog"
  },
  {
    title: "Real-Time Sign Language Translator (2024)",
    description: "Leveraging Arduino TinyML technology, I developed an innovative sign language translator that bridges communication gaps for deaf and hard-of-hearing individuals. By training a sophisticated deep learning model optimized for real-time gesture recognition, the project demonstrates my expertise in embedded AI, computer vision, and assistive technology.",
    image: "https://images.unsplash.com/photo-1615839170810-0ce3b9b3bd4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    link: "https://github.com/Nemo0men/Real-Time-ASL-Translator"
  },
  {
    title: "Simple RAG LLM for Documents (2024)",
    description: "I built a Retrieval-Augmented Generation (RAG) system from scratch that integrates document retrieval with Large Language Models to generate context-aware responses. Using Python, LangChain, OpenAI, and Chroma, I created a solution that enables precise information retrieval and intelligent query processing, showcasing my skills in AI development and machine learning technologies.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    link: "https://github.com/Nemo0men/Simple-RAG-LLM-for-Documents"
  }
];

const Works = () => {
  return (
    <section id="works" className="min-h-screen py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 fade-in">My Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {worksData.map((project, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg fade-in"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-purple-400 hover:text-purple-300"
                >
                  View Project <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a 
            href="https://github.com/Nemo0men" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            See More <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Works;