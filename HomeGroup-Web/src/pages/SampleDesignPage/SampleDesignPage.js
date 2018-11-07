import React, {Component} from 'react';
import './SampleDesignPage.css';
import store150 from '../../image/store/store-150x150.jpg';
import store300 from '../../image/store/store-300x300.jpg';
import store600 from '../../image/store/store-600x600.jpg';
import store1024 from '../../image/store/store-1024x1024.jpg';

import clientRoom100 from '../../image/client-room/client-room-100.jpg';
import clientRoom150 from '../../image/client-room/client-room-150.jpg';
import clientRoom300 from '../../image/client-room/client-room-300.jpg';
import clientRoom600 from '../../image/client-room/client-room-600.jpg';
import clientRoom1024 from '../../image/client-room/client-room-1024.jpg';

import childrenRoom100 from '../../image/children-room/children-room-100.png';
import childrenRoom150 from '../../image/children-room/children-room-150.png';
import childrenRoom300 from '../../image/children-room/children-room-300.png';
import childrenRoom600 from '../../image/children-room/children-room-600.png';
import childrenRoom1024 from '../../image/children-room/children-room-1024.png';

import master100 from '../../image/master/master100.jpg';
import master150 from '../../image/master/master150.jpg';
import master300 from '../../image/master/master300.jpg';
import master600 from '../../image/master/master600.jpg';
import master1024 from '../../image/master/master1024.jpg';

import {callApi, getApi} from "../../utils/apiCaller";
import CommentItem from "../../components/CommentItem/CommentItem";

import {Comment} from '../../models/Comment';
import { FacebookProvider, LoginButton } from 'react-facebook';

class SampleDesignPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comment: null,
            listComment: [],
            isLoginFB: false
        }
    }

    componentDidMount() {
        let user =  JSON.parse(localStorage.getItem('data'));
        if(user !== null) {
            this.setState({
                isLoginFB: true
            });
        }
        this.getListComment();
    }

    handleChange = (event) => {
        let user =  JSON.parse(localStorage.getItem('data'));
        const target = event.target;
        let value = target.value;
        const name = target.name;
        if(name === 'comment') {
            let comment = new Comment(user.profile.name, user.profile.email, value);
            this.setState({
                comment: comment
            });
        }
    };

    getListComment = () => {
        getApi('comment/', 'GET', null, null).then(res => {
            console.log(res);
            this.setState({
                listComment: res.data.data
            })
        });
    };

    handleSummit = (event) => {
        event.preventDefault();
        let params = {
            name: this.state.comment.name,
            email: this.state.comment.email,
            content: this.state.comment.content
        };
        callApi('comment/post', 'POST', params, null).then(res => {
            console.log(res.data);
            if(res.data.success) {
                this.addNewComment(res.data.data);
                this.setState({
                    comment: null
                })
            }
        });
    };

    addNewComment(comment) {
        let {listComment} = this.state;
        listComment.push(comment);
        this.setState({
            listComment: listComment
        })
    }

    responseFacebook = (response) => {
        console.log(response);
        this.setState({
            isLoginFB: true
        });
        localStorage.setItem('data', JSON.stringify(response));
    };

    handleError = () => {

    };

    showComments(listComment) {
        let result = null;
        if (listComment.length > 0) {
            console.log(listComment);
            result = listComment.map((comment, index) => {
                return (
                    <CommentItem
                        comment={comment}
                        key={index}
                    />
                );
            });
        }
        return result;
    }

    render() {
        let {comment, listComment} = this.state;
        return (
            <div className="sample">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <p><strong>Bếp</strong></p>
                            <a href="https://home-group.vn/bep.html">
                                <img
                                    src={store300}
                                    className="sample-img image wp-image-5021 attachment-medium size-medium" alt=""
                                    srcSet={`${store300} 300w,
                                     ${store150} 150w,
                                     ${store1024} 1024w,
                                     ${store600} 600w`}
                                    sizes="(max-width: 300px) 100vw, 300px" width="300" height="300"/>
                            </a>
                        </div>
                        <div className="col-md-3">
                            <p><strong>Phòng khách</strong></p>
                            <a href="https://home-group.vn/bep.html">
                                <img
                                    src={clientRoom300}
                                    className="image wp-image-6786  attachment-large size-large" alt=""
                                    srcSet={`${clientRoom1024} 1024w,
                                    ${clientRoom300} 300w,
                                    ${clientRoom100} 100w,
                                    ${clientRoom150} 150w,
                                    ${clientRoom600} 600w`}
                                    sizes="(max-width: 1024px) 100vw, 1024px" width="1024" height="1024"/>
                            </a>
                        </div>
                        <div className="col-md-3">
                            <p><strong>Phòng Ngủ trẻ em</strong></p>
                            <a href="https://home-group.vn/bep.html">
                                <img
                                    src="https://home-group.vn/wp-content/uploads/2018/08/phong-ngu-tre-em-6-1024x1024.png"
                                    className="image wp-image-6921  attachment-large size-large"
                                    srcSet={`${childrenRoom1024} 1024w,
                                     ${childrenRoom300} 300w,
                                     ${childrenRoom100} 100w,
                                     ${childrenRoom150} 150w,
                                     ${childrenRoom600} 600w`}
                                    sizes="(max-width: 1024px) 100vw, 1024px" width="1024" height="1024"/>
                            </a>
                        </div>
                        <div className="col-md-3">
                            <p><strong>Phòng Ngủ Master</strong></p>
                            <a href="https://home-group.vn/bep.html">
                                <img
                                    src="https://home-group.vn/wp-content/uploads/2018/05/PHONG-NGU-02_View02-1-18-1024x1024.jpg"
                                    className="image wp-image-6189  attachment-large size-large" alt=""
                                    srcSet={`${master1024} 1024w,
                                     ${master300} 300w,
                                     ${master100} 100w,
                                     ${master150} 150w,
                                     ${master600} 600w`}
                                    sizes="(max-width: 1024px) 100vw, 1024px" width="1024" height="1024"/>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="message-view">
                            <p className="count-message">{listComment.length} bình luận</p>
                        </div>
                        <p className="sample-divider"/>
                        <div className="box-message">
                            <form onSubmit={this.handleSummit} method="POST">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Thêm bình luận"
                                        name="comment"
                                        value={comment === null ? '' : comment.content}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="post-view">
                                    <div className="checkbox">
                                        <label><input type="checkbox" name="remember"/> Đăng lên facebook</label>
                                    </div>
                                    <FacebookProvider appId="299568457549895">
                                        <LoginButton
                                            className={`btn-fb-login ${this.state.isLoginFB ? 'hidden' : 'show'}`}
                                            scope="email"
                                            onCompleted={this.responseFacebook}
                                            onError={this.handleError}
                                        >
                                            <span>Login via Facebook</span>
                                        </LoginButton>
                                    </FacebookProvider>
                                    <button
                                        type="submit"
                                        className={`btn-fb-login ${this.state.isLoginFB ? 'show' : 'hidden'}`}
                                    >Đăng</button>
                                </div>
                            </form>
                        </div>
                        <ul className="list-message list-group list-group-flush">
                            {this.showComments(listComment)}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default SampleDesignPage;
