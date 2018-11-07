import React, {Component} from 'react';
import './ProductDetailPage.css'
import ProductDetailItem from "../../components/ProductDetailItem/ProductDetailItem";

class ProductDetailPage extends Component {
    render() {
        let {product} = this.props.history.location.state;
        return (
            <div className="container">
                <p className="product-detail-header">
                    Thiết kế nội thất căn hộ 114 m2 tại trung tâm Hà Nội
                </p>
                <div className="row">
                    <div className="col-md-6">
                        <p className="category">
                            Chi tiết
                        </p>
                        <div className="row">
                            <div className="col-md-4">
                                <p className="product-detail-title">Dự án:</p>
                                <p className="product-detail-title">Chủ đầu tư:</p>
                                <p className="product-detail-title">Địa chỉ:</p>
                                <p className="product-detail-title">Diện tích:</p>
                                <p className="product-detail-title">Thời gian:</p>
                            </div>
                            <div className="col-md-8">
                                <p className="product-detail-content">Thiết kế nội thất</p>
                                <p className="product-detail-content">Anh Cường</p>
                                <p className="product-detail-content">CT8 Chung cư Dương Nội</p>
                                <p className="product-detail-content">86m2</p>
                                <p className="product-detail-content">09/2018</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <p className="category">
                            Đơn vị thực hiện
                        </p>
                        <ul>
                            <li className="unit-item">VPGD: P.1504 CT8A Khu đô thị Dương Nội - Hà Đông - Hà Nội.</li>
                            <li className="unit-item">Nhà Xưởng: Thôn Phượng Đồng - Phụng Châu - Chương Mỹ -Hà Nội.</li>
                            <li className="unit-item">Điện thoại: 093 749 8868 - 0246 296 3388</li>
                            <li className="unit-item">Email: noithathomegroup@gmail.com</li>
                            <li className="unit-item"><a href="">www.home-group.vn</a></li>
                            <li className="unit-item"><a href="">www.homeviet.com.vn</a></li>
                            <li className="unit-item"><a href="">www.homegroupvn.com.vn</a></li>
                        </ul>
                    </div>
                </div>
                <p className="product-detail-desc">
                    Căn hộ 86m2 có 2 phòng ngủ, 2 phòng vệ sinh, có khu bếp và phòng khách theo thiết kế ban đầu của chủ
                    đầu tư là 2 khu riêng biệt có diện tích khá nhỏ hẹp nay được kiến trúc sư HomeGroup đập thông tạo
                    nên không gian bếp và phòng khách rộng rãi.
                </p>
                <br/>
                <p>
                    Căn hộ có lối thiết kế hiện đại, màu sắc chủ đạo là màu trắng.
                </p>
                <div className="row">
                    {this.showImages(product.images)}
                </div>
            </div>
        );
    }

    showImages(images) {
        let result = null;
        if (images.length > 0) {
            result = images.map((image, index) => {
                return (
                    <ProductDetailItem
                        image={image}
                    />
                );
            });
        }
        return result;
    }
}

export default ProductDetailPage;
