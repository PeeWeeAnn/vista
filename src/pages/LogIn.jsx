import { Link } from 'react-router-dom';
import '@/styles/pages/LogIn.scss';

function LogIn() {
  return (
      <section className="loginSection">
        <div className="loginWrapper">
          <div className="login">
            <h1 className="loginHeading">
              Log In
            </h1>
            <div className="loginFormWrapper">
              <form className="loginForm" action="">
                <div className="loginFormEmail">
                  <label className="loginFormLabel" htmlFor="loginFormEmail">
                    E-mail
                  </label>
                  <input className="loginFormInput" id="loginFormEmail" type="email"/>
                </div>
                <div className="loginFormPassword">
                  <label className="loginFormLabel" htmlFor="loginFormPassword">
                    Password
                  </label>
                  <input className="loginFormInput" id="loginFormPassword" type="password"/>
                </div>
                <div className="loginFormRemember">
                  <input className="loginFormCheckbox" id="loginFormRemember" type="checkbox"/>
                  <label className="loginFormRememberLabel" htmlFor="loginFormRemember">
                    Remember
                  </label>
                </div>
                <div className="loginFormButton">
                  <input className="loginFormButtonMain" type="submit" value="Log In"/>
                  <div className="loginFormButtonAdditional">
                    <Link className="loginFormButtonAdditionalLink" to="">
                      Forgot your password?
                    </Link>
                    <Link className="loginFormButtonAdditionalLink" to="/signup">
                      Sign Up
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
  );
}

export default LogIn;