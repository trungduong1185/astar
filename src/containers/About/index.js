import React from 'react';
import '../../css/tachyons.min.css';
import '../../css/styles.css';
import './styles.css';

const About = () => {
  return (
    <section id="about" className="about-section w-100 center block-pt-pb">
      <div className="container">
        <div className="flex flex-wrap items-start">
          {/* Left Column - Text Content */}
          <div className="w-100 w-50-l pr4-l">
            <div className="mb4">
              <h3 className="f4 fw6 mb2 red">Why GStar</h3>
              <h2 className="f2 fw7 mb4 about-title ttu">
                About the <span className="red">Program</span>
              </h2>
            </div>            
            
          </div>
          
          {/* Right Column - Image */}
          <div className="w-100 w-50-l pl4-l">
          <p className="font-body">
                <strong>GStar </strong> is a high-impact global AI talent program designed to fast-track individual talents, especially rising leaders from Asia-Pacific and beyond, into the global AI world. Over 12 weeks, you’ll collaborate on real-world research and industry projects under the guidance of NTI’s international advisors and partner companies.
              </p>
          </div>
        </div>
        
        {/* Bottom Section - Additional Info */}
        <div className="mt4  bt b--light-gray">
          <div className="flex flex-wrap justify-center">
          <div className="w-100">
            <div className="relative">
              <img 
                src="images/hero.webp" 
                alt="NTI Global Talent Program Participants" 
                className="w-100 br3 shadow-3 about-image"
                style={{ maxHeight: '500px', objectFit: 'cover' }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black-50 white pa3 br3 br--bottom">
                <p className="f6 ma0">
                  Participants collaborating on real-world AI projects during the program
                </p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 