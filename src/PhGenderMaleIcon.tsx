import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhGenderMaleIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMzJIMTY4YTgsOCwwLDAsMCwwLDE2aDI4LjY5TDE1NC42Miw5MC4wN2E4MCw4MCwwLDEsMCwxMS4zMSwxMS4zMUwyMDgsNTkuMzJWODhhOCw4LDAsMCwwLDE2LDBWNDBBOCw4LDAsMCwwLDIxNiwzMlpNMTQ5LjI0LDE5Ny4yOWE2NCw2NCwwLDEsMSwwLTkwLjUzQTY0LjEsNjQuMSwwLDAsMSwxNDkuMjQsMTk3LjI5WiIvPjwvc3ZnPg==)
 */
export function PhGenderMaleIcon(props: PhGenderMaleIconProps) {
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
      <path d="M216,32H168a8,8,0,0,0,0,16h28.69L154.62,90.07a80,80,0,1,0,11.31,11.31L208,59.32V88a8,8,0,0,0,16,0V40A8,8,0,0,0,216,32ZM149.24,197.29a64,64,0,1,1,0-90.53A64.1,64.1,0,0,1,149.24,197.29Z"/>
    </svg>
  );
}
