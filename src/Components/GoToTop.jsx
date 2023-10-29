import React from 'react'
import styled from 'styled-components';
import { FaArrowUp } from "react-icons/fa6";
const GoToTop = () => {
    const goToBtn = () => {
        window.scrollTo({top:0,left:0,behavior:"smooth"})
    }
  return (
    
    <Wrapper>
     <div className='top_btn' onClick={goToBtn}>
  <FaArrowUp className="top-btn--icon"/>
     </div>
     </Wrapper>
     
   
  )
}
const Wrapper = styled.section`
display:flex;
justify-content: center;
align-items: center;

.top-btn {
    font-size: 2.4rem;
    width: 6rem;
    height: 6rem;
    color: #fff;
    background-color:#0000;
    border-radius: 50%;
    position: fixed;
    bottom: 5rem;
    right: 5rem;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
cursor: pointer;

}
`;
export default GoToTop
