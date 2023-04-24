import React from 'react';
import "./global.css";
import "./index.css";

function LoginPage ()
{
 
  const handleRestorePassClick = () => {
    const popup = document.getElementById('restorePassModalContainer');
    if (!popup) return;
    const popupStyle = popup.style;
    if (popupStyle) {
      popupStyle.display = 'flex';
      popupStyle.zIndex = 100;
      popupStyle.backgroundColor = 'rgba(113, 113, 113, 0.3)';
      popupStyle.alignItems = 'center';
      popupStyle.justifyContent = 'center';
    }
    popup.setAttribute('closable', '');

    const onClick =
      popup.onClick ||
      function (e) {
        if (e.target === popup && popup.hasAttribute('closable')) {
          popupStyle.display = 'none';
        }
      };
    popup.addEventListener('click', onClick);
  };

  const handleScrollAnimElementIntersecting = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        const targetElement = entry.target;
        targetElement.classList.add('animate');
        observer.unobserve(targetElement);
      }
    });
  };

 
  const handleRestorePassClick_close = () => {
    const closeModal = () => {
      const popup = document.getElementById('restorePassModalContainer');
      if (!popup) return;
      popup.removeEventListener('click', onClick);
      popup.style.display = 'none';
    }
    
    const popup = document.getElementById('restorePassModalContainer');
    if (!popup) return;
    
    popup.setAttribute('closable', '');
  
    const onClick =
      popup.onClick ||
      function (e) {
        if (e.target === popup && popup.hasAttribute('closable')) {
          closeModal();
        }
      };
    popup.addEventListener('click',closeModal());
  };

  const observer = new IntersectionObserver(handleScrollAnimElementIntersecting, {
    threshold: 0.15,
  });

  React.useEffect(() => {
    const scrollAnimElements = document.querySelectorAll('[data-animate-on-scroll]');
    scrollAnimElements.forEach((element) => observer.observe(element));
  }, []);

  return (

    <>
  
      <header className="login-page" data-animate-on-scroll>
        <div className="header">
          <img
            className="university-of-isfahan-logo-1-icon"
            alt=""
            src="https://s8.uupload.ir/files/university_of_isfahan-logo_5wep.png"
          />

          <b className="b5">سامانه ارزیابی کارکنان دانشکده مهندسی کامپیوتر</b>
        </div>
        <div className="login">
          <b className="b6">ورود</b>
          <div className="input-field-name">
            <input className="input2" type="text" />

            <div className="name">              
              <b className="b7">نام کاربری</b>
            </div>
          </div>
          <div className="pass">
            <b className="b8" id="text3" onClick={handleRestorePassClick}>فراموشی رمز عبور</b>
            <div className="input-field-pass2">
              <input className="input2" type="text" />

              <div className="name">                
                <b className="b9">رمز عبور</b>
              </div>
            </div>
          </div>
          <div className="robot1">
            <div className="frame2">
              <input className="checkbox1" type="checkbox" defaultChecked={true} />

              <div className="im-not-a1">I'm not a robot</div>
            </div>
            <div className="frame3">
              <img className="logo-icon1" alt="" src="/assets/img/RecaptchaLogo.png" />

              <div className="im-not-a1">Privacy - Terms</div>
            </div>
          </div>
          <button className="signin-button">
            <div className="buttom">ورود</div>
          </button>
        </div>
        <div className="footer">
          <b className="b5"
            >تمامی حقوق استفاده از این سامانه متعلق به دانشگاه اصفهان می‌باشد.</b
          >
        </div>
      </header>

      <div id="restorePassModalContainer" className="popup-overlay" style={{ display: 'none' }}>
        <div className="restore-pass-modal">
          <button className='close-icon' onClick={handleRestorePassClick_close}>
            <img className="vector-icon" alt="" src="/assets/img/close.png" />
          </button>
          <b className="b">بازیابی رمز عبور</b>

          <div className="input-field-pass">
            <input className="input" type="text" />

            <div className="wrapper">              
              <b className="b1">پست الکترونیک</b>
            </div>
          </div>
          
          <b className="b3"
            >رمز عبور موقت به ایمیل شما ارسال شد. لطفا پس از وارد شدن رمز خود را
            تغییر دهید.</b
          >
          <div className="robot1">
            <div className="frame2">
              <input className="checkbox1" type="checkbox" defaultChecked={true} />

              <div className="im-not-a1">I'm not a robot</div>
            </div>
            <div className="frame3">
              <img className="logo-icon1" alt="" src="/assets/img/RecaptchaLogo.png" />

              <div className="im-not-a1">Privacy - Terms</div>
            </div>
          </div>

       
          <button className="signin-button">
            <div className="buttom">بازیابی</div>
          </button>

        
        </div>
      </div>
    </>
  )

}
  


export default LoginPage;
