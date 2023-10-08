import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import '../styles/scss/style.sass'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
