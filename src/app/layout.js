import { Arimo } from 'next/font/google'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import './styles/scss/style.sass'

import Script from 'next/script'
import SiteFooter from './components/site-footer'

import Navbar from './components/navbar'

const arimo = Arimo({ subsets: ['latin'], display: 'swap', variable: 'is-family-primary' })

export const metadata = {
  alternates: {
    canonical: 'https://rallydiaries.eu',
  },
  title: 'eRally Championship | RallyDiaries by Bratsos Team',
  description: 'Welcome to RallyDiaries eRally Championship by Bratsos Team.',

  openGraph: {
    title: 'eRally Championship | RallyDiaries by Bratsos Team',
    description: 'Welcome to RallyDiaries eRally Championship by Bratsos Team.',
    url: 'https://rallydiaries.eu',
    siteName: 'RallyDiaries eRally Championship',
    images: [
      {
        url: 'https://rallydiaries.eu/rallydiariesfb.webp',
        alt: 'eRally Championship | RallyDiaries by Bratsos Team',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/favicons/favicon.icon',
    shortcut: '/favicons/favicon-96x96.png',
    apple: '/favicons/apple-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/favicons//apple-icon-precomposed.png',
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <Script
        id='google-analytics'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-W9QCPB8');
          `,
        }}
      />
      <body className={`${arimo.className}`}>
        <main>
          <noscript>
            <iframe
              src='https://www.googletagmanager.com/ns.html?id=GTM-W9QCPB8'
              height='0'
              width='0'
              className='is-invisible'
            ></iframe>
          </noscript>
          <Navbar />
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  )
}
