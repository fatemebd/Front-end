import React from 'react';
import { useState } from 'react';
import "./index.css";
import Header from "../../components/loginHeader.js";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import { useNavigate } from 'react-router-dom';


function LoginPage () {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [fullName, setFullName] = useState('');
  const [isStaff, setIsStaff] = useState('');
  window.localStorage.setItem('token', null);
  window.localStorage.setItem('fullName', null);
  window.localStorage.setItem('isAuthenticated', false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
 
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

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:8000/accounts/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      if (response.status === 200) {
        const data = await response.json();
        setIsStaff(data.is_staff);
        setToken(data.token);
        window.localStorage.setItem('token', data.token);
        setFullName(data.user_full_name);
        window.localStorage.setItem('fullName', data.user_full_name);
        window.localStorage.setItem('isAuthenticated', true);
        console.log("200");
        console.log(data);
        if (data.is_staff) {
          // If user is staff, go to admin page
          navigate("/ManagerMain");
        } else {
          // If user is not staff, go to user page
          navigate("/UserMain");
        }
      } else {
        alert('Invalid credentials');
        console.log("else");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const observer = new IntersectionObserver(handleScrollAnimElementIntersecting, {
    threshold: 0.15,
  });

  React.useEffect(() => {
    const scrollAnimElements = document.querySelectorAll('[data-animate-on-scroll]');
    scrollAnimElements.forEach((element) => observer.observe(element));
  }, []);

  return (
    <div className='loginPage'>
  
      <header className="login-page" data-animate-on-scroll>
        <Header />
        <div className="login">
          <b className="b6">ورود</b>
          <div className="input-field-name">
            <input value={username} onChange={handleUsernameChange} className="input2" type="text" />
            <div className="name">              
              <p className="b7">نام کاربری</p>
            </div>
          </div>
          <div className="pass">
            <b className="b8" id="text3" onClick={handleRestorePassClick}>فراموشی رمز عبور</b>
            <div className="input-field-pass2">
              <input value={password} onChange={handlePasswordChange} className="input2" type="password" />
              <div className="name">                
                <p className="b9">رمز عبور</p>
              </div>
            </div>
          </div>
          <div className="robot1">
            <div className="frame2">
              <input className="checkbox1" type="checkbox" defaultChecked={false} />

              <div className="im-not-a1">I'm not a robot</div>
            </div>
            <div className="frame3">
              <img className="logo-icon1" alt="" src="/assets/img/RecaptchaLogo.png" />

              <div className="im-not-a1">Privacy - Terms</div>
            </div>
          </div>
          <button onClick={handleLogin} className="signin-button">
            <div className="buttom">ورود</div>
          </button>
        </div>
        <Footer />
      </header>

      <div id="restorePassModalContainer" className="popup-overlay" style={{ display: 'none' }}>
        <div className="restore-pass-modal">
          <div className='close-btn'>
          <button className='close-icon' onClick={handleRestorePassClick_close}>
            <img className="vector-icon" alt="" src="/assets/img/close.png" />
          </button>
          </div>
          
          <b className="b">بازیابی رمز عبور</b>

          <div className="input-field-pass">
            <input className="input" type="text" />

            <div className="wrapper">              
              <p className="b1">پست الکترونیک</p>
            </div>
          </div>
          
          <b className="b3">
            رمز عبور موقت به ایمیل شما ارسال شد. لطفا پس از وارد شدن رمز خود را تغییر دهید.
          </b>
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
    </div>
  )

}
  


export default LoginPage;
