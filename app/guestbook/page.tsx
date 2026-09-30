'use client'

import Link from 'next/link'
import { useState } from 'react'

type Comment = {
  id: number
  name: string
  message: string
  date: string
}

type Provider = 'GitHub' | 'Google'

const INITIAL_COMMENTS: Comment[] = [
  { id: 1, name: 'Paweł Szostak', message: 'The first version of this website is now complete!', date: 'Jan 26 • 7 mo ago' },
  { id: 2, name: 'Misterrr', message: 'First', date: 'Jan 26 • 7 mo ago' },
  { id: 3, name: 'Iga Szemraj', message: 'Proud gf <3', date: 'Jan 26 • 7 mo ago' },
  { id: 4, name: 'Alejandro Gonzalvo', message: 'Just found this through the portfolios repo on github. Sick work man, keep the grind!', date: 'Jan 29 • 7 mo ago' },
  { id: 5, name: 'Samrat Bhusal', message: 'hey', date: 'Aug 30 • 16 d ago' },
]

export default function GuestbookPage() {
  const [comments, setComments] = useState<Comment[]>(INITIAL_COMMENTS)
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [signedInWith, setSignedInWith] = useState<Provider | null>(null)
  const [authMessage, setAuthMessage] = useState('')

  const handleSignIn = (provider: Provider) => {
    setSignedInWith(provider)
    setAuthMessage(`You are signed in with ${provider} for this guestbook session.`)
    setName(provider === 'GitHub' ? 'GitHub visitor' : 'Google visitor')
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!signedInWith || !name.trim() || !message.trim()) return

    const newComment: Comment = {
      id: Date.now(),
      name: name.trim(),
      message: message.trim(),
      date: 'just now',
    }

    setComments((current) => [newComment, ...current])
    setName('')
    setMessage('')
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <header className="mb-8 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center rounded-full border border-border bg-card/60 px-4 py-2 text-sm font-medium text-foreground transition hover:bg-card"
          >
            ← Back to home
          </Link>

          <div className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Community Wall
          </div>
        </header>

        <section className="rounded-[2rem] border border-border bg-card/60 p-6 shadow-[0_0_40px_-18px_rgba(168,85,247,0.55)] backdrop-blur-sm sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Leave Your Mark</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Share your thoughts, feedback, or just say hi!</h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground">
            Sign in to pin your message to this board forever.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => handleSignIn('GitHub')}
              className={`rounded-full border px-4 py-2.5 text-sm font-medium transition hover:bg-background ${
                signedInWith === 'GitHub'
                  ? 'border-primary bg-primary/15 text-primary'
                  : 'border-border bg-background/60 text-foreground'
              }`}
            >
              {signedInWith === 'GitHub' ? 'Signed in with GitHub' : 'Sign in with GitHub'}
            </button>
            <button
              type="button"
              onClick={() => handleSignIn('Google')}
              className={`rounded-full border px-4 py-2.5 text-sm font-medium transition hover:bg-background ${
                signedInWith === 'Google'
                  ? 'border-primary bg-primary/15 text-primary'
                  : 'border-border bg-background/60 text-foreground'
              }`}
            >
              {signedInWith === 'Google' ? 'Signed in with Google' : 'Sign in with Google'}
            </button>
            {authMessage && <p className="basis-full text-xs text-primary" role="status">{authMessage}</p>}
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.7fr]">
          <aside className="rounded-[1.75rem] border border-border bg-card/60 p-5">
            <h2 className="text-xl font-bold">Guestbook</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Leave a nice note, say what you think, or drop a quick hello for the community.
            </p>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-border bg-background/60 p-4">
                <p className="text-2xl font-bold text-primary">{comments.length}</p>
                <p className="text-sm text-muted-foreground">Messages shared</p>
              </div>
              <div className="rounded-2xl border border-border bg-background/60 p-4">
                <p className="text-2xl font-bold text-accent">Live</p>
                <p className="text-sm text-muted-foreground">Open community board</p>
              </div>
            </div>
          </aside>

          <div className="space-y-5">
            <form onSubmit={handleSubmit} className="rounded-[1.75rem] border border-border bg-card/60 p-5 backdrop-blur-sm">
              <h2 className="text-xl font-bold">Leave a comment</h2>
              {!signedInWith && (
                <p className="mt-2 text-sm text-muted-foreground">Sign in above before posting your message.</p>
              )}

              <div className="mt-4 space-y-4">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-muted-foreground">
                    Your name
                  </label>
                  <input
                    id="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Your name"
                    className="w-full rounded-2xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    rows={4}
                    placeholder="Share your thoughts..."
                    disabled={!signedInWith}
                    className="w-full resize-none rounded-2xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition focus:border-primary"
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={!signedInWith || !name.trim() || !message.trim()}
                    className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Post message
                  </button>
                </div>
              </div>
            </form>

            <div className="space-y-4">
              {comments.map((comment) => (
                <article key={comment.id} className="rounded-[1.5rem] border border-border bg-card/60 p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex size-11 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-bold text-white">
                      {comment.name.slice(0, 1).toUpperCase()}
                    </div>

                    <div>
                      <h3 className="font-semibold text-foreground">{comment.name}</h3>
                      <p className="text-xs text-muted-foreground">{comment.date}</p>
                    </div>
                  </div>

                  <p className="mt-4 leading-7 text-muted-foreground">{comment.message}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
