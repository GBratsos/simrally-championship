import Link from 'next/link';

import VideoSection from '../components/video-section'
import TextSection from '../components/main-text'
import Subscribe from '../components/Subscribe'
import NewsSection from '../components/news-section'

export default function Home() {
  return (
    <>
      <VideoSection />
      <TextSection />
      <Subscribe />
      <h1 className="title">
        <Link href="/seasons">Seasons and events</Link>
      </h1>
      <NewsSection />
    </>
  )
}