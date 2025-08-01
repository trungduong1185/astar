import './styles.css';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import { useState } from 'react';
import { subscribe_link as url } from '../../assets/data.json';

const CustomForm = ({ status, message, onValidated }) => {
  let email, fname;

  const submit = () => {
    return (
      email &&
      fname &&
      email.value.indexOf('@') > -1 &&
      onValidated({
        EMAIL: email.value,
        FNAME: fname.value,
      })
    );
  };
  return (
    <div className="b--light-gray w-100 center shadow-3 pa4 br3 bg-white flex flex-column ">
      <div className="dark-gray f4 b">Subscribe</div>

      <div className="pt3 flex">
        <input
          type="text"
          ref={(node) => (fname = node)}
          className="pv2 ba b--black-20 w-100 ph3"
          placeholder="Your name"
        />
      </div>

      <div className="pt3 flex">
        <input
          ref={(node) => (email = node)}
          type="email"
          className="pv2 ba b--black-20 w-100 ph3"
          placeholder="Your email"
        />
      </div>

      {status === 'sending' && <div className="blue mv2">sending...</div>}
      {status === 'error' && (
        <div
          className="red mv2"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === 'success' && (
        <div
          className="green mv2"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}

      <div
        className="center ba ph4 mt3 pv2 dim pointer bg-green br2 bold white flex dib center"
        onClick={submit}
      >
        Submit
      </div>
    </div>
  );
};

function SubcribeModal() {
  const [isShowModal, setIsShowModal] = useState(false);

  return (
    <>
      {/* modal button */}
      <div
        style={{ bottom: '70px', right: '5px' }}
        className="fixed w25 h25 bg-white br-100 ba b--red items-center justify-center flex z-999 pointer"
        onClick={() => setIsShowModal(true)}
      >
        {/* Email */}
        <img src="images/btnEmail.png" alt="" class="w-100 br-100" />
      </div>

      {isShowModal ? (
        <div className="db w-100 bg-black-50 vh-100 fixed top-0 left-0 z-9999">
          <div className="modal flex w-90 w-30-l center br3">
            <MailchimpSubscribe
              url={url}
              render={({ subscribe, status, message }) => (
                <>
                  <p
                    className="_btn-close pc-red pointer tr absolute top-1 right-1 b"
                    onClick={() => {
                      setIsShowModal(false);
                    }}
                  >
                    X
                  </p>
                  <CustomForm
                    status={status}
                    message={message}
                    onValidated={(formData) => subscribe(formData)}
                  />
                </>
              )}
            />
          </div>
        </div>
      ) : null}
    </>
  );
}

export default SubcribeModal;
