import React from 'react'
import {func, string} from 'prop-types'
import styled from 'styled-components'

const Button = styled.button `
    background: ${({ theme }) => theme.text};
    border: 2px solid ${({ theme }) => theme.toggleBorder};
    color: ${({ theme }) => theme.body};
    border-radius: 3px;
    cursor: pointer;`

const Toggle = ({ theme, toggleTheme }) => {
    return(
        <Button onClick={toggleTheme}>
            Toggle Mode 
        </Button>)
}

Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}

export default Toggle 

