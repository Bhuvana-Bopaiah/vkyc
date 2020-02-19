import React from 'react'
import AccountImg from '../assets/account_img.png'
import UserImg from '../assets/user_img.png'
import Camera from '../assets/camera.svg'

function captureDoc() {
    return (
        <div>
                    <section class="result_screen_background_color">
            
                
            
            <div class="col-12 pl-0 pr-0 mb-5 pt-4" >
                <div class="result_screen_background_img">
                    <img src={AccountImg} class="w-100"/>
                </div>
                <div>
                  <img src={UserImg} class="result_screen_img"/>
                </div>
            </div>
            <div class="col-12 adhaar_upload_steps mb-5">
              <p class="text-center">Screen capture streaming</p>
              <ul class="pl-0 list-unstyled d-flex justify-content-center align-items-center">
                <li class="d-flex justify-content-center align-items-center mr-4">1</li>
                <li class="d-flex justify-content-center align-items-center mr-4">2</li>
                <li class="d-flex justify-content-center align-items-center">3</li>
              </ul>
            </div>
            <div class="col-12 aadhaar_content text-center">
              <h3 class="mb-5">Capture document</h3>
              <p class="mb-5">Please click the camera icon and capture the below mentioned document</p>
              <button type="button" class="btn btn-block aadhaar_btn mb-5">Pan Card <img src={Camera} class="upload_icon"/></button>
             
            </div>
            
        </section>
        </div>
    )
}

export default captureDoc
