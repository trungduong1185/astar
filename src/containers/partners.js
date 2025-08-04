import '../css/tachyons.min.css';
import '../css/styles.css';

const Partners = () => (
  <>
    <div className="w-100 pv3">
      <div className="container-1400 tc center">
        <p className="_partner-title f2 fw7 tracked pv4 mb2">PARTNERS</p>
        <div className="pv3 flex flex-wrap justify-center items-center list-partner-element">
        
          <a 
            href="https://google.com/" 
            className="partner-element" 
            target="_blank" 
            rel="noreferrer"
            title="Google "
          >
            <img
              alt="Google"
              src="images/partners/google.svg"
              className="accordion featured"
            />
          </a>
          
          
          
          <a 
            href="https://virx.stanford.edu/" 
            className="partner-element" 
            target="_blank" 
            rel="noreferrer"
            title="ViRx@STANFORD - Virus Treatment (Rx)"
          >
            <img
              alt="ViRx@STANFORD - Virus Treatment (Rx)"
              src="images/partners/virx.svg"
              className="accordion featured"
            />
          </a>
          <a 
            href="https://elsaspeak.com/" 
            className="partner-element" 
            target="_blank" 
            rel="noreferrer"
            title="ELSA Speak - English Learning"
          >
            <img
              alt="ELSA Speak - English Learning"
              src="images/partners/elsa.svg"
              className="accordion featured"
            />
          </a>
          <a 
            href="https://vietai.org/" 
            className="partner-element" 
            target="_blank" 
            rel="noreferrer"
            title="VietAI - Vietnamese AI Research Community"
          >
            <img
              alt="VietAI - Vietnamese AI Research Community"
              src="images/partners/vietai.svg"
              className="accordion featured"
            />
          </a>
        </div>
      </div>
    </div>
  </>
);
export default Partners;
