import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero" style={{color:"white"}}>
      <div className="p-5 " id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="" style={{color:"white"}}>Track Tickets</a>
      </div>
      <div className="row p-5 m-3">
        <div className="col-6 p-3">
          <h1 className="fs-3 " style={{color:"white"}}>
            Search for an answer or browse help topics to create a ticket
          </h1>
          <div className=" mb-3">
          <input placeholder="Eg. how do I activate F&O  " />
          </div>
          <br />
          <a href="" style={{color:"white"}}>Track account opening</a>
          <a href="" style={{color:"white"}}>Track segment activation</a>
          <a href="" style={{color:"white"}}>Intraday margins</a>
          <a href="" style={{color:"white"}}>Kite user manual</a>
        </div>
        <div className="col-6 p-3">
          <h1 className="fs-3" style={{color:"white"}}>Featured</h1>
          <ol>
            <li>
              <a href="" style={{color:"white"}}>Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="" style={{color:"white"}}>Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;