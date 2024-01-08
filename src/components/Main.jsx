// import React, { useState } from 'react';
// import Modal from './UI/Modal';
// import styled from 'styled-components';

// const Main = () => {
//     const [modalIsVisible,setModalIsVisible]=useState(false)
//     function modalHandler() {
//         setModalIsVisible((prevState)=> !prevState)
//     }
//     return (
//         <StyledContainer>
//         { modalIsVisible &&  <Modal/>}
//         <button onClick={modalHandler()}>Open</button>
//         </StyledContainer>
//     );
// };

// export default Main;

// const StyledContainer=styled.div`
//     background:linear-gradient(to bottom right, blue, pink);
// `


import React, { useState } from 'react';
import Modal from './UI/Modal';
import styled from 'styled-components';

const Main = () => {
    const [modalIsVisible, setModalIsVisible] = useState(false);

    function modalHandler() {
        setModalIsVisible((prevState) => !prevState);
    }

    return (
        <StyledContainer>
            {modalIsVisible && <Modal onClose={modalHandler} />}
            <StyledButton  onClick={modalHandler}>Open</StyledButton>
        </StyledContainer>
    );
};

export default Main;

const StyledContainer = styled.div`
height: 737px;
    background: linear-gradient(to bottom right, blue, pink);
`;

const StyledButton=styled.button`
   margin-left:700px;
   margin-top:300px;
   width:200px;
   height: 60px;
   font-size: 30px;
`