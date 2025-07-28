import '../../css/tachyons.min.css';
import '../../css/styles.css';
import { useState } from 'react';
import { Link } from 'react-scroll';
import { register_link as registerLink } from '../../assets/data.json';

import { menu } from '../../assets/data.json';

const MenuItem = ({ item, handleOnClick }) => {
  return (
    <Link
      to={item.id}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      className="pv4 plex-sans ttu pointer"
      onClick={handleOnClick}
    >
      {item.name}
    </Link>
  );
};

const DesktopMenuItem = ({ item }) => {
  return (
    <Link
      to={item.id}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      className="ph3 dim pointer ttu f6 fw5"
    >
      {item.name}
    </Link>
  );
};

const Menu = () => {
  const [visibleModal, setVisibleModal] = useState(false);

  const _toggleModal = () => {
    setVisibleModal(!visibleModal);
  };

  return (
    <>
      <div
        id="mobile-menu"
        className="_mobile-menu flex dn-l w-100 shadow-2 ph4 pv2 bg-red justify-between items-center fixed top-0 z-999"
      >
        <div className="flex items-center justify-center  ">
          <a
            href={'https://newturing.ai/'}
            target='_blank' 
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="pointer db"
            rel="noreferrer"
          >
            <img src="images/nti_horizontal_logo.png" alt="" className="h22 db" />
          </a>
          
        
          
        </div>

        <img
          src="images/svg_bars.svg"
          alt=""
          className="pointer w2"
          onClick={_toggleModal}
        />
      </div>

      <div
        id="_modal_mobile_menu"
        style={{ transition: 'all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)' }}
        className={`
        ${visibleModal ? 'flex ' : 'dn '}
        dn-l vh-100 w-100 pc-white bg-pc-red  flex-column justify fixed top-0 z-999`}
      >
        <div className="w-100 flex justify-between pa4 items-center">
          <img src="images/logo_nti_white.png" alt="" className="w22" />
          <div
            className="_btn-close white pointer f4 fw6"
            onClick={_toggleModal}
          >
            X
          </div>
        </div>

        <div className="w-100 flex flex-column self-stretch pa3 mv2 items-center">
          <MenuItem item={menu.about} handleOnClick={_toggleModal} />
          <MenuItem item={menu.timeline} handleOnClick={_toggleModal} />
          <MenuItem item={menu.program} handleOnClick={_toggleModal} />
          <MenuItem item={menu.aiexpertnetwork} handleOnClick={_toggleModal} />
          <MenuItem item={menu.tuitionfee} handleOnClick={_toggleModal} />
          {/* <MenuItem item={menu.qa} handleOnClick={_toggleModal} /> */}
        </div>
      </div>

      <div
        id="desktop-menu"
        className="dn flex-l w-100 bg-red pv2 shadow-2 fixed top-0 z-999"
        // fixed top-0 z-4
      >
        <div className="w-80 center flex justify-between items-center ph3">
          <div className="flex items-center justify-center">
            <a
              href={'https://newturing.ai/'}
              target='_blank' 
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="pointer mr2"
              rel="noreferrer"
            >
              <img src="images/nti_horizontal_logo.png?v=1" alt="" className="h22 db" />
            </a>
            <a href='https://vietai.org/' target='_blank' className="pointer db" rel="noreferrer">
            <img
              src="images/vietai_logo_white.png?v=2"
              alt=""
              className="h2 bl b--black-10"
            />
          </a>
          </div>

          <div className="flex items-center">
            <ul className="flex list fw3 sans-serif pc-dark-white">
              <DesktopMenuItem item={menu.about} />
              <DesktopMenuItem item={menu.timeline} />
              <DesktopMenuItem item={menu.program} />      
              <DesktopMenuItem item={menu.aiexpertnetwork} />
              <DesktopMenuItem item={menu.tuitionfee} />
              {/* <DesktopMenuItem item={menu.qa} /> */}
            </ul>
            {/* <div
              className="bg-pc-red pc-white ml4 ph3 pv2 br2 fw6 f6 pointer dim"
              onClick={() => window.open(registerLink, '_blank')}
            >
              APPLY NOW
            </div> */}
            <div
              className="bg-pc-red pc-white ml4 ph4 pv3 br3 fw6 f5 pointer dim btnApply"
              onClick={() => window.open(registerLink, '_blank')}
            >
              APPLY NOW
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;