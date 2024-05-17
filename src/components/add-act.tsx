import { FC } from 'react';

export const AddAct: FC = () => {
  return (
    <button className='flex place-center mx-auto border-2 my-2 border-white bg-transparent hover:border-bs-gold active:border-bs-gray focus:outline-0'>
      <span className='text-bs-gold'>+ <span className='text-bs-gray'>Add Act</span></span>
    </button>
  )
}