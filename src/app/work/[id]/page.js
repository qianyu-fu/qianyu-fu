import Navigation from '../../../components/Navigation'
import Image from 'next/image'

const works = {
  'lunar-leporidae': {
    title: 'Lunar Leporidae: A Study in Moonlit Movements',
    images: ['/images/rabbit_1.jpg'],
    year: '2024',
    medium: 'Mixed Media Installation, Video Projection',
    dimensions: '12 x 15 feet'
  },
  'warren-whispers': {
    title: 'Warren Whispers: The Architecture of Underground Dreams',
    images: ['/images/rabbit_2.webp'],
    year: '2023',
    medium: 'Soil, Wood, Fiber Optics, Sound Installation',
    dimensions: 'Variable'
  },
  'rabbit-resonance': {
    title: 'Rabbit Resonance: Frequencies of Fear and Freedom',
    images: ['/images/rabbit_7.jpg', '/images/rabbit_8.webp'],
    year: '2024',
    medium: 'Sound Installation, Binaural Audio, Environmental Sensors',
    dimensions: 'Variable'
  },
  'go-fishing': {
    title: 'Go Fishing',
    images: [
      '/images/go_fishing_1.jpg',
      '/images/go_fishing_2.jpg',
      '/images/go_fishing_3.jpg',
      '/images/go_fishing_4.jpg',
      '/images/go_fishing_5.jpg'
    ],
    year: '2023',
    medium: 'Mixed Media',
    dimensions: 'Variable'
  },
  'fake-money': {
    title: 'Use fake money to buy fake guns',
    images: [
      '/images/use_fake_money_to_buy_fake_guns_1.jpg',
      '/images/use_fake_money_to_buy_fake_guns_2.jpg',
      '/images/use_fake_money_to_buy_fake_guns_3.jpg',
      '/images/use_fake_money_to_buy_fake_guns_4.jpg'
    ],
    year: '2023',
    medium: 'Mixed Media',
    dimensions: 'Variable'
  },
  '17-feet': {
    title: '17 feet by 12 inches',
    images: [
      '/images/17_feet_by_12_inches_1.jpg',
      '/images/17_feet_by_12_inches_2.jpg'
    ],
    year: '2023',
    medium: 'Mixed Media',
    dimensions: '17 feet by 12 inches'
  },
  'untitled': {
    title: 'Untitled',
    images: [
      '/images/utitled_1.jpg',
      '/images/utitled_2.jpg',
      '/images/utitled_3.jpg'
    ],
    year: '2023',
    medium: 'Mixed Media',
    dimensions: 'Variable'
  },
  'ideology-of-truth': {
    title: 'The Ideology of Truth',
    images: [
      '/images/the_ideology_of_truth_1.jpg',
      '/images/the_ideology_of_truth_2.jpg',
      '/images/the_ideology_of_truth_3.jpg',
      '/images/the_ideology_of_truth_4.jpg',
      '/images/the_ideology_of_truth_5.jpg'
    ],
    year: '2023',
    medium: 'Mixed Media',
    dimensions: 'Variable'
  },
  'nimitta': {
    title: 'Nimitta',
    images: [
      '/images/nimitta_1.jpg',
      '/images/nimitta_2.jpg',
      '/images/nimitta_3.jpg'
    ],
    year: '2023',
    medium: 'Mixed Media',
    dimensions: 'Variable'
  },
  'concrete-and-glass': {
    title: 'Concrete and Glass',
    images: [
      '/images/concrete_and_glass_1.jpg',
      '/images/concrete_and_glass_2.jpg',
      '/images/concrete_and_glass_3.jpg'
    ],
    year: '2023',
    medium: 'Mixed Media',
    dimensions: 'Variable'
  },
  'chair': {
    title: 'Chair',
    images: ['/images/chair_1.jpg'],
    year: '2023',
    medium: 'Mixed Media',
    dimensions: 'Variable'
  },
  'city-memories': {
    title: 'City Memories',
    images: [
      '/images/city_memories_1.jpg',
      '/images/city_memories_2.jpg'
    ],
    year: '2023',
    medium: 'Mixed Media',
    dimensions: 'Variable'
  },
  'walking-on-the-street': {
    title: 'Walking on the Street',
    images: [
      '/images/walking_on_the_street_1.jpg',
      '/images/walking_on_the_street_2.jpg',
      '/images/walking_on_the_street_3.jpg',
      '/images/walking_on_the_street_4.jpg',
      '/images/walking_on_the_street_5.jpg'
    ],
    year: '2023',
    medium: 'Mixed Media',
    dimensions: 'Variable'
  },
  'way-back-home': {
    title: 'The Way Back Home',
    images: [
      '/images/the_way_back_home_1.jpg',
      '/images/the_way_back_home_2.jpg',
      '/images/the_way_back_home_3.jpg',
      '/images/the_way_back_home_4.jpg'
    ],
    year: '2023',
    medium: 'Mixed Media',
    dimensions: 'Variable'
  },
  'standing': {
    title: 'Standing',
    images: ['/images/standing_1.jpg'],
    year: '2023',
    medium: 'Mixed Media',
    dimensions: 'Variable'
  }
}

export default function WorkItem({ params }) {
  const work = works[params.id]

  if (!work) {
    return <div>Work not found</div>
  }

  return (
    <div className="page-container">
      <Navigation />
      <div className="main-content">
        <article className="work-detail">
          <h1 className="work-title">{work.title}</h1>
          <div className="work-info">
            <p className="work-metadata">
              {work.year} | {work.medium} | {work.dimensions}
            </p>
          </div>
          <div className="work-images">
            {work.images.map((image, index) => (
              <div key={index} className="work-image-container">
                <Image
                  src={image}
                  alt={`${work.title} - Image ${index + 1}`}
                  width={800}
                  height={600}
                  className="work-detail-image"
                />
              </div>
            ))}
          </div>
          {work.description && (
            <div className="work-description">
              <p>{work.description}</p>
            </div>
          )}
        </article>
      </div>
    </div>
  )
} 