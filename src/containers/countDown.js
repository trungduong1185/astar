import '../css/tachyons.min.css';
import '../css/styles.css';
import Countdown from 'react-countdown';
import { countdown } from '../assets/data.json';
import ApplyButton from '../components/ApplyButton';
// import { register_link as registerLink } from '../assets/data.json';

const HtmlCountDown = ({ d, h, m, s }) => (
  <>
    <div
      id="mobile-count-down"
      className="flex dn-l vh-100 cover white flex-column items-center justify-center bg-center"
      // style={{ backgroundImage: 'url(images/mb_background.png)' }}
      style={{ backgroundImage: 'url(images/bg_nti_ai_bootcamp.png)' }}
    >
      <div id="_mb-group-count-down" className="flex justify-center items-end">
        {/* <!--  days --> */}
        <div
          id="_khoi_vuong_1"
          className="flex flex-column justify-center items-center"
        >
          <div className="f6 fw3 db mb2">DAYS</div>
          <div className="khoiVuong w3 h3 f25 fw4 flex justify-center items-center">
            {d}
          </div>
        </div>

        <span className="f2 fw6 ph2 mb3">:</span>

        {/* <!--  hours --> */}
        <div
          id="_khoi_vuong_1"
          className="flex flex-column justify-center items-center"
        >
          <div className="f6 fw3 db mb2">HOURS</div>
          <div className="khoiVuong w3 h3 f25 fw4 flex justify-center items-center">
            {h}
          </div>
        </div>

        <span className="f2 fw6 ph2 mb3">:</span>

        {/* <!--  minutes --> */}
        <div
          id="_khoi_vuong_1"
          className="flex flex-column justify-center items-center"
        >
          <div className="f6 fw3 db mb2">MINUTES</div>
          <div className="khoiVuong w3 h3 f25 fw4 flex justify-center items-center">
            {m}
          </div>
        </div>

        <span className="f2 fw6 ph2 mb3">:</span>

        {/* <!--  seconds --> */}
        <div
          id="_khoi_vuong_1"
          className="flex flex-column justify-center items-center"
        >
          <div className="f6 fw3 db mb2">SECONDS</div>
          <div className="khoiVuong w3 h3 f25 fw4 flex justify-center items-center">
            {s}
          </div>
        </div>
      </div>

      <p className="tc f2 fw7 center w-90 mt4">
      AStar Bootcamp  
      <br />
                NTI Global Talent Program 2025
      </p>

      <div className="tc pc-info tracked f6 w-90 center lh-title pt4">
        {/* The First AI Bootcamp supported by <b>Global AI Expert Network</b> with
        <br />
        <b>Personalized AI Assessment</b> for{' '}
        <b>Aspiring Startups in Vietnam</b> */}
        Empowering Asia-Pacific AI Leaders for the World.
        <br />
        A 12-week, fully online accelerator that equips emerging AI engineers with cutting-edge technical expertise and leadership skills - culminating in a showcase at the GenAI Summit 2025

      </div>
    </div>

    {/* <!-- desktop countdown --> */}
    <div
      id="desktop-count-down"
      className="dn dn-m flex-l w-100 bg-black-20 vh-100 items-center justify-around cover"
      style={{ backgroundImage: "url('images/bg_nti_ai_bootcamp.webp')", backgroundPosition: 'center' }}
    >
      <div className="flex flex-column relative">
        {/* <img
          src="images/a-star-icon.png"
          alt=""
          className="astar absolute "
        /> */}

        <div className="flex flex-column countdown-title pc-white tracked tc mt4">
          <p className="fw7">AStar Bootcamp</p>
          <p className="fw7">
            NTI Global Talent Program 2025
          </p>
        </div>
        <div className="tc countdown-subdetail tracked center w-70">
          {/* The First AI Bootcamp supported by <b>Global AI Expert Network</b>{' '}
          with
          <br />
          <b>Personalized AI Assessment</b> for{' '}
          <b>Aspiring Startups in Vietnam</b> */}
         Empowering Asia-Pacific AI Leaders for the World.
          <br />
          A 12-week, fully online accelerator that equips emerging AI engineers with cutting-edge technical expertise and leadership skills - culminating in a showcase at the GenAI Summit 2025

        </div>

        <div className="dn flex-ns pv2 justify-center items-center mt4 pc-white-title">
          <div className="khoiVuong flex justify-center items-center flex-column">
            <p className="ttu">DAYS</p>
            <p className="soTo">{d}</p>
          </div>

          <p className="soTo ph3">:</p>
          <div className="khoiVuong flex justify-center items-center flex-column">
            <p className="ttu">HOURS</p>
            <p className="soTo">{h}</p>
          </div>

          <p className="soTo ph3">:</p>
          <div className="khoiVuong flex justify-center items-center flex-column">
            <p className="ttu">MINUTES</p>
            <p className="soTo">{m}</p>
          </div>

          <p className="soTo ph3">:</p>
          <div className="khoiVuong flex justify-center items-center flex-column">
            <p className="ttu">SECONDS</p>
            <p className="soTo">{s}</p>
          </div>
        </div>

        <div className="dn db-l w-100 tc" style={{flexDirection: 'column'}}>
          <ApplyButton />
          <p style={{color: 'white', marginTop: 16}}>*Deadline: {countdown.deadline}</p>
        </div>
      </div>
    </div>
  </>
);

const MainCountDown = () => {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    // console.log('s = ', seconds);
    if (completed) {
      return <HtmlCountDown d={0} h={0} m={0} s={0} />;
    } else {
      return <HtmlCountDown d={days} h={hours} m={minutes} s={seconds} />;
    }
  };

  return (
    <Countdown
      date={countdown.time_to_start}
      intervalDelay={1000}
      precision={3}
      renderer={renderer}
    />
  );
};
export default MainCountDown;
