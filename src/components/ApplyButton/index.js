import '../../css/tachyons.min.css';
import '../../css/styles.css';
import './styles.css';
import { register_link as registerLink } from '../../assets/data.json';

const ApplyButton = () => {
  return (
    <div
      className="btnApply dib  ph6 pv3 br3  fw7 f4 pointer dim mt4"
      onClick={() => window.open(registerLink, '_blank')}
    >
      APPLY NOW
    </div>
  );
};

const RedApplyButton = () => {
  return (
    <div
      className="bg-pc-red  pc-near-white dib  ph6 pv3 br3  fw7 f4 pointer dim "
      onClick={() => window.open(registerLink, '_blank')}
    >
      APPLY NOW
    </div>
  );
};

export { RedApplyButton };

export default ApplyButton;
