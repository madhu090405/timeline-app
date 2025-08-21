import React from 'react'


interface HeaderProps {
onToggleTheme: () => void
theme: 'light' | 'dark'
}


export default function Header({ onToggleTheme, theme }: HeaderProps) {
return (
<header className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
<div className="row">
<div style={{ width: 36, height: 36, borderRadius: 8, background: 'var(--accent)' }} />
<h1 style={{ margin: 0, fontSize: 20 }}>Timeline</h1>
</div>
<div className="row">
<button className="btn" onClick={onToggleTheme} aria-label="Toggle theme">
{theme === 'light' ? '🌙 Dark' : '☀️ Light'}
</button>
</div>
</header>
)
}