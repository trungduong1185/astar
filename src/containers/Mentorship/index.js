import '../../css/tachyons.min.css';
import '../../css/styles.css';
import { groups } from '../../assets/data.json';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import './styles.css';
import { RedApplyButton } from '../../components/ApplyButton';
import { countdown } from '../../assets/data.json';

const MobileMentorShip = () => {
  const [selectGroupId, setSelectGroupId] = useState(0);
  const [activeMentorId, setActiveMentorId] = useState(0);

  const _showInfoMentor = (id) => {
    // console.log('id = ', id);
    setActiveMentorId(activeMentorId === id ? 0 : id);
  };

  return (
    <div className="db dn-l w-100 bg-pc-red block-pt-pb">
      {/* anchor  for Link_to */}
      <div id="top_group" />
      {groups.map((item, index) => {
        return index === selectGroupId ? (
          <>
            <Link
              to={'top_group'}
              spy={true}
              smooth={true}
              offset={-70}
              duration={2000}
              className="pointer"
            >
              {/*<div className="w-100 pa4" onClick={() => setSelectGroupId(-1)}>
                <div className="flex justify-between items-center">
                  <p className="f3 pc-white tracked">{item.title}</p>
                  <img
                    src="images/svg_arrow_up.svg"
                    alt=""
                    className="w1 ml4"
                  />
                </div>

                <div className="f6 pc-pink-white mt3 tracked lh-copy">
                  {item.description}
                </div>
              </div>*/}
            </Link>

            <div className="w-100 ph4 pt0 pb4 bb b--pink-white">
              {item.mentors.map((mentor) => (
                <>
                  <div className="w-100 pt3">
                    <div id={mentor.id} />
                    <div className="relative">
                      <Link
                        to={mentor.id}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1000}
                        className="pointer"
                      >
                        <img
                          src={'images/' + mentor.image}
                          alt=""
                          className="w-100 br0 pointer none_select "
                          onClick={(e) => {
                            e.preventDefault();
                            _showInfoMentor(mentor.id);
                          }}
                        />
                      </Link>

                      <div className="fixed_name flex flex-row items-baseline">
                        <div className="h1 w25 bg-pc-red db mr2 o-70"></div>
                        <p className="pc-near-white f4 fw6 nowrap dib" style={{whiteSpace: 'pre-line'}}>
                          {mentor.name}
                        </p>
                      </div>
                    </div>

                    {/* <p className="f4 fw6 pc-white tracked mt3">{mentor.name}</p> */}
                  </div>

                  <div
                    className={
                      'db dn-l relative box_close  ' +
                      (activeMentorId !== mentor.id ? '' : 'box_open')
                    }
                  >
                    <div className="w-100 absolute top-0 z-9 o bg-pc-red pc-near-white f6 mv2 pv2 br3 lh-copy">
                      <div className="w-100 bb b--white-50 mt3 mb2"></div>
                      <p className="f6 fw6 lh-copy tracked mt3">
                        {mentor.title}
                      </p>
                      <p
                        className="fw3 lh-copy tracked mt3"
                        dangerouslySetInnerHTML={{
                          __html: mentor.description,
                        }}
                      ></p>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </>
        ) : (
          <Link
            to={'top_group'}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="pointer"
          >
            <div
              className="w-100 pa4 bb b--pink-white"
              onClick={() => setSelectGroupId(index)}
            >
              <div className="flex justify-between items-center">
                <p className="f3 pc-white tracked">{item.title}</p>
                <img
                  src="images/svg_arrow_down_white.svg"
                  alt=""
                  className="w1 ml4"
                />
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

const DesktopMentorship = () => {
  const [mentors, setMentors] = useState([]);
  const [activeMentorId, setActiveMentorId] = useState(0);
  const [selectGroupId] = useState(0);
  const [isShowModal, setIsShowModal] = useState(false);

  useEffect(() => {
    setMentors(groups[selectGroupId].mentors);
  }, [selectGroupId]);

  useEffect(() => {
    setIsShowModal(activeMentorId !== 0);
  }, [activeMentorId]);

  const _showInfoMentor = (id) => {
    setActiveMentorId(activeMentorId === id ? 0 : id);
  };

  return (
    <>
      <div
        id="desktop-mentorship"
        className="dn flex-l flex-column w-80 center br3 pv2 ph3 white bg-pc-red"
      >
        {/* <div className="w-100 flex justify-around">
          {groups.map((item, index) => (
            <div
              className={
                selectGroupId === index
                  ? 'w-third mh1 bg-near-white bg-pc-pink-white pc-black pv3 br2 tc pointer'
                  : 'w-third mh1 bg-near-white pc-black pv3 br2 tc pointer'
              }
              onClick={() => setSelectGroupId(index)}
            >
              {groups[index].title}
            </div>
          ))}
        </div> */}

        <div className="w-container center mt4 mb4">
          {/*<p className="_title f2 fw4 lh-copy tracked tl pc-white">
            {groups[selectGroupId].title}
          </p>
          <p className="mt3 f6 fw3 tracked tl pc-white lh-copy pc-pink-white">
            {groups[selectGroupId].description}
          </p>*/}
          <div className="mentorship-grid mt0">
            {mentors.map((item) => (
              <div className="pv0">
                <div className="hover-item pv0 ">
                  <img
                    src={'images/' + item.image}
                    alt=""
                    className="w-100 br0 h-100 mv0 pv0"
                    style={{height: 414, objectFit: 'cover'}}
                  />

                  <div className="fixed_name flex flex-row items-baseline">
                    <div className="h1 w25 bg-pc-red db mr2 o-70"></div>
                    <p className="pc-near-white f4 fw6 nowrap dib" style={{whiteSpace: 'pre-line'}}>
                      {item.name}
                    </p>
                  </div>

                  <div
                    className="h-100 w-100 br0 nen_cam flex flex-column justify-end"
                    onClick={() => {
                      console.log('just clicked!!');
                      _showInfoMentor(item.id);
                    }}
                  >
                    <p className="ph3 white f4 fw6" >{item.name}</p>
                    <p className="ph3 white f6 fw5 mt2 lh-copy" dangerouslySetInnerHTML={{ __html: item.title }}></p>
                    <p className="ph3 white f6 fw5 mt2 mb4 pc-pink-white">
                      View More
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {isShowModal ? (
            <div
              className="dn db-l w-100 bg-black-50 vh-100 fixed top-0 left-0 z-999"
              onClick={() => {
                setActiveMentorId(0);
              }}
            >
              <div className="modal dn flex-l w-60 center br3 bg-pc-red pa4 pc-near-white justify-around ">
                <p
                  className="_btn-close white pointer tr absolute top-1 right-1"
                  onClick={() => {
                    setActiveMentorId(0);
                  }}
                >
                  X
                </p>

                {mentors
                  .filter((item) => item.id === activeMentorId)
                  .map((item) => (
                    <>
                      <div className="w-25 pt3">
                        <img
                          src={`images/${item.image}`}
                          alt=""
                          className="br4 w-100"
                        />
                      </div>
                      <div className="w-60 pr4">
                        <p className="_mentor-name f2 lh-copy">{item.name}</p>
                        <p className="_mentor-title lh-copy" dangerouslySetInnerHTML={{ __html: item.title }}></p>

                        <p
                          className="_mentor-info lh-copy mt3"
                          dangerouslySetInnerHTML={{
                            __html: item.description,
                          }}
                        ></p>
                      </div>
                    </>
                  ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <div className="dn db-l w-100 tc mb5-l" style={{flexDirection: 'column'}}>
        <RedApplyButton />
        <p style={{color: 'black', marginTop: 16}}>*Deadline: {countdown.deadline}</p>
      </div>
    </>
  );
};

const Mentorship = ({ id, title = "GLOBAL AI EXPERT NETWORK" }) => {
  return (
    <>
      <div id={id} />
      <div className="w-70 center ph2 ph4-l f2 fw7 tracked pc-red mv5 mt5-l tc">
        {title}
      </div>
      <MobileMentorShip />
      <DesktopMentorship />
    </>
  );
};

export default Mentorship;
