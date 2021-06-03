import styled, { css } from "styled-components";
import { Montserrat } from "./Fonts";
import { StyleTypes } from "./types";

export const FullScreen = styled.div<{ custom?: StyleTypes }>`
  position: relative;

  width: 100vw;
  height: 100vh;

  min-width: 1200px;
  min-height: 900px;

  /*
    custom style
  */
  ${(props) =>
    props.custom &&
    css`
      background-color: ${props.custom.backgroubdColor};
      z-index: ${props.custom.zIndex};
      ${props.custom.isNotDefault === true &&
      css`
         {
          height: auto;
          min-height: auto;
        }
      `}
    `}
`;

export const DefaultContentScreen = styled.div<{ custom?: StyleTypes }>`
  position: relative;

  width: calc(100% - 240px);

  min-width: 1200px;
  margin: 0 auto;

  /*
    custom style
  */
  ${(props) =>
    props.custom &&
    css`
      background-color: ${props.custom.backgroubdColor};
      margin: ${props.custom.margin};
      padding: ${props.custom.padding};
    `}

  ${Montserrat}
`;

export const DefaultHeadScreen = styled.div<{ custom?: StyleTypes }>`
  position: relative;

  width: 100%;

  min-width: 1200px;

  ${Montserrat}
  margin: 0 auto;
  padding: 60px 0;
  text-align: right;

  & > h1 {
    box-sizing: border-box;

    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */

    letter-spacing: 0.1em;

    /*
    custom style
    */
    ${(props) =>
      props.custom &&
      css`
        padding: ${props.custom.padding};
        text-align: ${props.custom.textAlign};
        color: ${props.custom.color};
      `}
  }

  ${(props) => css`
    ${props.custom?.isNotDefault === true &&
    css`
       {
        min-width: auto;
      }
    `}
  `}
`;
