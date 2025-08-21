import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { EventData } from '../types'


interface EventModalProps {
event: EventData | null
onClose: () => void
}


export default function EventModal({ event, onClose }: EventModalProps) {
const modalRoot = document.getElementById('modal-root') as HTMLElement
useEffect(() => {
const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
window.addEventListener('keydown', onKey)
return () => window.removeEventListener('keydown', onKey)
}, [onClose])


if (!event) return null


const content = (
<div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
<div className="modal-panel" onClick={e => e.stopPropagation()}>
<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
<h2 style={{ margin: 0 }}>{event.title} ({event.year})</h2>
<button className="btn" onClick={onClose} aria-label="Close">✕</button>
</div>
<p className="subtitle" style={{ marginTop: 8 }}>{new Date(event.date).toLocaleString()}</p>
{event.description && <p style={{ marginTop: 12 }}>{event.description}</p>}
</div>
</div>
)


return createPortal(content, modalRoot)
}