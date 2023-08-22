import { styled } from "styled-components";

export const DivContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    
    width: 12.5rem;
    height: 300px;
    border: 1px solid lightgrey;
    border-radius: 8px;
    box-shadow: 3px 2px 7px lightgray;

    font-size: 0.75rem;

    h1 {
        margin-top: 10px;
    }

    #img {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 160px;
        height: 160px;
        border-radius: 999px;
        background-color: #DCDCDC;

        img {
            width: 100px;
            height: 90px;
        }
    }
`;