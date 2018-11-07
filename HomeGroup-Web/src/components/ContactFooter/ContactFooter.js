import React, {Component} from 'react';
import './ContactFooter.css'
import homeGroupWhite from '../../image/homegroup-white.png';

class ContactFooter extends Component {
    render() {
        return (
            <div id="contact-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 left">
                            <p className="contact-title">Liên hệ</p>
                            <p className="divider"/>
                            <p className="name">Công ty CP xây dựng & Nội thất HOMEGROUP</p>
                            <div className="item">
                                <i className="fa fa-home icon"/>
                                <div className="content">
                                    <p className="textwidget">Văn Phòng Giao Dịch</p>
                                    <p>P.12A03 Tòa A1 EcoLife - 58 Tố Hữu - Nam Từ Liêm - Hà Nội</p>
                                </div>
                            </div>
                            <div className="item">
                                <i className="fa fa-home icon"/>
                                <div className="content">
                                    <p className="textwidget">Xưởng sản xuất</p>
                                    <p>Thôn Phượng Đồng - Phụng Châu - Chương Mỹ - Hà Nội</p>
                                </div>
                            </div>
                            <div className="item">
                                <i className="fa fa-envelope icon"/>
                                <div className="content">
                                    <p className="textwidget">Email</p>
                                    <p>nguyenkhiem7789@gmail.com</p>
                                </div>
                            </div>
                            <div className="item">
                                <i className="fa fa-phone icon"/>
                                <div className="content">
                                    <p className="textwidget">01642 884 885</p>
                                    <p>(024) 6734 3476</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 right">
                            <img
                                src={homeGroupWhite}
                                alt="img" className="logo"/>
                            <h4 className="term">Các chính sách</h4>
                            <p className="line"><span className="divider"/></p>
                            <a href="">Chính sách bán hàng</a>
                            <a href="">Chính sách bảo mật</a>
                            <a href="">
                                <img src="https://noithathomegroup.com/wp-content/uploads/2017/05/da_thong_bao.png"
                                     alt="dathongbao"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactFooter;
