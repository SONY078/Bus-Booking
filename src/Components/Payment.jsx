// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useAuth0 } from '@auth0/auth0-react';
// const Login = () => {
   
//         const { loginWithRedirect,logout, isAuthenticated } = useAuth0();

//     return (
//         <>
//                     {
//                       isAuthenticated ? (
//                         <button onClick={() => logout({ returnTo: window.location.origin })}>Log Out
//                         </button>
//                       ) : (
//                         <button onClick={() => loginWithRedirect()}>Log In</button>
                        
//                       )
//                     }
//         </>
// )
// }
// export default Login;


// export const Signup = () => {
//     return (
//         <div>
//             <div id="id01" class="modal">
//                 <form class="modal-content">
//                 <div class="container">
//                 <h1>Sign Up</h1>
//                 <p>Please fill in this form to create an account.</p>
//                 <hr/>
//                 <label for="email"><b>Email</b></label>
//                 <input type="text" placeholder="Enter Email" name="email" required/>
//                 <label for="psw"><b>Password</b></label>
//                 <input type="password" placeholder="Enter Password" name="psw" required/>
//                 <label for="psw-repeat"><b>Repeat Password</b></label>
//                 <input type="password" placeholder="Repeat Password" name="psw-repeat" required/>
//                 <label>
//                 <input type="checkbox" checked="checked" name="remember" style={{marginBottom:"15px"}}/> Remember me
//                 </label>
//                 <p>By creating an account you agree to our <Link to="#" style={{color:"dodgerblue"}}>Terms & Privacy</Link>.</p>
//                 <div class="clearfix">
//                 <Link to='/home'><button type="button" class="cancelbtn">Cancel</button></Link>
//                 <Link to='/login'><button type="submit" class="signupbtn">Sign Up</button></Link>
//                 </div>
//             </div>
//         </form>
// </div>
//         </div>
//     )
// }

// export const Checkout = () =>
// {
//     return(
//         <>
// <div class="row">
//   <div class="col-75">
//     <div class="checkout-container">
//       <form>
      
//         <div class="row">
//           <div class="col-50">
//             <h3>Billing Address</h3>
//             <label for="fname"><i class="fa fa-user"></i> Full Name</label>
//             <input type="text" id="fname" name="firstname" placeholder="enter name"/>
//             <label for="email"><i class="fa fa-envelope"></i> Email</label>
//             <input type="text" id="email" name="email" placeholder="enter mail address"/>
//             <label for="adr"><i class="fa fa-address-card-o"></i> Address</label>
//             <input type="text" id="adr" name="address" placeholder="enter address"/>
//             <label for="city"><i class="fa fa-institution"></i> City</label>
//             <input type="text" id="city" name="city" placeholder="enter city"/>

//             <div class="row">
//               <div class="col-50">
//                 <label for="state">State</label>
//                 <input type="text" id="state" name="state" placeholder="NY"/>
//               </div>
//               <div class="col-50">
//                 <label for="zip">Zip</label>
//                 <input type="text" id="zip" name="zip" placeholder="10001"/>
//               </div>
//             </div>
//           </div>

//           <div class="col-50">
//             <h3>Payment</h3>
//             <label for="fname">Accepted Cards</label>
//             <div class="icon-container">
//               <i class="fa fa-cc-visa" style={{color:"navy"}}></i>&emsp;
//               <i class="fa fa-cc-amex" style={{color:"blue"}}></i>&emsp;
//               <i class="fa fa-cc-mastercard" style={{color:"red"}}></i>&emsp;
//               <i class="fa fa-cc-discover" style={{color:"orange"}}></i>
//             </div>
//             <label for="cname">Name on Card</label>
//             <input type="text" id="cname" name="cardname" placeholder="enter name"/>
//             <label for="ccnum">Credit card number</label>
//             <input type="text" id="ccnum" name="cardnumber" placeholder="ex:1111-2222-3333-4444"/>
//             <label for="expmonth">Exp Month</label>
//             <input type="text" id="expmonth" name="expmonth" placeholder="ex:September"/>
//             <div class="row">
//               <div class="col-50">
//                 <label for="expyear">Exp Year</label>
//                 <input type="text" id="expyear" name="expyear" placeholder="ex:2022"/>
//               </div>
//               <div class="col-50">
//                 <label for="cvv">CVV</label>
//                 <input type="text" id="cvv" name="cvv" placeholder="see backside of the card"/>
//               </div>
//             </div>
//           </div>
          
//         </div>
//         <label>
//           <input type="checkbox" checked="checked" name="sameadr"/> Shipping address same as billing
//         </label>
//         <input type="submit" value="Continue to checkout" class="btn-checkout"/>
//       </form>
//     </div>
//   </div>
//   </div>
//         </>
//     );
// }

import React from 'react'

function Payment() 
{
  return (
    <div class="row">
      <div class="col-75">
        <div class="checkout-container">
          <form>
          
            <div class="row">
              <div class="col-50">
                <h3>Billing Address</h3>
                <label for="fname"><i class="fa fa-user"></i> Full Name</label>
                <input type="text" id="fname" name="firstname" placeholder="enter name"/>
                <label for="email"><i class="fa fa-envelope"></i> Email</label>
                <input type="text" id="fname" name="email" placeholder="enter mail address"/>
                <label for="adr"><i class="fa fa-address-card-o"></i> Address</label>
                <input type="text" id="fname" name="address" placeholder="enter address"/>
                <label for="city"><i class="fa fa-institution"></i> City</label>
                <input type="text" id="fname" name="city" placeholder="enter city"/>
    
                <div class="row">
                  <div class="col-50">
                    <label for="state">State</label>
                    <input type="text" id="fname" name="state" placeholder="NY"/>
                  </div>
                  <div class="col-50">
                    <label for="zip">Zip</label>
                    <input type="text" id="fname" name="zip" placeholder="10001"/>
                  </div>
                </div>
              </div>
    
              <div class="col-50">
                <h3>Payment</h3>
                <label for="fname">Accepted Cards</label>
                <div class="icon-container">
                  <i class="fa fa-cc-visa" style={{color:"navy"}}></i>&emsp;
                  <i class="fa fa-cc-amex" style={{color:"blue"}}></i>&emsp;
                  <i class="fa fa-cc-mastercard" style={{color:"red"}}></i>&emsp;
                  <i class="fa fa-cc-discover" style={{color:"orange"}}></i>
                </div>
                <label for="cname">Name on Card</label>
                <input type="text" id="fname" name="cardname" placeholder="enter name"/>
                <label for="ccnum">Credit card number</label>
                <input type="text" id="fname" name="cardnumber" placeholder="ex:1111-2222-3333-4444"/>
                <label for="expmonth">Exp Month</label>
                <input type="text" id="fname" name="expmonth" placeholder="ex:September"/>
                <div class="row">
                  <div class="col-50">
                    <label for="expyear">Exp Year</label>
                    <input type="text"id="fname" name="expyear" placeholder="ex:2022"/>
                  </div>
                  <div class="col-50">
                    <label for="cvv">CVV</label>
                    <input type="text" id="fname" name="cvv" placeholder="see backside of the card"/>
                  </div>
                </div>
              </div>
              
            </div>
            <label>
              <input type="checkbox" checked="checked" name="sameadr"/> Shipping address same as billing
            </label>
            <input type="submit" value="Continue to checkout" class="btn-checkout"/>
          </form>
        </div>
      </div>
      </div>
  );
}

export default Payment