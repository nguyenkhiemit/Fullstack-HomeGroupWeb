import React, {Component} from 'react';
import './ProductItem.css'
import * as Config from '../../constants/Config';
import {Link} from "react-router-dom";

class ProductItem extends Component {
    render() {
        let {product} = this.props;
        return (
            <div className="col-md-3">
                <Link to={{
                    pathname:'/product-detail',
                    state: {product: product}
                }}>
                    <img src={`${Config.API_URL}/${product.images[0].uploadName}`} alt="Sản Xuất Đồ Gỗ"/>
                    <p className="item-title">{product.projectName}</p>
                    <p className="item-category">{product.investor}</p>
                </Link>
            </div>
        );
    }
}

export default ProductItem;
