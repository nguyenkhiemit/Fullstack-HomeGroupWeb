import React, {Component} from 'react';
import './ContactPage.css'
import {MapContainer} from "../../components/MapContainer/MapContainer";
import Footer from "../../components/Footer/Footer";
import ContactFooter from "../../components/ContactFooter/ContactFooter";

class ContactPage extends Component {

    static defaultProps = {
        center: {lat: 40.7446790, lng: -73.9485420},
        zoom: 11
    };

    render() {
        return (
            <div>
                <div className="container">
                    <h4 className="name-company"><b>CÔNG TY CP XÂY DỰNG &amp; NỘI THẤT HOMEGROUP</b></h4>
                    <div className='google-map'>
                        <MapContainer
                            center={{lat: 21.007722, lng: 105.808296}}
                            zoom={11}
                        />
                    </div>
                </div>
                <div className="row contact-info">
                    <div className="container center">
                        <div className="col-md-3 hotline-view">
                            <div className="icon-box center">
                                <div className="icon-box-white">
                                    <i className="fa fa-mobile mobile"/>
                                </div>
                            </div>
                            <h3 className="title-contact">Hotline</h3>
                            <p className="info-contact">0937.498.868 - 0246.296.3388</p>
                        </div>
                        <div className="col-md-3 hotline-view">
                            <div className="icon-box center">
                                <div className="icon-box-white">
                                    <i className="fa fa-envelope envelop"/>
                                </div>
                            </div>
                            <h3 className="title-contact">Email</h3>
                            <p className="info-contact">noithathomegroup@gmail.com</p>
                        </div>
                        <div className="col-md-3 hotline-view">
                            <div className="icon-box center">
                                <div className="icon-box-white">
                                    <i className="fa fa-home mobile"/>
                                </div>
                            </div>
                            <h3 className="title-contact">Nhà xưởng</h3>
                            <p className="info-contact">Thôn Phượng Đồng - Phụng Châu - Chương Mỹ - Hà Nội</p>
                        </div>
                        <div className="col-md-3 hotline-view">
                            <div className="icon-box center">
                                <div className="icon-box-white">
                                    <i className="fa fa-map-marker mobile"/>
                                </div>
                            </div>
                            <h3 className="title-contact">Văn phòng</h3>
                            <p className="info-contact">P.12A03 Tòa A1 EcoLife - 58 Tố Hữu - Nam Từ Liêm - Hà Nội</p>
                        </div>
                    </div>
                </div>

                <div className="form-contact">
                    <div className="container">
                        <h2>Gửi liên hệ</h2>
                        <form>
                            <div className="form-group">
                                <label>Họ và tên</label>
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Tiêu đề</label>
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Nội dung</label>
                                <textarea className="form-control" rows="3"/>
                            </div>
                            <button type="submit" className="btn btn-primary btn-send">Gửi</button>
                        </form>
                    </div>
                </div>

                <ContactFooter/>
                <Footer/>
            </div>
        );
    }
}

export default ContactPage;
