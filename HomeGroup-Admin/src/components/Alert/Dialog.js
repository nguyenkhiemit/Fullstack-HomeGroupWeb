import React, {Component} from 'react';
import './Dialog.css'

class Dialog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product: null,
            message: '',
            isDelete: false
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            product: nextProps.product,
            message: nextProps.message,
            isDelete: nextProps.isDelete
        });
    }

    clickNoButton = () => {
        this.setState({
            isDelete: false
        })
    };

    clickYesButton = (product) => {
        this.setState({
            isDelete: false
        });
        this.okDelete(product)
    };

    okDelete = (product) => {
        this.props.okDelete(product);
    };

    render() {
        let {product, message, isDelete} = this.state;
        return (
            <div className={isDelete ? 'bg-shadow center' : 'hidden'}>
                <div className="bg-dialog">
                    <h4 className="title-dialog">Thông báo</h4>
                    <p className="message-dialog">{message}</p>
                    <div className="btn-parent center">
                        <button className="btn btn-dialog-left" onClick={()=>{this.clickNoButton()}}>Không</button>
                        <button className="btn btn-dialog-right" onClick={()=>{this.clickYesButton(product)}}>Có</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dialog;
