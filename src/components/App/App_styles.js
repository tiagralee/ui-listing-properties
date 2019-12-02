import styled from 'styled-components';
import * as GS from '../Shared/GlobalStyle';

export const BodyWrapper = styled.div`
    margin: 20px auto;
    text-align: center;
`;
export const Intro = styled.div`
    margin: 2rem;
    h1 {
        font-size: ${GS.fontSize.desktop.h1};  
        @media(max-width: ${GS.media.xs_m}) {
            font-size: ${GS.fontSize.mobi.h1};
        }     
    }
    span {
        color: ${GS.colors.grayText};
    }

`
export const ListWrapper = styled.div`
    width: 65%;
    margin: auto;
    @media(max-width: ${GS.media.xxs_m}){
        width:80%;
    }
`;