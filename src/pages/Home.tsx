import { Link } from 'react-router-dom'
import { getAllPosts, formatDate } from '../posts'
import heroImage from '../assets/hero.jpeg'

export function Home() {
  const posts = getAllPosts().slice(0, 4)

  return (
    <div className="container--wide">
      <div className="home-hero">
        <div className="home-hero-copy">
          <span className="home-eyebrow">Called to Serve · Urdaneta, Philipines</span>
          <h1 className="home-headline">
            Urdaneta, <em>Philipines</em>
          </h1>
          <p className="home-subline">
            Scott & Delene were called to Serve in the Urdaneta, Philipines mission
            for the Church of Jesus Christ of Latter-day Saints from April 2026 - 2027. 
            Find their weekly updates here.
          </p>
          <div className="home-cta-row">
            <Link to="/blog" className="btn btn--primary">Read Posts →</Link>
          </div>
        </div>
        <div className="home-hero-image-wrap" aria-label="Mission journal hero image">
          <img src={heroImage} alt="Illustrated mission journal artwork" className="home-hero-image" />
        </div>
      </div>

      <div className="container">
        <div className="home-recent">
          <span className="section-label">Recent Posts</span>
          {posts.length === 0 ? (
            <p style={{ color: 'var(--ink-muted)', fontStyle: 'italic', fontSize: '0.95rem' }}>
              No posts yet. Add markdown files to <code>src/posts/</code> to get started.
            </p>
          ) : (
            <div className="post-card-grid">
              {posts.map(post => (
                <Link key={post.slug} to={`/blog/${post.slug}`} className="post-card">
                  <div className="post-card-date">{formatDate(post.date)}</div>
                  <div>
                    {post.tag && <span className="post-card-tag">{post.tag}</span>}
                    <div className="post-card-title">{post.title}</div>
                    {post.description && (
                      <div className="post-card-excerpt">{post.description}</div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {posts.length > 0 && (
          <div>
            <Link to="/blog" className="btn btn--ghost">All posts →</Link>
          </div>
        )}
      </div>
    </div>
  )
}
