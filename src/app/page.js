import Navigation from '../components/Navigation'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="page-container">
      <Navigation />
      <div className="main-content">
        <div className="featured-work">
          <Image
            src="/home_page_photo.jpg"
            alt="Featured artwork"
            width={800}
            height={600}
            priority
            className="featured-image"
          />
          <p className="artwork-details">
            Nimitta, 2022, Installation, painting, performance
          </p>
        </div>
      </div>
    </div>
  )
} 