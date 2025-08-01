import '../../css/tachyons.min.css';
import '../../css/styles.css';
import { processes } from '../../assets/data.json';
import { useState } from 'react';

const MobileProcess = () => {
  const [selectProcessId, setSelectProcessId] = useState(0);
  const [toggleCombobox, setToggleCombobox] = useState(false);

  return (
    <div class="db dn-l w-100 bg-pc-white pb4 pt5">
      <p class="ph5 tc f2 fw7 pc-red tracked">SELECTION PROCESS</p>

      <div
        onClick={() => setToggleCombobox(!toggleCombobox)}
        class="w-80 center flex justify-between mt4 pa3 br3 ba b--black-20 pointer lh-copy ttu items-start bg-white"
      >
        <p
          class="pc-red f5 fw7 ttu tracked "
          style={{
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {selectProcessId + 1} - {processes[selectProcessId].title}
        </p>
        <img
          src="images/svg_arrow_down.svg"
          alt=""
          class="w15 ml2  mt2"
        />
      </div>

      {/* <!-- selection control --> */}
      {toggleCombobox === true ? (
        <div className="absolute">
          <div
            onClick={() => {
              setToggleCombobox(!toggleCombobox);
              setSelectProcessId(0);
            }}
            class="w-80 center bg-white flex justify-between mt3 pa3 br3 ba br--top b--black-20 pointer lh-copy ttu items-center"
          >
            <p class="pc-red f5 fw7 ttu tracked">1 - Registration</p>
          </div>

          <div
            onClick={() => {
              setToggleCombobox(!toggleCombobox);
              setSelectProcessId(1);
            }}
            class="w-80 center bg-white flex justify-between pa3 ba b--black-20 pointer lh-copy ttu items-center"
          >
            <p class="pc-red f5 fw7 ttu tracked">2 - Screening</p>
          </div>
          <div
            onClick={() => {
              setToggleCombobox(!toggleCombobox);
              setSelectProcessId(2);
            }}
            class="w-80 center bg-white flex justify-between pa3 ba b--black-20 pointer lh-copy ttu items-center"
          >
            <p class="pc-red f5 fw7 ttu tracked">3 - Interview</p>
          </div>
          <div
            onClick={() => {
              setToggleCombobox(!toggleCombobox);
              setSelectProcessId(3);
            }}
            class="w-80 center bg-white flex justify-between mt0 pa3 br3 ba br--bottom b--black-20 pointer lh-copy ttu items-center"
          >
            <p class="pc-red f5 fw7 ttu tracked">
              4 - Final companies confirmed
            </p>
          </div>
        </div>
      ) : null}

      {/* <!-- process content --> */}
      <p className="w-80 center pc-green mt3 f6 fw4 lh-copy">
        {processes[selectProcessId].date}
      </p>
      <div
        class="w-80 center pc-light-black f6 lh-copy tracked mt3"
        dangerouslySetInnerHTML={{
          __html: processes[selectProcessId].description,
        }}
      ></div>
    </div>
  );
};

const Process = ({ id }) => {
  const [selectProcessId, setSelectProcessId] = useState(0);

  return (
    <>
      {/* mobile */}
      <div id={id} />
      <MobileProcess />

      {/* desktop */}
      <div className="dn db-l w-100 pt4 pb6 relative mt7-l">
        <div className="_nen_do absolute bg-pc-red white w-40 right-0 tc h-100 top-0 z-0 br4 br--left"></div>

        <div className="w-70 center">
          <p className="ph5  pc-red f2 fw7 tracked">SELECTION PROCESS</p>
        </div>

        <div className="w-70 pt4 mt4 bg-pc-medium-gray br4 z-5 center relative flex justify-around">
          {/* <!-- cot 1 muc luc --> */}
          <div className="w-40 ph4 pb5 flex flex-column">
            {processes.map((item, index) => {
              return selectProcessId === index ? (
                <div className="w-100 _active_item pointer flex items-center mt5 justify-between ">
                  <div className="flex w-70">
                    <div className="w2 h2 br-100 bg-white ba b--black-50 flex items-center justify-center">
                      {index + 1}
                    </div>
                    <div className="ph3">
                      <p className="pc-green f6 fw4 lh-copy">{item.date}</p>
                      <p className="pc-dark-gray lh-copy f5 fw7 tracked">
                        {item.title}
                      </p>
                    </div>
                  </div>
                  <div className="bg-gray w4 bt bw1 b--pc-gray"></div>
                </div>
              ) : (
                <div
                  className="w-100   pointer flex items-center mt5 justify-between  "
                  onClick={() => setSelectProcessId(index)}
                >
                  <div className="flex w-70">
                    <div className="w2 h2 br-100 bg-white ba b--black-50 flex items-center justify-center">
                      {index + 1}
                    </div>
                    <div className="ph3">
                      <p className="pc-light-gray f6 fw4 lh-copy">
                        {item.date}
                      </p>
                      <p className="pc-light-gray lh-copy f5 fw7 tracked">
                        {item.title}
                      </p>
                    </div>
                  </div>
                  {/* <div className="bg-gray w5  bt bw1 b--pc-gray"></div> */}
                </div>
              );
            })}
          </div>

          {/* <!-- cot 2 noi dung --> */}
          <div className="w-50 pv4 pr4">
            <p className="f3 fw7 tracked lh-copy">
              {processes[selectProcessId].title}
            </p>
            <p
              className="f5 fw5 tracked lh-copy pc-gray mt3"
              dangerouslySetInnerHTML={{
                __html: processes[selectProcessId].description,
              }}
            ></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Process;
