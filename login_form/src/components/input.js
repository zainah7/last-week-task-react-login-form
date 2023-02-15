import React from "react"; 

function Input() {
     return (
          <div className="col-sm-12 col-lg-6 div2" id="input">
                    <h2>Lovebirds</h2>
                    <div className="login"/>
                        <h5 className="text-secondary fs-4">Welcome to the  Lovebirds Site</h5>
                        <form className="text-start" id="form-info"/>
                            <label for="username"  className="form-label text-secondary text-opacity-30">User's name or Email</label><br/>
                            <input type="text" className="form-control border-secondary text-dark" id="username" placeholder="User's name or Email" required /><br/>
    
                            <label for="password" className="form-label text-secondary text-opacity-30">Password</label><br/>
                            <input type="password" className="form-control border-secondary text-dark"  id="password" placeholder="****" required /> <br/>
                            <div className="text-end ">
                                <a href="/#" className="text-secondary text-opacity-95 text-decoration-line-through
                                ">Forgot password?</a>
                            </div>
                            <button type="submit" className=" btn-lg btn btn-secondary  mx-auto d-block">Sign in</button>
                        <form/>
                    <div/>
            </div>

     );
}

export default Input;
