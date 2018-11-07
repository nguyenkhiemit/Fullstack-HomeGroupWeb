import React, {Component} from 'react';
import './ConstructionPage.css'
import ListProduct from "../../components/ListProduct/ListProduct";
import ContactFooter from "../../components/ContactFooter/ContactFooter";
import Footer from "../../components/Footer/Footer";

class ConstructionPage extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="construction-title">
                        <p>Thi công hoàn thiện nội thất là một công việc đòi hỏi sự am hiểu tổng quát về vật liệu hoàn
                            thiện, trang thiết bị, đặc tính và cách thức thi công của từng hạng mục. Mỗi một công trình
                            sẽ
                            có rất nhiều hạng mục cần thi công hoàn thiện nội thất như : xây lại tường ngăn, ốp lát
                            gạch,
                            lắp đặt hoặc bổ sung đường dây điện, đường ống cấp thoát nước, đường ống ga cho máy điều
                            hòa,
                            lắp đặt hệ trần treo trang trí, sơn tường, lát sàn gỗ, lắp dụng vách, cửa kính, đóng đồ gỗ,
                            lắp
                            hệ thống đèn chiếu sáng … và rất nhiều công việc đòi hỏi sự tỉ mỉ khác nữa.</p>
                        <p>Những người thợ thi công hoàn thiện nội thất luôn luôn phải học hỏi và cập nhật kiến thức mới
                            do
                            sự phát triển nhanh chóng và đa dạng của vật liệu, công nghệ và cách thức lắp đặt. Ngoài ra
                            còn
                            phải đảm bảo yếu tố thẩm mỹ và sự tinh tế trên từng sản phẩm được thi công, lắp đặt.</p>
                        <p>Homegroup tự hào là công ty hàng đầu trong lĩnh vực Thiết kế và Thi công Nội thất cho Chung
                            cư,
                            Biệt thự, Văn phòng, Nhà phố…Chúng tôi&nbsp;cam kết sẽ mang tới cho bạn một không gian sống
                            lý
                            tưởng, mang tới sự hài lòng và an tâm khi đến với Homegroup.</p>
                        <p><strong>Dưới đây là một số công trình Thi công nội thất mà HomeGroup đã thực hiện trong thời
                            gian qua:</strong></p>
                    </div>
                    <ListProduct category={1}/>
                </div>
                <ContactFooter/>
                <Footer/>
            </div>
        );
    }
}

export default ConstructionPage;
