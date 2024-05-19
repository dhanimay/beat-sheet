import { FC } from 'react';

interface SheetHeaderProps {
  actCount?: number;
  duration: number;
}


export const SheetHeader: FC<SheetHeaderProps> = ({ actCount = 0, duration }) => {
  return (
    <ul className='bg-bs-gold py-2 flex place-content-center block text-black font-bold space-x-4'>
      <li>🎬 - {actCount}</li>
      <li>⏳ - {(duration / 60).toFixed(2)}min</li>
    </ul>
  )
}