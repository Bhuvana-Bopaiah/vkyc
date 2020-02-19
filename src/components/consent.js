import React, { useState } from 'react'

function Consent() {

    const [btnClass, setBtnState] = useState('btn yes_btn')
    const clickHandler = event => {
        setBtnState('btn yes_btn yes_btn_bg')

    }

    return (
        <section class="result_screen_background_color content_page">
            
         <div class="col-12 p-4">
           <div class="çonsent_content pt-4">
             <h1 class="pt-5 pb-5">consent or VideoKYC</h1>
             <p class="pb-5 mb-3">Please give your consent for using your camera,microphone and screen capture by clicking 'allow' on all the pop-ups that appear.</p>

           </div>
            <button type="button" className={btnClass} onClick={clickHandler}>Yes</button>
         </div>
            
        </section>
    )
}

export default Consent
