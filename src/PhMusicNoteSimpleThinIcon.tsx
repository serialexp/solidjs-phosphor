import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhMusicNoteSimpleThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDkuMTUsNjAuMTdsLTgwLTI0QTQsNCwwLDAsMCwxMjQsNDBWMTU4Ljc1QTQ0LDQ0LDAsMSwwLDEzMiwxODRWNDUuMzhsNzQuODUsMjIuNDVhNCw0LDAsMCwwLDIuMy03LjY2Wk04OCwyMjBhMzYsMzYsMCwxLDEsMzYtMzZBMzYsMzYsMCwwLDEsODgsMjIwWiIvPjwvc3ZnPg==)
 */
export function PhMusicNoteSimpleThinIcon(props: PhMusicNoteSimpleThinIconProps) {
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
      <path d="M209.15,60.17l-80-24A4,4,0,0,0,124,40V158.75A44,44,0,1,0,132,184V45.38l74.85,22.45a4,4,0,0,0,2.3-7.66ZM88,220a36,36,0,1,1,36-36A36,36,0,0,1,88,220Z"/>
    </svg>
  );
}
