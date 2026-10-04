import './IntersectionMark.css'

const R = 150
const D = 90
const circles = [
  { cx: 300, cy: 300 - D },
  { cx: 300 + D, cy: 300 },
  { cx: 300, cy: 300 + D },
  { cx: 300 - D, cy: 300 },
]

/**
 * The hero visual: four rings (AI, Web, Data, Growth) meeting in one shared centre.
 * Purely decorative, so hidden from assistive tech.
 */
export function IntersectionMark() {
  return (
    <svg className="mark" viewBox="0 0 600 600" aria-hidden="true" focusable="false">
      <circle className="mark__outer" cx="300" cy="300" r="282" />

      <g className="mark__rings">
        {circles.map((c, i) => (
          <circle key={i} className={`mark__ring mark__ring--${i}`} cx={c.cx} cy={c.cy} r={R} />
        ))}
      </g>

      {/* the shared centre */}
      <circle className="mark__core-halo" cx="300" cy="300" r="26" />
      <circle className="mark__core" cx="300" cy="300" r="5" />

      <g className="mark__labels">
        <text x="300" y="22" textAnchor="middle">AI</text>
        <text x="584" y="304" textAnchor="end">WEB</text>
        <text x="300" y="590" textAnchor="middle">DATA</text>
        <text x="16" y="304" textAnchor="start">GROWTH</text>
      </g>
    </svg>
  )
}
