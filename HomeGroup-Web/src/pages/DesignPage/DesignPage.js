import React, {Component} from 'react';
import './DesignPage.css';
import ListProduct from "../../components/ListProduct/ListProduct";
import Footer from "../../components/Footer/Footer";
import ContactFooter from "../../components/ContactFooter/ContactFooter";

class DesignPage extends Component {
    render() {
        return (
            <div className="design">
                <div className="container">
                    <div className="design-title">
                        <p>
                        <span>
                            <strong>HomeGroup – Hàng đầu trong lĩnh vực thiết kế, sản xuất và thi công đồ Nội thất.</strong>
                        </span>
                        </p>
                        <p>Ngày nay việc thiết kế nội thất cho căn hộ của gia đình đã trở nên rất cần thiết, thiết kế
                            nội thất để tạo không gian thoải mái, tiện nghi nhất cho người sử dụng cũng như hỗ trợ sức
                            khỏe, sự an toàn, nâng cao chất lượng cuộc sống.&nbsp;HomeGroup là một trong những đơn vị
                            chuyên nghiệp và uy tín trong việc thiết kế và thi công Nội thất.</p>
                        <p>Với <a href="https://home-group.vn/xuong-san-xuat" target="_blank" rel="noopener noreferrer">xưởng
                            sản xuất nội thất</a> trên 1500m2 cùng với đội ngũ kiến trúc sư, thợ sản xuất giỏi chuyên
                            môn, nhiều năm kinh nghiệm, các sản phẩm thiết kế nội thất&nbsp;của HomeGroup được khách
                            hàng đánh giá rất cao.</p>
                        <p><strong>Dưới đây là một số công trình thiết kế nội thất mà HomeGroup đã thiết kế trong thời gian
                            qua:</strong></p>
                    </div>
                    <ListProduct category={0}/>
                </div>
                <ContactFooter/>
                <Footer/>
            </div>
        );
    }
}

export default DesignPage;
