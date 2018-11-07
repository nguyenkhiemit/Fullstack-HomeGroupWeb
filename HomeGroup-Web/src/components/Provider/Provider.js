import React, {Component} from 'react';
import './Provider.css'
import ProviderItem from "../ProviderItem/ProviderItem";

class Provider extends Component {
    render() {
        return (
            <div id="provider">
                <div className="container">
                    <h3 className="provider-title">HomeGroup cung cấp</h3>
                    <div className="horizontal-divider"/>
                    <div className="row">
                        <ProviderItem
                            imageURL={'https://home-group.vn/wp-content/uploads/2014/02/thiet-ke-noithat-home-347x182_1.jpg'}
                            title={'Thiết Kế Nội Thất'}
                            desc={'Nội thất HomeGroup là một trong những công ty tốt nhất trong lĩnh vực ' +
                            'Thiết kế và Thi công Nội thất. Đội ngũ kiến trúc sư nhiều ' +
                            'năm kinh nghiệm sẽ làm hài lòng quý khách hàng.'}
                        />
                        <ProviderItem
                            imageURL={'https://home-group.vn/wp-content/uploads/2014/02/thicon-noithat-home-347x182_1.jpg'}
                            title={'Thi Công Nội Thất'}
                            desc={'Đội ngũ kiến trúc sư, thợ thi công nhiều năm kinh nghiệm, có tinh thần trách nhiệm ' +
                            'cao, tỉ mỉ trong từng công đoạn sẽ mang đến sự tin tưởng và yên tâm cho khách hàng.'}
                        />
                        <ProviderItem
                            imageURL={'https://home-group.vn/wp-content/uploads/2014/02/xuong-home-347x182_1.jpg'}
                            title={'Sản Xuất Đồ Gỗ'}
                            desc={'Nhà Xưởng rộng hơn 1500m2, Thiết bị máy móc nhập khẩu Italia, dây chuyền sản xuất tự ' +
                            'động hóa, mang lại sản phẩm hoàn hảo tới từng góc cạnh, đẹp từng chi tiết nhỏ.'}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Provider;
