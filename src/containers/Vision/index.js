import '../../css/tachyons.min.css';
import '../../css/styles.css';
import './styles.css';
import { vision } from '../../assets/data.json';

const Vision = ({ id }) => (
  <div id={id} className="flex flex-column w-100 pt3 tc block-pt-pb bg-program">
    {/* <p className="pc-green f4 ttu tracked-mega fw7 mt4 mt5-l">VISION</p> */}

          <p className="center f3 f2-l fw7 pc-red ttu tracked-l ph3">
      {vision.title}
    </p>

          <div className="container-1400 vision-grid center mt3 mt4-l">
      <div className="vision-item flex flex-column items-center ph4">
        <div className="flex flex-column items-center">
          <img src="images/vision_1.svg" alt="" className="pt4" />
          <p
            className="pt4 f4 fw7 pc-red"
            dangerouslySetInnerHTML={{ __html: vision.col_1.title }}
          />
        </div>
        <p className="pt4 f5 f5-l fw5 pc-dark-gray tracked-l lh-copy tc">
          {vision.col_1.content}
        </p>
      </div>

      <div className="vision-item flex flex-column items-center ph4">
        <div className="flex flex-column items-center">
          <img src="images/vision_2.svg" alt="" className="pt4" />
          <p
            className="pt4 f4 fw7 pc-red"
            dangerouslySetInnerHTML={{ __html: vision.col_2.title }}
          />
        </div>

        <p className="pt4 f5 f5-l fw5 pc-dark-gray tracked-l lh-copy tc">
          {vision.col_2.content}
        </p>
      </div>

      <div className="vision-item flex flex-column items-center ph4">
        <div className="flex flex-column items-center">
          <img src="images/vision_3.svg" alt="" className="pt4" />
          <p
            className="pt4 f4 fw7 pc-red"
            dangerouslySetInnerHTML={{ __html: vision.col_3.title }}
          />
        </div>
        <p className="pt4 f5 f5-l fw5 pc-dark-gray tracked-l lh-copy tc">
          {vision.col_3.content}
        </p>
      </div>
      <div className="vision-item flex flex-column items-center ph4">
        <div className="flex flex-column items-center">
          <img src="images/vision_4.svg" alt="" className="pt4" />
          <p
            className="pt4 f4 fw7 pc-red"
            dangerouslySetInnerHTML={{ __html: vision.col_4.title }}
          />
        </div>
        <p className="pt4 f5 f5-l fw5 pc-dark-gray tracked-l lh-copy tc">
          {vision.col_4.content}
        </p>
      </div>
      <div className="vision-item flex flex-column items-center ph4">
        <div className="flex flex-column items-center">
          <img src="images/vision_5.svg" alt="" className="pt4" />
          <p
            className="pt4 f4 fw7 pc-red"
            dangerouslySetInnerHTML={{ __html: vision.col_5.title }}
          />
        </div>
        <p className="pt4 f5 f5-l fw5 pc-dark-gray tracked-l lh-copy tc">
          {vision.col_5.content}
        </p>
      </div>
      <div className="vision-item flex flex-column items-center ph4">
        <div className="flex flex-column items-center">
          <img src="images/vision_6.svg" alt="" className="pt4" />
          <p
            className="pt4 f4 fw7 pc-red"
            dangerouslySetInnerHTML={{ __html: vision.col_6.title }}
          />
        </div>
        <p className="pt4 f5 f5-l fw5 pc-dark-gray tracked-l lh-copy tc">
          {vision.col_6.content}
        </p>
      </div>
    </div>
  </div>
);

export default Vision;
