import Head from 'next/head'
import Script from 'next/script'

export default function SiteHeader() {
    return (
      <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
        <link rel="canonical" href="https://erally.rallydiaries.eu/"></link>
        <meta name="robots" content="index, follow"></meta>
        <link rel="shortlink" href="https://erally.rallydiaries.eu/"></link>
        <meta name="description" content="Welcome to RallyDiaries eRally Championship by Bratsos Team." />
        <meta property="og:description" content="Welcome to RallyDiaries eRally Championship by Bratsos Team." />
        <meta property="og:site_name" content="RallyDiaries eRally Championship"></meta>
        <meta property="og:url" content="https://erally.rallydiaries.eu"></meta>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="RallyDiaries eRally Championship"></meta>
        <meta property="og:image:type" content="image/webp"></meta>
        <meta property="og:image" content="https://erally.rallydiaries.eu/erally-championship-poster.webp" />
        <meta property="og:image:alt" content="RallyDiaries eRally Championship"></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:site" content="@rallydiaries"></meta>
        <meta name="twitter:title" content="eRally Championship | RallyDiaries"></meta>
        <meta name="twitter:creator" content="@rallydiaries"></meta>
        <meta name="twitter:image:alt" content="RallyDiaries eRally Championship"></meta>
        <meta name="twitter:url" content="/"></meta>
        <meta name="MobileOptimized" content="width"></meta>
        <meta name="HandheldFriendly" content="true"></meta>
        <title>eRally Championship | RallyDiaries</title>
        <link rel="icon" href="/favicons/favicon.ico" />
        <link rel="apple-touch-icon" sizes="57x57" href="/favicons/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/favicons/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/favicons/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/favicons/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/favicons/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/favicons/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/favicons/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/favicons/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicons/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicons/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <meta name="msapplication-TileColor" content="#121212" />
        <meta name="msapplication-TileImage" content="/favicons/ms-icon-144x144.png" />
        <meta name="theme-color" content="#121212" />
      </Head>
      <>
      <Script
          id="google-analytics"
          strategy="afterInteractive"
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
        </>
      </>
    )
}