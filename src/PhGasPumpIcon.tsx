import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhGasPumpIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDEsNjkuNjYsMjIxLjY2LDUwLjM0YTgsOCwwLDAsMC0xMS4zMiwxMS4zMkwyMjkuNjYsODFBOCw4LDAsMCwxLDIzMiw4Ni42M1YxNjhhOCw4LDAsMCwxLTE2LDBWMTI4YTI0LDI0LDAsMCwwLTI0LTI0SDE3NlY1NmEyNCwyNCwwLDAsMC0yNC0yNEg3MkEyNCwyNCwwLDAsMCw0OCw1NlYyMDhIMzJhOCw4LDAsMCwwLDAsMTZIMTkyYTgsOCwwLDAsMCwwLTE2SDE3NlYxMjBoMTZhOCw4LDAsMCwxLDgsOHY0MGEyNCwyNCwwLDAsMCw0OCwwVjg2LjYzQTIzLjg1LDIzLjg1LDAsMCwwLDI0MSw2OS42NlpNNjQsMjA4VjU2YTgsOCwwLDAsMSw4LThoODBhOCw4LDAsMCwxLDgsOFYyMDhabTgwLTk2YTgsOCwwLDAsMS04LDhIODhhOCw4LDAsMCwxLDAtMTZoNDhBOCw4LDAsMCwxLDE0NCwxMTJaIi8+PC9zdmc+)
 */
export function PhGasPumpIcon(props: PhGasPumpIconProps) {
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
      <path d="M241,69.66,221.66,50.34a8,8,0,0,0-11.32,11.32L229.66,81A8,8,0,0,1,232,86.63V168a8,8,0,0,1-16,0V128a24,24,0,0,0-24-24H176V56a24,24,0,0,0-24-24H72A24,24,0,0,0,48,56V208H32a8,8,0,0,0,0,16H192a8,8,0,0,0,0-16H176V120h16a8,8,0,0,1,8,8v40a24,24,0,0,0,48,0V86.63A23.85,23.85,0,0,0,241,69.66ZM64,208V56a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8V208Zm80-96a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h48A8,8,0,0,1,144,112Z"/>
    </svg>
  );
}
