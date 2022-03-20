import styled from "styled-components";

const Button = styled.button`
    margin-top: 100px;
    margin-bottom: 20px;
    border: none;
    width: 150px;
    padding: 5px;
    background-color: ${({theme}) => theme === 'light' ? '#FDF6EC' : '#DAB88B'};
    color: ${({theme}) => theme === 'light' ? '#DAB88B' : '#FDF6EC'};
    
    &:hover {
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    }
`;


export { Button };