import React, {Component} from 'react';
import './ListProduct.css'
import {getApi, callApi} from "../../utils/apiCaller";
import ProductItem from "../ProductItem/ProductItem";
import Pagination from "react-js-pagination";

class ProjectFinish extends Component {

    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            pageSize: 10,
            total: 10,
            products: []
        }
    }

    componentDidMount() {
        this.getListProduct(1, this.props.category)
    }

    handlePageChange = (pageNumber) => {
        this.setState({page: pageNumber});
        this.getListProduct(pageNumber, this.state.category);
    };

    getListProduct(pageNumber, category) {
        let params = {
            page: pageNumber,
            pageSize: this.state.pageSize,
            category: category
        };
        getApi('product', params).then(res => {
            console.log(res);
            this.setState({
                products: res.data.data,
                total: res.data.total
            });
        })
    }

    render() {
        let {products} = this.state;
        console.log(products.length);
        return (
            <div id="list-product">
                <h3 className="product-title">
                    Các dự án đã triển khai
                </h3>
                <div className="horizontal-divider"/>
                <div className="container">
                    <div className="row">
                        {this.showProducts(products)}
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <Pagination
                        hideDisabled
                        activePage={this.state.page}
                        itemsCountPerPage={this.state.pageSize}
                        totalItemsCount={this.state.total}
                        pageRangeDisplayed={3}
                        onChange={this.handlePageChange}
                        linkClass='page-link'
                    />
                </div>
            </div>
        );
    }

    showProducts(products) {
        let result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductItem
                        product={product}
                    />
                );
            });
        }
        return result;
    }
}

export default ProjectFinish;
