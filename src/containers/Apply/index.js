import '../../css/tachyons.min.css';
import '../../css/styles.css';
import './styles.css';
import { register_link as registerLink } from '../../assets/data.json';
import Countdown from 'react-countdown';
import { countdown } from '../../assets/data.json';
// import ApplyButton from '../../components/ApplyButton';

const HtmlApply = ({ d, h, m, s }) => {
  return (
    <div className="db center w-100 w-60-l bg-pc-red br0 br3-l ph0 ph4-l pv5 pv6-l tc pc-white block-mt-mb">
      <p className="f2 ttu tracked fw7 ph3">Ready to Accelerate Your AI Career?</p>

      <p className="f6 tracked fw3 mt4 ph3">
      Join 100 talented engineers from Vietnam and beyond for a transformative 12-week journey.
      </p>

      <div className="flex w-100 center">
        <div
          id="_mb-group-count-down"
          class="flex justify-center items-end mt4 ba b--white-50 br3 ph3 pv2 center"
        >
          {/* <!--  days --> */}
          <div
            id="_khoi_vuong_1"
            class="flex flex-column justify-center items-center "
          >
            <div class="f6 fw3 db mb2">DAYS</div>
            <div class="khoiVuongApply w3 h3 f25 fw4 flex justify-center items-center">
              {d}
            </div>
          </div>

          <span class="f2 fw6 ph2 mb3">:</span>

          {/* <!--  hours --> */}
          <div
            id="_khoi_vuong_1"
            class="flex flex-column justify-center items-center"
          >
            <div class="f6 fw3 db mb2">HOURS</div>
            <div class="khoiVuongApply w3 h3 f25 fw4 flex justify-center items-center">
              {h}
            </div>
          </div>

          <span class="f2 fw6 ph2 mb3">:</span>

          {/* <!--  minutes --> */}
          <div
            id="_khoi_vuong_1"
            class="flex flex-column justify-center items-center"
          >
            <div class="f6 fw3 db mb2">MINUTES</div>
            <div class="khoiVuongApply w3 h3 f25 fw4 flex justify-center items-center">
              {m}
            </div>
          </div>

          <span class="f2 fw6 ph2 mb3">:</span>

          {/* <!--  seconds --> */}
          <div
            id="_khoi_vuong_1"
            class="flex flex-column justify-center items-center"
          >
            <div class="f6 fw3 db mb2">SECONDS</div>
            <div class="khoiVuongApply w3 h3 f25 fw4 flex justify-center items-center">
              {s}
            </div>
          </div>
        </div>
      </div>
      <div
        className="btnApply dib  ph5 pv3 br3  fw7 f5 pointer dim mt5"
        onClick={() => window.open(registerLink, '_blank')}
      >
        APPLY NOW
      </div>
      <p style={{color: 'white', marginTop: 16}}>*Deadline: {countdown.deadline}</p>
    </div>
  );
};

const MainApply = () => {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    // console.log('s = ', seconds);
    if (completed) {
      return <HtmlApply d={0} h={0} m={0} s={0} />;
    } else {
      return <HtmlApply d={days} h={hours} m={minutes} s={seconds} />;
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
export default MainApply;
