import { useEffect, useState } from 'react'


type Theme = 'light' | 'dark'


export function useTheme() {
const [theme, setTheme] = useState<Theme>(() => {
const saved = localStorage.getItem('theme') as Theme | null
if (saved === 'light' || saved === 'dark') return saved
// System preference fallback
const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches
return prefersDark ? 'dark' : 'light'
})


useEffect(() => {
document.documentElement.setAttribute('data-theme', theme)
localStorage.setItem('theme', theme)
}, [theme])


const toggle = () => setTheme(t => (t === 'light' ? 'dark' : 'light'))


return { theme, toggle }
}