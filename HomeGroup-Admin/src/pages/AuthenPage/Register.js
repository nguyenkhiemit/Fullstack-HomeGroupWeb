import React, {Component} from 'react';
import './Authen.css'
import {callApi} from "../../utils/apiCaller";
import Notifications, {notify} from 'react-notify-toast';
import {NotificationManager} from "react-notifications";
import {Redirect} from "react-router-dom";

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            rePassword: '',
            idLogin: false
        };
        this.show = notify.createShowQueue();
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
        let {email, password, rePassword} = this.state;
        if(password !== rePassword) {
            console.log('password and re-type password must same');
            let myColor = { background: '#b9393c', text: "#FFFFFF" };
            notify.show("Password và retype password phải giống nhau!", "custom", 3000, myColor);
            return;
        }
        let params = {
            email: email,
            password: password
        };
        this.setState({
            isLoading: true
        });
        callApi("authen/signup", 'POST', params).then(res => {
            console.log(res);
            if(res.data.success === true) {
                this.setState({
                    isLoading: false,
                    isDisplayAlert: true,
                    messageAlert: 'Đăng ký thành công'
                });
                let myColor = { background: '#2daa4b', text: "#FFFFFF" };
                notify.show("Đăng ký thành công", "custom", 3000, myColor);
                this.login(email, password);
            } else {
                let myColor = { background: '#b9393c', text: "#FFFFFF" };
                notify.show(res.data.msg, "custom", 3000, myColor);
            }
        });
    };

    login(email, password) {
        let params = {
            email: email,
            password: password
        };
        callApi("authen/authenticate", 'POST', params).then(res => {
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
    }

    render() {
        let {email, password, rePassword, isLogin} = this.state;
        if(isLogin === true) {
            return <Redirect
                to="/main"
            />
        }
        return (
            <div className="container col-md-4 form">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label For="exampleInputEmail1">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                        />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                            else.
                        </small>
                    </div>
                    <div className="form-group">
                        <label For="exampleInputPassword1">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            name="password"
                            value={password}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label For="exampleInputPassword1">Re-type password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Re-type password"
                            name="rePassword"
                            value={rePassword}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-warning">Register</button>
                </form>
                <Notifications options={{zIndex: 200, top: '0px'}}/>
            </div>
        );
    }
}

export default Register;
