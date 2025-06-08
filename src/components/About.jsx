import React from 'react';
import DecryptedText from './DecryptedText';

const About = () => (
  <section className="py-20  text-white">

    <div className="max-w-4xl mx-auto px-4 text-center">
      <h3 className="text-3xl font-semibold text-gray-800 dark:text-white mb-6">About Me</h3>
      
      {/* Example 1: Default (hover to decrypt) */}
     

      {/* Example 2: Customized speed and characters */}
      <div className="mb-6">
        <DecryptedText 
          text="👋 Hi! I build intelligent systems that interpret real-time visual data and make autonomous decisions.My core focus is visual intelligence and automation – developing AI agents that detect and act on complex patterns in dynamic environments, particularly financial trading.Currently exploring how AI reshapes finance and decision-making automation."
          speed={80}
          maxIterations={25}
          characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+🤖🧠📊📈📉💻⚙️🔍🔢🧮🔬🔧🧪📝📚📡✨💡MLAI"
          className="revealed text-gray-300 text-lg"
          parentClassName="all-letters"
          encryptedClassName="encrypted"
        />
      </div>

      {/* Example 3: Animate on view (runs once) */}
    
    </div>
  </section>
);

export default About;
