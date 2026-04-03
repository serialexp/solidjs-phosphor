import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowElbowLeftUpFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMTkyYTgsOCwwLDAsMS04LDhIODhhOCw4LDAsMCwxLTgtOFYxMDRINDBhOCw4LDAsMCwxLTUuNjYtMTMuNjZsNDgtNDhhOCw4LDAsMCwxLDExLjMyLDBsNDgsNDhBOCw4LDAsMCwxLDEzNiwxMDRIOTZ2ODBIMjMyQTgsOCwwLDAsMSwyNDAsMTkyWiIvPjwvc3ZnPg==)
 */
export function PhArrowElbowLeftUpFillIcon(props: PhArrowElbowLeftUpFillIconProps) {
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
      <path d="M240,192a8,8,0,0,1-8,8H88a8,8,0,0,1-8-8V104H40a8,8,0,0,1-5.66-13.66l48-48a8,8,0,0,1,11.32,0l48,48A8,8,0,0,1,136,104H96v80H232A8,8,0,0,1,240,192Z"/>
    </svg>
  );
}
