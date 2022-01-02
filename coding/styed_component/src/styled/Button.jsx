import styled from "styled-components"

export const Button = styled.button`
/* css syntax     */

border-radius :4px;
margin-bottom :50px;
color : white;
background-color :#FE7E6D;
    color : ${props => props.theme === "light" ? "grey" : "red"};

&:hover {
    box-shadow : -1px 2px 2px 0px #FE7E6D
}
`;
 export const Div = styled.div`
  display : flex;
  width: 200px;
  height : 200px;
  background-color : grey;
  margin: auto;
  
  color : black;

   & > p {
       color : green;
       
       margin: auto
   }
    & > p:hover {
        color : blue
    }
 `
