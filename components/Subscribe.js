import React, { useState } from "react";
import axios from "axios";

function Subscribe() {

    const [email, setEmail] = useState('')
    const [state, setState] = useState('idle')
    const [errorMsg, setErrorMsg] = useState(null)
  
    const subscribe = async (e) => {
      e.preventDefault()
      setState('Loading')
  
      try {
        const response = await axios.post('/api/subscribe', { email })
        //console.log(response)
        setState('Success')
        setEmail('')
      } catch (e) {
        //console.log(e.response.data.error)
        setErrorMsg(e.response.data.error)
        setState('Error')
      }
    }
  
    return (
      <section className="subscribeBlock section">
        <div className="container">
          <div className="columns is-multiline is-justify-content-center">
            <div className='column is-12'>
              <h2 className="has-text-centered blockTitle">Subscribe</h2>
            </div>
            <div className="column is-narrow">
              <form className="subscribeForm" onSubmit={subscribe}>
                  <div className="inputWrapper has-text-centered">
                    <input
                      required
                      id="email-input"
                      className="emailInput"
                      name="email"
                      type="email"
                      placeholder="your email here plz"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <h3 className="has-text-centered blockSubTitle">Sign up here to get the latest news and updates about <strong><i>RallyDiaries eRally Championship</i></strong> & <strong><i>Bratsos Team</i></strong>.</h3>

                  <div className='newContent'>
                    <p><i>We&apos;ll only send emails when new content is posted.<br />No spam.</i></p>
                  </div>

                  <div className="has-text-centered">
                    <button
                      disabled={state === 'Loading'}
                      type="submit"
                      className="submitButton"
                      onClick={subscribe}
                    >
                      Let&apos;s race!
                    </button>
                  </div>
                {state === 'Error' && (
                  <div className="error">
                    <p className="message">{errorMsg}</p>
                  </div>
                )}
                {state === 'Success' && (
                  <div className="success">
                    <p className="message">Awesome, you&apos;ve been subscribed!</p>
                  </div>
                )}
              </form>
            </div>
          </div>
          
        </div>
        
      </section>
    )
  }
  
  export default Subscribe