import {css} from "styled-components"


export const Desktop = (props) => {
    return css`
        @media only screen and (min-width: 768px){
            ${props}
        }
    `;
}

export const Desktop2 = (props) => {
    return css`
        @media only screen and (min-width: 1200px){
            ${props}
        }
    `;
}

export const Horizontal = (props) => {
    return css`
        @media only screen and (max-width: 768px) and (max-height: 500px){
            ${props}
        }
    `;
}
