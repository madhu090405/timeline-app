# Accessibility Features in Timeline App

## Modal
- Implemented `role="dialog"` with `aria-labelledby` and `aria-describedby`.
- Added focus trap inside modal.
- ESC key closes the modal.
- Focus returns to trigger button on close.

## Timeline
- Used `aria-label` for navigation landmark.
- Added `aria-current="step"` on active timeline marker.
- Timeline markers are buttons (focusable via Tab).
- Arrow keys navigate between markers.

## General
- High color contrast (≥ 4.5:1) ensured for text and background.
- Focus styles are visible (WCAG 2.1.1).
- Dark/light theme preserved accessibility with variables.
