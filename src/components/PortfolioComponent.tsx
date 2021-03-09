import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import Palette from '../atoms/Palette';
import { FullScreen } from '../atoms/Screens';
import iamformegusto from '../assets/iamformegusto.png';

type Props = {
    showPortfolio: boolean;
}

function PortFolioComponent(props: Props) {
    return (
        <FullScreen>
            {
                props.showPortfolio &&
                <PortfolioContainer>
                    <PortfolioHeader>
                        <ImageBlock>
                            <img src={iamformegusto} alt="Hello, iamformegusto" />
                        </ImageBlock>
                    </PortfolioHeader>
                </PortfolioContainer>
            }
        </FullScreen>
    )
}

const PortfolioContainer = styled.div`
    position: absolute;

    width: 100%;
    height: 100%;
    z-index: 2;

    background-color: ${Palette[0][7]};
`

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

    width: 300px;
    height: 300px;

    & > img {
        padding: 2rem;

        ${css`
            animation: .7s ease-in ${ShowImage} forwards;
        `}

        border-radius: 100%;
        border: 1px solid ${Palette[0][0]};
    }
`;

const PortfolioHeader = styled.header`
    
`;

export default PortFolioComponent;