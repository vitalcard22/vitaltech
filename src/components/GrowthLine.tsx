import './GrowthLine.css'

/** Points of a noisy but rising series, drawn like a real analytics line. */
const POINTS: [number, number][] = [
  [0, 236], [36, 222], [72, 230], [108, 204], [144, 212], [180, 184], [216, 194], [252, 160],
  [288, 170], [324, 134], [360, 146], [396, 108], [432, 118], [468, 80], [504, 92], [540, 52], [576, 62], [612, 22],
]
const PATH = POINTS.map(([x, y], i) => `${i ? 'L' : 'M'}${x},${y}`).join(' ')
const END = POINTS[POINTS.length - 1]

/** The hero's one drawn moment: a growth line that traces itself on load. */
export function GrowthLine({ className = '' }: { className?: string }) {
  return (
    <svg className={`growth ${className}`.trim()} viewBox="0 0 640 260" aria-hidden="true" focusable="false" preserveAspectRatio="none">
      {[40, 100, 160, 220].map((y) => (
        <line key={y} className="growth__grid" x1="0" x2="640" y1={y} y2={y} vectorEffect="non-scaling-stroke" />
      ))}
      <path className="growth__line" d={PATH} pathLength={1} vectorEffect="non-scaling-stroke" />
      <line className="growth__dot" x1={END[0]} x2={END[0]} y1={END[1]} y2={END[1]} vectorEffect="non-scaling-stroke" />
    </svg>
  )
}
