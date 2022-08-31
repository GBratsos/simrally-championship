import Link from 'next/link';

import VideoSection from '../components/video-section'
import TextSection from '../components/main-text'
import NewsSection from '../components/news-section'

export default function Home() {
  return (
    <>
      <VideoSection />
      <TextSection />
      <h1 className="title">
        <Link href="/seasons">Seasons and events</Link>
      </h1>
      {/* <NewsSection /> */}
    </>
  )
}