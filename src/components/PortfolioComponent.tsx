import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import Palette from '../atoms/Palette';
import { FullScreen } from '../atoms/Screens';
import iamformegusto from '../assets/iamformegusto.png';

function PortfolioComponent() {
    return <FullScreen>
        <PortfolioContainer>
            <PortfolioHeader>
                <ImageBlock>
                    <img src={iamformegusto} alt="hello, iamformegusto" />
                </ImageBlock>
            </PortfolioHeader>
        </PortfolioContainer>
    </FullScreen>
}

const PortfolioContainer = styled.div`
    height: 100%;

    background-color: ${Palette[0][0]};
`;

const PortfolioHeader = styled.header`
    height: 200px;
`;

const ShowImage = keyframes`
    from {
        width: 0;
        height: 0;
    } to {
        width: 200px;
        height: 200px;
    }
`;

const ImageBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 200px;
    height: 200px;

    background-color: ${Palette[0][7]};

    border-radius: 100%;

    ${css`
        animation: .7s ease-in ${ShowImage} forwards;
    `}

    & > img {
        width: 150px;
        height: 150px;
    }
`;

export default PortfolioComponent;