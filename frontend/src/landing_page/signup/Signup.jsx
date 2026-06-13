import React, { useEffect } from 'react';
import { DASHBOARD_URL } from '../../config';

function Signup() {
    useEffect(() => {
        window.location.href = `${DASHBOARD_URL}/signup`;
    }, []);

    return ( 
        <div style={{ textAlign: 'center', marginTop: '100px', fontFamily: 'sans-serif' }}>
            <h2>Redirecting to Signup page...</h2>
            <p>If you are not redirected, <a href={`${DASHBOARD_URL}/signup`}>click here</a>.</p>
        </div>
     );
}

export default Signup;