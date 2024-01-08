import React from 'react';
import styled from 'styled-components';


const Modal = ({onClose}) => {
    return (
        <div>
            <Backdrop />
            <Card>
                <StyledText>There will be your text!</StyledText>
                <StyledClick onClick={onClose}>Close</StyledClick>
            </Card>
        </div>
    );
};

export default Modal;
const Backdrop=styled.div`
       position: fixed;
top: 0;
 right: 0;
   left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`

const StyledText=styled.h1`
     width:450px;
     color: rgba(0, 255, 56, 1);
 margin-left:150px;
 margin-top:90px;
`

const Card=styled.div`
    background-image:url('https://i.pinimg.com/564x/a8/6e/cb/a86ecb58a6c23f16e62cefa68ded07c2.jpg');
    min-height: 250px;
  min-width: 400px;
  background-color: #fff;
  color: black;
  border-radius: 5px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`

const StyledClick=styled.button`
margin-left:230px;
margin-top:20px;
width: 140px;
height: 30px;
font-size: 24px;
`