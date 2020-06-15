import React from 'react';
import { css, Global } from '@emotion/core';
import styled from '@emotion/styled';
import { darken, lighten, transparentize } from 'polished';

export const FontImport = () => (
    <Global
        styles={css`
        @font-face {
            font-family: 'Roboto Condensed';
            font-style: italic;
            font-weight: 400;
            src: local('Roboto Condensed Italic'), local('RobotoCondensed-Italic'), url(https://fonts.gstatic.com/l/font?kit=BP5K8ZAJv9qEbmuFp8RpJYQ5Rbxg3CkpuFLDf7uJP82bRh2bRM9hMKB4Ebd-KE1n&skey=7b4bef3e83279e13&v=v16) format('woff2');
        }
      `}
    />
);

export const Brick = styled.div`
    display: flex;
    position: relative;

    .side, .unit {
      position: absolute;

      &--1 {
        transform: skewY(-30deg);
        background: ${props => transparentize(props.opacity, darken(0.08, props.color))};
      }
      &--2 {
        transform: skewY(30deg);
      }
      &--3 {
        transform: skewY(30deg);
        background: ${props => transparentize(props.opacity, lighten(0.08, props.color))};
        &-wrap {
          transform: rotate(-60deg);
        }
      }
    }
    .side--2, .stud {
        background: ${props => transparentize(props.opacity, props.color)}
    }
    .stud:before {
        background: ${props => transparentize(props.opacity, lighten(0.16, props.color))}
    }
    .stud--inner:after {
        color: ${props => transparentize(props.opacity, props.color)};
        text-shadow: ${props => `0.4px 0.4px 0px ${transparentize(props.opacity, lighten(0.04, props.color))}`};
    }

    ${props => props.size === 'small' && css`
      .unit {
        height: 60px;
        width: 44px;
      }
      .side--1 {
        top: 18px;
        right: 0px;
        height: 34px;
        width: 22px;
      }
      .side--2 {
        top: 18px;
        left: 0px;
        height: 34px;
        width: 22px;
      }
      .side--3 {
        top: -7px;
        left: 1px;
        height: 26px;
        width: 23px;
      }
      .stud {
        border-radius: 9px / 5px;
        box-shadow: inset -2px 3px 3px ${transparentize(props.opacity, darken(0.08, props.color))};
        height: 15px;
        left: 14px;
        top: 2px;
        width: 18px;

        &:before {
          height: 10px;
          width: 18px;
          border-radius: 9px / 5px;
        }
        .stud--inner:after {
          font-weight: 400;
          font-size: 4px;
          left: 4px;
          top: -8px;
        }
      }
    `}

    ${props => props.size === 'medium' && css`
      .unit {
        height: 106.5px;
        width: 80px;
      }
      .side--1 {
        top: 34px;
        right: 0px;
        height: 61px;
        width: 40px;
      }
      .side--2 {
        top: 34px;
        left: 0px;
        height: 61px;
        width: 40px;
      }
      .side--3 {
        top: -12px;
        left: 0px;
        height: 46px;
        width: 40px;
      }
      .stud {
        border-radius: 18px / 10px;
        box-shadow: inset -4px 6px 6px ${transparentize(props.opacity, darken(0.08, props.color))};
        height: 26.5px;
        left: 24px;
        top: 3px;
        width: 32px;

        &:before {
          height: 18px;
          width: 32px;
          border-radius: 18px / 10px;
        }
        .stud--inner:after {
          font-weight: 400;
          font-size: 9px;
          left: 6px;
          top: -14px;
        }
      }
    `}

    ${props => props.size === 'large' && css`
      .unit {
        height: 120px;
        width: 90px;
      }
      .side--1 {
        top: 39px;
        right: 0px;
        height: 68px;
        width: 45px;
      }
      .side--2 {
        top: 39px;
        left: 0px;
        height: 68px;
        width: 45px;
      }
      .side--3 {
        top: -13px;
        left: 0px;
        height: 52px;
        width: 45px;
      }
      .stud {
        border-radius: 18px / 10px;
        box-shadow: inset -4px 6px 6px ${transparentize(props.opacity, darken(0.08, props.color))};
        height: 30px;
        left: 28px;
        top: 4px;
        width: 36px;

        &:before {
          height: 20px;
          width: 36px;
          border-radius: 18px / 10px;
        }
        .stud--inner:after {
          font-weight: 400;
          font-size: 9px;
          left: 8px;
          top: -15px;
        }
      }
    `}
`;

export const Stud = styled.div`
    position: absolute;
    border-radius: 18px / 10px;
    box-shadow: ${props => `inset -4px 6px 6px ${transparentize(props.opacity, 'rgba(0,0,0,0.2)')}`};
    height: 30px;
    left: 28px;
    top: 4px;
    width: 36px;
    z-index: 10;
    &:before {
      content: "";
      position: absolute;
      box-shadow: ${props => `inset 0px 0px 0.5px 0.5px ${transparentize(
        props.opacity,
        darken(0.02, props.color)
    )}`};
      height: 20px;
      width: 36px;
      border-radius: 18px / 10px;
      z-index: 10;
    }
`;

export const StudInner = styled.div`
    position: absolute;
    transform: rotate(60deg);
    z-index: 100;

    &:after {
        content: 'LEGO';
        font-family: 'Roboto Condensed', sans-serif;
        font-weight: 400;
        left: 8px;
        position: absolute;
        top: -15px;
        transform: skewY(-30deg);
    }
`;