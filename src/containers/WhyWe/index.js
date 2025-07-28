import '../../css/tachyons.min.css';
import '../../css/styles.css';
import { why_we as whyWe } from '../../assets/data.json';
import { RedApplyButton } from '../../components/ApplyButton';
import { countdown } from '../../assets/data.json';

const WhyWe = ({ id }) => (
  // dangerouslySetInnerHTML={{ __html: item.answer }}
  <>
    <div id={id} className="flex flex-column w-100 pt4 tc mt4">
      <p className="container-1400 center f3 f2-l fw7 pc-red ttu tracked-l mt5-l ph3">
        {whyWe.title}
      </p>

      <div className="container-1400 flex flex-column flex-row-l center mt3 mt4-l">
        <div className="w-100 w-third-l pa3 flex flex-column items-center ph4 justify-start">
          <div className="flex flex-column items-center">
            <img src="images/svg_pc.svg" alt="" className="pt4" />
            <p
              className="pt4 f4 fw7 pc-red"
              dangerouslySetInnerHTML={{ __html: whyWe.col_1.title }}
            />
          </div>
          <p
            // className="pt4 f5 poppins tracked pc-dark-gray lh-copy tc"
            className="pt4 f5 f5-l fw5 pc-dark-gray tracked-l lh-copy tc"
            dangerouslySetInnerHTML={{ __html: whyWe.col_1.content }}
          />
        </div>

        <div className="w-100 w-third-l pa3 flex flex-column items-center ph4 justify-start">
          <div className="flex flex-column items-center">
            <img src="images/svg_earth.svg" alt="" className="pt4" />
            <p
              className="pt4 f4 fw7 pc-red"
              dangerouslySetInnerHTML={{ __html: whyWe.col_2.title }}
            />
          </div>

          <p
            className="pt4 f5 f5-l fw5 pc-dark-gray tracked-l lh-copy tc"
            dangerouslySetInnerHTML={{ __html: whyWe.col_2.content }}
          />
        </div>

        <div className="w-100 w-third-l pa3 flex flex-column items-center ph4 justify-start">
          <div className="flex flex-column items-center">
            <img src="images/svg_notebook.svg" alt="" className="pt4" />
            <p
              className="pt4 f4 fw7 pc-red"
              dangerouslySetInnerHTML={{ __html: whyWe.col_3.title }}
            />
          </div>
          <p
            className="pt4 f5 f5-l fw5 pc-dark-gray tracked-l lh-copy tc"
            dangerouslySetInnerHTML={{ __html: whyWe.col_3.content }}
          />
        </div>
      </div>
    </div>
    <div className="dn db-l w-100 tc" style={{flexDirection: 'column'}}>
      <RedApplyButton />
      <p style={{color: 'black', marginTop: 16}}>*Deadline: {countdown.deadline}</p>
    </div>
  </>
);

export default WhyWe;
