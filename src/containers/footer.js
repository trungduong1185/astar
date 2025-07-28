import '../css/tachyons.min.css';
import '../css/styles.css';
import { register_link as registerLink } from '../assets/data.json';
import { countdown } from '../assets/data.json';

const Footers = () => (
  <>
    <div className="w-100 center pt3 pb4 ph4 flex justify-between bg-pc-red pc-white mb4 mb0-l items-start">
      <div className="flex items-center justify-center">
        <img src="images/logo_nti_white.png" className="w25" alt="" />

        <div className="flex flex-column  items-center ml1">
          <p className="near-white" style={{ fontSize: '5px' }}>
            Co-organizer
          </p>
          <img src="images/vietai_logo_co.png" alt="" className="w22" />
        </div>
      </div>

      <div className="lh-copy  flex flex-column justify-between items-end">
        <div className="">
          {/* <img src="images/instagram.svg" alt="" className="ml4" />
          <img src="images/twitter.svg" alt="" className="ml4" /> */}
          <a
            href={'https://www.facebook.com/vietaipublic'}
            target="_blank"
            rel="noopener noreferrer"
            className="white pointer"
          >
            <img src="images/fb.svg" alt="" className="ml3" />
          </a>
          <a
            href={'https://www.facebook.com/newturing'}
            target="_blank"
            rel="noopener noreferrer"
            className="white pointer"
          >
            <img src="images/fb.svg" alt="" className="ml3" />
          </a>
        </div>
        <p className="copyright mt3 pc-pink-white">Copyright 2025 @ NTI</p>
      </div>
    </div>
    <div
      className="flex dn-l w-100 btnApply tc  fw7 f5 tracked pointer fixed bottom-0 z-9999"
      style={{flexDirection: 'column', justifyContent: 'center', height: 60, alignItems: 'center'}}
      onClick={() => window.open(registerLink, '_blank')}
    >
      APPLY NOW
      <p style={{color: 'black', fontSize: 12, marginTop: 8, fontWeight: 'normal'}}>*Deadline: {countdown.deadline}</p>
    </div>
  </>
);
export default Footers;
