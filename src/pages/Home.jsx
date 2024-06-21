import React, { useEffect, useRef } from "react";


function Home() {
    return (
        
        <div className="homeContainer">
        <div className="row">
          <div className="col-12">
            <video className="video-bg" autoPlay muted loop>
              <source src="/path/to/your/video.mp4" type="video/mp4" />
              Aquí va el video
            </video>
            <div className="row">
            <div className="d-none d-sm-block col-md-6 col-lg-12">
<p>envíos en Uruguay</p>
<p>100% Cashback</p>
<div className="d-none d-sm-block col-md-6 col-lg-12">
<p>Soporte 24/7</p>
<p>100% Pago seguro</p>
            </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Home