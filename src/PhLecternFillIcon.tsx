import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhLecternFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDYuMywxMjAuODRsLTQwLTgwQTE1LjkyLDE1LjkyLDAsMCwwLDE5MiwzMkg2NEExNS45MiwxNS45MiwwLDAsMCw0OS43LDQwLjg0bC00MCw4MEExNiwxNiwwLDAsMCwyNCwxNDRoOTZ2NjRIOTZhOCw4LDAsMCwwLDAsMTZoNjRhOCw4LDAsMCwwLDAtMTZIMTM2VjE0NGg5NmExNiwxNiwwLDAsMCwxNC4zMS0yMy4xNlpNMTkyLDEyMEg2NGE4LDgsMCwwLDEsMC0xNkgxOTJhOCw4LDAsMCwxLDAsMTZaIi8+PC9zdmc+)
 */
export function PhLecternFillIcon(props: PhLecternFillIconProps) {
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
      <path d="M246.3,120.84l-40-80A15.92,15.92,0,0,0,192,32H64A15.92,15.92,0,0,0,49.7,40.84l-40,80A16,16,0,0,0,24,144h96v64H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V144h96a16,16,0,0,0,14.31-23.16ZM192,120H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Z"/>
    </svg>
  );
}
