import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCableCarFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDcuODcsMzAuNTlhOCw4LDAsMCwwLTkuMjgtNi40NmwtMjI0LDQwQTgsOCwwLDAsMCwxNiw4MGE4LjYsOC42LDAsMCwwLDEuNDItLjEyTDEyMCw2MS41NlY5Nkg2NGEzMiwzMiwwLDAsMC0zMiwzMnY2NGEzMiwzMiwwLDAsMCwzMiwzMkgxOTJhMzIsMzIsMCwwLDAsMzItMzJWMTI4YTMyLDMyLDAsMCwwLTMyLTMySDEzNlY1OC43TDI0MS40LDM5Ljg4QTgsOCwwLDAsMCwyNDcuODcsMzAuNTlaTTEwNCwxNjBWMTEyaDQ4djQ4Wk02NCwxMTJIODh2NDhINDhWMTI4QTE2LDE2LDAsMCwxLDY0LDExMlptMTQ0LDE2djMySDE2OFYxMTJoMjRBMTYsMTYsMCwwLDEsMjA4LDEyOFoiLz48L3N2Zz4=)
 */
export function PhCableCarFillIcon(props: PhCableCarFillIconProps) {
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
      <path d="M247.87,30.59a8,8,0,0,0-9.28-6.46l-224,40A8,8,0,0,0,16,80a8.6,8.6,0,0,0,1.42-.12L120,61.56V96H64a32,32,0,0,0-32,32v64a32,32,0,0,0,32,32H192a32,32,0,0,0,32-32V128a32,32,0,0,0-32-32H136V58.7L241.4,39.88A8,8,0,0,0,247.87,30.59ZM104,160V112h48v48ZM64,112H88v48H48V128A16,16,0,0,1,64,112Zm144,16v32H168V112h24A16,16,0,0,1,208,128Z"/>
    </svg>
  );
}
