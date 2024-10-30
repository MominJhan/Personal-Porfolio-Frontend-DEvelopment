import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const userData = {
      name,
      email,
      message,
    };

    try {
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('User data saved:', result);
        // Optionally reset form fields
        setName('');
        setEmail('');
        setMessage('');
      } else {
        console.error('Failed to save user data:', response.statusText);
      }
    } catch (error) {
      console.error('Error saving user data:', error);
    }
  };

  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
            from-green-400 to-blue-500 mb-4'>Let's Talk</h3>
            <p>I'm open to discussing web development Project or partnership opportunities.</p>
            <div className='mb-4 mt-8'>
                <FaEnvelope className='inline-block text-green-400 mr-2' />
                <a href="mailto:nadeemmomina66@gmail.com" className='hover:underline'>
                    nadeemmomina66@gmail.com
                </a>
            </div>
            <div className='mb-4'>
                <FaPhone className='inline-block text-green-400 mr-2' />
                <span>+92-313-6886411</span>
            </div>
            <div className='mb-4'>
                <FaMapMarkedAlt className='inline-block text-green-400 mr-2' />
                <span>Basher Town Near Rehmania Masjid Rafi Qamar Road BWP</span>
            </div>
          </div>
          <div className='flex-1 w-full'>
            <form className='space-y-4' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name" className='block mb-2'>Your Name</label>
                    <input 
                      type="text" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                      focus:border-green-400'
                      placeholder='Enter Your Name'
                      required
                    />
                </div>
                <div>
                    <label htmlFor="email" className='block mb-2'>Email</label>
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                      focus:border-green-400'
                      placeholder='Enter Your Email'
                      required
                    />
                </div>
                <div>
                    <label htmlFor="message" className='block mb-2'>Message</label>
                    <textarea 
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                      focus:border-green-400'
                      rows="5"
                      placeholder='Enter Your Message'
                      required
                    />
                </div>
                <button type="submit" className='bg-gradient-to-r from-green-400 to-blue-500 text-white 
                transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'>
                  Send
                </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
