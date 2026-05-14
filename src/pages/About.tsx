import philippinesMap from '../assets/phillipines_map.png'

export function About() {
  return (
    <div className="container">
      <div className="blog-header">
        <h1 className="page-title">Urdaneta Mission</h1>
        <p className="page-subtitle">A simple look at Urdaneta City and the Philippines Urdaneta Mission.</p>
      </div>

      <div className="about-grid">
        <div className="prose">
          <h2>Urdaneta City</h2>
          <p>
            Urdaneta is a component city in Pangasinan, Philippines, on the island of Luzon.
            It is one of the largest cities in the Ilocos Region, with a 2024 population of
            145,935 people.
          </p>
          <p>
            The city was founded on January 8, 1858, and became a component city in 1998.
            Pangasinan and Ilocano are the main local languages.
          </p>

          <h2>The Mission</h2>
          <p>
            The Philippines Urdaneta Mission is a proselytizing mission of The Church of
            Jesus Christ of Latter-day Saints. Its headquarters are in Urdaneta City,
            Pangasinan.
          </p>
          <p>
            President Grant Foster and Sister Si Foster were identified as mission leaders
            in Church Newsroom coverage from April 2025.
          </p>

          <h2>The Temple</h2>
          <p>
            The Urdaneta Philippines Temple is located on Maharlika Highway in Barangay
            Nancayasan, Urdaneta City. It was dedicated on April 28, 2024, by President
            Dallin H. Oaks.
          </p>
          <p>
            It is the Church's third operating temple in the Philippines and the 190th
            operating temple worldwide.
          </p>
        </div>

        <div>
          <img
            src={philippinesMap}
            alt="Map of the Philippines showing the Urdaneta mission area"
            className="mission-map"
          />
          <span className="section-label">Quick Facts</span>
          <div className="values-grid">
            <div className="value-card">
              <h3>City</h3>
              <p>Urdaneta City, Pangasinan, Philippines</p>
            </div>
            <div className="value-card">
              <h3>Population</h3>
              <p>145,935 people in the 2024 census</p>
            </div>
            <div className="value-card">
              <h3>Mission Office</h3>
              <p>Urdaneta City, Pangasinan</p>
            </div>
            <div className="value-card">
              <h3>Temple</h3>
              <p>Dedicated April 28, 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
