import { FC } from 'react';
import { Button } from './button';

interface DeleteActProps {
  onClick: () => void
}

export const DeleteAct: FC<DeleteActProps> = ({ onClick }) => {
  return (
    <Button className='absolute bg-bs-black p-1 top-2 right-4 text-red-600' onClick={onClick}>
      <span>Delete</span>
    </Button>
  )
}