import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FullScreen } from '../atoms/Screens';
import iamformegusto from '../assets/iamformegusto.png';
import styled, { css, Keyframes, keyframes } from 'styled-components';
import Palette from '../atoms/Palette';

function MainIntroComponent() {
    const refImageBlock = useRef<HTMLDivElement>(null);
    const refTitleBlock = useRef<HTMLDivElement>(null);
    const [aniImgBlock, setAniImgBlock] = useState<Keyframes>(ShowHalf);
    const [aniTitleBlock, setAniTitleBlock] = useState<Keyframes | null>(null);
    const [showTitle, setShowTitle] = useState<boolean>(false);

    const imgEventListener = useCallback(() => {
        if(aniImgBlock === ShowHalf) {
            setAniImgBlock(HideBlock);
        } else if(aniImgBlock === HideBlock) {
            setAniImgBlock(ShowFull);
        } else if(aniImgBlock === ShowFull) {
            setAniTitleBlock(ShowTitleBlock);
        }
    }, [aniImgBlock]);

    const titleEventListenr = useCallback(() => {
        setShowTitle(true);
    }, []);

    useEffect(() => {
        if(refImageBlock.current) {
            refImageBlock.current.addEventListener('animationend', imgEventListener);
        }

        if(refTitleBlock.current) {
            refTitleBlock.current.addEventListener('animationend', titleEventListenr)
        }

        return () => {
            refImageBlock.current?.removeEventListener('animationend', imgEventListener);
        }
    }, [imgEventListener, titleEventListenr]); 

    return <FullScreen>
        <Container>
            <TitleBlock ref={refTitleBlock}
                custom={{
                    keyframes: aniTitleBlock,
                    showTitle: showTitle
                }}
            >
                <h1 style={{
                    color: Palette[0][7],
                    fontFamily: "'Montserrat', sans-serif"
                }}>
                    Hello.<br/>
                    I am developer formegusto.
                </h1>
                <h1 style={{
                    color: Palette[0][7],
                    fontFamily: "'Noto Sans KR', sans-serif"
                }}>
                    안녕하세요.<br/>
                    개발자 노태헌 입니다.
                </h1>
            </TitleBlock>
            <ImageBlock ref={refImageBlock} 
                custom={{
                    keyFrames: aniImgBlock
                }}>
                <img src={iamformegusto} alt="hello, iamformegusto" />
            </ImageBlock>
        </Container>
    </FullScreen>
}

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

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;

    background-color: ${Palette[0][0]};

    & > div:not(:last-child) {
        margin-right: 2rem;
    }
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

const ShowTitleBlock = keyframes`
    from {
        width: 0;
        height: 0;
    } to {
        width: 500px;
        height: 500px;
    }
`;

type TitleBlockStyleProps = {
    keyframes?: Keyframes | null;
    showTitle?: boolean;
}

const TitleBlock = styled.div<{custom: TitleBlockStyleProps}>`
    width: 0;
    height: 0;

    ${props => (props.custom.keyframes !== null) && css`
        animation: .7s ease-in-out ${props.custom.keyframes} forwards;
    `}

    & > h1 {
        display: ${props => props.custom.showTitle ? 'block' : 'none'};

        font-size: 1.5rem;
        font-weight: 100;
    }
`

type ImageBlockStyleProps = {
    keyFrames: Keyframes;
}

const ImageBlock = styled.div<{custom: ImageBlockStyleProps}>`
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