import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FullScreen } from '../atoms/Screens';
import iamformegusto from '../assets/iamformegusto.png';
import styled, { css, Keyframes, keyframes } from 'styled-components';
import Palette from '../atoms/Palette';
import { RouteComponentProps } from 'react-router';

type Props = {
    routeProps: RouteComponentProps
}

function MainIntroComponent(props: Props) {
    const refImageBlock = useRef<HTMLDivElement>(null);
    const refTitleBlock = useRef<HTMLDivElement>(null);
    const [aniImgBlock, setAniImgBlock] = useState<Keyframes>(ShowHalf);
    const [aniTitleBlock, setAniTitleBlock] = useState<Keyframes | null>(null);
    const [showTitle, setShowTitle] = useState<boolean>(false);

    const enterPortfolio = useCallback(() => {
        setShowTitle(false);
        setAniTitleBlock(CleanTitle);
    }, []);

    const imgEventListener = useCallback(() => {
        if(aniImgBlock === ShowHalf) {
            setAniImgBlock(HideBlock);
        } else if(aniImgBlock === HideBlock) {
            setAniImgBlock(ShowFull);
        } else if(aniImgBlock === ShowFull) {
            if(refImageBlock.current) {
                refImageBlock.current.style.transition = ".7s";
                refImageBlock.current.style.cursor = "pointer";
                
                refImageBlock.current.onmouseenter = () => {
                    refImageBlock.current!.style.transform = "translate(-7px,-7px)";
                    refImageBlock.current!.style.boxShadow = "10px 10px 10px rgba(255,255,255,.7)";
                }

                refImageBlock.current.onmouseleave = () => {
                    refImageBlock.current!.style.transform = "translate(7px,7px)";
                    refImageBlock.current!.style.boxShadow = "";
                }

                refImageBlock.current.onclick = enterPortfolio;
            }

            setAniTitleBlock(ShowTitleBlock);
        } else if (aniImgBlock === CleanImage) {
            props.routeProps.history.push('/portfolio/iamformegusto');
        }
    }, [aniImgBlock, enterPortfolio, props.routeProps.history]);

    const titleEventListener = useCallback(() => {
        if(aniTitleBlock === CleanTitle) {
            setAniImgBlock(CleanImage);
        } else {
            setShowTitle(true);
        }
    }, [aniTitleBlock]);

    useEffect(() => {
        if(refImageBlock.current) {
            refImageBlock.current.addEventListener('animationend', imgEventListener);
        }

        if(refTitleBlock.current) {
            refTitleBlock.current.addEventListener('animationend', titleEventListener)
        }

        return () => {
            refTitleBlock.current?.removeEventListener('animationend', titleEventListener);
            refImageBlock.current?.removeEventListener('animationend', imgEventListener);
        }
    }, [imgEventListener, titleEventListener]); 

    return <FullScreen>
        <Container>
            <ImageBlock ref={refImageBlock} 
                custom={{
                    keyFrames: aniImgBlock
                }}>
                <img src={iamformegusto} alt="hello, iamformegusto" />
            </ImageBlock>
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
    flex-direction: column;

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

const CleanTitle = keyframes`
    from {
        width: 400px;
        height: 400px;
    } to {
        width: 0;
        height: 0;
    }
`;

const CleanImage = keyframes`
    from {
        width: 500px;
        height: 500px;
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
        width: 400px;
        height: 400px;
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

        line-height: 2.5rem;
    }
`

type ImageBlockStyleProps = {
    keyFrames: Keyframes;
}

const ImageBlock = styled.div<{custom: ImageBlockStyleProps}>`
    display: flex;
    justify-content: center;
    align-items: center;

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