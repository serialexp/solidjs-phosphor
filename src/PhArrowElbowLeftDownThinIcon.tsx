import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowElbowLeftDownThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzYsNzJhNCw0LDAsMCwxLTQsNEg5MlYyMDYuMzRsNDEuMTctNDEuMTdhNCw0LDAsMCwxLDUuNjYsNS42NmwtNDgsNDhhNCw0LDAsMCwxLTUuNjYsMGwtNDgtNDhhNCw0LDAsMCwxLDUuNjYtNS42Nkw4NCwyMDYuMzRWNzJhNCw0LDAsMCwxLDQtNEgyMzJBNCw0LDAsMCwxLDIzNiw3MloiLz48L3N2Zz4=)
 */
export function PhArrowElbowLeftDownThinIcon(props: PhArrowElbowLeftDownThinIconProps) {
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
      <path d="M236,72a4,4,0,0,1-4,4H92V206.34l41.17-41.17a4,4,0,0,1,5.66,5.66l-48,48a4,4,0,0,1-5.66,0l-48-48a4,4,0,0,1,5.66-5.66L84,206.34V72a4,4,0,0,1,4-4H232A4,4,0,0,1,236,72Z"/>
    </svg>
  );
}
