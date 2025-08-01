import React from 'react';
import '../../css/tachyons.min.css';
import '../../css/styles.css';
import './styles.css';

const ProgramTimeline = ({ id }) => {
  const timelineData = [
    {
      month: '30 July - 17 August',
      title: 'Recruitment',
      description: ['<b>Aug 10:</b> deadline to apply', '<b>Aug 12:</b> entrance test for selected candidates', '<b>Aug 14-16:</b> interviews for selected candidates'],
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
                                     <div className="timeline-description f5 gray lh-copy">
                     {Array.isArray(item.description) ? (
                       item.description.map((line, lineIndex) => (
                         <div key={lineIndex} dangerouslySetInnerHTML={{ __html: line }}></div>
                       ))
                     ) : (
                       <div dangerouslySetInnerHTML={{ __html: item.description }}></div>
                     )}
                   </div>
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