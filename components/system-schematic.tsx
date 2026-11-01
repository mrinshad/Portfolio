/**
 * Custom schematic: the path a business event takes through a system,
 * drawn as a single annotated figure rather than a decorative flourish.
 */
export function SystemSchematic() {
  return (
    <svg
      viewBox="0 0 1000 150"
      className="w-full"
      role="img"
      aria-label="A business event travels from the interface, through the API and data model, into the ledger."
    >
      <defs>
        <marker
          id="schematic-arrow"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M0 0 10 5 0 10z" fill="currentColor" />
        </marker>
      </defs>

      <g
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        className="text-rule"
      >
        <line x1="0" y1="75" x2="1000" y2="75" />
      </g>

      <g
        stroke="currentColor"
        strokeWidth="1.25"
        fill="none"
        markerEnd="url(#schematic-arrow)"
        className="text-ink"
      >
        <line x1="130" y1="75" x2="300" y2="75" />
        <line x1="410" y1="75" x2="580" y2="75" />
        <line x1="690" y1="75" x2="860" y2="75" />
      </g>

      {[
        { x: 70, title: "Event", note: "dispatch, payment, task" },
        { x: 355, title: "API", note: "validated, authorised" },
        { x: 635, title: "Model", note: "schema + invariants" },
        { x: 925, title: "Ledger", note: "derived, auditable" },
      ].map((node) => (
        <g key={node.title}>
          <circle
            cx={node.x}
            cy="75"
            r="6"
            fill="currentColor"
            className="text-paper"
            stroke="currentColor"
            strokeWidth="1.25"
          />
          <text
            x={node.x}
            y="46"
            textAnchor="middle"
            className="fill-ink font-mono"
            style={{ fontSize: 13, letterSpacing: "0.12em" }}
          >
            {node.title.toUpperCase()}
          </text>
          <text
            x={node.x}
            y="104"
            textAnchor="middle"
            className="fill-muted-foreground"
            style={{ fontSize: 12 }}
          >
            {node.note}
          </text>
        </g>
      ))}
    </svg>
  )
}
