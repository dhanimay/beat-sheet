import { ThemeEnum } from 'models';
import { FC, useState } from 'react';

interface SheetHeaderProps {
  actCount?: number;
}


export const SheetHeader: FC<SheetHeaderProps> = ({ actCount = 0 }) => {
  const [theme, setTheme] = useState<ThemeEnum>(ThemeEnum.PAPER);

  return (
    <ul className='bg-bs-gray py-2 flex place-content-center block'>
      <li>🎬 - {actCount}</li>
      <li>Theme: {String(theme)}</li>
    </ul>
  )
}