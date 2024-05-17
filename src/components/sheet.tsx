import { FC, useEffect, useState } from 'react';
import { Act } from './act';
import mock from '../models/mock.json'
import { SheetHeader } from './sheet-header';
import { AddAct } from './add-act';
import { IBeatSheet, } from 'models';

export const Sheet: FC = () => {
  const [beatSheet, setBeatSheet] = useState<IBeatSheet | null>(null);
  // Get Beat Sheet

  useEffect(() => {
    setBeatSheet(mock);
  }, []);

  return (
    <div className='bg-bs-black h-full w-full p-4 flex flex-col max-w-bs-max mx-auto'>
      <h2 className='text-4xl'>{beatSheet?.title}</h2>
      <div className='border-[1px] border-bs-gray flex-1 rounded'>
        <SheetHeader actCount={beatSheet?.acts.length} />
        <ul className=''>
          {
            beatSheet?.acts.map((act, i) => (
              <li className='my-4 flex'>
                <Act act={act} order={i + 1} />
              </li>
            ))
          }
          <AddAct />
        </ul>
      </div>
    </div >
  )
}