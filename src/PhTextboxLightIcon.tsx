import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTextboxLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMTIsNDJhNiw2LDAsMCwwLTYsNlY2NkgyNEExNCwxNCwwLDAsMCwxMCw4MHY5NmExNCwxNCwwLDAsMCwxNCwxNGg4MnYxOGE2LDYsMCwwLDAsMTIsMFY0OEE2LDYsMCwwLDAsMTEyLDQyWk0yNCwxNzhhMiwyLDAsMCwxLTItMlY4MGEyLDIsMCwwLDEsMi0yaDgyVjE3OFpNMjQ2LDgwdjk2YTE0LDE0LDAsMCwxLTE0LDE0SDE0NGE2LDYsMCwwLDEsMC0xMmg4OGEyLDIsMCwwLDAsMi0yVjgwYTIsMiwwLDAsMC0yLTJIMTQ0YTYsNiwwLDAsMSwwLTEyaDg4QTE0LDE0LDAsMCwxLDI0Niw4MFpNODYsMTEyYTYsNiwwLDAsMS02LDZINzB2MjZhNiw2LDAsMCwxLTEyLDBWMTE4SDQ4YTYsNiwwLDAsMSwwLTEySDgwQTYsNiwwLDAsMSw4NiwxMTJaIi8+PC9zdmc+)
 */
export function PhTextboxLightIcon(props: PhTextboxLightIconProps) {
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
      <path d="M112,42a6,6,0,0,0-6,6V66H24A14,14,0,0,0,10,80v96a14,14,0,0,0,14,14h82v18a6,6,0,0,0,12,0V48A6,6,0,0,0,112,42ZM24,178a2,2,0,0,1-2-2V80a2,2,0,0,1,2-2h82V178ZM246,80v96a14,14,0,0,1-14,14H144a6,6,0,0,1,0-12h88a2,2,0,0,0,2-2V80a2,2,0,0,0-2-2H144a6,6,0,0,1,0-12h88A14,14,0,0,1,246,80ZM86,112a6,6,0,0,1-6,6H70v26a6,6,0,0,1-12,0V118H48a6,6,0,0,1,0-12H80A6,6,0,0,1,86,112Z"/>
    </svg>
  );
}
