import React, {Component} from 'react';
import './Alert.css'

class Alert extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isDisplay: false,
            message: ''
        }
    }

    componentDidMount() {
        this.performAndDisapper();
    }

    performAndDisapper = () => {
        const element = document.getElementById('alert');
        element.addEventListener('animationend', () => {
        });
    };

    componentWillReceiveProps(nextProps) {
        this.setState({
            isDisplay: nextProps.isDisplay,
            message: nextProps.message
        });
        if(nextProps.isDisplay) {
            setTimeout(() => {this.setState({isDisplay: false}); }, 3000);
        }
    }

    render() {
        let {isDisplay, message} = this.state;
        return (
            <div id="alert" className={isDisplay ? 'ng-alert-success anim-in show' : 'hidden'}>
                {message}
            </div>
        );
    }
}

export default Alert;
