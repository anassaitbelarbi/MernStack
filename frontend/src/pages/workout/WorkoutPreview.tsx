import { _date } from "@utils/dateFormat"

type Props = {
    title: string,
    deps: number,
    load: number,
    createdAt: string | Date
}

function WorkoutPreview({title, deps, load, createdAt}: Props) {
  return (
    <div>
        <p>{title}</p>
        <p>{deps}</p>
        <p>{load}</p>
        <p>{_date(createdAt)}</p>
    </div>
  )
}

export default WorkoutPreview
