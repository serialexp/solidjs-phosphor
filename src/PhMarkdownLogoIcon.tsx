import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhMarkdownLogoIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsNDhIMjRBMTYsMTYsMCwwLDAsOCw2NFYxOTJhMTYsMTYsMCwwLDAsMTYsMTZIMjMyYTE2LDE2LDAsMCwwLDE2LTE2VjY0QTE2LDE2LDAsMCwwLDIzMiw0OFptMCwxNDRIMjRWNjRIMjMyVjE5MlpNMTI4LDEwNHY0OGE4LDgsMCwwLDEtMTYsMFYxMjMuMzFMOTMuNjYsMTQxLjY2YTgsOCwwLDAsMS0xMS4zMiwwTDY0LDEyMy4zMVYxNTJhOCw4LDAsMCwxLTE2LDBWMTA0YTgsOCwwLDAsMSwxMy42Ni01LjY2TDg4LDEyNC42OWwyNi4zNC0yNi4zNUE4LDgsMCwwLDEsMTI4LDEwNFptNzcuNjYsMTguMzRhOCw4LDAsMCwxLDAsMTEuMzJsLTI0LDI0YTgsOCwwLDAsMS0xMS4zMiwwbC0yNC0yNGE4LDgsMCwwLDEsMTEuMzItMTEuMzJMMTY4LDEzMi42OVYxMDRhOCw4LDAsMCwxLDE2LDB2MjguNjlsMTAuMzQtMTAuMzVBOCw4LDAsMCwxLDIwNS42NiwxMjIuMzRaIi8+PC9zdmc+)
 */
export function PhMarkdownLogoIcon(props: PhMarkdownLogoIconProps) {
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
      <path d="M232,48H24A16,16,0,0,0,8,64V192a16,16,0,0,0,16,16H232a16,16,0,0,0,16-16V64A16,16,0,0,0,232,48Zm0,144H24V64H232V192ZM128,104v48a8,8,0,0,1-16,0V123.31L93.66,141.66a8,8,0,0,1-11.32,0L64,123.31V152a8,8,0,0,1-16,0V104a8,8,0,0,1,13.66-5.66L88,124.69l26.34-26.35A8,8,0,0,1,128,104Zm77.66,18.34a8,8,0,0,1,0,11.32l-24,24a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L168,132.69V104a8,8,0,0,1,16,0v28.69l10.34-10.35A8,8,0,0,1,205.66,122.34Z"/>
    </svg>
  );
}
