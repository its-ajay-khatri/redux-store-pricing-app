import React, {useState} from "react";
import Header from "./header";

const Pricing = () => {

    const dummyData = [
      { "plan": "Basic",
        "monthlyPrice": "19.99",
        "yearlyPrice": "229.99",
        "storage" : "500GB storage",
        "users": "2 users Allowed",
        "data": "send upto 1GB"
    },
    { "plan": "Professional",
        "monthlyPrice": "24.99",
        "yearlyPrice": "299.99",
        "storage" : "1TB storage",
        "users": "5 users Allowed",
        "data": "send upto 10GB"
    },
    { "plan": "Master",
        "monthlyPrice": "39.99",
        "yearlyPrice": "459.99",
        "storage" : "2TB storage",
        "users": "10 users Allowed",
        "data": "send upto 20GB"
    }
    ]

    const[priceChanger, setPriceChanger] = useState(true);

    const changeValueFun = () => {
        setPriceChanger(!priceChanger)
    }
    return(
        <>  
            <Header />
            <div class="top">
                <h1>Our Pricing</h1>
                <div class="toggle-btn">
                    <span style={{margin: "0.8em"}}>Monthly</span>
                    <label class="switch">
                    <input type="checkbox" id="checbox" onClick={changeValueFun}/>
                    <span class="slider round"></span>
                    </label>
                    <span style={{margin: "0.8em"}}>Annualy</span>
                </div>
            </div>
    <div className="pricing">
    <div class="container">
      <div class="card-deck mb-3 text-center">
        { dummyData.map((val, index) => {
          return(
            <>
            <div class="card card-grid mb-4 box-shadow">
              <div class="card-body">
              <p class="my-0 font-weight-normal">{val.plan}</p>
                { priceChanger ? <h1 class="card-title pricing-card-title">$ <small>{val.monthlyPrice}</small></h1> :
                <h1 class="card-title pricing-card-title">$ <small>{val.yearlyPrice}</small></h1> }
                <ul class="list-unstyled mt-3 mb-4">
                  <li>{val.storage}</li>
                  <li>{val.users}</li>
                  <li>{val.data}</li>
                </ul>
                <button type="button" class="btn btn-lg btn-block btn-outline-primary">LEARN MORE</button>
              </div>
            </div>
            </>
          );
        }) }
      </div>

    </div>
    </div>
        </>
    );
}

export default Pricing;