import React from "react";
import { DASHBOARD_URL } from "../../config";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The EquiTrade Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3 mt-5">
          <img src="media/Images/smallcaseLogo.png" style={{width:"200px",height:"50px"}}  />
          <p className="text-small text-muted p-3">Themantic investment platform</p>
        </div>
         <div className="col-4 p-3 mt-5">
          <img src="media/Images/streakLogo.png" style={{width:"200px",height:"50px"}}  />
          <p className="text-small text-muted p-3">Algo & strategy platform</p>
        </div>
         <div className="col-4 p-3 mt-5">
          <img src="media/Images/sensibullLogo.svg" style={{width:"200px",height:"50px"}}  />
          <p className="text-small text-muted p-3">Options trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/Images/zerodhaFundhouse.png" style={{width:"200px",height:"50px"}}  />
          <p className="text-small text-muted p-3">Asset management</p>
        </div>
         <div className="col-4 p-3 mt-5">
          <img src="media/Images/goldenpiLogo.png" style={{width:"200px",height:"50px"}}  />
          <p className="text-small text-muted p-3">Bonds trading platform</p>
        </div>
         <div className="col-4 p-3 mt-5">
          <img src="media/Images/dittoLogo.png"style={{width:"200px",height:"50px"}}  />
          <p className="text-small text-muted p-3">Insurance</p>
        </div>
        <a
          href={`${DASHBOARD_URL}/signup`}
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto", textDecoration: "none" }}
        >
          Signup Now
        </a>
      </div>
    </div>
  );
}

export default Universe;
