import React from 'react';
import '../../css/tachyons.min.css';
import '../../css/styles.css';

const AcademicContent = () => {
  return (
    <section id="academic_content" className="pa4 bg-light-gray">
      <div className="container-1400 center">
        <h2 className="f2 fw7 tc mb4">ACADEMIC CONTENT</h2>
        <div className="flex flex-wrap justify-between">
          <div className="w-100 w-33-l pr3-l">
            <h3 className="f3 fw6 mb3">Foundation Module</h3>
            <ul className="list pl0">
              <li className="mb2">• AI Fundamentals</li>
              <li className="mb2">• Machine Learning Basics</li>
              <li className="mb2">• Data Science Principles</li>
              <li className="mb2">• Business AI Strategy</li>
            </ul>
          </div>
          <div className="w-100 w-33-l ph2-l">
            <h3 className="f3 fw6 mb3">Advanced Module</h3>
            <ul className="list pl0">
              <li className="mb2">• Deep Learning</li>
              <li className="mb2">• NLP & Computer Vision</li>
              <li className="mb2">• AI Model Deployment</li>
              <li className="mb2">• MLOps & Production</li>
            </ul>
          </div>
          <div className="w-100 w-33-l pl3-l">
            <h3 className="f3 fw6 mb3">Practical Module</h3>
            <ul className="list pl0">
              <li className="mb2">• Real-world Projects</li>
              <li className="mb2">• Industry Case Studies</li>
              <li className="mb2">• AI Implementation</li>
              <li className="mb2">• Demo Development</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicContent; 