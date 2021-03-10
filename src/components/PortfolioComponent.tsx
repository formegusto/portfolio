import React from 'react';
import styled from 'styled-components';
import Palette from '../atoms/Palette';
import { FullScreen } from '../atoms/Screens';
import iamformegusto from '../assets/iamformegusto.png';

type Props = {
    showPortfolio: boolean;
}

function PortFolioComponent(props: Props) {
    const menus: any[] = [
        {
            title: "Intro",
            onClick: () => {
                window.scroll({
                    behavior: "smooth",
                    top: window.innerHeight * 1
                });
            }
        },
        {
            title: "Skills",
            onClick: () => {
                window.scroll({
                    behavior: "smooth",
                    top: window.innerHeight * 2 - 100
                });
            }
        },
        {
            title: "Works",
            onClick: () => {
                window.scroll({
                    behavior: "smooth",
                    top: window.innerHeight * 3 - 200
                });
            }
        },
        {
            title: "Outro",
            onClick: () => {
                window.scroll({
                    behavior: "smooth",
                    top: window.innerHeight * 4 - 300
                });
            }
        },
    ]
    return (
        <FullScreen>
            {
                props.showPortfolio &&
                <PortfolioContainer>
                    <PortfolioHeader>
                        {
                            menus.map((menu,idx) => 
                                <HeaderItem onClick={menu.onClick} key={idx}>
                                    {menu.title}
                                </HeaderItem>
                            )
                        }
                        {/* <ImageBlock>
                            <img src={iamformegusto} alt="Hello, iamformegusto" />
                        </ImageBlock> */}
                    </PortfolioHeader>
                    <SecondContainer>
                
                    </SecondContainer>
                    <ThirdContainer>

                    </ThirdContainer>
                    <ForthContainer>

                    </ForthContainer>
                    <FifthContainer>

                    </FifthContainer>
                </PortfolioContainer>
            }
        </FullScreen>
    )
}

const PortfolioContainer = styled.div`
    position: absolute;

    z-index: 2;

    background-color: ${Palette[0][7]};
`

const SecondContainer = styled.div`
    width: 100vw;
    height: calc(100vh - 100px);

    background-color: ${Palette[0][4]};
`;

const ThirdContainer = styled.div`
    width: 100vw;
    height: calc(100vh - 100px);

    background-color: ${Palette[0][5]};
`;

const ForthContainer = styled.div`
    width: 100vw;
    height: calc(100vh - 100px);

    background-color: ${Palette[0][6]};
`;

const FifthContainer = styled.div`
    width: 100vw;
    height: calc(100vh - 100px);

    background-color: ${Palette[0][7]};
`;

// const ShowImage = keyframes`
//     from {
//         width: 0;
//         height: 0;
//     } to {
//         width: 200px;
//         height: 200px;
//     }
// `;

// const ImageBlock = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;

//     width: 300px;
//     height: 300px;

//     & > img {
//         padding: 2rem;

//         border-radius: 100%;
//         border: 1px solid ${Palette[0][0]};
//     }
// `;

const PortfolioHeader = styled.header`
    display: flex;

    position: sticky;
    top: 0;

    background-color: ${Palette[0][7]};
`;

const HeaderItem = styled.div`
    flex: 1;

    color: ${Palette[0][0]};
    height: 100px;

    text-align: center;
    line-height: 100px;

    font-family: 'Montserrat', sans-serif;
    font-size: 2rem;
`;

export default PortFolioComponent;