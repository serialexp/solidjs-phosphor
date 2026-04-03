import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTowelDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsMTkydjI0YTgsOCwwLDAsMS04LDhINjRhOCw4LDAsMCwxLTgtOFYxOTJaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjAwLDI0SDcyQTI0LDI0LDAsMCwwLDQ4LDQ4VjIxNmExNiwxNiwwLDAsMCwxNiwxNkgxNzZhMTYsMTYsMCwwLDAsMTYtMTZWNDhhOCw4LDAsMCwxLDE2LDBWMTUyYTgsOCwwLDAsMCwxNiwwVjQ4QTI0LDI0LDAsMCwwLDIwMCwyNFpNNzIsNDBIMTc3LjM3QTIzLjg0LDIzLjg0LDAsMCwwLDE3Niw0OFYxODRINjRWNDhBOCw4LDAsMCwxLDcyLDQwWk02NCwyMTZWMjAwSDE3NnYxNloiLz48L3N2Zz4=)
 */
export function PhTowelDuotoneIcon(props: PhTowelDuotoneIconProps) {
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
      <path d="M184,192v24a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V192Z" opacity="0.2"/><path d="M200,24H72A24,24,0,0,0,48,48V216a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V48a8,8,0,0,1,16,0V152a8,8,0,0,0,16,0V48A24,24,0,0,0,200,24ZM72,40H177.37A23.84,23.84,0,0,0,176,48V184H64V48A8,8,0,0,1,72,40ZM64,216V200H176v16Z"/>
    </svg>
  );
}
