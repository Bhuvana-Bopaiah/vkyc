import React,{useState} from 'react'

import AccountImg from '../assets/account_img.png'
import UserImg from '../assets/user_img.png'
import Camera from '../assets/camera.svg'

function proceed_camara() {
    return (
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
          <h3 className="mb-3">Liveliness Test</h3>
          <p className="mb-3">Hold your cmera infornt of ypu and click the capture button.Now blink thrice in the next 5 seconds</p>
          <button type="button" className="btn btn-block mb-5 aadhaar_btn">Proceed to Camera <img src={Camera} className="upload_icon"/></button>
         
        </div>
        
    </section>
    )
}

export default proceed_camara
