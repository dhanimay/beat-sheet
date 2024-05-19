import { FC } from 'react';
import { Button } from './button';

interface DeleteBeatProps {
  onClick: () => void;
}

export const DeleteBeat: FC<DeleteBeatProps> = ({ onClick }) => {
  return (
    <Button className='flex place-items-start mr-4 mt-[6px]' onClick={onClick}>
      <svg className='fill-bs-gray hover:fill-red-600' height='15' viewBox="0 0 32 32" id="Outlined" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Fill"> <path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,26A12,12,0,1,1,28,16,12,12,0,0,1,16,28Z"></path> <polygon points="19.54 11.05 16 14.59 12.46 11.05 11.05 12.46 14.59 16 11.05 19.54 12.46 20.95 16 17.41 19.54 20.95 20.95 19.54 17.41 16 20.95 12.46 19.54 11.05"></polygon> </g> </g></svg>
    </Button>
  )
}