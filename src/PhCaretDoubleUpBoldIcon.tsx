import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCaretDoubleUpBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYuNDksMTkxLjUxYTEyLDEyLDAsMCwxLTE3LDE3TDEyOCwxMzcsNTYuNDksMjA4LjQ5YTEyLDEyLDAsMCwxLTE3LTE3bDgwLTgwYTEyLDEyLDAsMCwxLDE3LDBabS0xNjAtNjNMMTI4LDU3bDcxLjUxLDcxLjUyYTEyLDEyLDAsMCwwLDE3LTE3bC04MC04MGExMiwxMiwwLDAsMC0xNywwbC04MCw4MGExMiwxMiwwLDAsMCwxNywxN1oiLz48L3N2Zz4=)
 */
export function PhCaretDoubleUpBoldIcon(props: PhCaretDoubleUpBoldIconProps) {
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
      <path d="M216.49,191.51a12,12,0,0,1-17,17L128,137,56.49,208.49a12,12,0,0,1-17-17l80-80a12,12,0,0,1,17,0Zm-160-63L128,57l71.51,71.52a12,12,0,0,0,17-17l-80-80a12,12,0,0,0-17,0l-80,80a12,12,0,0,0,17,17Z"/>
    </svg>
  );
}
