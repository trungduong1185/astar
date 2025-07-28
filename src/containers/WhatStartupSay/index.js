import '../../css/tachyons.min.css';
import '../../css/styles.css';
import { what_startup_say as whatStartupSay } from '../../assets/data.json';


const MobileWhatStartupSay = () => {

  return (
    <div class="db dn-l w-100 pb4 pt5">
      <p class="ph5 tc f2 fw7 pc-red tracked">{whatStartupSay.title}</p>

      <div className="w-80 flex flex-column flex-row-l center mt6 mt4-l" style={{gap: 86}}>
        <Feedback data={whatStartupSay.col_1}/>
        <Feedback data={whatStartupSay.col_2}/>
        <Feedback data={whatStartupSay.col_3}/>
      </div>
    </div>
  );
};

const WhatStartupSay = ({ id }) => (
  // dangerouslySetInnerHTML={{ __html: item.answer }}
  <>
    <MobileWhatStartupSay />
    <div className="dn db-l w-100 pt4 pb6 relative mt5-l  mb5-l">
      <div className="_nen_do absolute bg-pc-red white w-40 right-0 tc h-100 top-0 z-0 br4 br--left"></div>

      <div className=" w-container  center">
        <p className="ph4-l mb5 pc-red f2 fw7 tracked" style={{ whiteSpace: 'pre-line' }}>{whatStartupSay.title}</p>
      </div>

      <div className="w-container  center pt4 mt5 z-5 center relative flex justify-around" style={{gap: 16}}>
        <Feedback data={whatStartupSay.col_1}/>
        <Feedback data={whatStartupSay.col_2}/>
        <Feedback data={whatStartupSay.col_3}/>
      </div>
    </div>
  </>
);

const Feedback = ({data}) => {
  const { title, desc, content, image } = data;
  return (
    <div className="bg-pc-medium-gray br4 feedback w-100 w-third-l pa3 flex flex-column items-center ph4 justify-between">
      <div>
      <div className='avatar'>
        <img src={image} alt="" />
      </div>
      <p
        className="pt5 f5 f5-l fw5 pc-dark-gray tracked-l lh-copy tc"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      </div>
      <div className="flex flex-column items-center">
        <p className="pt4 fw4 pc-gray">Startup #1st batch</p>
        <p
          className="pt2 f4 fw7 pc-red"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p
          className="pt2 fw7 pc-gray"
          dangerouslySetInnerHTML={{ __html: desc }}
        />
      </div>
    </div>
  )
}

export default WhatStartupSay;
