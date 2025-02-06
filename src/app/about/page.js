import Navigation from '../../components/Navigation'
import Image from 'next/image'

export default function About() {
  return (
    <div className="page-container">
      <Navigation />
      <div className="main-content">
        <div className="about-container">
          <div className="about-image">
            <Image
              src="/images/selfie.jpg"
              alt="Qianyu Fu"
              width={400}
              height={400}
              className="profile-image"
            />
          </div>
          <div className="about-text">
            <h1>About</h1>
            <div className="bio-intro">
              <p>
                Qianyu Fu (born 1989, Beijing, China) is a Chinese–American multidisciplinary artist and educator 
                known for her provocative installations and sculptures that blend industrial materials with domestic objects. 
                Her work, which explores the "contingency of truth" across different cultural contexts, often juxtaposes 
                robust structural forms with materials that are inherently fragile or deceptive. Fu is currently a Teaching 
                Fellow in Visual Arts at the University of Chicago, where her office is located in Logan Center, room 237.
              </p>
            </div>

            <section className="bio-section">
              <h2>Early Life and Education</h2>
              <p>
                Qianyu Fu was born in Beijing into a family immersed in both academia and the arts. Her father, 
                a literary scholar, and her mother, a horse breeder, fostered an environment that valued both 
                intellectual inquiry and creative expression. Fu has described her upbringing as "a constant 
                negotiation between the rigidity of tradition and the fluidity of modern expression," a duality 
                that continues to inform her work.
              </p>
              <p>
                She moved to the United States in her late teens and pursued formal art education at the School 
                of the Art Institute of Chicago, where she earned a Bachelor of Fine Arts in Photography in 2021. 
                Fu further developed her practice by completing a Master of Fine Arts in Visual Art at the 
                University of Chicago in 2024, where her thesis work—integrating construction materials and 
                everyday consumer products—garnered significant attention.
              </p>
            </section>

            <section className="bio-section">
              <h2>Career</h2>
              <h3>Teaching and Academic Contributions</h3>
              <p>
                Since joining the University of Chicago as a Teaching Fellow in Visual Arts, Fu has become a 
                leading voice in academia analyzing rabbit imagery in 14th and 15th century Renaissance Art. 
                Her research discusses the rabbit as a multifaceted symbol in an era traditionally dominated 
                by overt religious and political iconography.
              </p>

              <h3>Research and Publications</h3>
              <p>
                Fu's study, "Hares in Hallowed Halls: Rabbit Imagery and the Subversive Codes of Renaissance Art," 
                published in the Gretzky Journal of Renaissance Studies in 2024, argues that the rabbit was far 
                more than a benign or decorative element in art. Her interdisciplinary approach has resonated widely, 
                earning her invitations to speak at various institutions including the Metropolitan Museum of Art, 
                Wayne Tower, and the British Museum.
              </p>

              <h3>Artistic Practice</h3>
              <p>
                Fu's modern work is distinguished by its use of non-traditional materials—including repurposed 
                construction elements, everyday household items, and products from assembly lines—to create 
                installations that challenge viewers' perceptions of stability and truth. She has stated,
                "In every discarded bolt or faded plastic, there is a hidden narrative—a subtle rebellion 
                against the facade of permanence."
              </p>
            </section>

            <section className="bio-section">
              <h2>Notable Exhibitions</h2>
              <ul className="exhibitions-list">
                <li>
                  <strong>"Fragile Realities" (2024)</strong>: Chicago Museum of Contemporary Art
                </li>
                <li>
                  <strong>"The Illusory Structure" (2023)</strong>: Heide Museum of Modern Art
                </li>
                <li>
                  <strong>"Deconstructing Traditions" (2022)</strong>: University of Chicago Gallery
                </li>
              </ul>
            </section>

            <section className="bio-section">
              <h2>Style and Themes</h2>
              <ul className="themes-list">
                <li>
                  <strong>Material Contrasts:</strong> The deliberate pairing of sturdy, industrial materials 
                  with elements that are easily degraded or deceptive in appearance.
                </li>
                <li>
                  <strong>Cultural Commentary:</strong> A focus on the instability of truth and the shifting 
                  narratives across different cultural landscapes.
                </li>
                <li>
                  <strong>Interactivity and Risk:</strong> Many of her installations invite audience interaction, 
                  with the inherent unpredictability of the materials playing a central role in the overall experience.
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
} 