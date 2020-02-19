import React from 'react'
import AccountImg from '../assets/account_img.png'
import UserImg from '../assets/user_img.png'

function result_screen() {
    return (
        <section className="result_screen_background_color">

    <div className="col-12 pl-0 pr-0 pt-4">
        <div className="result_screen_background_img">
            <img src={AccountImg} className="w-100"/>
        </div>
        <div>
            <img src={UserImg} className="result_screen_img"/>
        </div>
    </div>
    <div className="col-12">
        <h2 className="text-center result_screen mb-3">Result Screen</h2>
        <div className="col-12 d-flex justify-content-center">
            <div>
                <img src={UserImg} className="user_profile_img"/>
            </div>
        </div>
        <div className="col-12">
            <ul className="pl-0 list-unstyled list_of_proved">
                <li>
                    <div className="d-flex align-items-center justify-content-between div_bottom_boder">
                        <p className="mt-3">Liveliness test result</p>
                        <i className="fa fa-check-circle" aria-hidden="true"></i>
                    </div>
                </li>
                <li>
                    <div className="d-flex align-items-center justify-content-between div_bottom_boder">
                        <p className="mt-3">Face match result</p>
                        <i className="fa fa-check-circle" aria-hidden="true"></i>
                    </div>
                </li>
                <li>
                    <div className="d-flex align-items-center justify-content-between div_bottom_boder">
                        <p className="mt-3">Cross check result</p>
                        <i className="fa fa-check-circle" aria-hidden="true"></i>
                    </div>
                </li>
                <li>
                    <div className="d-flex align-items-center justify-content-between div_bottom_boder">
                        <p className="mt-3">Goverment DB validation result</p>
                        <i className="fa fa-check-circle" aria-hidden="true"></i>
                    </div>
                </li>
                <li>
                    <div className="d-flex align-items-center justify-content-between div_bottom_boder">
                        <p className="mt-3">Geo tagging</p>
                        <i className="fa fa-check-circle" aria-hidden="true"></i>
                    </div>
                </li>
            </ul>
        </div>
        <div className="col-12">
            <div className="profile_details mb-4">
              
                <div className="card ">
                    <div className="card_header">
                        <h3 className="mb-0">Profile details</h3>
                    </div>
                  
                    <div className="card-body">
                        <div className="d-flex align-items-center justify-content-between profile_details_boder">
                            <p className="mt-3">Name</p>
                            <h4 className="mt-3 mb-3">Anjali Santosh</h4>
                        </div>
                        <div className="d-flex align-items-center justify-content-between profile_details_boder">
                            <p className="mt-3">DOB</p>
                            <h4 className="mt-3 mb-3">13/06/1997</h4>
                        </div>
                        <div className="d-flex align-items-center justify-content-between profile_details_boder">
                            <p className="mt-3">Father Name</p>
                            <h4 className="mt-3 mb-3">Santosh Kumar</h4>
                        </div>
                        <div className="d-flex align-items-center justify-content-between profile_details_boder">
                            <p className="mt-3">GPS</p>
                            <h4 className="mt-3 mb-3"><span>48.3191</span><span>5.5778</span></h4>
                        </div>
                        <div className="d-flex align-items-center justify-content-between profile_details_boder">
                            <p className="mt-3">Timestamp</p>
                            <h4 className="mt-3 mb-3"><span>2020-02-03</span><span>10:02:21</span>IST</h4>
                        </div>
                        <div className="d-flex align-items-center justify-content-between profile_details_boder">
                            <p className="mt-3">Gender</p>
                            <h4 className="mt-3 mb-3">Female</h4>
                        </div>
                        <div className="d-flex align-items-center justify-content-between ">
                            <p className="mt-3">PAN</p>
                            <h4 className="mt-3 mb-3">AAAAA1234Z</h4>
                        </div>
                    </div>

                </div>
              
            </div>
        </div>

    </div>
    <div className="col-12 p-0">
        <button type="button" className="btn btn-block submit_btn">Submit</button>
    </div>
</section>
    )
}

export default result_screen
