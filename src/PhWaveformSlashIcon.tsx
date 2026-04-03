import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhWaveformSlashIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik01Niw5NnY2NGE4LDgsMCwwLDEtMTYsMFY5NmE4LDgsMCwwLDEsMTYsMFpNNTMuOTIsMzQuNjJBOCw4LDAsMSwwLDQyLjA4LDQ1LjM4TDgwLDg3LjA5VjIyNGE4LDgsMCwwLDAsMTYsMFYxMDQuNjlsMjQsMjYuNFYxOTJhOCw4LDAsMCwwLDE2LDBWMTQ4LjY5bDY2LjA4LDcyLjY5YTgsOCwwLDEsMCwxMS44NC0xMC43NlpNODgsNDQuNDNhOCw4LDAsMCwwLDgtOFYzMmE4LDgsMCwwLDAtMTYsMHY0LjQzQTgsOCwwLDAsMCw4OCw0NC40M1ptNDAsNDRhOCw4LDAsMCwwLDgtOFY2NGE4LDgsMCwwLDAtMTYsMFY4MC40M0E4LDgsMCwwLDAsMTI4LDg4LjQzWm00MCw0NGE4LDgsMCwwLDAsOC04Vjk2YTgsOCwwLDAsMC0xNiwwdjI4LjQzQTgsOCwwLDAsMCwxNjgsMTMyLjQzWk0yMDgsNzJhOCw4LDAsMCwwLTgsOHY4OC40M2E4LDgsMCwwLDAsMTYsMFY4MEE4LDgsMCwwLDAsMjA4LDcyWiIvPjwvc3ZnPg==)
 */
export function PhWaveformSlashIcon(props: PhWaveformSlashIconProps) {
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
      <path d="M56,96v64a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0ZM53.92,34.62A8,8,0,1,0,42.08,45.38L80,87.09V224a8,8,0,0,0,16,0V104.69l24,26.4V192a8,8,0,0,0,16,0V148.69l66.08,72.69a8,8,0,1,0,11.84-10.76ZM88,44.43a8,8,0,0,0,8-8V32a8,8,0,0,0-16,0v4.43A8,8,0,0,0,88,44.43Zm40,44a8,8,0,0,0,8-8V64a8,8,0,0,0-16,0V80.43A8,8,0,0,0,128,88.43Zm40,44a8,8,0,0,0,8-8V96a8,8,0,0,0-16,0v28.43A8,8,0,0,0,168,132.43ZM208,72a8,8,0,0,0-8,8v88.43a8,8,0,0,0,16,0V80A8,8,0,0,0,208,72Z"/>
    </svg>
  );
}
