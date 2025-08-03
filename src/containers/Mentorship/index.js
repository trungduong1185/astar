import '../../css/tachyons.min.css';
import '../../css/styles.css';
import { groups } from '../../assets/data.json';
import { useEffect, useState } from 'react';
import './styles.css';
import { RedApplyButton } from '../../components/ApplyButton';
import { countdown } from '../../assets/data.json';



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

  // Toggle body scroll when modal is open
  useEffect(() => {
    if (isShowModal) {
      // Lưu vị trí scroll hiện tại
      const scrollY = window.scrollY;
      document.body.classList.add('modal-open');
      // Giữ nguyên vị trí scroll
      document.body.style.top = `-${scrollY}px`;
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      // Khôi phục vị trí scroll
      const scrollY = document.body.style.top;
      document.body.classList.remove('modal-open');
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      // Khôi phục vị trí scroll chính xác
      if (scrollY) {
        const scrollPosition = parseInt(scrollY.replace('px', '')) * -1;
        window.scrollTo(0, scrollPosition);
      }
    }

    // Cleanup on unmount
    return () => {
      const scrollY = document.body.style.top;
      document.body.classList.remove('modal-open');
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      // Khôi phục vị trí scroll khi cleanup
      if (scrollY) {
        const scrollPosition = parseInt(scrollY.replace('px', '')) * -1;
        window.scrollTo(0, scrollPosition);
      }
    };
  }, [isShowModal]);

  const _showInfoMentor = (id) => {
    setActiveMentorId(activeMentorId === id ? 0 : id);
  };

  return (
    <>
      <div
        id="desktop-mentorship"
        className=" flex-l flex-column center br3 ph3 white"
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

        <div className="container center mb4">
          {/*<p className="_title f2 fw4 lh-copy tracked tl pc-white">
            {groups[selectGroupId].title}
          </p>
          <p className="mt3 f6 fw3 tracked tl pc-white lh-copy pc-pink-white">
            {groups[selectGroupId].description}
          </p>*/}
          <div className="mentorship-grid mt0">
            {mentors.map((item) => (
              <div 
                key={item.id}
                className="pv0 item-speakers cursor-pointer"
                onClick={() => _showInfoMentor(item.id)}
              >
                <div className="item-speakers">
                  <div className='speaker-left'>
                    <img
                      src={'images/' + item.image}
                      alt=""
                      className="br0 mv0 pv0"
                      style={{objectFit: 'cover'}}
                    />
                  </div>
                  
                  <div className='speaker-right'>
                    <div className="flex flex-column justify-end">
                      <p className="mentors-name" >{item.name}</p>
                      <p className="f6 fw5 mt2 lh-copy" dangerouslySetInnerHTML={{ __html: item.title }}></p>                    
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {isShowModal ? (
            <div
              className="block-modal-main"
              onClick={() => {
                setActiveMentorId(0);
              }}
            >
              <div 
                className="modal flex-l center modal-background-mentorship pc-near-white"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <p
                  className="_btn-close white pointer tr absolute top-1 right-1"
                  onClick={() => {
                    setActiveMentorId(0);
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.1033 15.7097C17.2882 15.8947 17.3921 16.1455 17.3921 16.407C17.3921 16.6685 17.2882 16.9193 17.1033 17.1043C16.9183 17.2892 16.6675 17.3931 16.406 17.3931C16.1445 17.3931 15.8937 17.2892 15.7087 17.1043L10.5006 11.8945L5.29077 17.1026C5.10584 17.2876 4.85503 17.3914 4.5935 17.3914C4.33198 17.3914 4.08117 17.2876 3.89624 17.1026C3.71131 16.9177 3.60742 16.6669 3.60742 16.4054C3.60742 16.1438 3.71131 15.893 3.89624 15.7081L9.10604 10.4999L3.89788 5.29013C3.71295 5.1052 3.60906 4.85439 3.60906 4.59286C3.60906 4.33133 3.71295 4.08052 3.89788 3.89559C4.08281 3.71067 4.33362 3.60678 4.59514 3.60678C4.85667 3.60678 5.10748 3.71067 5.29241 3.89559L10.5006 9.1054L15.7104 3.89477C15.8953 3.70985 16.1461 3.60596 16.4076 3.60596C16.6692 3.60596 16.92 3.70985 17.1049 3.89477C17.2898 4.0797 17.3937 4.33051 17.3937 4.59204C17.3937 4.85356 17.2898 5.10438 17.1049 5.28931L11.8951 10.4999L17.1033 15.7097Z" fill="#211F26"/>
</svg>

                </p>

                {mentors
                  .filter((item) => item.id === activeMentorId)
                  .map((item) => (
                    <div key={item.id} className="w-100">
                      {/* Top Section - Profile Summary */}
                      <div className="profile-header">
                        {/* Profile Picture */}
                        <div className="w-25 mr4">
                          <img
                            src={`images/${item.image}`}
                            alt={item.name}
                            className="profile-img"
                            style={{objectFit: 'cover'}}
                          />
                        </div>
                        
                        {/* Profile Info */}
                        <div className="profile-name-popup">
                          <h3 className="profile-name-title">{item.name}</h3>
                          <p className="profile-po-title" dangerouslySetInnerHTML={{ __html: item.title }}></p>
                        </div>
                      </div>

                      {/* Separator */}
                      <div className="w-100 bb b--light-gray mb1"></div>

                      {/* Bottom Section - Biography */}
                      <div className="profile-detail">
                        <p className="profile-about font-body" dangerouslySetInnerHTML={{ __html: item.description }}></p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <div className="w-100 tc cta-apply-mentorship" style={{flexDirection: 'column'}}>
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
      <div className="center ph2 ph4-l fw7 tracked pc-red  tc title-header-mentorship">
        {title}
      </div>
      <DesktopMentorship />
    </>
  );
};

export default Mentorship;
