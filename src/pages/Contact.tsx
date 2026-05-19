import { useState, type FormEvent } from 'react'

export function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const mailto = `mailto:hello@example.com?subject=${encodeURIComponent(form.subject || 'Message from the mission blog')}&body=${encodeURIComponent(
      `From: ${form.name} <${form.email}>\n\n${form.message}`
    )}`
    window.location.href = mailto
    setSent(true)
  }

  return (
    <div className="container">
      <div className="blog-header">
        <h1 className="page-title">Contact Us</h1>
        <p className="page-subtitle">Send a note while we are serving in Urdaneta.</p>
      </div>

      <div className="contact-grid">
        <aside className="contact-aside">
          <h3>Write to us</h3>
          <p>
            We love hearing from family and friends. Send a question, a quick hello, or a
            memory you want us to add to the record.
          </p>
          <p>
            Internet and schedule permitting, we will reply when we can.
          </p>
          <address>
            Ostlers in the Philipines<br />
            Urdaneta, Philipines<br />
            hello@example.com
          </address>
        </aside>

        <div>
          {sent ? (
            <div className="form-success">
              <strong>Your mail client should have opened.</strong> If not, copy your message
              and send directly to <a href="mailto:hello@example.com" style={{ color: 'var(--accent)' }}>
                hello@example.com
              </a>. We'll be in touch.
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-field">
                <label htmlFor="name">Your name</label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  placeholder="Jane Smith"
                />
              </div>

              <div className="form-field">
                <label htmlFor="email">Email address</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  placeholder="jane@example.com"
                />
              </div>

              <div className="form-field">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  type="text"
                  value={form.subject}
                  onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                  placeholder="Hello from home"
                />
              </div>

              <div className="form-field">
                <label htmlFor="message">Your letter</label>
                <textarea
                  id="message"
                  required
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  placeholder="Write your note here..."
                />
              </div>

              <button type="submit" className="btn btn--primary">
                Send Note →
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
