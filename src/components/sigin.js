import React from 'react'
import logo from '../assets/in_d_logo.png'

function sigin() {
    return (
        <section>
        <div className="container">
            
                <div className="d-flex logo_bg ">
                    <img src={logo}/>&nbsp;&nbsp;&nbsp;
                    <p className="mb-0">Video KYC</p>
                </div>
         
            <div className="signin_background p-5">
                <div className="text-center  signin_header">
                    <p>Log in to your account to access IN-D Video KYC</p>
                </div>
                <div className="row d-flex justify-content-center">

                    {/* <!--Grid column--> */}
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">

                        {/* <!-- Default form register --> */}
                        <form>
                            <div className="form-group">
                                <label for="exampleInputEmail1">User Name</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="demo@in-d.ai"/>

                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1 d-flex justify-content-between align-items-center">Password </label>
                                <a href="" className="forgot_password">Forgot Password?</a>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" /><i className="fa fa-eye" aria-hidden="true" style={{color:'#ccc', float: 'right',marginTop:'-27px',marginRight: '10px' }}></i>
                            </div>

                            <button type="submit" className="btn  my-4 btn-block sign_in_btn">Sign In</button>
                            <label className="form-check-label my-4 ">Keep me signed in
                                <input type="checkbox"/>
                                <span className="checkmark"></span>
                            </label>
                            <p className="New_to_ind text-center my-4 "><span>New to In-D ?</span></p>
                            <button type="submit" className="btn  mb-5 mt-4 btn-block create_btn">Create your IN-D Account</button>
                        </form>
                        {/* <!-- Default form register --> */}

                    </div>
                    {/* <!--Grid column--> */}

                </div>
            </div>
        </div>
    </section>
    )
}

export default sigin
