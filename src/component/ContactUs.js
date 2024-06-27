import React from 'react'
import Header from './Header'
import Footer from './Footer'

function ContactUs() {
    return (
        <div>
            <Header />
            <div class=" p-3">
    <div  style={{padding:"50px 145px"}}>
      <div class="card-section"> <h2 style={{fontWeight:"800",textAlign:"center"}} class="">Contact Us</h2></div>
     
      <form class="form-wrapper">
        <div class="form-card">
          <label  for="full_name">Full Name</label>
          <input
            class="form-input"
            type="text"
            name="full_name"
            required="required"
          />
        
        </div>

        <div class="form-card">
          <label  for="email">Email</label>
          <input
            class="form-input"
            type="email"
            name="email"
            required="required"
          />
         
        </div>

        <div class="form-card">
          <label  for="phone_number">Phone number</label>
          <input
            class="form-input"
            type="number"
            name="phone_number"
            required="required"
          />
         
        </div>

        <div class="form-card">
          <label  for="phone_number"
          >Address</label
        >
          <textarea
            class="form-textarea"
            maxlength="420"
            rows="3"
            name="phone_number"
            required="required"
          ></textarea>
         
        </div>
       <div class="col-md-3">
        <button class="login"> Submit </button>
       </div>
         
       
      </form>
    </div>
  </div>
            <Footer />
        </div>
    )
}

export default ContactUs