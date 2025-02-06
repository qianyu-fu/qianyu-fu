import Navigation from '../../components/Navigation'
import Link from 'next/link'
import Image from 'next/image'

const works = [
  { id: 'go-fishing', title: 'Go Fishing', image: '/images/go_fishing_1.jpg' },
  { id: 'lunar-leporidae', title: 'Lunar Leporidae: A Study in Moonlit Movements', image: '/images/rabbit_1.jpg' },
  { id: 'fake-money', title: 'Use fake money to buy fake guns', image: '/images/use_fake_money_to_buy_fake_guns_1.jpg' },
  { id: 'warren-whispers', title: 'Warren Whispers: The Architecture of Underground Dreams', image: '/images/rabbit_2.webp' },
  { id: '17-feet', title: '17 feet by 12 inches', image: '/images/17_feet_by_12_inches_1.jpg' },
  { id: 'untitled', title: 'Untitled', image: '/images/utitled_1.jpg' },
  { id: 'ideology-of-truth', title: 'The Ideology of Truth', image: '/images/the_ideology_of_truth_1.jpg' },
  { id: 'nimitta', title: 'Nimitta', image: '/images/nimitta_1.jpg' },
  { id: 'concrete-and-glass', title: 'Concrete and Glass', image: '/images/concrete_and_glass_1.jpg' },
  { id: 'rabbit-resonance', title: 'Rabbit Resonance: Frequencies of Fear and Freedom', image: '/images/rabbit_7.jpg' },
  { id: 'chair', title: 'Chair', image: '/images/chair_1.jpg' },
  { id: 'city-memories', title: 'City Memories', image: '/images/city_memories_1.jpg' },
  { id: 'walking-on-the-street', title: 'Walking on the Street', image: '/images/walking_on_the_street_1.jpg' },
  { id: 'way-back-home', title: 'The Way Back Home', image: '/images/the_way_back_home_1.jpg' },
  { id: 'standing', title: 'Standing', image: '/images/standing_1.jpg' },
]

export default function Work() {
  return (
    <div className="page-container">
      <Navigation />
      <div className="main-content">
        <div className="work-grid">
          {works.map((work) => (
            <Link href={`/work/${work.id}`} key={work.id} className="work-item">
              <div className="work-image-container">
                <Image
                  src={work.image}
                  alt={work.title}
                  width={300}
                  height={300}
                  className="work-image"
                />
              </div>
              <h3 className="work-title">{work.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
} 