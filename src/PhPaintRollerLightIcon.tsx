import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhPaintRollerLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsOTBIMjE0VjY0YTE0LDE0LDAsMCwwLTE0LTE0SDQ4QTE0LDE0LDAsMCwwLDM0LDY0VjkwSDE2YTYsNiwwLDAsMCwwLDEySDM0djI2YTE0LDE0LDAsMCwwLDE0LDE0SDIwMGExNCwxNCwwLDAsMCwxNC0xNFYxMDJoMThhMiwyLDAsMCwxLDIsMnY1MGEyLDIsMCwwLDEtMS40NSwxLjkybC0xMDAuNCwyOC42OEExNC4wNiwxNC4wNiwwLDAsMCwxMjIsMTk4djM0YTYsNiwwLDAsMCwxMiwwVjE5OGEyLDIsMCwwLDEsMS40NS0xLjkybDEwMC40LTI4LjY4QTE0LjA2LDE0LjA2LDAsMCwwLDI0NiwxNTRWMTA0QTE0LDE0LDAsMCwwLDIzMiw5MFptLTMwLDM4YTIsMiwwLDAsMS0yLDJINDhhMiwyLDAsMCwxLTItMlY2NGEyLDIsMCwwLDEsMi0ySDIwMGEyLDIsMCwwLDEsMiwyWiIvPjwvc3ZnPg==)
 */
export function PhPaintRollerLightIcon(props: PhPaintRollerLightIconProps) {
  const merged = mergeProps({ size: "1em", color: "currentColor" }, props);
  const [local, svgProps] = splitProps(merged, ["size", "color"]);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill={local.color}
      width={local.size}
      height={local.size}
      {...svgProps}
    >
      <path d="M232,90H214V64a14,14,0,0,0-14-14H48A14,14,0,0,0,34,64V90H16a6,6,0,0,0,0,12H34v26a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V102h18a2,2,0,0,1,2,2v50a2,2,0,0,1-1.45,1.92l-100.4,28.68A14.06,14.06,0,0,0,122,198v34a6,6,0,0,0,12,0V198a2,2,0,0,1,1.45-1.92l100.4-28.68A14.06,14.06,0,0,0,246,154V104A14,14,0,0,0,232,90Zm-30,38a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V64a2,2,0,0,1,2-2H200a2,2,0,0,1,2,2Z"/>
    </svg>
  );
}
