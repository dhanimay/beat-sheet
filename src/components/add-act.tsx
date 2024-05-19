import { FC, MouseEvent } from 'react';

interface AddActProps {
  onClick: () => void;
  className: string;
}

export const AddAct: FC<AddActProps> = ({ onClick, className }) => {
  return (
    <button
      className={`${className} ` + 'flex place-center mx-auto border-2 my-2 border-white bg-transparent hover:border-bs-gold active:border-bs-gray focus:outline-0'}
      onClick={(event: MouseEvent<HTMLButtonElement>) => {
        setTimeout(() => {
          (event.target as HTMLDivElement).scrollIntoView({ behavior: 'smooth' });
        }, 300)
        onClick();
      }}
    >
      <span className='text-bs-gold'>+ <span className='text-bs-gray'>Add Act</span></span>
    </button>
  )
}