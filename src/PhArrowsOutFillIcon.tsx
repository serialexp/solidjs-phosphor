import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowsOutFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMDkuNjYsMTQ2LjM0YTgsOCwwLDAsMSwwLDExLjMyTDgzLjMxLDE4NGwxOC4zNSwxOC4zNEE4LDgsMCwwLDEsOTYsMjE2SDQ4YTgsOCwwLDAsMS04LThWMTYwYTgsOCwwLDAsMSwxMy42Ni01LjY2TDcyLDE3Mi42OWwyNi4zNC0yNi4zNUE4LDgsMCwwLDEsMTA5LjY2LDE0Ni4zNFpNODMuMzEsNzJsMTguMzUtMTguMzRBOCw4LDAsMCwwLDk2LDQwSDQ4YTgsOCwwLDAsMC04LDhWOTZhOCw4LDAsMCwwLDEzLjY2LDUuNjZMNzIsODMuMzFsMjYuMzQsMjYuMzVhOCw4LDAsMCwwLDExLjMyLTExLjMyWk0yMDgsNDBIMTYwYTgsOCwwLDAsMC01LjY2LDEzLjY2TDE3Mi42OSw3MiwxNDYuMzQsOTguMzRhOCw4LDAsMCwwLDExLjMyLDExLjMyTDE4NCw4My4zMWwxOC4zNCwxOC4zNUE4LDgsMCwwLDAsMjE2LDk2VjQ4QTgsOCwwLDAsMCwyMDgsNDBabTMuMDYsMTEyLjYxYTgsOCwwLDAsMC04LjcyLDEuNzNMMTg0LDE3Mi42OWwtMjYuMzQtMjYuMzVhOCw4LDAsMCwwLTExLjMyLDExLjMyTDE3Mi42OSwxODRsLTE4LjM1LDE4LjM0QTgsOCwwLDAsMCwxNjAsMjE2aDQ4YTgsOCwwLDAsMCw4LThWMTYwQTgsOCwwLDAsMCwyMTEuMDYsMTUyLjYxWiIvPjwvc3ZnPg==)
 */
export function PhArrowsOutFillIcon(props: PhArrowsOutFillIconProps) {
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
      <path d="M109.66,146.34a8,8,0,0,1,0,11.32L83.31,184l18.35,18.34A8,8,0,0,1,96,216H48a8,8,0,0,1-8-8V160a8,8,0,0,1,13.66-5.66L72,172.69l26.34-26.35A8,8,0,0,1,109.66,146.34ZM83.31,72l18.35-18.34A8,8,0,0,0,96,40H48a8,8,0,0,0-8,8V96a8,8,0,0,0,13.66,5.66L72,83.31l26.34,26.35a8,8,0,0,0,11.32-11.32ZM208,40H160a8,8,0,0,0-5.66,13.66L172.69,72,146.34,98.34a8,8,0,0,0,11.32,11.32L184,83.31l18.34,18.35A8,8,0,0,0,216,96V48A8,8,0,0,0,208,40Zm3.06,112.61a8,8,0,0,0-8.72,1.73L184,172.69l-26.34-26.35a8,8,0,0,0-11.32,11.32L172.69,184l-18.35,18.34A8,8,0,0,0,160,216h48a8,8,0,0,0,8-8V160A8,8,0,0,0,211.06,152.61Z"/>
    </svg>
  );
}
