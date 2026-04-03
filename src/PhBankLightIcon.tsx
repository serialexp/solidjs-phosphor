import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhBankLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNCwxMDJINTB2NjhIMzJhNiw2LDAsMCwwLDAsMTJIMjI0YTYsNiwwLDAsMCwwLTEySDIwNlYxMDJoMjZhNiw2LDAsMCwwLDMuMTQtMTEuMTFsLTEwNC02NGE2LDYsMCwwLDAtNi4yOCwwbC0xMDQsNjRBNiw2LDAsMCwwLDI0LDEwMlptMzgsMEg5OHY2OEg2MlptODQsMHY2OEgxMTBWMTAyWm00OCw2OEgxNThWMTAyaDM2Wk0xMjgsMzlsODIuOCw1MUg0NS4yWk0yNDYsMjA4YTYsNiwwLDAsMS02LDZIMTZhNiw2LDAsMCwxLDAtMTJIMjQwQTYsNiwwLDAsMSwyNDYsMjA4WiIvPjwvc3ZnPg==)
 */
export function PhBankLightIcon(props: PhBankLightIconProps) {
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
      <path d="M24,102H50v68H32a6,6,0,0,0,0,12H224a6,6,0,0,0,0-12H206V102h26a6,6,0,0,0,3.14-11.11l-104-64a6,6,0,0,0-6.28,0l-104,64A6,6,0,0,0,24,102Zm38,0H98v68H62Zm84,0v68H110V102Zm48,68H158V102h36ZM128,39l82.8,51H45.2ZM246,208a6,6,0,0,1-6,6H16a6,6,0,0,1,0-12H240A6,6,0,0,1,246,208Z"/>
    </svg>
  );
}
