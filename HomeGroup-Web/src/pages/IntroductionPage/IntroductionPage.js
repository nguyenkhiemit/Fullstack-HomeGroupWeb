import React, {Component} from 'react';
import './IntrodictionPage.css';
import ContactFooter from "../../components/ContactFooter/ContactFooter";
import Footer from "../../components/Footer/Footer";

class IntroductionPage extends Component {
    render() {
        return (
            <div>
                <div className="introduction">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h4 className="title">Chúng tôi là ai &amp; Chúng tôi khác biệt ở đâu?</h4>
                                <p className="divider"/>
                                <p className="desc">Công ty Cổ phần Xây dựng và Nội thất HomeGroup thành lập tháng 02 năm
                                    2015, là doanh
                                    nghiệp thuộc top các đơn vị Thiết kế và Thi công Nội thất tốt nhất. Chúng tôi chuyên
                                    thiết kế,
                                    sản xuất và thi công nội thất trọn gói cho chung cư, biệt thự, văn phòng, nhà
                                    phố...<br/>
                                    Đặc biệt chúng tôi chuyên thiết kế và thi công nội thất căn hộ, văn phòng, nhà hàng,
                                    khách sạn cho cộng đồng người Hàn Quốc sang Việt Nam sinh sống và làm việc.<br/>
                                    Nhằm mục đích mang lại cho khách hàng những sản phẩm nội thất cao cấp, chất
                                    lượng và tinh tế Homegroup đã đầu tư xây dựng nhà xưởng rộng hơn 1500m2 tại Thôn
                                    Đồng-Phụng châu-Chương Mỹ-Hà Nội với máy móc, dây chuyền sản xuất hiện đại được
                                    nhập khẩu từ ITALIA và quy trình quản lý chất lượng ISO 9001, tạo ra một quy
                                    trình khép kín trọn gói từ THIẾT KẾ NỘI THẤT đến THI CÔNG NỘI THẤT..<br/>
                                    Ngoài dây chuyền sản xuất hiện đại, Homegroup còn chú trọng vào chất lượng
                                    nhân lực, Homegroup tuyển chọn đội ngũ thợ làm đồ gỗ nội thất giỏi, thợ thi
                                    công lành nghề, nhiều năm kinh nghiệm vì vậy đã mang tới cho khách hàng
                                    những sản phẩm đồ gỗ nội thất tốt nhất, giá thành cạnh tranh nhất.<br/>
                                    Nhờ những sản phẩm chất lượng, giá thành cạnh tranh và sự phục vụ tận
                                    tâm, qua nhiều năm phát triển thương hiệu Nội thất Homegroup đã trở
                                    thành thương hiệu sản xuất nội thất uy tín tại Hà Nội và các tỉnh thành.
                                    Mang tới sự tin tưởng, yên tâm và hài lòng cho khách hàng khi đến với
                                    Homegroup.</p>
                            </div>
                            <div className="col-md-6">
                                <div className="schedule">
                                    <p className="skill-schedule">Đúng tiến độ - Thời hạn</p>
                                    <p className="percent">100%</p>
                                </div>
                                <div className="commitment">
                                    <p className="skill-commitment">Sản phẩm đúng như cam kết</p>
                                    <p className="percent">100%</p>
                                </div>
                                <div className="satisfaction">
                                    <p className="skill-satisfaction">Độ hài lòng của khách hàng</p>
                                    <p className="percent">100%</p>
                                </div>
                                <div>
                                    <b className="name">CÔNG TY CP XÂY DỰNG & NỘI THẤT HOMEGROUP</b>
                                    <ul>
                                        <li>VPGD: Phòng 12A03 Tòa A1 EcoLife - 58 Tố Hữu - Nam Từ Liêm - Hà Nội.</li>
                                        <li>Nhà Xưởng: Thôn Phượng Đồng - Phụng châu - Chương Mỹ -Hà Nội.</li>
                                        <li>Điện thoại: 093 749 8868 - 0246 296 3388</li>
                                        <li>Email: noithathomegroup@gmail.com</li>
                                        <li><a href="https://home-group.vn/">www.home-group.vn</a></li>
                                        <li><a href="http://homeviet.com.vn/">www.homeviet.com.vn</a></li>
                                        <li><a href="https://sanxuatnoithatdep.com/">www.sanxuatnoithatdep.com</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="service-layout center">
                        <div className="container service row">
                            <div className="col-md-4">
                                <div className="service-icon">
                                    <p className="quality">
                                        <i className="fa fa-paper-plane"/>
                                    </p>
                                </div>
                                <b>Chất lượng</b>
                                <p className="content">Dịch vụ hoàn hảo, chất lượng là nền tảng cho sự thành công ngày hôm nay của HomeGroup</p>
                            </div>
                            <div className="col-md-4">
                                <div className="service-icon">
                                    <p className="quality">
                                        <i className="fa fa-heart"/>
                                    </p>
                                </div>
                                <b>Tận Tâm</b>
                                <p className="content">Mỗi khách hàng đến với HomeGroup đều được phục vụ bằng sự tận tâm, tận tụy của mỗi Nhân viên</p>
                            </div>
                            <div className="col-md-4">
                                <div className="service-icon">
                                    <p className="quality">
                                        <i className="fa fa-thumbs-up"/>
                                    </p>
                                </div>
                                <b>Chuyên Nghiệp</b>
                                <p className="content">HomeGroup luôn mang tới cho khách hàng cảm giác an tâm, tin tưởng nhờ sự chuyên nghiệp</p>
                            </div>
                        </div>
                    </div>
                </div>
                <ContactFooter/>
                <Footer/>
            </div>
        );
    }
}

export default IntroductionPage;
