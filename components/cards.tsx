type Props = {
  title: string
}

export default function Card({ title }: Props) {
  return (
    <div
      style={{ width: '450px' }}
      className="flex flex-col border border-solid border-black rounded p-3 m-3"
    >
      <div className="text-center">
        <span className="border border-solid border-black rounded">
          {title}
        </span>
      </div>
      <ul>
        <li>
          <span className="bg-gray-500 text-neutral-50 p-1 rounded m-2">
            command --flag target
          </span>
          <span>Some explanation on how to use said command</span>
        </li>
        <li>
          <span className="bg-gray-500 text-neutral-50 p-1 rounded m-2">
            command --flag target
          </span>
          <span>Some explanation on how to use said command</span>
        </li>
        <li>
          <span className="bg-gray-500 text-neutral-50 p-1 rounded m-2">
            command --flag target
          </span>
          <span>Some explanation on how to use said command</span>
        </li>
      </ul>
    </div>
  )
}
