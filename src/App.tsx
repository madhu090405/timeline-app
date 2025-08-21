import React, { useEffect, useState } from 'react'
import { EventData } from './types'
import Header from './components/Header'
import Timeline from './components/Timeline'
import EventModal from './components/EventModal'
import FilterPanel from './components/FilterPanel'
import { useTheme } from './hooks/useTheme'
import './styles/globals.css'


export default function App() {
const [events, setEvents] = useState<EventData[]>([])
const [active, setActive] = useState<EventData | null>(null)
const { theme, toggle } = useTheme()


useEffect(() => {
let cancelled = false
fetch('/data/events.json')
.then(r => r.json())
.then((data: EventData[]) => { if (!cancelled) setEvents(data) })
.catch(err => console.error('Failed to load events', err))
return () => { cancelled = true }
}, [])


return (
<>
<Header onToggleTheme={toggle} theme={theme} />
<FilterPanel />
<Timeline events={events} onOpen={setActive} />
<EventModal event={active} onClose={() => setActive(null)} />
</>
)
}