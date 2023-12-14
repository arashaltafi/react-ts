import React from 'react'
import styled from 'styled-components';

const StyledComponents = () => {

  const handleClick = (e: any) => {
    e.preventDefault()
    window.open("https://styled-components.com/", "_blank")
  }

  const Button = styled.button<{ $primary?: boolean; }>`
  /* Adapt the colors based on primary prop */
  background: ${props => props.$primary ? "#BF4F74" : "white"};
  color: ${props => props.$primary ? "white" : "#BF4F74"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #BF4F74;
  border-radius: 3px;
  &:hover {
    background: #BF4F74;
    color: white;
  }
`;


  return (
    <div className='w-full h-full flex flex-col'>
      <div className='title py-8'>styled Components</div>

      <div className='flex flex-col gap-4 items-center justify-center text-center'>
        <Button>Normal</Button>
        <Button $primary>Primary</Button>
      </div>

      <div className='flex items-end justify-center flex-grow pb-16'>
        <a className='subtitle text-center hover:text-sky-500 hover:underline'
          onClick={(e) => handleClick(e)}
          href="https://styled-components.com/">Styled Components</a>
      </div>
    </div>
  )
}

export default StyledComponents