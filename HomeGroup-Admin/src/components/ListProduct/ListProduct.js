import React, {Component} from 'react';
import './ListProduct.css'
import ProductItem from "../ProductItem/ProductItem";
import {deleteApi, getApi, callApi} from "../../utils/apiCaller";
import {Link} from "react-router-dom";
import Pagination from "react-js-pagination";
import Dialog from "../Alert/Dialog";

class ListProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            page: 1,
            pageSize: 10,
            total: 0,
            isDelete: false,
            deleteProduct: null,
            category: -1
        }
    }

    componentDidMount() {
        this.getListProduct(1, this.props.category);
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
            if(res.data.success) {
                this.setState({
                    products: res.data.data,
                    total: res.data.total
                });
            }
        })
    }

    showProducts(products) {
        let result = null;
        if(products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductItem
                        product={product}
                        delete = {this.delete}
                        update = {this.update}
                    />
                );
            });
        }
        return result;
    }

    delete = (product) => {
        this.setState({
            isDelete: true,
            deleteProduct: product
        });
    };

    okDelete = (product) => {
        let params = {
            id : product._id
        };
        deleteApi('product/delete', params).then(res => {
            if(res.data.success) {
                let {products} = this.state;
                for(let i = 0; i < products.length; i++) {
                    if(products[i]._id === product._id) {
                        products.splice(i, 1);
                    }
                }
                this.setState({
                    isDelete: false,
                    products: products
                })
            }
        })
    };

    update = (id, checked) => {
        let params = {
            id: id,
            isMain: checked
        };
        callApi('product/update', 'PUT', params).then(res => {
            if(res.data.success) {
                console.log('Update Product success !!!');
                let {products} = this.state;
                for(let i = 0; i < products.length; i++) {
                    if(products[i]._id === id) {
                        products[i].isMain = checked;
                    }
                }
                this.setState({
                    products: products
                })
            }
        });
    };

    sortArea = () => {
        let {products} = this.state;
        products.sort((a, b) => {
            if(a.area < b.area) {
                return -1;
            } else if(a.area > b.area) {
                return 1;
            } else {
                return 0;
            }
        });
        this.setState({
            products: products
        });
    };

    sortTime = () => {
        let {products} = this.state;
        products.sort((a, b) => {
            if(a.time < b.time) {
                return -1;
            } else if(a.time > b.time) {
                return 1;
            } else {
                return 0;
            }
        });
        this.setState({
            products: products
        });
    };

    render() {
        let {category} = this.props;
        let {products, isDelete, deleteProduct} = this.state;
        return (
            <div>
                <Dialog
                    product = {deleteProduct}
                    isDelete = {isDelete}
                    message = 'Bạn có muốn xoá sản phẩm này?'
                    okDelete = {this.okDelete}
                />
                <div className="main">
                    <div>
                        <Link className="btn btn-secondary" to="/create-product">
                            <span className="fa fa-plus"/>Thêm sản phẩm
                        </Link>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-condensed">
                            <thead>
                            <tr>
                                <th>Hình ảnh</th>
                                <th>Tên dự án</th>
                                <th>Thể loại</th>
                                <th>Chủ đầu tư</th>
                                <th>Địa chỉ</th>
                                <th>Diện tích<span className="fa fa-sort ml-1" onClick={this.sortArea}/></th>
                                <th>Thời gian<span className="fa fa-sort ml-1" onClick={this.sortTime}/></th>
                                <th/>
                            </tr>
                            </thead>
                            <tbody>
                            {this.showProducts(products)}
                            </tbody>
                        </table>
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
            </div>
        );
    }
}

export default ListProduct;
