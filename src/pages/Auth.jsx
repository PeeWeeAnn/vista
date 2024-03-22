import { Link } from 'react-router-dom';
import '@/styles/pages/Auth.scss';

function Auth() {
  return (
      <section className="authorizationSection">
        <div className="authorizationWrapper">
          <div className="authorization">
            <div className="authorizationSignup">
              <Link className="authorizationSignupLink" to="/signup">
                Sign up
              </Link>
            </div>
            <div className="authorizationLogin">
              <Link className="authorizationLoginLink" to="/login">
                Log in
              </Link>
            </div>
          </div>
        </div>
      </section>
  );
}

export default Auth;