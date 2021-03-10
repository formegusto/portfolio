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
            title: "about",
        },
        {
            title: "skills",
        },
        {
            title: "works",
        },
        {
            title: "labs",
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
                                <HeaderItem>
                                    {menu.title}
                                </HeaderItem>
                            )
                        }
                        {/* <ImageBlock>
                            <img src={iamformegusto} alt="Hello, iamformegusto" />
                        </ImageBlock> */}
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