import { FC } from 'react'
import { IBeat } from 'models'

interface BeatProps {
  beat: IBeat;
}

export const Beat: FC<BeatProps> = ({ beat }) => {
  return (
    <div><p>{beat.description}</p></div>
  )
}