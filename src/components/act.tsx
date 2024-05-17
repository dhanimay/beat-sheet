import { FC, useEffect, useState } from 'react';
import { Beat } from './beat';
import { IAct } from 'models';
import cx from 'classnames';
import { backgroundImage } from 'utils/background-url';
import { DeleteAct } from './delete-act';

interface ActProps {
  act: IAct;
  order: number;
}

export const Act: FC<ActProps> = ({ act: { description, beats }, order }) => {
  const [animate, setAnimate] = useState<boolean>(false);
  useEffect(() => { setTimeout(() => setAnimate(true), 200) }, []);

  const containerClass = cx({
    'flex place-content-center relative transition-all duration-500 bg-no-repeat bg-center bg-cover text-left overflow-hidden mx-auto rounded-l-lg': true,
    'h-0 w-0': !animate,
    'w-[50%]': animate
  });

  return (
    <div className={containerClass}
      style={{ backgroundImage: backgroundImage('/src/assets/paper.jpg') }}
    >
      <div className='flex flex-col flex-1'>
        <h2 className='text-black border-[#bba4a4] border-b-2 pt-2 font-medium px-8'>Act {order}: {description}</h2>
        <ul className='text-black flex flex-col items-start'>
          {beats?.map((beat) => (
            <li className='border-b-blue-200 border-b-2 px-8 pt-2 flex justify-start w-full'>
              <div className='mr-2'>
                <span className='inline-block w-[10px] h-[10px] bg-bs-blue rounded-full'></span>
              </div>
              <Beat beat={beat} />
            </li>))}
        </ul>
      </div>
    </div>
  )
}