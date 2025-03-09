import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import paydLogo from './Payd.png';
import googleIcon from './google-icon.png';
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { signInWithGoogle } from './main'

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        
        axios.post('http://localhost:8081/login_test1', {username, password})
        .then(res=> {

            if(res.data === "Login Successful") {

                navigate('/dashboard');
            } else {
                alert('Login Failed')
            }
        })
        .catch(err=> console.log(err));
    }

    const handleGoogleSignIn = (event) => {
        event.preventDefault();
        signInWithGoogle()
            .then(user => {
                console.log('User signed in via Google: ', user);
                navigate('/dashboard');
            })
            .catch(error => {
                alert('Google sign-in failed: ' + error.message);
            })
    };

    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="row border rounded-5 p-3 bg-white shadow box-area">
                <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box" style={{ background: "#e8f48c" }}>
                    <div className="featured-image mb-3">
                        <img src={paydLogo} className="img-fluid" style={{ width: "250px" }} alt="Payd Logo" />
                    </div>
                    <p style={{ fontFamily: "'Courier New', Courier, monospace", fontWeight: 700 }}>Welcome to Payd</p>
                </div>
                <div className="col-md-6 right-box">
                    <form onSubmit={handleSubmit}>
                        <div className="row align-items-center">
                            <div className="header-text mb-4">
                                <h2>Hello, Again!</h2>
                                <p>We are happy to have you back!</p>
                            </div>

                            <div className="input-group mb-3">
                                <input type="text" className="form-control form-control-lg bg-light fs-6" placeholder="Username" onChange={e => setUsername(e.target.value)} />
                            </div>

                            <div className="input-group mb-1">
                                <input type="password" className="form-control form-control-lg bg-light fs-6" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                            </div>

                            <div className="input-group mb-5 d-flex justify-content-between">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="form-check" />
                                    <label htmlFor="form-check" className="form-check-label text-secondary"><small>Remember Me</small></label>
                                </div>

                                <div className="forgot">
                                    <small><a href="#">Forgot Password?</a></small>
                                </div>
                            </div>

                            <div className="input-group mb-3">
                                <button type="submit" className="btn btn-lg btn-primary w-100 fs-6">Login</button>
                            </div>

                            <div className="input-group mb-3">
                                <button
                                    type="button"
                                    className="btn btn-lg btn-light w-100 fs-6"
                                    onClick={handleGoogleSignIn} // Use the Google login function here
                                >
                                    <img src={googleIcon} style={{ width: "20px" }} className="me-2" alt="Google Icon" />
                                    <small>Sign In with Google</small>
                                </button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div >
    );
}

export default Login;
