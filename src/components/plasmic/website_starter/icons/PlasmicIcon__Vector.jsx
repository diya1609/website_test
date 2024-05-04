// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function VectorIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 18"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M16 0H2C.9 0 0 .9 0 2v14c0 1.101.9 2 2 2h7v-7H7V8.525h2v-2.05c0-2.164 1.212-3.684 3.766-3.684l1.803.002v2.605h-1.197c-.994 0-1.372.746-1.372 1.438v1.69h2.568L14 11h-2v7h4c1.1 0 2-.899 2-2V2c0-1.1-.9-2-2-2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default VectorIcon;
/* prettier-ignore-end */