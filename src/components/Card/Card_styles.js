import styled from 'styled-components';
import * as GS from '../Shared/GlobalStyle'

export const CardWrapper = styled.div`
    border-radius: 3px;
    box-shadow: 0 3px 4px rgba(0,0,0,0.3);
    margin: 20px 0;
    align-items: center;
`;

export const CardBody  = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    background-color: #fff;
    border-radius: ${GS.styles.borderRadius1};
`

export const CardHeader = styled.div`
    background-color: ${props => props.color};
    display: flex;
    padding: 5px;
    img{
        max-width: 100%;
        height:auto;
    }
`

export const CardContent = styled.div`
    position: relative;  
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;    
    img{
        max-width:100%;
        background-size:cover; 
        transition: .2s ease-in-out; 
    }
    ${CardWrapper}:hover & {
        img{
            transform: scale(1.2);
            transition: .2s ease-in-out; 
            background-color:${GS.colors.lightBG};
        }
    }
`;

export const CardDetails = styled.div`
    display:flex;
    padding: 15px;
    justify-content: space-between;
`

export const CardButton = styled.button`
    border-radius: ${GS.styles.borderRadius2}; 
    transition: background-color ease 0.3s;
    display: none;
    border:1px solid ${GS.colors.grayBorder};
    cursor:pointer;
    text-align:center;
    min-width: 80px;
    height: 30px;
    background-color:${props => props.disabled ? GS.colors.darkBG :GS.colors.lightBG};
    color:${props =>  props.disabled? GS.colors.whiteText: GS.colors.grayText};
    &:active {
        color: ${props => props.disabled? GS.colors.whiteText: GS.colors.grayText};
    };
    ${CardWrapper}:hover & {
        display: block;
    }
    @media(max-width: ${GS.media.xxs_m}){
        min-width: 50px;
        font-size: 12px;
    }
`