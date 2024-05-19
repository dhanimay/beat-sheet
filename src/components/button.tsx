import { FC, ReactElement } from 'react'

interface ButtonProps {
  className?: string;
  children: string | ReactElement;
  onClick: () => void;
}

export const Button: FC<ButtonProps> = ({ className, children, onClick }) => {
  return (
    <button
      className={'rounded-none bg-transparent outline-none border-none hover:border-none hover:outline-none focus:outline-none p-0' + ` ${className || ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}