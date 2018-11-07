import React, {Component} from 'react';
import {callApi} from "../../utils/apiCaller";
import Loading from "../../components/Loading/Loading";
import {NotificationContainer, NotificationManager} from "react-notifications";
import Alert from "../../components/Alert/Alert";
import './CreateProduct.css'

class CreateProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            projectName: '',
            category: 0,
            investor: '',
            address: '',
            area: '',
            time: '',
            isMain: false,
            files: null,
            isLoading: false,
            isDisplayAlert: false,
            messageAlert: ''
        }
    };

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
        let {projectName, category, investor, address, area, time, isMain, files} = this.state;

        const formData = new FormData();
        formData.append('projectName', projectName);
        formData.append('category', category);
        formData.append('investor', investor);
        formData.append('address', address);
        formData.append('area', area);
        formData.append('time', time);
        formData.append('isMain', isMain);
        for(let i = 0; i < files.length; i++) {
            formData.append('file', files[i]);
        }
        const headers = {
            'content-type': 'multipart/form-data'
        };
        this.setState({
           isLoading: true
        });
        callApi("product/uploads", 'POST', formData, headers).then(res => {
            console.log(res);
            NotificationManager.success('Success message', '', 1000, null, true);
            this.setState({
                isLoading: false,
                isDisplayAlert: true,
                messageAlert: 'Tạo sảm phẩm thành công'
            });
        });
    };

    render() {
        return (
            <div>
                <Loading isLoading={this.state.isLoading}/>
                <Alert isDisplay={this.state.isDisplayAlert} message={this.state.messageAlert}/>
                <div className="container mt-3">
                    <form onSubmit={this.handleSubmit} method="POST">
                        <div className="form-group">
                            <label>Dự án</label>
                            <input type="text" className="form-control" name="projectName" value={this.state.projectName} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label>Thể loại</label>
                            <select
                                className="form-control"
                                name="category"
                                value={this.state.category}
                                onChange={this.handleChange}>
                                <option value={0}>Thiết kế nội thất</option>
                                <option value={1}>Thi công nội thất</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Chủ đầu tư</label>
                            <input type="text" className="form-control" name="investor" value={this.state.investor} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label>Địa chỉ</label>
                            <input type="text" className="form-control" name="address" value={this.state.address} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label>Diện tích</label>
                            <input type="text" className="form-control" name="area" value={this.state.area} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label>Thời gian</label>
                            <input type="text" className="form-control" name="time" value={this.state.time} onChange={this.handleChange}/>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" name="isMain" checked={this.state.isMain} onChange={this.handleChange}/>
                            <label className="form-check-label">Tiêu biểu</label>
                        </div>
                        <div className="form-group mt-3">
                            <input type="file" name="files" multiple onChange={this.handleChange}/>
                        </div>
                        <button type="submit" className="btn btn-secondary">Tạo dự án</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default CreateProduct;
