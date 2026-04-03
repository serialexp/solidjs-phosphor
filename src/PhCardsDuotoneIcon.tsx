import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCardsDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTIsODhWMjAwYTgsOCwwLDAsMS04LDhINDBhOCw4LDAsMCwxLTgtOFY4OGE4LDgsMCwwLDEsOC04SDE4NEE4LDgsMCwwLDEsMTkyLDg4WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTE4NCw3Mkg0MEExNiwxNiwwLDAsMCwyNCw4OFYyMDBhMTYsMTYsMCwwLDAsMTYsMTZIMTg0YTE2LDE2LDAsMCwwLDE2LTE2Vjg4QTE2LDE2LDAsMCwwLDE4NCw3MlptMCwxMjhINDBWODhIMTg0VjIwMFpNMjMyLDU2VjE3NmE4LDgsMCwwLDEtMTYsMFY1Nkg2NGE4LDgsMCwwLDEsMC0xNkgyMTZBMTYsMTYsMCwwLDEsMjMyLDU2WiIvPjwvc3ZnPg==)
 */
export function PhCardsDuotoneIcon(props: PhCardsDuotoneIconProps) {
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
      <path d="M192,88V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8H184A8,8,0,0,1,192,88Z" opacity="0.2"/><path d="M184,72H40A16,16,0,0,0,24,88V200a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V88A16,16,0,0,0,184,72Zm0,128H40V88H184V200ZM232,56V176a8,8,0,0,1-16,0V56H64a8,8,0,0,1,0-16H216A16,16,0,0,1,232,56Z"/>
    </svg>
  );
}
