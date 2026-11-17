import Reveal from './Reveal.jsx'

export default function SectionHeading({ title, lead }) {
  return (
    <Reveal className="section-head">
      <h2>{title}</h2>
      {lead && <p>{lead}</p>}
    </Reveal>
  )
}
