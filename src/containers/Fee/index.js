import '../../css/tachyons.min.css';
import '../../css/styles.css';
import './styles.scss';
import data from '../../assets/data.json';

const Fee = ({ id }) => {
    return (
        <section id={id} className="bg-white container block-pt-pb bg-white">
            <div className=" center w-100 ph3 pt0 pb3">
                {/* Title Section */}
                <div className="mb4">
                    
                </div>
                {/* Official Tuition Fee Section */}
                <div className="bg-white scholarship-box br3 pa5 pb4">
                    <div className="tc">
                    <h2 className="f2 f2-l fw7 pc-red ttu tracked-l flex justify-center">
                        <span className="pc-black">Scholarships Available</span>
                    </h2>
                        <div className="f1 fw7 pc-red mb2">Up to 100% Coverage</div>
                        <p className="f5 pc-dark-gray mb4">
                            We are committed to making high-quality AI education accessible through merit-based scholarships.
                        </p>
                        <a 
                            href={data.register_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-pc-red pc-near-white dib ph4 pv3 br3 fw7 f4 pointer dim no-underline"
                        >
                            APPLY NOW
                        </a>
                    </div>
                </div>
                                

                {/* Scholarship Criteria Section */}
                <div className="bg-white block-scholarship-criteria br3">
                    <h3 className="f4 fw7 pc-dark-gray mb3">Scholarship Criteria</h3>
                    <ul className="flex flex-column details-list-scholarship">
                            <li className="f5 pc-dark-gray ma0">
                                Demonstrated academic excellence or research achievements
                            </li>
                            <li className="f5 pc-dark-gray ma0">
                                Strong performance in the technical assessment
                            </li>
                            <li className="f5 pc-dark-gray ma0">
                                Personal or family hardship
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


const FeeOld = ({ id }) => {
    return (
        <section id={id} className="bg-white container block-pt-pb bg-white">
            <div className=" center w-100 ph3 pt0 pb3">
                {/* Title Section */}
                <div className="mb4">
                    <p className="f5 pc-red mb2">Tuition Fee</p>
                    <h2 className="f2 f2-l fw7 pc-red ttu tracked-l ">
                        <span className="pc-black">Scholarships Available: </span>
                        <span className="pc-red">Up to 100% Coverage</span>
                    </h2>
                </div>
                {/* Official Tuition Fee Section */}
                <div className="bg-white pink-week-box br3 pa5 pb4">
                    <div className="tc">
                        <h3 className="f3 fw7 pc-dark-gray mb3">Official Tuition Fee</h3>
                        <div className="f1 fw7 pc-red mb2">2K$</div>
                        <p className="f5 pc-dark-gray mb4">
                            We are committed to making high-quality AI education accessible through merit-based scholarships.
                        </p>
                        <a 
                            href={data.register_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-pc-red pc-near-white dib ph4 pv3 br3 fw7 f4 pointer dim no-underline"
                        >
                            APPLY NOW
                        </a>
                    </div>
                </div>
                                

                {/* Scholarship Criteria Section */}
                <div className="bg-white block-scholarship-criteria br3">
                    <h3 className="f4 fw7 pc-dark-gray mb3">Scholarship Criteria</h3>
                    <ul className="flex flex-column details-list-scholarship">
                            <li className="f5 pc-dark-gray ma0">
                                Demonstrated academic excellence or research achievements
                            </li>
                            <li className="f5 pc-dark-gray ma0">
                                Strong performance in the technical assessment
                            </li>
                            <li className="f5 pc-dark-gray ma0">
                                Personal or family hardship
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
