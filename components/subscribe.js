export default function Subscribe() {
  return (
    <section className="subscribeBlock section">
      <div className="container">
        <div className='columns is-multiline is-justify-content-center'>
          <div className='column is-12'>
            <h2 className="has-text-centered blockTitle">Subscribe</h2>
          </div>
          <div className="column is-narrow">
            <div id="mc_embed_signup">
              <form action="https://rallydiaries.us14.list-manage.com/subscribe/post?u=ad30f92742af884d21af7748b&amp;id=68dad50489&amp;f_id=0062fee0f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate subscribeForm" target="_self">
                <div id="mc_embed_signup_scroll">
                
                <div className="mc-field-group inputWrapper has-text-centered">
                  <label htmlFor="mce-EMAIL" className="is-hidden">Email Address  <span className="asterisk">*</span></label>
                  <input type="email" name="EMAIL" className="required email emailInput" placeholder="your email here plz" id="mce-EMAIL" required />
                  <span id="mce-EMAIL-HELPERTEXT" className="helper_text"></span>
                </div>

                <h3 className="has-text-centered blockSubTitle">Sign up here to get the latest news and updates about <strong><i>RallyDiaries eRally Championship</i></strong> & <strong><i>Bratsos Team</i></strong>.</h3>

                <div className='newContent'>
                  <p><i>We&apos;ll only send emails when new content is posted. No spam.</i></p>
                </div>

                <div id="mce-responses" className="clear foot">
                  <div className="response is-hidden" id="mce-error-response"></div>
                  <div className="response is-hidden" id="mce-success-response"></div>
                </div>
                <div className='is-hidden' aria-hidden="true">
                  <input type="text" name="b_ad30f92742af884d21af7748b_68dad50489" tabIndex="-1" />
                  </div>
                  <div className="optionalParent">
                    <div className="clear foot has-text-centered">
                      <input type="submit" value="Let's race!" name="subscribe" id="mc-embedded-subscribe" className="submitButton" />
                    </div>
                  </div>
                </div>
              </form>
            </div> 
          </div>
        </div>
      </div>
    </section>
  )
}