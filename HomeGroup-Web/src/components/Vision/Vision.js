import React, {Component} from 'react';
import './Vision.css'

class Vision extends Component {
    render() {
        return (
            <div>
                <div id="vision">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <h3 className="title">Triết lý công ty</h3>

                                <p className="vision-line"><span className="divider"/></p>

                                <div className="client">
                                    <img
                                        src="http://www.motivationmarketing.co.uk/wp-content/uploads/2015/02/new-customer.jpg"
                                        alt="Với Khách Hàng"/>
                                    <div className="desc">
                                        <h4>Với khách hàng</h4>
                                        <p>Chúng tôi luôn quan niệm khách hàng và đối tác là những người mang lại
                                            thành
                                            công cho công ty. Vì vậy, chúng tôi luôn mang bên mình một sứ mệnh đó là
                                            tạo
                                            dựng uy tín, tạo dựng niềm tin đối với khách hàng và đối tác bằng sự
                                            phục vụ
                                            tận tụy và những sản phẩm chất lượng tốt nhất.</p>
                                    </div>
                                </div>

                                <div className="client">
                                    <img
                                        src="http://anvietsoft.com/wp-content/uploads/2015/11/ky-nang-ban-hang-thanh-cong-700x400.jpg"
                                        alt="Với Cán Bộ Nhân Viên"/>
                                    <div className="desc">
                                        <h4>Với Cán Bộ Nhân Viên</h4>
                                        <p>Luôn xây dựng một môi trường làm việc thân thiện, cởi mở, thắng thắn. Mỗi
                                            nhân viên đều có một sứ mệnh cho mình và tất cả cùng hợp lực để hướng tới
                                            một mục tiêu chung: Phục vụ khách hàng một cách tốt nhất làm thoả sự kỳ vọng
                                            của quý khách hàng khi đến với Homegroup.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Vision;
