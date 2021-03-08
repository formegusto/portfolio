import React, { useEffect, useRef, useState } from 'react';
import { FullScreen } from '../atoms/Screens';
import iamformegusto from '../assets/iamformegusto.png';
import styled, { css, Keyframes, keyframes } from 'styled-components';
import Palette from '../atoms/Palette';

function MainIntroComponent() {
    const refImageBlock = useRef<HTMLDivElement>(null);
    const [aniImgBlock, setAniImgBlock] = useState<Keyframes>(ShowHalf);

    useEffect(() => {
        if(refImageBlock.current) {
            refImageBlock.current.addEventListener('animationend', () => {
                if(aniImgBlock === ShowHalf) {
                    setAniImgBlock(HideBlock);
                } else if(aniImgBlock === HideBlock) {
                    setAniImgBlock(ShowFull);
                }
            })
        }
    });

    return <FullScreen>
        <Container>
            <ImageBlock ref={refImageBlock} 
                custom={{
                    keyFrames: aniImgBlock
                }}>
                <img src={iamformegusto} alt="hello, iamformegusto" />
            </ImageBlock>
        </Container>
    </FullScreen>
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;

    background-color: ${Palette[0][0]};
`;

const HideBlock = keyframes`
    from {
        width: 100px;
        height: 100px;
    } to {
        width: 0;
        height: 0;
    }
`;

const ShowHalf = keyframes`
    from {
        width: 0;
        height: 0;
    } to {
        width: 100px;
        height: 100px;
    }
`;

const ShowFull = keyframes`
    from {
        width: 0;
        height: 0;
    } to {
        width: 500px;
        height: 500px;
    }
`;

type StyleProps = {
    keyFrames: Keyframes;
}

const ImageBlock = styled.div<{custom: StyleProps}>`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 500px;
    height: 500px;

    background-color: ${Palette[0][7]};

    border-radius: 100%;

    ${props => css`
        animation: .7s ease-in-out ${props.custom.keyFrames} forwards;
    `}

    & > img {
        width: 300px;
        height: 300px;
    }
`;

export default MainIntroComponent;