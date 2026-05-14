export interface PostMeta {
  slug: string
  title: string
  date: string
  description: string
  tag?: string
}

export interface Post extends PostMeta {
  content: string
}

// Vite glob import - reads all .md files from the posts directory
const postModules = import.meta.glob('./posts/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>
const postImageModules = import.meta.glob('./posts/**/*.{png,jpg,jpeg,gif,webp,svg}', {
  query: '?url',
  import: 'default',
  eager: true,
}) as Record<string, string>

function parseFrontmatter(raw: string): { meta: Record<string, string>; content: string } {
  const fmMatch = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/)
  if (!fmMatch) return { meta: {}, content: raw }

  const meta: Record<string, string> = {}
  fmMatch[1].split('\n').forEach(line => {
    const colonIdx = line.indexOf(':')
    if (colonIdx === -1) return
    const key = line.slice(0, colonIdx).trim()
    const value = line.slice(colonIdx + 1).trim().replace(/^["']|["']$/g, '')
    meta[key] = value
  })

  return { meta, content: fmMatch[2] }
}

export function getAllPosts(): PostMeta[] {
  const posts: PostMeta[] = []

  for (const [path, raw] of Object.entries(postModules)) {
    const slug = path.replace('./posts/', '').replace('.md', '')
    const { meta } = parseFrontmatter(raw)
    posts.push({
      slug,
      title: meta.title || slug,
      date: meta.date || '',
      description: meta.description || '',
      tag: meta.tag,
    })
  }

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPost(slug: string): Post | null {
  const path = `./posts/${slug}.md`
  const raw = postModules[path]
  if (!raw) return null

  const { meta, content } = parseFrontmatter(raw)
  return {
    slug,
    title: meta.title || slug,
    date: meta.date || '',
    description: meta.description || '',
    tag: meta.tag,
    content,
  }
}

export function resolvePostImage(slug: string, src?: string): string | undefined {
  if (!src) return undefined
  if (/^(https?:)?\/\//.test(src) || src.startsWith('data:') || src.startsWith('/')) return src

  const cleanedSrc = src.replace(/^\.\//, '')
  const candidates = [
    `./posts/${slug}/${cleanedSrc}`,
    `./posts/${cleanedSrc}`,
  ]

  return candidates.map(path => postImageModules[path]).find(Boolean) || src
}

export function formatDate(dateStr: string): string {
  if (!dateStr) return ''
  const d = new Date(dateStr + 'T12:00:00')
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}
