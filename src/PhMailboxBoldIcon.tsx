import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhMailboxBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMDAsMTQ4YTEyLDEyLDAsMCwxLTEyLDEySDY0YTEyLDEyLDAsMCwxLDAtMjRIODhBMTIsMTIsMCwwLDEsMTAwLDE0OFptMTQ0LTMydjYwYTIwLDIwLDAsMCwxLTIwLDIwSDE0MHYyOGExMiwxMiwwLDAsMS0yNCwwVjE5NkgzMmEyMCwyMCwwLDAsMS0yMC0yMFYxMTZBNjQuMDcsNjQuMDcsMCwwLDEsNzYsNTJoODBWMjRhMTIsMTIsMCwwLDEsMTItMTJoMzJhMTIsMTIsMCwwLDEsMCwyNEgxODBWNTJBNjQuMDcsNjQuMDcsMCwwLDEsMjQ0LDExNlpNMTE2LDE3MlYxMTZhNDAsNDAsMCwwLDAtODAsMHY1NlptMTA0LTU2YTQwLDQwLDAsMCwwLTQwLTQwdjY4YTEyLDEyLDAsMCwxLTI0LDBWNzZIMTI1LjkzQTYzLjcsNjMuNywwLDAsMSwxNDAsMTE2djU2aDgwWiIvPjwvc3ZnPg==)
 */
export function PhMailboxBoldIcon(props: PhMailboxBoldIconProps) {
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
      <path d="M100,148a12,12,0,0,1-12,12H64a12,12,0,0,1,0-24H88A12,12,0,0,1,100,148Zm144-32v60a20,20,0,0,1-20,20H140v28a12,12,0,0,1-24,0V196H32a20,20,0,0,1-20-20V116A64.07,64.07,0,0,1,76,52h80V24a12,12,0,0,1,12-12h32a12,12,0,0,1,0,24H180V52A64.07,64.07,0,0,1,244,116ZM116,172V116a40,40,0,0,0-80,0v56Zm104-56a40,40,0,0,0-40-40v68a12,12,0,0,1-24,0V76H125.93A63.7,63.7,0,0,1,140,116v56h80Z"/>
    </svg>
  );
}
