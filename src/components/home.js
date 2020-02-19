import React from 'react'
import { Link } from 'react-router-dom'

function home() {
    return (
        <div>
            <Link to='/aadharupload'>Aadhar Upload Screen</Link><br/>
            <Link to='/capturedoc'>Capture Doc Screen</Link><br/>
            <Link to='/uploadscreen'>Upload Screen</Link><br/>
            <Link to='/consent'>consent Screen</Link><br/>
            <Link to='/result_screen'>result Screen</Link><br/>
            <Link to='/pan_card'>Pan card Screen</Link><br/>
            <Link to='/proceed_camara'>Procced to camara</Link><br/>
            <Link to='/sigin'>sigin page</Link><br/>
            <Link to='/starting'>starting page</Link><br/>
            <Link to='/waiting'>waiting page</Link><br/>
            <Link to='/selfie_capture'>Selfie Capture page</Link><br/>
            <Link to='/dashboard'>dashboard page</Link><br/>
        </div>
    )
}

export default home
