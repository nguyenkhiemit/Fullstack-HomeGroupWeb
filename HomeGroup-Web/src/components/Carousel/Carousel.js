import React, {Component} from 'react';
import './Carousel.css'

class Carousel extends Component {
    render() {
        return (
            <div id="carousel">
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100"
                                 src="http://nhaxinhgroup.com.vn/wp-content/uploads/2016/08/thiet-ke-noi-that-nha-pho-dep-binh-duong-gia-dinh-anh-thanh.jpg"
                                 alt="First slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100"
                                 src="http://noithatjia.vn/wp-content/uploads/2016/11/cong-ty-tu-van-thiet-ke-thi-cong-noi-that-chuyen-nghiep-uy-tin-tai-ha-noi.jpg"
                                 alt="Second slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100"
                                 src="https://noithatchungcu.com.vn/wp-content/uploads/2017/04/decox-thiet-ke-noi-that-can-ho-chung-cu-masteri-thao-dien-68m2-1-phong-khach-noi-that-chung-cu.jpg"
                                 alt="Third slide"/>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#" role="button"
                       data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"/>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#" role="button"
                       data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"/>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        );
    }
}

export default Carousel;
