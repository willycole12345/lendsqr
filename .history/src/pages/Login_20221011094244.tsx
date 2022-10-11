import { useState } from 'react';
import Logo from '../images/Group.png';
import Banner from '../images/pablo-sign-in.png';
import Welcome from '../images/Welcome.png';
import '../styles/Custom.css';
import '../styles/General.css';

function Login() {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <div className="md-4">
                            <div className="signin_logo">
                                <img src={Logo} alt="logo" />
                            </div>
                            <div className="banner">
                                <img src={Banner} alt="bannee" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <form action="">
                            <div className="header_title">
                                <img src={Welcome} alt="welcome" />
                                <p> Enter details to login.</p>
                                <div className="input_holder">
                                    <input type="email" placeholder="Email" className="input_style" />
                                </div>
                                <div>
                                    <input type={passwordShown ? 'text' : 'password'} placeholder="Password" className="input_style" />
                                    <span className="eyes" onClick={togglePassword}>
                                        SHOW
                                    </span>
                                </div>
                                <div className="password_forget">
                                    <span className="forget_pass">forget password ?</span>
                                </div>
                                <button className="btn btn-success butt-style"> Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
