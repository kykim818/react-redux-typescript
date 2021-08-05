import React from 'react';
import styled from 'styled-components'

const Button = (props : {children : React.ReactNode}) => {
    return (
        <ButtonWrapper>
            {props.children}
        </ButtonWrapper>
    );

}

const ButtonWrapper = styled.button`

`
export default Button