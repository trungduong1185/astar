import '../css/tachyons.min.css';
import '../css/styles.css';

const Partners = () => (
  <>
    <div className="w-100 bg-near-white pv3 mt5">
      <div className="container-1400 tc center">
        <p className="_partner-title f2 fw7 tracked pc-red pv4">PARTNERS</p>
        <div className="pv3 flex flex-wrap justify-around items-center">
          {/* <img
            alt=""
            src="images/p_vietai.png"
            className="w-50 w-30-m w-10-l mv3"
          /> */}
          <img
            alt=""
            src="images/p_do.png"
            className="w-40 w-30-m w-10-l mv3"
          />
          <img
            alt=""
            src="images/p_fpt.png"
            className="w-40 w-30-m w-10-l mv3"
          />
          {/*<img
            alt=""
            src="images/p_viisa.png"
            className="w-40 w-30-m w-10-l mv3"
          />
           <img
            alt=""
            src="images/svg_logo2.svg"
            className="w-40 w-30-m w-10-l mv3"
          />
          <img
            alt=""
            src="images/svg_logo3.svg"
            className="w-40 w-30-m w-10-l mv3"
          /> */}
        </div>
      </div>
    </div>
  </>
);
export default Partners;
