import React, { useState } from 'react';
import '../../css/tachyons.min.css';
import '../../css/styles.css';
import './styles.css';

const FAQ = () => {
  const [openItem, setOpenItem] = useState(0);

  const faqData = [
    {
      question: "I've graduated but am still waiting to receive my diploma. Am I eligible to apply?",
      answer: "Yes, you are eligible. As long as you have completed your degree requirements and can demonstrate relevant background in AI/ML, you may apply."
    },
    {
      question: "I'm currently in my final year of university. Can I still apply?",
      answer: "Yes, final-year students with strong foundations in AI/ML and programming are welcome to apply, especially if you successfully pass all stages of the selection process."
    },
    {
      question: "When does the program take place? What is the specific timeline?",
      answer: "Learners will join two parallel tracks from mid-August to mid-November, with one evening session per week (7:30 PM - 9:30 PM VNT) and one morning session (8:30 AM - 10:30 AM VNT). The final project presentation will be held offline at GenAI Summit 2025 in November."
    },
    {
      question: "What are the graduation requirements?",
      answer: "Completion of all track sessions and assignments\n• Submission of a capstone deliverable (code repo, presentation, short paper)\n• Minimum pass in final project evaluation by technical buddies, program leads, and senior advisors"
    },
    {
      question: "What is the enrollment process?",
      answer: "Complete the online application form\n• Take a technical test\n• Interview with the selection panel\n• Pay the remaining amount after scholarship to secure your seat\n• Receive official program confirmation from the organizers"
    },
    {
      question: "When and how will I be notified of admission decisions?",
      answer: "Outcomes announced via email by early-August 2025. Accepted applicants receive next-step instructions and onboarding details in the same notification."
    },
    {
      question: "What language will the program be conducted in?",
      answer: "The entire program, including lectures, discussions, and materials, will be delivered 100% in English."
    }
  ];

  const toggleItem = (index) => {
    setOpenItem(index);
  };

  return (
    <section id="faq" className="block-pt-pb ">
      <div className="container center">
        <h2 className="f2 fw7 tc mb4 tracked-l mb5">FREQUENTLY ASKED QUESTIONS</h2>
        
        <div className="flex flex-column">
          {faqData.map((item, index) => (
            <div key={index} className="mb3 faq-item">
              <div 
                className="bg-white pa3 faq-question flex justify-between items-center"
                onClick={() => toggleItem(index)}
              >
                <h3 className="f4 fw6 ma0">{item.question}</h3>
                <span className={`f4 fw6 faq-toggle ${openItem === index ? 'open' : ''}`}>
                  {openItem === index ? '−' : '+'}
                </span>
              </div>
              {openItem === index && (
                <div className="bg-white pa3 bt b--light-gray faq-answer">
                  <p className="ma0 lh-copy" style={{whiteSpace: 'pre-line'}}>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 
