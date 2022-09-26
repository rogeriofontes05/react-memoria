import styled from 'styled-components';

export const Container = styled.div`
    width: 200px;
    height: 50px;
    display: flex;
    background-color: #1550ff;
    border-radius: 10px;
    cursor: pointer;
    
    opacity: 1;
    transition: all ease .3s;

    &:hover {
        opacity: .8;
    }

    @media (max-width: 750px){
        /* background-color: red; */
        padding-top: 0;
        width: 100%;
        max-width: 300px;
    }

`;

export const IconArea = styled.div`
    height: inherit; //Ajusta o tamanho de acordo com o conteúdo.
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid rgba(255, 255, 255, .2);
    padding: 0 15px;
    
`;

export const Icon = styled.img`
    height: 20px;
`;
export const Label = styled.div`
    height: inherit;
    color: #fff;
    justify-content: center;
    display: flex;
    align-items: center;
    flex: 1;
    padding: 0 20px;
    text-transform: uppercase;
    
    @media(max-width:750px) {
        margin-left: -33px;
        font-size: 30px;
        text-transform: uppercase;

    }
`;

