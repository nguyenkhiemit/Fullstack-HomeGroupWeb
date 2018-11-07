import React, {Component} from 'react';
import './FactoryPage.css'
import ContactFooter from "../../components/ContactFooter/ContactFooter";
import Footer from "../../components/Footer/Footer";

class FactoryPage extends Component {
    render() {
        return (
            <div className="factory">
                <div className="container">
                    <p>Xưởng sản xuất đồ gỗ nội thất <strong>HomeGroup</strong> nằm trên diện tích
                        hơn <strong>1500m2</strong> tại Phượng Đồng, Chương Mỹ, Hà Nội. Không như những xưởng gỗ khác
                        trên thị trường, máy móc chủ yếu được nhập từ Trung Quốc hoặc máy cũ từ nước ngoài được nhập về
                        Việt Nam nhưng với HomeGroup trang thiết bị máy móc được nhập khẩu mới hoàn toàn
                        từ <strong>Italia</strong>, dây chuyền tự động hóa.</p>

                    <p>Nội thất <strong>HomeGroup</strong> là thương hiệu uy tín<strong>&nbsp;</strong>về Tư vấn – Thiết
                        kế – Thi công nội thất. Chúng tôi với tinh thần kinh doanh tận tâm, tận tụy, với nền tảng phát
                        triển công ty dựa trên một đội ngũ nhân lực nhiều năm kinh nghiệm, giỏi chuyên môn và được mài
                        giũa qua rất nhiều công trình tư vấn, thiết kế, thi công mỗi năm cùng với những thiết bị máy móc
                        nhà xưởng hiện đại sẽ thỏa mãn sự an tâm cũng như nhu cầu của khách hàng.</p>

                    <p>Nếu Bạn đang có nhu cầu thi công nội thất hãy đến với với chúng tôi để nhận được nhiều ưu đãi hấp
                        dẫn.</p>

                    <p><strong>Chúng tôi cam kết:</strong></p>

                    <ul>
                        <li>Gỗ được nhập khẩu 100%, không có gỗ tạp, tái chế ( Loại gỗ kém chất lượng giá rẻ và thường
                            bị pha trộn vào công trình, ảnh hưởng đến sức khỏe và độ bền đẹp của sản phẩm )
                        </li>
                        <li>Thi công chuyên nghiệp, đúng cam kết về tiến độ</li>
                        <li>Bảo hành bảo trì dài hạn, uy tín chất lượng</li>
                        <li>Đặc biệt hoàn tiền 100% nếu sản phẩm làm ra không như cam kết</li>
                    </ul>

                    <p><strong>Một số hình ảnh xưởng sản xuất Nội thất Homegroup:</strong></p>

                    <p className="aligncenter">
                        <img className="aligncenter wp-image-6014 size-full"
                             src="https://noithathomegroup.com/wp-content/uploads/2017/05/IMG_6220.jpg"
                             alt=""
                             srcset="https://home-group.vn/wp-content/uploads/2017/05/IMG_6220.jpg 900w, https://home-group.vn/wp-content/uploads/2017/05/IMG_6220-768x576.jpg 768w"
                             sizes="(max-width: 900px) 100vw, 900px" width="900" height="675"/>
                    </p>
                    <p className="aligncenter">
                        <img className="aligncenter wp-image-5997 size-full"
                             src="https://noithathomegroup.com/wp-content/uploads/2017/05/IMG_6203.jpg"
                             alt=""
                             srcset="https://home-group.vn/wp-content/uploads/2017/05/IMG_6203.jpg 900w, https://home-group.vn/wp-content/uploads/2017/05/IMG_6203-768x576.jpg 768w"
                             sizes="(max-width: 900px) 100vw, 900px" width="900" height="675"/>
                    </p>
                    <p className="aligncenter">
                        <img className="aligncenter wp-image-6014 size-full"
                             src="https://noithathomegroup.com/wp-content/uploads/2017/05/IMG_6220.jpg"
                             alt=""
                             srcset="https://home-group.vn/wp-content/uploads/2017/05/IMG_6220.jpg 900w, https://home-group.vn/wp-content/uploads/2017/05/IMG_6220-768x576.jpg 768w"
                             sizes="(max-width: 900px) 100vw, 900px" width="900" height="675"/>
                    </p>
                    <p className="aligncenter">
                        <img className="aligncenter wp-image-5997 size-full"
                             src="https://noithathomegroup.com/wp-content/uploads/2017/05/IMG_6203.jpg"
                             alt=""
                             srcset="https://home-group.vn/wp-content/uploads/2017/05/IMG_6203.jpg 900w, https://home-group.vn/wp-content/uploads/2017/05/IMG_6203-768x576.jpg 768w"
                             sizes="(max-width: 900px) 100vw, 900px" width="900" height="675"/>
                    </p>
                    <p><b>CÔNG TY CP XÂY DỰNG &amp; NỘI THẤT HOMEGROUP</b></p>
                    <ul>
                        <li>VPGD: Phòng 12A03 EcoLife – 58 Tố Hữu – Nam Từ Liêm – Hà Nội.</li>
                        <li>Nhà Xưởng: Thôn Phượng Đồng – Phụng châu – Chương Mỹ -Hà Nội.</li>
                        <li>Điện thoại: 093 749 8868 – 046 296 3388</li>
                        <li>Email: noithathomegroup@gmail.com</li>
                        <li><a href="https://noithathomegroup.com/">www.noithathomegroup.com</a></li>
                        <li><a href="http://homeviet.com.vn/">www.homeviet.com.vn</a></li>
                        <li><a href="https://sanxuatnoithatdep.com/">www.sanxuatnoithatdep.com</a></li>
                    </ul>
                </div>
                <ContactFooter/>
                <Footer/>
            </div>
        );
    }
}

export default FactoryPage;
