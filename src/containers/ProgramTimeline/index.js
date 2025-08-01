import React from 'react';
import '../../css/tachyons.min.css';
import '../../css/styles.css';
import './styles.css';

const ProgramTimeline = ({ id }) => {
  const timelineData = [
    {
      month: '30 July - 17 August',
      title: 'Recruitment',
      description: 'Application period and candidate selection process',
      position: 'left'
    },
    {
      month: '25 August - 14 NOVEMBER',
      title: 'Official Program',
      description: '12-week intensive training and project development',
      position: 'center'
    },
    {
      month: 'NOVEMBER',
      title: 'Presentation at GenAI Summit',
      description: 'Showcase your capstone project to industry leaders',
      position: 'right'
    }
  ];

  return (
    <section id={id} className="block-pt-pb bg-white">
      <div className="w-container center">
        <h2 className="f2 fw7 tc mb4 w-100 f2 fw7 ttu ph2 pl0 pr5-l pc-what-title tc tracked-l">Program Timeline</h2>
        
        <div className="timeline-container">
          {/* Timeline Line */}
          <div className="timeline-line"></div>
          
          {/* Timeline Items */}
          <div className="timeline-items">
            {timelineData.map((item, index) => (
              <div key={index} className={`timeline-item timeline-item-${item.position}`}>
                <div className="timeline-node"></div>
                <div className="timeline-content">
                  <div className="timeline-month red f4 fw6 ttu tracked">{item.month}</div>
                  <h3 className="timeline-title f3 fw7 mb2">{item.title}</h3>
                  <p className="timeline-description f5 gray lh-copy">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramTimeline; 