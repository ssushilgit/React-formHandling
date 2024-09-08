import React from 'react'
import './App.css'
const App = () => {
  return (
    <div className='container'>
        <h1>Form in React</h1>
        <form action="">
            <label htmlFor="firstname">First Name*</label>
            <input type="text" placeholder='Enter First Name' name='firstname' />

            <label htmlFor="lastname">Last Name*</label>
            <input type="text" placeholder='Enter Last Name' name='lastname' />

            <label htmlFor="firstname">Email*</label>
            <input type="email" placeholder='Enter Email' name='email' />

            <label htmlFor="contact">Contact*</label>
            <input type="text" placeholder='Enter Phone#' name='contact' />

            <label htmlFor="gender">Gender</label>
            <input type="radio" name='gender' /> Male
            <input type="radio" name='gender' /> Female
            <input type="radio" name='gender' /> Other

            <label htmlFor="subject">Subject</label>
            <select name="subject" id="subject">
              <option value="math">Math</option>
              <option value="english">English</option>
              <option value="science">Science</option>
              <option value="social">Social</option>
            </select>

            <label htmlFor="resume">Resume</label>
            <input type="file" placeholder='Select Resume' name='resume' />

            <label htmlFor="url">URL</label>
            <input type="text" name='url' placeholder='Enter image url' />

            <label htmlFor="about">About</label>
            <textarea name="about" id="about" rows="10" cols="30" placeholder='Enter description'></textarea>

            <button type='button'>Reset</button>
            <button type='submit'>Submit</button>

        </form>
    </div>
  )
}

export default App