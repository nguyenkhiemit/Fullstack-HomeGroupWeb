import React, {Component} from 'react';
import './Authen.css'
import {Link} from "react-router-dom";
import {callApi,callApi1} from "../../utils/apiCaller";
import Notifications, {notify} from 'react-notify-toast';
import {NotificationManager} from "react-notifications";
import {Redirect} from "react-router-dom";
import { FacebookProvider, LoginButton } from 'react-facebook';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isLogin: false
        }
    }

    handleChange = (event) => {
        const target = event.target;
        let value = target.value;
        if(target.type === 'file') {
            value = target.files;
        } else if(target.type === 'checkbox') {
            value = target.checked;
        }
        const name = target.name;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        let {email, password} = this.state;
        let params = {
            username: email,
            password: password
        };
        callApi("authen/login", 'POST', params).then(res => {
            console.log(res);
            if(res.data.success === true) {
                NotificationManager.success('Success message', '', 1000, null, true);
                this.setState({
                    isLoading: false,
                    isDisplayAlert: true,
                    messageAlert: 'Đăng nhập thành công',
                    isLogin: true
                });
                let myColor = { background: '#2daa4b', text: "#FFFFFF" };
                notify.show("Đăng ký thành công", "custom", 3000, myColor);
            } else {
                let myColor = { background: '#b9393c', text: "#FFFFFF" };
                notify.show(res.data.msg, "custom", 3000, myColor);
            }
        });
    };

    responseFacebook = (response) => {
        console.log(response.tokenDetail.accessToken);
        callApi('authen/auth/facebook', 'POST', {access_token: response.tokenDetail.accessToken}).then(res => {
            console.log(res)
        });
    };

    handleError = () => {

    };

    render() {
        let {isLogin} = this.state;
        if(isLogin === true) {
            return <Redirect
                to="/main"
            />
        }
        return (
            <div className="col-md-12">
                <div className="container col-md-4 form">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                placeholder="Enter email"
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                                else.
                            </small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                        </div>
                        <button type="submit" className="btn btn-primary login-btn">Login</button>
                        <FacebookProvider appId="480321862375505">
                            <LoginButton
                                className={`btn-fb-login`}
                                scope="email"
                                onCompleted={this.responseFacebook}
                                onError={this.handleError}
                            >
                                <span>Login via Facebook</span>
                            </LoginButton>
                        </FacebookProvider>
                    </form>
                    <p className="register-label">
                        Don't have a account? <Link to="/register" type="button">REGISTER HERE</Link>
                    </p>
                </div>
            </div>
        );
    }
}

export default Login;
