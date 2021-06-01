import styled from "styled-components";
export const CradsFavorites = styled.div`
               display: flex;
               width: 100%;
                justify-content: center;
                flex-wrap: wrap;
                align-items: center;
               @media  (max-width:700px){
                flex-flow: column;
                
    }
  

`;

export const Title = styled.div`
 font-size: 2em ;
`;
export const Cardinfo = styled.div`
            padding: 10px;
            display: flex;
    flex-flow: column;
    justify-content: center;

`;
export const CardImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

        img{
            width: 100%;
        }
`;
export const Card = styled.div`
        display: flex;
    width: 45% !important;
    border: 1px solid #EEE;
    border-radius: 10px;
        margin: 10px;
    @media  (max-width:700px){
        display:flex;
        width: 100% !important;
    }
`;

export const Bottom= styled.p`
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
`;

export const Bold = styled.p`
        font-weight: 900;
        text-transform: capitalize
`;

