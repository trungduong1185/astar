import '../../css/tachyons.min.css';
import '../../css/styles.css';
import './styles.scss';

const Fee = ({ id }) => {
    return (
        <section id={id} className="bg-white w-container block-pt-pb bg-white">
            <div className=" center w-100 ph3 pt0 pb3">
                {/* Title Section */}
                <div className="mb4">
                    <p className="f5 pc-red mb2">Tuition Fee</p>
                    <h2 className="f3 f2-l fw7 pc-red ttu tracked-l ">
                        <span className="pc-dark-gray">Scholarships Available: </span>
                        <span className="pc-red">Up to 100% Coverage</span>
                    </h2>
                </div>
                {/* Official Tuition Fee Section */}
                <div className="bg-white green-week-box br3 pa5 pb4 mb4">
                    <div className="tc">
                        <h3 className="f4 fw7 pc-dark-gray mb3">Official Tuition Fee</h3>
                        <div className="f1 fw7 pc-red mb2">~$2000</div>
                        <p className="f5 pc-dark-gray mb4">
                            We are committed to making high-quality AI education accessible through merit-based scholarships.
                        </p>
                        <button className="bg-pc-red  pc-near-white dib  ph4 pv3 br3  fw7 f4 pointer dim">
                            APPLY NOW
                        </button>
                    </div>
                </div>
                {/* Scholarship Coverage Cards */}
                <div className="flex flex-column flex-row-l " style={{gap: '24px'}}>
                    {/* Large 100% Card - Left Column */}
                     <div className="w-100 w-50-l bg-white br3 pa4 mr0 pink-week-box flex items-center justify-center">
                         <div className="tc">
                             <div className="f1 fw7 pc-red mb2">100%</div>
                             <div className="f5 pc-dark-gray">Full Coverage</div>
                         </div>
                     </div>
                    
                                         {/* Smaller Cards Grid - Right Column */}
                     <div className="w-100 w-50-l">
                         <div className="flex flex-wrap" style={{gap: '24px'}}>
                             <div className="w-50 bg-white br3 pink-week-box" style={{width: 'calc(50% - 12px)'}}>
                                 <div className="tc">
                                     <div className="f3 fw7 pc-red mb1">90%</div>
                                     <div className="f6 pc-dark-gray">Outstanding Performance</div>
                                 </div>
                             </div>
                             <div className="w-50 bg-white br3 pink-week-box" style={{width: 'calc(50% - 12px)'}}>
                                 <div className="tc">
                                     <div className="f3 fw7 pc-red mb1">80%</div>
                                     <div className="f6 pc-dark-gray">High Achievement</div>
                                 </div>
                             </div>
                             <div className="w-50 bg-white br3 pink-week-box" style={{width: 'calc(50% - 12px)'}}>
                                 <div className="tc">
                                     <div className="f3 fw7 pc-red mb1">60%</div>
                                     <div className="f6 pc-dark-gray">Good Performance</div>
                                 </div>
                             </div>
                             <div className="w-50 bg-white br3 pink-week-box" style={{width: 'calc(50% - 12px)'}}>
                                 <div className="tc">
                                     <div className="f3 fw7 pc-red mb1">50%</div>
                                     <div className="f6 pc-dark-gray">Merit-Based</div>
                                 </div>
                             </div>
                         </div>
                     </div>
                </div>

                

                {/* Scholarship Criteria Section */}
                <div className="bg-white block-scholarship-criteria br3">
                    <h3 className="f4 fw7 pc-dark-gray mb4">Scholarship Criteria</h3>
                    <ul className="flex flex-column details-list-scholarship">
                            <li className="f5 pc-dark-gray ma0">
                                Demonstrated academic excellence or research achievements (GPA 3.2 or above)
                            </li>
                            <li className="f5 pc-dark-gray ma0">
                                Strong performance in the technical assessment (top scorers)
                            </li>
                            <li className="f5 pc-dark-gray ma0">
                                Personal or family hardship (e.g. low-income households, children of war veterans/martyrs)
                            </li>
                            <li className="f5 pc-dark-gray ma0">
                                Clear motivation and commitment aligned with the program's mission
                            </li>
                    </ul>
                    
                    {/* Important Note */}
                    <div className="bg-red-5 pa3 br3">
                        <div className="flex items-center">
                            <span className="f4 mr2">🔔</span>
                            <p className="f6 ma0">
                                Applicants who meet multiple criteria will be prioritized during the scholarship review process. 
                                Final results will be sent directly to your registered email.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Fee;