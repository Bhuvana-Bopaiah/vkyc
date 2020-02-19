import React from 'react'
import AccountImg from '../assets/account_img.png'
import UserImg from '../assets/user_img.png'
import Upload from '../assets/upload.svg'

function aadharUpload() {
    return (
        <div>
            <section className="result_screen_background_color">
            
            
            <div className="col-12 pl-0 pr-0 mb-5 pt-4" >
                <div className="result_screen_background_img">
                    <img src={AccountImg} className="w-100"/>
                </div>
                <div >
                  <img src={UserImg} className="result_screen_img"/>
                </div>
            </div>
            <div className="col-12 adhaar_upload_steps mb-5">
              <ul className="pl-0 list-unstyled d-flex justify-content-center align-items-center">
                <li className="d-flex justify-content-center align-items-center mr-4">1</li>
                <li className="d-flex justify-content-center align-items-center mr-4">2</li>
                <li className="d-flex justify-content-center align-items-center">3</li>
              </ul>
            </div>
            <div className="col-12 aadhaar_content text-center">
              <h3 className="mb-3">Aadhaar XML upload</h3>
              <p className="mb-3">Please upload your Aadhaar XML file by clicing he bellow button</p>
              <button type="button" className="btn btn-block mb-5 aadhaar_btn">Aadhaar XML <img src={Upload} className="upload_icon"/></button>
              <p className="pb-5">You can always downlad your Aadhaar XML <a href="#">here</a></p>
            </div>
            
        </section>

        </div>
    )
}

export default aadharUpload
