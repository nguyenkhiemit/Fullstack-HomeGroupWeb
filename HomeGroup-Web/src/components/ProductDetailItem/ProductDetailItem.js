import React, {Component} from 'react';
import './ProductDetailItem.css'
import * as Config from '../../constants/Config';
import {Link} from "react-router-dom";

class ProductDetailItem extends Component {
    render() {
        let {image} = this.props;
        console.log(image);
        return (
            <div className="col-md-6">
                <Link to='/product-detail'>
                    <img src={`${Config.API_URL}/${image.uploadName}`} alt="Sản Xuất Đồ Gỗ"/>
                </Link>
            </div>
        );
    }
}

export default ProductDetailItem;
