import React from 'react'

function selfie_capture() {
    return (
        <section className=" ">
            
         <div className="">
           <div className="selfie_screen_header_background_color">
             <h4 className="text-center p-4 mb-0">Selfie capture</h4>
           </div>
           <div className="selfie_screen_background_color p-3">
             <div className="oval_shape"></div>
             <p className="text-center pt-3">Place your face inside the circle and blink. Hold the button to start recording the video for 5 secons.</p>
             <div className="outer_cirlce_border ">
               <div className="inside_circle"></div>
             </div>
           </div>
         </div>
           
      
            
        </section>
    )
}

export default selfie_capture
