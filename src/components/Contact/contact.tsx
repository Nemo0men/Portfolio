import React, { useRef } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';
import linkedinIcon from '../../assets/linkedin.png';
import githubIcon from '../../assets/github.png';
import instagramIcon from '../../assets/instagram.png';

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('service_tr4b6h4', 'template_37ur8tb', form.current, 'YEkRtoNEP4eab3Uof')
        .then(
          () => {
            console.log('SUCCESS!');
            if (form.current) {
              form.current.reset();
            }
            alert('Message Sent Successfully!');
          },
          (error) => {
            console.log('FAILED...', error.text);
            alert('Message Failed to Send!');
          }
        );
    }
  };

  return (
    <section id="contact" className="min-h-screen py-20 bg-black/90">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 fade-in">Contact Me</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-8 fade-in">
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-purple-400" />
              <div>
                <h3 className="text-xl font-semibold">Email</h3>
                <p className="text-gray-400">chankyu2004@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-purple-400" />
              <div>
                <h3 className="text-xl font-semibold">Phone</h3>
                <p className="text-gray-400">+1 (804) 801-9562</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-purple-400" />
              <div>
                <h3 className="text-xl font-semibold">Location</h3>
                <p className="text-gray-400">Charlottesville, VA</p>
                <p className="text-gray-400">Midlothian, VA</p>
              </div>
            </div>
          </div>
          <form className="space-y-6 fade-in" ref={form} onSubmit={sendEmail}>
            <div>
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-purple-500"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-purple-500"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-purple-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Send Message
            </button>
            <div className="links flex justify-center space-x-4 mt-8">
              <a href="https://www.linkedin.com/in/nehemiah-kim-a1b087291/" target="_blank" rel="noopener noreferrer">
                <img src={linkedinIcon} alt="LinkedIn" className="link w-8 h-8" />
              </a>
              <a href="https://github.com/Nemo0men" target="_blank" rel="noopener noreferrer">
                <img src={githubIcon} alt="GitHub" className="link w-8 h-8" />
              </a>
              <a href="https://www.instagram.com/nemo__k/" target="_blank" rel="noopener noreferrer">
                <img src={instagramIcon} alt="Instagram" className="link w-8 h-8" />
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
