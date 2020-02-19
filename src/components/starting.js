import React from 'react'

function starting() {
    return (
        <section className="result_screen_background_color ">
            
         <div className="col-12 p-4">
           <div className="çonsent_content pt-4">
             <h1 className="pt-5">Starting</h1>
             <div className="loader'mb-5">
              <span className="loader__dot pulse pulse__one"></span>
              <span className="loader__dot pulse pulse__two"></span>
              <span className="loader__dot pulse pulse__three"></span>
            </div>
            <div className="mt-5">
              <p className="pb-5 mb-3">you will be in a video call with one of our customer facing agent in following seconds</p>
            </div>
             

           </div>
           <div className="counter p-5">
               <p className="text-center">Sec</p>
               <h1 className="text-center ">10</h1>
           </div>
           
         </div>
            
        </section>
    )
}

export default starting
