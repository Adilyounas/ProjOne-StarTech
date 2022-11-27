import React from 'react'

const Contact = () => {
  return (
    <div className="contact">
      <main>
        <h1>Contact Us</h1>

        <form action="">
          <div>
            <label htmlFor="">Name</label>
            <input required type="text" name="" id=""  placeholder='Abs'/>
          </div>

          <div>
            <label htmlFor="">Email</label>
            <input required type="email" name="" id=""  placeholder='Abs@xyz.com'/>
          </div>

          <div>
            <label htmlFor="">Message</label>
            <input required type="text" name="" id=""  placeholder='tell us about your query...'/>
          </div>


<button type='submit'>Send</button>

        </form>
      </main>
    </div>
  )
}

export default Contact