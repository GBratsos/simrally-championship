import SiteHeader from '../components/site-header'
import Sitefooter from '../components/site-footer'

import Navbar from '../components/navbar'

export default function Layout({ children }) {
  return (
    <>
      <SiteHeader />
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W9QCPB8" height="0" width="0" style="display: none; visibility: hidden;" />`,
        }}
      />
      <main>
        <Navbar />
        {children}
        </main>
      <Sitefooter />
    </>
  )
}