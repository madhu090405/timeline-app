import React from 'react'
import { EventData } from '../types'
import styles from '../styles/timeline.module.css'


interface EventMarkerProps {
event: EventData
onOpen: (event: EventData) => void
}


export default function EventMarker({ event, onOpen }: EventMarkerProps) {
return (
<button className={styles.markerButton} onClick={() => onOpen(event)} aria-label={`Open event ${event.title}`}>
<div className="dot" />
<div className={`card ${styles.item}`}>
<div className="title">{event.year} · {event.title}</div>
<div className="subtitle">{new Date(event.date).toDateString()}</div>
</div>
</button>
)
}