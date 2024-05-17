import { FC } from 'react';

interface DeleteActProps {
}

export const DeleteAct: FC<DeleteActProps> = ({ }) => {
  const buttonClass = 'rounded-none border-[1px] border-black bg-[#363649] absolute top-0 right-0 h-[35px] flex place-content-center';
  return (
    <button className={buttonClass + ' text-red-600'}>
      <span>Delete</span>
    </button>
  )
}