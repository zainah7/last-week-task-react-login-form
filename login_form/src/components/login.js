import React from "react";

function App() {
     return (
       
    // <div  className="App"/>
        <>
       <section className="container mt-4 mb-4"/>
           <div className="row text-center"/>
               <div className="col-sm-12 col-lg-6 div">
                   <img src="assets/img/LoveBird.jpg" alt="LoveBird"/>
                   <div className="image-text">
                       <h4>New friendly birds</h4>
                       <p className="ms-7">
                           Lovebird is the common name for the genus Agapornis, a small group of parrots in 
                           the Old World parrot family Psittaculidae.
                       </p>
                   </div>
               </div>
   
               <div className="col-sm-12 col-lg-6 div2"/>
                   <h2>Lovebirds</h2>
                   <div className="login"/>
                       <h5 className="text-secondary fs-4">Welcome to the  Lovebirds Site</h5>
                       <form className="text-start" id="form-info"/>
                           <label for="username" className="form-label text-secondary text-opacity-30">User's name or Email</label><br/>
                           <input type="text" className="form-control border-secondary text-dark" id="username" placeholder="User's name or Email" required /><br/>
   
                           <label for="password" className="form-label text-secondary text-opacity-30">Password</label><br/>
                           <input type="password" className="form-control border-secondary text-dark"  id="password" placeholder="****" required/><br/>
                           <div className="text-end ">
                               <a href="/#" className="text-secondary text-opacity-95 text-decoration-line-through
                               ">Forgot password?</a>
                           </div>

                           <button type="submit" className=" btn-lg btn btn-secondary  mx-auto d-block">Sign in</button>
                       <form/>
                       <div className="or">
                           <div className="first"></div>
                           <p id="or">or</p>
                           <div className="second"></div>
                       </div>
                       <div className="google">
                           <img src="assets/img/Google icon.png" alt="google-icon" height="16px"/>
                           <span>Sign in with Google</span>
                       </div>
                       <div className="account text-secondary text-opacity-85">
                           <p> <span className="new"> New LoveBirds?</span> <a href="/#" className="text-secondary text-opacity-85">Create Account</a></p>
                       </div>
                   <div/>
               <div/>
           <div/>
   
       <section/>
       <div/>
       </>
       
     );
   }
   

export default App;