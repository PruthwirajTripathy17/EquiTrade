import React from 'react';
import { DASHBOARD_URL } from '../config';

function OpenAccount() {
    return ( 
        <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5">Open a EquiTrade account</h1>
        <p>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
        </p>
        <a
          href={`${DASHBOARD_URL}/signup`}
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto", textDecoration: "none" }}
        >
          Sign up Now
        </a>
      </div>
    </div>
     );
}

export default OpenAccount;