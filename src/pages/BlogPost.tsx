import { useParams, Link, Navigate } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getAllPosts, getPost, formatDate, isVideoAsset, resolvePostAsset } from '../posts'

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getPost(slug) : null
  const posts = getAllPosts()

  if (!post) {
    return <Navigate to="/blog" replace />
  }

  return (
    <div className="container--wide">
      <div className="post-shell">
        <aside className="post-sidebar" aria-label="Blog post navigation">
          <div className="post-sidebar-title">All Posts</div>
          <nav className="post-sidebar-list">
            {posts.map(sidebarPost => (
              <Link
                key={sidebarPost.slug}
                to={`/blog/${sidebarPost.slug}`}
                className={`post-sidebar-link${sidebarPost.slug === post.slug ? ' is-active' : ''}`}
                title={sidebarPost.title}
              >
                <span className="post-sidebar-link-title">{sidebarPost.title}</span>
                <span className="post-sidebar-link-date">{formatDate(sidebarPost.date)}</span>
              </Link>
            ))}
          </nav>
        </aside>

        <div className="post-content">
          <Link to="/blog" className="back-link">← Back to posts</Link>

          <article>
            <header className="post-header">
              <div className="post-meta">
                <span className="post-meta-date">{formatDate(post.date)}</span>
                {post.tag && <span className="post-meta-tag">{post.tag}</span>}
              </div>
              <h1 className="post-title">{post.title}</h1>
              {post.description && (
                <p className="post-description">{post.description}</p>
              )}
            </header>

            <div className="prose">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  img: ({ src, alt }) => {
                    const assetSrc = resolvePostAsset(post.slug, src)

                    if (isVideoAsset(src)) {
                      return (
                        <video className="post-video" controls preload="metadata">
                          <source src={assetSrc} />
                          {alt || 'Video'}
                        </video>
                      )
                    }

                    return <img src={assetSrc} alt={alt || ''} loading="lazy" />
                  },
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>
          </article>

          <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--rule)' }}>
            <Link to="/blog" className="back-link">← Back to posts</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
