import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled, { css, keyframes, Keyframes } from 'styled-components';
import Palette from '../atoms/Palette';
import { FullScreen } from '../atoms/Screens';
import iamformegusto from '../assets/iamformegusto.png';
import PortFolioComponent from './PortFolioComponent';

function IamformegustoComponent() {
    const refPortfolioContainer = useRef<HTMLDivElement>(null);
    const refImageBlock = useRef<HTMLDivElement>(null);
    const [aniImgBlock, setAniImgBlock] = useState<Keyframes>(ShowHalf);
    const [showPortfolio, setShowPortfolio] = useState<boolean>(false);

    const scrollBackgroundEvent = useCallback(() => {
        if(refPortfolioContainer.current) {
            refPortfolioContainer.current.style.backgroundColor = `
                rgb(
                    ${255 * (window.scrollY / window.screen.height)},
                    ${255 * (window.scrollY / window.screen.height)},
                    ${255 * (window.scrollY / window.screen.height)}
                )
            `;
        }

        if(refImageBlock.current) {
            refImageBlock.current.style.width = `${500 - (window.scrollY / window.screen.height)}px`;
            refImageBlock.current.style.height = `${500 - (window.scrollY / window.screen.height)}px`;
        }

        if(window.scrollY >= window.screen.height / 10 && !showPortfolio) {
            setShowPortfolio(true);
        }
    }, [showPortfolio]);

    const enterPortfolio = useCallback(() => {
        window.scroll({
            behavior: "smooth",
            top: window.screen.height
        });
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
        }
    }, [aniImgBlock, enterPortfolio]);

    useEffect(() => {
        window.addEventListener('scroll', scrollBackgroundEvent);
    }, [scrollBackgroundEvent]);

    useEffect(() => {
        if(refImageBlock.current) {
            refImageBlock.current.addEventListener('animationend', imgEventListener);
        }

        return () => {
            refImageBlock.current?.removeEventListener('animationend', imgEventListener);
        }
    }, [imgEventListener]); 

    return (
        <>
            <FullScreen>
                <PortfolioContainer
                    ref={refPortfolioContainer}
                >
                    <ImageBlock
                        ref={refImageBlock}
                        custom={{
                            keyFrame: aniImgBlock
                        }}
                    >
                        <img src={iamformegusto} alt="hello, iamformegusto" />
                    </ImageBlock>
                    <TitleBlock>
                        <em>
                            Hello!&nbsp;
                        </em>
                        <em>
                            I'm TaeHeon, Front-End Developer.
                        </em>
                    </TitleBlock>
                </PortfolioContainer>
            </FullScreen>
            <PortFolioComponent 
                showPortfolio={showPortfolio}
            />
        </>
    );
}

const TitleBlock = styled.div`
    position: fixed;
    z-index: 1;
    
    margin: 600px 0 0;

    font-family: 'Montserrat', sans-serif;
    font-weight: 100;

    & > em {
        font-size: 1.5rem;
        letter-spacing: .5rem;

        color: ${Palette[0][7]};
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

const PortfolioContainer = styled.div`
    display: flex;

    justify-content: center;
    align-items: center;
    flex-direction: column;

    height: 100%;

    background-color: ${Palette[0][0]};
`;

type ImageBlockStyleProps = {
    keyFrame: Keyframes;
}

const ImageBlock = styled.div<{custom: ImageBlockStyleProps}>`
    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    z-index: 1;

    background-color: ${Palette[0][7]};

    border-radius: 100%;

    ${props => css`
        animation: .7s ease-in-out ${props.custom.keyFrame} forwards;
    `}

    & > img {
        width: 300px;
        height: 300px;
        z-index: 1;
    }
`;


export default IamformegustoComponent;