import React from 'react'
import {Link} from "react-router-dom"; 

function Error() {
    return (
        <div>
            <h2> Error 404 Not Found</h2>

           <Link to ="/" className='btn'> Go To Home Page
           </Link> 

        </div>
    )
}

export default Error
