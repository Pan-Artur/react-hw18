import styled from "styled-components";

export const StyledPhonebook = styled.div`
    h1 {
        display: flex;
        justify-content: center;
    }

    & > div {
        display: flex;
        gap: 40px;
        justify-content: center;

        & > div {
            min-height: 325px;
        }
    }
`;