import React from 'react'
import { Link } from 'react-router-dom'

function home() {
    return (
        <div>
            <Link to='/aadharupload'>Aadhar Upload Screen</Link><br/>
            <Link to='/capturedoc'>Capture Doc Screen</Link><br/>
            <Link to='/uploadscreen'>Upload Screen</Link>
        </div>
    )
}

export default home
