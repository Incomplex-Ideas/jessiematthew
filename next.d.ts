import React from "react";

declare module "react" {
  interface JSX {
    IntrinsicElements: {
      [elemName: string]: any;
    };
  }
}
