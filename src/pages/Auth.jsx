import { Link } from 'react-router-dom';
import '@/styles/pages/Auth.scss';

function Auth() {
  return (
      <section className="authorization-section">
        <div className="authorization-wrapper">
          <div className="authorization">
            <div className="authorization__signup authorization-signup">
              <Link className="authorization-signup__link" to="/signup">
                Sign up
              </Link>
            </div>
            <div className="authorization__login authorization-login">
              <Link className="authorization-login__link" to="/login">
                Log in
              </Link>
            </div>
          </div>
        </div>
      </section>
  );
}

export default Auth;