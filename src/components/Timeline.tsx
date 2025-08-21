import React from 'react'
import { EventData } from '../types'
import EventMarker from './EventMarker'


interface TimelineProps {
events: EventData[]
onOpen: (event: EventData) => void
}


export default function Timeline({ events, onOpen }: TimelineProps) {
const sorted = [...events].sort((a, b) => a.year - b.year)


return (
<section className="container timeline">
<ul className="timeline-list">
{sorted.map(ev => (
<li key={ev.id} className="timeline-item">
<EventMarker event={ev} onOpen={onOpen} />
</li>
))}
</ul>
</section>
)
}
