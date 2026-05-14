import { Link } from 'react-router-dom'
import { getAllPosts, formatDate } from '../posts'

export function Blog() {
  const posts = getAllPosts()

  return (
    <div className="container">
      <div className="blog-header">
        <h1 className="page-title">Mission Posts</h1>
        <p className="page-subtitle">{posts.length} {posts.length === 1 ? 'post' : 'posts'} · sorted by newest</p>
      </div>

      {posts.length === 0 ? (
        <div style={{ padding: '4rem 0', textAlign: 'center' }}>
          <p style={{ color: 'var(--ink-muted)', fontStyle: 'italic', marginBottom: '1rem' }}>
            There are no posts yet.
          </p>
          <p style={{ fontSize: '0.85rem', color: 'var(--ink-faint)' }}>
            Add <code>.md</code> files to <code>src/posts/</code> to populate the blog.
          </p>
        </div>
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
  )
}
