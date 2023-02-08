import React from 'react'

const Contact = () => {
  return (
    <div className="contact">
      <main>
        <h1>Contact Us</h1>

        <form>
        <div>
          <lable>Name</lable>
          <input type="text" required placeholder='Abc'></input>
          </div>

          <div>
            <lable>Email</lable>
            <input type="Email" required placeholder='Abc@xyz.com' />
          </div>
          <div>
            <lable>Message</lable>
            <input type="text" required placeholder='tell us about your query' />
          </div>
          <button type='submit'>Send</button>
            
        </form>
      </main>
    </div>
  )
}

export default Contact