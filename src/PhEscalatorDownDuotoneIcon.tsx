import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhEscalatorDownDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMTYwdjQwYTgsOCwwLDAsMS04LDhIMTY4TDcyLDEwNEgzMmE4LDgsMCwwLDEtOC04VjU2YTgsOCwwLDAsMSw4LThIODhsOTYsMTA0aDQwQTgsOCwwLDAsMSwyMzIsMTYwWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTE3MC4zNCw4NS42NmE4LDgsMCwwLDEsMTEuMzItMTEuMzJMMTkyLDg0LjY5VjQ4YTgsOCwwLDAsMSwxNiwwVjg0LjY5bDEwLjM0LTEwLjM1YTgsOCwwLDAsMSwxMS4zMiwxMS4zMmwtMjQsMjRhOCw4LDAsMCwxLTExLjMyLDBaTTI0MCwxNjB2NDBhMTYsMTYsMCwwLDEtMTYsMTZIMTY4YTgsOCwwLDAsMS01Ljg4LTIuNTdMNjguNSwxMTJIMzJBMTYsMTYsMCwwLDEsMTYsOTZWNTZBMTYsMTYsMCwwLDEsMzIsNDBIODhhOCw4LDAsMCwxLDUuODgsMi41N0wxODcuNSwxNDRIMjI0QTE2LDE2LDAsMCwxLDI0MCwxNjBabS0xNiwwSDE4NGE4LDgsMCwwLDEtNS44OC0yLjU3TDg0LjUsNTZIMzJWOTZINzJhOCw4LDAsMCwxLDUuODgsMi41N0wxNzEuNSwyMDBIMjI0WiIvPjwvc3ZnPg==)
 */
export function PhEscalatorDownDuotoneIcon(props: PhEscalatorDownDuotoneIconProps) {
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
      <path d="M232,160v40a8,8,0,0,1-8,8H168L72,104H32a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H88l96,104h40A8,8,0,0,1,232,160Z" opacity="0.2"/><path d="M170.34,85.66a8,8,0,0,1,11.32-11.32L192,84.69V48a8,8,0,0,1,16,0V84.69l10.34-10.35a8,8,0,0,1,11.32,11.32l-24,24a8,8,0,0,1-11.32,0ZM240,160v40a16,16,0,0,1-16,16H168a8,8,0,0,1-5.88-2.57L68.5,112H32A16,16,0,0,1,16,96V56A16,16,0,0,1,32,40H88a8,8,0,0,1,5.88,2.57L187.5,144H224A16,16,0,0,1,240,160Zm-16,0H184a8,8,0,0,1-5.88-2.57L84.5,56H32V96H72a8,8,0,0,1,5.88,2.57L171.5,200H224Z"/>
    </svg>
  );
}
