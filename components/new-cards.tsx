type Props = {
  title: string
}

export default function NewCard({ title }: Props) {
  return (
    <div className="border border-solid border-black">
      <div>
        <h3>{title}</h3>
      </div>
      <ul>
        <li>
          <span>command --flag target</span>
          <span>Some explanation on how to use said command</span>
        </li>
        <li>
          <span>command --flag target</span>
          <span>Some explanation on how to use said command</span>
        </li>
        <li>
          <span>command --flag target</span>
          <span>Some explanation on how to use said command</span>
        </li>
      </ul>
    </div>
  )
}
