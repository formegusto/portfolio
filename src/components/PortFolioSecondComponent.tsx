import React, { useEffect, useRef } from 'react';
import styled, { css, keyframes } from 'styled-components';
import iamformegusto from '../assets/iamformegusto.png';
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineGithub } from 'react-icons/ai';

function PortFolioSecondComponent() {
    const refFGBlock = useRef<HTMLDivElement>(null);
    const refIntroBlock = useRef<HTMLDivElement>(null);

    useEffect(() => {
        window.addEventListener('scroll', function() {
            if(refFGBlock.current) {
                if(window.innerHeight > window.pageYOffset)
                    refFGBlock.current.style.transform = `scale(${1 - (window.pageYOffset / window.innerHeight)})`;
            }

            if(refIntroBlock.current){
                refIntroBlock.current.style.transform = `scale(${2 - (window.pageYOffset / window.innerHeight)})`;
            }
        });

        if(refFGBlock.current) {
            refFGBlock.current.addEventListener('animationend', function(e) {
                if(e.animationName === showHalf.getName()) {
                }
            });
        }
    }, []);

    return (
        <>
            <PortFolioContainer>
                <FormeGustoBlock ref={refFGBlock}>
                    <img src={iamformegusto} alt="Hello! iamtaehoen!" />
                    <IconBlock>
                        <a href="https://www.facebook.com/profile.php?id=100004846296456" target="__blank">
                            <AiOutlineFacebook size={48}/>
                        </a>
                        <a href="https://www.instagram.com/hi_thniii/" target="__blank">
                            <AiOutlineInstagram size={48}/>
                        </a>
                        <a href="https://github.com/formegusto" target="__blank">
                            <AiOutlineGithub size={48}/>
                        </a>
                    </IconBlock>
                </FormeGustoBlock>
            </PortFolioContainer>
            <PortFolioContainer>
                <IntroBlock ref={refIntroBlock}>
                    Hello
                </IntroBlock>
            </PortFolioContainer>
        </>
    );
}

const showHalf = keyframes`
    from {
        width: 0px;
        height: 0px;
    } to {
        width: 500px;
        height: 500px;
    }
`;

const PortFolioContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100vw;
    height: 100vh;

    background-color: rgb(0,0,0);
`;

const FormeGustoBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 500px;
    height: 500px;

    border-radius: 100%;
    
    background-color: rgb(255,255,255);

    & > img {
        width: 300px;
        height: 300px;
    }
`;

const IconBlock = styled.div`
    display: flex;

    & > a {
        text-decoration: none;
        color: rgb(0,0,0);
    }
`;

const IntroBlock = styled.div`
    font-family: 'Montserrat', sans-serif;
    font-weight: 100;

    color: rgb(255,255,255);

    transform: scale(2);
`;

export default PortFolioSecondComponent;