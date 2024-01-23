"use client"
import { usePointerGlow } from '@/components/usePointerGlow';

export default function Home() {
  const [status] = usePointerGlow();
  return (
    <main>
      <article data-glow>
        <span data-glow />
        <button data-glow>
          <span>Glow Up</span>
        </button>
      </article>
      <article data-glow>
        <span data-glow />
        <button data-glow>
          <span>Glow Up</span>
        </button>
      </article>
      <article data-glow>
        <span data-glow />
        <button data-glow>
          <span>Glow Up</span>
        </button>
      </article>
    </main>
  )
}
