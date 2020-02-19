import React from 'react'
import AccountImg from '../assets/account_img.png'
import UserImg from '../assets/user_img.png'
import UserImg2 from '../assets/user_img_2.png'
import camera from '../assets/camera.svg'
import Call from '../assets/call.svg'
import pan from'../assets/pan.png'

function uploadScreen() {
    return (
        <section className="">

        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xl-12 d-flex pl-0 pr-0">
            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-2 upload_tab_bg pl-0 pr-0">
                <ul className="nav nav-tabs upload_tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true"><i className="fa fa-battery-half" aria-hidden="true"></i>&nbsp;Status</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false"><i className="fa fa-check-circle" aria-hidden="true"></i>&nbsp;Validation</a>
                    </li>

                </ul>
                <div className="tab-content mt-5" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <div className="step step-active">
                            <div>
                                <div className="circle">1</div>
                            </div>
                            <div>
                                <div className="title mb-2 border_bottom active">Geo-tagging</div>

                            </div>
                        </div>
                        <div className="step ">
                            <div>
                                <div className="circle">2</div>
                            </div>
                            <div>
                                <div className="title  mb-2 border_bottom">Extraction</div>

                            </div>
                        </div>
                        <div className="step">
                            <div>
                                <div className="circle">3</div>
                            </div>
                            <div>
                                <div className="title  mb-2 border_bottom">Liveliness</div>

                            </div>
                        </div>
                        <div className="step">
                            <div>
                                <div className="circle">4</div>
                            </div>
                            <div>
                                <div className="title  mb-2 border_bottom">Cross Validation</div>

                            </div>
                        </div>
                        <div className="step">
                            <div>
                                <div className="circle">5</div>
                            </div>
                            <div>
                                <div className="title ">Face Match</div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <div className="pan_card_picture p-2">
                            <img src={pan} className="w-100"/>
                        </div>
                        <div className="p-3">
                            <div className="md-form">
                                <input type="text" id="form1" className="form-control"/>
                                <label for="form1">Name</label>
                            </div>
                            <div className="md-form">
                                <input type="text" id="form1" className="form-control"/>
                                <label for="form1">Father Name</label>
                            </div>
                            <div className="md-form">
                                <input type="text" id="form1" className="form-control"/>
                                <label for="form1">Pan Number</label>
                            </div>
                            <div className="md-form">
                                <input type="text" id="form1" className="form-control"/>
                                <label for="form1">DOB</label>
                            </div>
                        </div>
                        <div className="p-2">
                            <button type="button" className="btn btn-block verify_btn mb-5 ">verify</button>
                        </div>
                    </div>

                </div>

            </div>
            <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-xs-7 vedio_cal_bg ">
                <div className="text-center">
                <video width='520' height='1000' controls>
                         
                       </video>

                    <img src={AccountImg} className="vedio_screen_img"/>

                    <div className="d-flex vedio_icons">
                        <div className="micro_phone mr-3 d-flex align-items-center justify-content-center"><i className="fa fa-microphone" aria-hidden="true"></i></div>
                        <div className="call d-flex align-items-center justify-content-center"><img src={Call}/></div>
                    </div>
                </div>

            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3 pl-0 pr-0">
                <section className="result_screen_background_color">

                    <div className="col-12 pl-0 pr-0 mb-5 pt-4">
                        <div className="result_screen_background_img">
                            <img src={AccountImg} className="w-100"/>
                        </div>
                        <div>
                            <img src={UserImg} className="result_screen_img"/>
                        </div>
                    </div>
                    <div className="col-12 adhaar_upload_steps mb-5">
                        <p className="text-center">Screen capture streaming</p>
                        <ul className="pl-0 list-unstyled d-flex justify-content-center align-items-center">
                            <li className="d-flex justify-content-center align-items-center mr-4">1</li>
                            <li className="d-flex justify-content-center align-items-center mr-4">2</li>
                            <li className="d-flex justify-content-center align-items-center">3</li>
                        </ul>
                    </div>
                    <div className="col-12 aadhaar_content text-center">
                        <h3 className="mb-5">Capture document</h3>
                        <p className="mb-5">Please click the camera icon and capture the below mentioned document</p>
                        <button type="submit" className="btn btn-block aadhaar_btn mb-5">Pan Card <img src={camera} className="upload_icon"/></button>

                    </div>

                </section>
            </div>
        </div>
    </section>
    )
}

export default uploadScreen
