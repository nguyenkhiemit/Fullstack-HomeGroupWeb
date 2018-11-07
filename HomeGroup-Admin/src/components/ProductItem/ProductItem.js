import React, {Component} from 'react';
import './ProductItem.css'
import * as Config from '../../constants/Config';
import Checkbox from "../Checkbox/Checkbox";

class ProductItem extends Component {

    delete = (product) => {
        this.props.delete(product);
    };

    changeState = (checked) => {
        this.props.update(this.props.product._id, checked);
    };

    render() {
        let {product} = this.props;
        return (
            <tr>
                <td><img src={`${Config.API_URL}/${product.images[0].uploadName}`} alt="Sản Xuất Đồ Gỗ"/></td>
                <td><p>{product.projectName}</p></td>
                <td><p>{parseInt(product.category) === 0 ? 'Thiết kế nội thất': 'Thi công nội thất'}</p></td>
                <td><p>{product.investor}</p></td>
                <td><p>{product.address}</p></td>
                <td><p>{product.area}</p></td>
                <td><p>{product.time}</p></td>
                <td>
                    <div className="state">
                        <button className="btn btn-danger" title="Xoá" onClick={()=>{this.delete(product)}}>
                            <i className="fa fa-trash"/>
                        </button>
                        <Checkbox state={product.isMain} changeState={this.changeState}/>
                    </div>
                </td>
            </tr>
        );
    }
}

export default ProductItem;
