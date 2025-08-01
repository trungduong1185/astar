import '../../css/tachyons.min.css';
import '../../css/styles.css';
import { useState } from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';

const What = ({ id }) => {
  const [selectedId, setSelectedId] = useState(1);
  var isMobile = useMediaQuery('(max-width: 768px)');

  const toggleCol_1 =
    selectedId === 1 ? (isMobile ? 'db w-100' : 'db w-100 w-50-l') : (isMobile ? 'dn' : 'dn db-l w-50-l');
  const toggleCol_2 =
    selectedId === 2 ? (isMobile ? 'db w-100' : 'db w-100 w-50-l') : (isMobile ? 'dn' : 'dn db-l w-50-l');

  return (
    <div className="w-100 bg-program lh-copy block-pt-pb">
      <div id={id} />
      <div className="w-container center flex flex-wrap flex-column flex-row-l">
        {/* <!-- cot 1 --> */}
        <div className="w-100 w-30-l f2 fw7 ttu ph2 pl0 pr5-l pc-what-title tc tl-l tracked-l">
          What you will <br />
          learn in this <br />
          bootcamp
        </div>

        {/* <!-- cot 2 --> */}

        <div className="w-100 w-70-l pc-what-content fw3">
          {/* <!--  CONTENTS TITLES --> */}

          {/* mobile */}
          <div className='w-100 bg-program' style={{position: "sticky", top: '2rem'}}>
            <div className="w-90 center flex dn-l justify-end bb bw1 b--white-05 pt4">
              <div
                className={
                  'w-40 pointer pb2 ' + (selectedId !== 1 ? 'o-30' : ' bb--pc-red')
                }
                onClick={() => {
                  // console.log(1);
                  setSelectedId(1);
                }}
              >
                <p className="pc-training fw7 ttu tc">State-of-the-art LLM Training</p>
              </div>
              <div
                className={
                  'w-40 pointer pb2 ' + (selectedId !== 2 ? 'o-30' : ' bb--pc-red')
                }
                onClick={() => {
                  // console.log(2);
                  setSelectedId(2);
                }}
              >
                <p className="pc_what_pink fw7 ttu tc">Capstone project</p>
              </div>
            </div>
          </div>

          {/* desktop: no click no opacity */}
          <div className="dn w-100 flex-l justify-end bb bw1 b--gray pv4 mb4">
            <div className="w-40 ">
              <p className="pc-training fw7 ttu tc">State-of-the-art LLM Training</p>
            </div>
            <div className="w-40  ">
              <p className="pc_what_pink fw7 ttu tc">Capstone project</p>
            </div>
          </div>

          {/* <!-- CONTENT DETAIL --> */}
          <div className='w-90 center'>           
              
            {/* <!-- week 1 2 --> */}
            <div className="w-100 flex justify-end pv2">
              <div className="w-20 tc fw5 flex flex-wrap">
                <div className={`w-100 ${isMobile ? ' h2 mt1' : 'h2'}`}>Week 1</div>
                <div className={`w-100 ${isMobile ? ' h2 mt1' : 'h4'}`}>Week 2</div>
              </div>
              <div className="w-80 flex"> 
                <div className={toggleCol_1 + 'flex-l flex-wrap  mr2-l'}>
                  <div className="w-100 green-week-box tc d-flex align-items flex-column">
                    <span className="b">Review of advanced NLP techniques</span>
                    <br />
                    Goal: recap fundamental knowledge such as attention, tokenization, Transformer, and end-to-end training.
                  </div>

                  <div className={`w-100 green-week-box tc mt3 d-flex align-items flex-column `}>
                    <span className="b">Pre-training</span>
                    <br />
                    Goal: develop in-depth understanding of attention (e.g., Linear Attention, FlashAttention), advanced Transformers (Sparse Transformer - Transformer-XL, MoE) and LLM pretraining.
                    <br />
                    Tutorial: Train a large language model from scratch.
                    <br />
                    Assignment 1 (week 1- 2): optimizer state sharding
                  </div>
                </div>

                <div className={toggleCol_2 + 'flex-l flex-wrap ml2-l'}>
                  <div className={'pink-week-box tc'}>
                    <span className="b">Individual Project brainstorming</span>
                    <br />
                    Goal: think critically about interesting and impactful ideas that can be achieved in 12 weeks 
                    <br />
                    Deliverables: project proposal (2-4 pages) to be reviewed by technical buddies & program leads.
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- week 3 4 5 --> */}
            <div className="w-100 flex justify-end pv2">
              <div className="w-20 tc fw5 flex flex-wrap">
                <div className={`w-100 ${isMobile ? ' h4 mt1' : 'h4'}`}>Week 3</div>
                <div className={`w-100 ${isMobile ? ' h3' : ' h4 mt3'}`}>Week 4</div>
                <div className={`w-100 ${isMobile ? ' h2 mt1' : 'h2'}`}>Week 5</div>
              </div>
              <div className="w-80 flex"> 
                <div className={toggleCol_1 + 'flex-l flex-wrap  mr2-l'}>
                  <div className="w-100 green-week-box tc d-flex align-items flex-column">
                    <span className="b">Post-training</span>
                    <br />
                    Goal: understand supervised finetuning (SFT) and parameter-efficient methods. Learn how to prepare data, setup training, hyperparameter optimization, perform decoding, and evaluation.
                  </div>
                  <div className="w-100 green-week-box tc d-flex mt3 align-items flex-column">
                    <span className="b">Alignment & Advanced reasoning</span>
                    <br />
                    Goal: understand learning from human feedback (RLHF, DPO) and recent developments for advanced reasoning models (DeepSeek-R1 and GRPO).
                  </div>
                  <div className={`w-100 green-week-box tc mt3 flex-center flex-column ${isMobile ? 'h4' : ''}`}>
                    <span className="b">Assignment 2  (week 3-5): train math reasoning models with GRPO </span>
                  </div>
                </div>

                <div className={toggleCol_2 + 'flex-l flex-wrap ml2-l '}>
                  <div className={'pink-week-box tc'}>
                    <span className="b">Individual Project prototype</span>
                    <br />
                   Goal: implement the first version of the project proposal utilizing knowledge learned during the first 6 weeks.
                   <br />
                    Deliverables: project presentation presented to technical buddies, program leads, and senior advisors
                  </div>
                </div>
              </div>
            </div>
              {/* <!-- phase 6 --> */}
              <div className="w-100 flex justify-end pv2">
              <div className="w-20 tc fw5 flex flex-wrap">
                <div className="w-100 h4">Week 6</div>
              </div>

              <div className="w-80 yellow-week-box bg-pc-red ttu pc-white tc">
                <span className='f3 fw7'>Project prototype presentation</span>
                <br />
                (Individual students will merge into teams for collaborative works)
              </div>
            </div>

            {/* <!-- week 7 8 9 --> */}
            <div className="w-100 flex justify-end pv2">
              <div className="w-20 tc fw5 flex flex-wrap">
                <div className="w-100 h3">Week 7</div>
                <div className="w-100 h3 mt3">Week 8</div>
                <div className="w-100 h3">Week 9</div>
              </div>
              <div className="w-80 flex"> 
                <div className={toggleCol_1 + 'flex-l flex-wrap  mr2-l'}>
                  <div className="w-100 green-week-box tc d-flex align-items flex-column">
                    <span className="b">Guest lectures on either or both</span>
                    <br />
                    <ul className='ul-list-conent'>
                      <li>Text diffusion models</li>
                      <li>Flash attention</li>
                    </ul>
                  </div>
                  <div className="w-100 green-week-box tc d-flex mt3 align-items flex-column">
                    <span className="b">Advanced Inference</span>
                    <br />
                    Goal: kv-caching, advanced decoding algorithms & serving optimizations.
                     </div>
                  <div className={`w-100 green-week-box tc mt3 flex-column ${isMobile ? 'h4' : ''}`}>
                    <span className="b">Agents and Evaluation</span>
                    <br />
                    Goal: understand AI agents and automated benchmarks (BLEURT, COMET, LLM judge)

                  </div>
                </div>

                <div className={toggleCol_2 + 'flex-l flex-wrap ml2-l '}>
                  <div className={'pink-week-box tc'}>
                    <span className="b">Team Project refinement </span>
                    <br />
                    Goal: refine the idea and implementation based on feedback of the prototype.
                    <br />
                    Deliverables:
                    <ul className='ul-list-conent'>
                    <li> project mid-term report (2-4 pages) on the latest results</li>
                    <li> initial code submission</li>
                    </ul>
                    <br />
                    To be reviewed by technical buddies & program leads.

                  </div>
                </div>
              </div>
            </div>


  {/* <!-- week 10 11 --> */}
  <div className="w-100 flex justify-end pv2">
              <div className="w-20 tc fw5 flex flex-wrap">
                <div className="w-100 h4">Week 10</div>
                <div className="w-100 h2">Week 11</div>
              </div>
              <div className="w-80 flex"> 
                <div className={toggleCol_1 + 'flex-l flex-wrap  mr2-l'}>
                  <div className="w-100 green-week-box tc d-flex align-items flex-column">
                    <span className="b">Guest lectures on either or both</span>
                    <br />
                    <ul className='ul-list-conent'>
                    <li> AI Safety</li>
                    <li>AI for Drug Discovery</li>
                    </ul>
                  </div>

                  <div className={`w-100 green-week-box tc mt3 flex-column ${isMobile ? 'h4' : ''}`}>
                    <span className="b">Guest lectures on either or both:</span>
                    <ul className='ul-list-conent'>
                      <li>Leadership</li>
                      <li>Research skills</li>
                    </ul>
                  </div>
                </div>

                <div className={toggleCol_2 + 'flex-l flex-wrap ml2-l '}>
                  <div className={'pink-week-box tc'}>
                    <span className="b">Team Project completion</span>
                    <br />
                    Goal: complete the project with polished results and implementation.
                    <br /> <br />
                    Deliverables:
                    <ul className='ul-list-conent'>
                    <li>final project presentation to everyone</li>
                    <li>project final report (4-8 pages)</li>
                    <li>final code submission</li>
                    </ul>
                    <br />
                    To be graded by technical buddies & program leads.

                  </div>
                </div>
              </div>
            </div>

          {/* <!-- phase 12 --> */}
          <div className="w-100 flex justify-end pv2">
              <div className="w-20 tc fw5 flex flex-wrap">
                <div className="w-100 h4">Week 12</div>
              </div>

              <div className="w-80 yellow-week-box bg-pc-red ttu pc-white tc">
                <span className='f3 fw7'>Final project presentation</span>
                <br />
                (later followed by blog-post/Camera-ready presentation to post on Medium/HF/NTI website)
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default What;
