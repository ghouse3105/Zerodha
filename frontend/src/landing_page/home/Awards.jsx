import React from "react";
 
function Awards(){
    return(
        <div className="container p-5 mt-5">
            <div className="row">
                <div className="col-6">
                    <img src='media/images/largestBroker.svg' alt="Largest Broker Award" className="img-fluid"></img>
                </div>
                <div className="col-6 mt-3">
                    <h2>Largest stockbroker in India</h2>
                    <p>2 million+ users contribute  over 15% of all trades in India daily by trading and investing in:</p>
                    <div className="row mb-5">
                        <div className="col-6 p-3">
                            <ul>
                        <li> 
                            <p>Stock & IPO's </p>
                        </li>
                        <li> 
                            <p>Direct mutual funds</p>
                        </li>
                        <li> 
                            <p>Bonds and Govt.securities</p>
                        </li>
                        
                    </ul>
                        </div>
                        <div className="col-6 p-3">
                                <ul>
                        <li> 
                            <p>features and options </p>
                        </li>
                        <li> 
                            <p>commodity derivatives</p>
                        </li>
                        <li> 
                            <p>currency derivatives</p>
                        </li>
                        
                    </ul>
                        </div>
                    </div>
                    <img src="media/images/pressLogos.png" alt="Press Logos" className="img-fluid" style={{width:"80%"}}></img>
                    
                </div>
            </div>
           
        </div>
    )
}
export default Awards;