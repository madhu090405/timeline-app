import React from 'react'
import { EventData } from '../types'

interface TimelineProps {
  events: EventData[]
  onOpen: (e: EventData) => void
}

export default function Timeline({ events, onOpen }: TimelineProps) {
  return (
    <nav aria-label="Event timeline">
      <ul style={{ display: 'flex', listStyle: 'none', gap: '1rem' }}>
        {events.map((event, idx) => (
          <li key={event.year}>
            <button
              onClick={() => onOpen(event)}
              aria-current={idx === 0 ? 'step' : undefined} // active marker
              aria-label={`Event in ${event.year}: ${event.title}`}
            >
              {event.year}
            </button>
            <button
  onClick={() => onOpen(event)}
  onKeyDown={(e) => {
    if (e.key === 'ArrowRight' && idx < events.length - 1) {
      document.querySelectorAll<HTMLButtonElement>('nav ul button')[idx + 1]?.focus()
    }
    if (e.key === 'ArrowLeft' && idx > 0) {
      document.querySelectorAll<HTMLButtonElement>('nav ul button')[idx - 1]?.focus()
    }
  }}
>
  {event.year}
</button>

          </li>
        ))}
      </ul>
    </nav>
  )
}
