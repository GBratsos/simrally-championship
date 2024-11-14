import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faHeartPulse } from '@fortawesome/free-solid-svg-icons'
import {
  faFacebookF,
  faInstagram,
  faYoutube,
  faDiscord,
  faTwitch,
  faTwitter,
  faViber,
  faTiktok,
} from '@fortawesome/free-brands-svg-icons'

export default function Sitefooter() {
  return (
    <footer>
      <section className='footer-top'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-12'>
              <h3 className='has-text-centered blockTitle'>We are social</h3>
              <h4 className='has-text-centered footerSubTitle'>
                <i>follow, like and share with love</i>
              </h4>
              <ul className='inline-list social-media-menu is-centered'>
                <li>
                  <a href='https://fb.com/rallydiaries' target='_blank' rel='noreferrer' aria-label='Facebook'>
                    <span className='fa-stack fa-2x'>
                      <FontAwesomeIcon icon={faCircle} className='fa-stack-2x' />
                      <FontAwesomeIcon icon={faFacebookF} className='fa-stack-1x' />
                    </span>
                  </a>
                </li>
                <li>
                  <a href='https://instagram.com/rally_diaries' target='_blank' rel='noreferrer' aria-label='Instagram'>
                    <span className='fa-stack fa-2x'>
                      <FontAwesomeIcon icon={faCircle} className='fa-stack-2x' />
                      <FontAwesomeIcon icon={faInstagram} className='fa-stack-1x' />
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.youtube.com/rallydiaries?sub_confirmation=1'
                    target='_blank'
                    rel='noreferrer'
                    aria-label='YouTube'
                  >
                    <span className='fa-stack fa-2x'>
                      <FontAwesomeIcon icon={faCircle} className='fa-stack-2x' />
                      <FontAwesomeIcon icon={faYoutube} className='fa-stack-1x' />
                    </span>
                  </a>
                </li>
                <li>
                  <a href='https://rallydiaries.eu/discord' target='_blank' rel='noreferrer' aria-label='Discord'>
                    <span className='fa-stack fa-2x'>
                      <FontAwesomeIcon icon={faCircle} className='fa-stack-2x' />
                      <FontAwesomeIcon icon={faDiscord} className='fa-stack-1x' />
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className='footer-bottom'>
        <div className='container'>
          <div className='columns is-mobile is-multiline is-align-items-center is-justify-content-space-between ordered-mobile'>
            <div className='column is-12-mobile is-narrow-tablet order-mobile-1'>
              <p className='made-with'>
                Made with <FontAwesomeIcon icon={faHeartPulse} /> for motorsport.
              </p>
            </div>
            <div className='column is-narrow order-mobile-2'>
              <p>
                Copyright &copy; 2024-2025{' '}
                <strong>
                  <i>
                    <a href='https://rallydiaries.eu/en' target='_blank' rel='noreferrer'>
                      RallyDiaries by Bratsos Team
                    </a>
                  </i>
                </strong>
                .
              </p>
            </div>

            <div className='column is-narrow order-mobile-3'>
              <p>
                Design by{' '}
                <strong>
                  <i>
                    <a href='https://www.drunkdesign.gr/' target='_blank' rel='noreferrer'>
                      drunk
                    </a>
                    <sup>&reg;</sup>
                  </i>
                </strong>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
      <div></div>
    </footer>
  )
}
