import React from "react";
import { useSelector } from "react-redux";
import '../App.css'

const Main = () => {
    const user = useSelector((state) => state.user);
  
    return (
      <>
        <section class="vh-100" style={{backgroundColor: "#9de2ff"}}>
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-md-9 col-lg-7 col-xl-5">
        <div class="card" style={{borderRadius: "15px"}}>
          <div class="card-body p-4">
            <div class="d-flex text-black">
              <div class="flex-shrink-0">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                  alt="Generic placeholder image" class="img-fluid"
                 style={{width: "180px", borderRadius: "10px"}} />
              </div>
              <div class="flex-grow-1 ms-3">
                <h5 class="mb-1">{user.name}</h5>
                <p class="mb-2 pb-1" style={{color: "#2b2a2a"}}>{user.work}</p>
                <div class="d-flex justify-content-start rounded-3 p-2 mb-2"
                   style={{backgroundColor: "efefef"}}>
                  <div>
                    <p class="small text-muted mb-1">Contact</p>
                    <span class="mb-0">{user.country}</span> - <span class="mb-0">{user.phone}</span>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      </>
    );
  };

export default Main;