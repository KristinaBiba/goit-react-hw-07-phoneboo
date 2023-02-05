import styled from "styled-components";  

export const P = styled.p`
margin: 0;`;

export const Button = styled.button`
  
  width: 150px;
  height: 40px;
  padding: 4px;
  color: white;
  font-size: 24px;
  text-transform: uppercase;
  background-color: black;
  border-radius: 6px;
  cursor: pointer;
  
  &:disabled { background-color: darkgray;}
 
  `;
  export const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 600px;
  list-style: none;
  padding: 4px;
  margin: 8px;
  font-size: 24px;`;
