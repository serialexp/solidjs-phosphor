import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTildeIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjIuMjMsMTMwLjU5Yy0xNC41MSwxOC0yOC44NCwyNy42LTQzLjgsMjkuMTdhNDMsNDMsMCwwLDEtNC41LjI0Yy0xOS4zLDAtMzUuMzktMTMuMS01MS0yNS44LTE0LjkxLTEyLjE0LTI5LTIzLjYxLTQzLjctMjItMTAuNTEsMS4xLTIxLjMxLDguNzItMzMsMjMuMjhhOCw4LDAsMCwxLTEyLjQ2LTEwYzE0LjUxLTE4LDI4Ljg0LTI3LjYsNDMuOC0yOS4xNywyMS4zMi0yLjI1LDM4LjY5LDExLjg5LDU1LjQ4LDI1LjU2LDE0LjkxLDEyLjE0LDI5LDIzLjYyLDQzLjcsMjIsMTAuNTEtMS4xLDIxLjMxLTguNzIsMzMtMjMuMjhhOCw4LDAsMSwxLDEyLjQ2LDEwWiIvPjwvc3ZnPg==)
 */
export function PhTildeIcon(props: PhTildeIconProps) {
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
      <path d="M222.23,130.59c-14.51,18-28.84,27.6-43.8,29.17a43,43,0,0,1-4.5.24c-19.3,0-35.39-13.1-51-25.8-14.91-12.14-29-23.61-43.7-22-10.51,1.1-21.31,8.72-33,23.28a8,8,0,0,1-12.46-10c14.51-18,28.84-27.6,43.8-29.17,21.32-2.25,38.69,11.89,55.48,25.56,14.91,12.14,29,23.62,43.7,22,10.51-1.1,21.31-8.72,33-23.28a8,8,0,1,1,12.46,10Z"/>
    </svg>
  );
}
