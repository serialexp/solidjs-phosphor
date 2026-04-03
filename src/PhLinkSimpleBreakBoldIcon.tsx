import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhLinkSimpleBreakBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTguNDUsMTIyLjQzbC0zMC4wOCwzMC4wNmExMiwxMiwwLDAsMS0xNy0xN2wzMC4wOC0zMC4wN2EzNiwzNiwwLDAsMC01MC45My01MC45MkwxMjAuNDgsODQuNTlhMTIsMTIsMCwwLDEtMTctMTdsMzAuMDctMzAuMDZhNjAsNjAsMCwwLDEsODQuODcsODQuODhabS04Mi45Myw0OS0zMC4wNywzMC4wOGEzNiwzNiwwLDAsMS01MC45Mi01MC45M2wzMC4wNi0zMC4wN2ExMiwxMiwwLDAsMC0xNy0xN0wzNy41NSwxMzMuNThhNjAsNjAsMCwwLDAsODQuODgsODQuODdsMzAuMDYtMzAuMDdhMTIsMTIsMCwwLDAtMTctMTdaIi8+PC9zdmc+)
 */
export function PhLinkSimpleBreakBoldIcon(props: PhLinkSimpleBreakBoldIconProps) {
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
      <path d="M218.45,122.43l-30.08,30.06a12,12,0,0,1-17-17l30.08-30.07a36,36,0,0,0-50.93-50.92L120.48,84.59a12,12,0,0,1-17-17l30.07-30.06a60,60,0,0,1,84.87,84.88Zm-82.93,49-30.07,30.08a36,36,0,0,1-50.92-50.93l30.06-30.07a12,12,0,0,0-17-17L37.55,133.58a60,60,0,0,0,84.88,84.87l30.06-30.07a12,12,0,0,0-17-17Z"/>
    </svg>
  );
}
