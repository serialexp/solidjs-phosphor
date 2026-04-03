import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhDoorBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMjEySDIxMlY0MGEyMCwyMCwwLDAsMC0yMC0yMEg2NEEyMCwyMCwwLDAsMCw0NCw0MFYyMTJIMjRhMTIsMTIsMCwwLDAsMCwyNEgyMzJhMTIsMTIsMCwwLDAsMC0yNFpNNjgsNDRIMTg4VjIxMkg2OFptMTA0LDg4YTE2LDE2LDAsMSwxLTE2LTE2QTE2LDE2LDAsMCwxLDE3MiwxMzJaIi8+PC9zdmc+)
 */
export function PhDoorBoldIcon(props: PhDoorBoldIconProps) {
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
      <path d="M232,212H212V40a20,20,0,0,0-20-20H64A20,20,0,0,0,44,40V212H24a12,12,0,0,0,0,24H232a12,12,0,0,0,0-24ZM68,44H188V212H68Zm104,88a16,16,0,1,1-16-16A16,16,0,0,1,172,132Z"/>
    </svg>
  );
}
