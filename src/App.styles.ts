import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 750px;
    margin: auto;
    display: flex;
    padding: 50px 0;
    
    @media (max-width: 750px) {
        flex-direction: column;
        padding: 10px 0;
    }
    
    `;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
    
    @media (max-width: 750px){
        /* background-color: antiquewhite; */
        margin-bottom: 5px;
        align-items: center;
    }
    
    /* ----------------------------- */
    /* border: 1px solid red; */
    `;

export const LogoLink = styled.a`
    display: block;
    /* background-color: aquamarine; */

    @media (max-width: 750px) {
        text-align: center;
        padding-top: 0;
        /* background-color: chocolate; */
    }
    `;

export const InfoArea = styled.div`
    width: 100%;
    margin: 10px 0;
    
    @media (max-width: 750px) {
        margin: -20px 0;
        display: flex;
        justify-content: space-around;
        text-align: center;
    }

    `;

export const GridArea = styled.div`
    /* border: 2px solid blue; */
    display: flex;
    flex: 2;
    justify-content: flex-end;
    
    @media (max-width: 750px) {
        justify-content: center;
        margin: 0 29px;
    }
    `;

export const Grid = styled.div`
    width: 430px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);//Exibir 4 colunas.
    gap: 10px;
    
    @media (max-width: 750px){
        width: 100%;
        height: 100px;
        max-width: 300px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);//Exibir 4 colunas.
        
    }
    
`;