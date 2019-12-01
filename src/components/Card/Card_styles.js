import styled from 'styled-components';

export const CardWrapper = styled.div`
    border-radius: 3px;
    box-shadow: 0 3px 4px rgba(0,0,0,0.3);
    margin: 2rem 0;
    align-items: center;
    justify-content: space-around;
`;

export const CardBody  = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    background-color: #fff;
    background-clip: border-box;
    border-radius: .25rem;
`

export const CardHeader = styled.div`
    background-color: ${props => props.color};
    display: flex;
    padding:0.5rem;
    img{
        max-width: 100%;
        height:auto
    }
`

export const CardContent = styled.div`
    position: relative;  
    display:flex;
    align-items: center;
    justify-content: center;
    overflow:hidden;    
    img{
        max-width:100%;
        background-size:cover; 
        transition: .2s ease-in-out; 
    }
    ${CardWrapper}:hover & {
        img{
            transform: scale(1.2);
            transition: .2s ease-in-out; 
            background-color:#000;
        }
    }
`;

export const CardDetails = styled.div`
    display:flex;
    padding: 1.4rem;
    font-weight: 100;
    justify-content: space-between;
`

export const CardButton = styled.button`
    border-radius: 5px; 
    transition: background-color ease 0.3s;
    display: none;
    border:1px solid #666666;
    cursor:pointer;
    text-align:center;
    font-weight: 200;
    width: 5rem;
    height: 2rem;
    background-color:${props =>  props.disabled ?'#666666':'white'};
    color:${props =>  props.disabled?"white": "#666666"};
    &:active {
        color: ${props =>  props.disabled?"white": "#666666"};
    };
    ${CardWrapper}:hover & {
        display: block;
    }
`