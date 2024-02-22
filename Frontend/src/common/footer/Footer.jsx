import React from "react"
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h1>Fashion Frenzy</h1>
            <p>is the online Clothing specialist in Tunisia. We have the largest selection and the best prices in Tunisia. Tunisianet works with the biggest brands who trust it completely.
                   .</p>
     
          </div> 

          <div className='box'>
            <h2>Legal Information</h2>
            <ul>
              <li>Delivery</li>
              <li>Terms of use</li>
              <li>Secure payment</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
         <div className='box'>
            <h2>Contact Us</h2>
            <ul>
              <li> <i class="fa fa-map-marker" aria-hidden="true"></i> Sousse</li>
              <li> <li class="fa fa-envelope-open" aria-hidden="true"></li>  Fashion Frenzy@gmail.com</li>
              <li> <i class="fa fa-phone" aria-hidden="true"></i> +216 70222333</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Delivery</h2>
            <p>
            Free Delivery from 400DT of Purchase
            “Except for Large Household Appliances”.
            Possibility of collection in stores.
            *Free Delivery For 1 single Purchase ≤ 5 Pices
            </p>
          </div>
          
        </div>
      </footer>
    </>
  )
}

export default Footer
