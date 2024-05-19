import { FC } from 'react';
import { Button } from './button';

interface AddBeatProps {
  onClick: () => void;
}

export const AddBeat: FC<AddBeatProps> = ({ onClick }) => {
  const stroke = 'green-300'
  return (
    <Button onClick={onClick} className='ml-[14px] w-[20px]'>
      <svg className='w-[20px] h-[20px] stroke-green-600 transition-all hover:brightness-[1.5]' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 12H15" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M12 9L12 15" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke={stroke} strokeWidth="2"></path> </g></svg>
    </Button>
  )
}