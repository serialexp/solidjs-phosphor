import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCurrencyKrwThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMTMySDIxMS45NGwyMy43Ny01OC40OWE0LDQsMCwxLDAtNy40Mi0zbC0yNSw2MS41MUgxNTYuNjlsLTI1LTYxLjUxYTQsNCwwLDAsMC03LjQyLDBMOTkuMzEsMTMySDUyLjY5bC0yNS02MS41MWE0LDQsMCwwLDAtNy40MiwzTDQ0LjA2LDEzMkgxNmE0LDQsMCwwLDAsMCw4SDQ3LjMxbDI1LDYxLjUxYTQsNCwwLDAsMCw3LjQyLDBsMjUtNjEuNTFoNDYuNjJsMjUsNjEuNTFhNCw0LDAsMCwwLDcuNDIsMGwyNS02MS41MUgyNDBhNCw0LDAsMCwwLDAtOFpNNzYsMTg5LjM3LDU1Ljk0LDE0MEg5Ni4wNlpNMTA3Ljk0LDEzMiwxMjgsODIuNjMsMTQ4LjA2LDEzMlpNMTgwLDE4OS4zNywxNTkuOTQsMTQwaDQwLjEyWiIvPjwvc3ZnPg==)
 */
export function PhCurrencyKrwThinIcon(props: PhCurrencyKrwThinIconProps) {
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
      <path d="M240,132H211.94l23.77-58.49a4,4,0,1,0-7.42-3l-25,61.51H156.69l-25-61.51a4,4,0,0,0-7.42,0L99.31,132H52.69l-25-61.51a4,4,0,0,0-7.42,3L44.06,132H16a4,4,0,0,0,0,8H47.31l25,61.51a4,4,0,0,0,7.42,0l25-61.51h46.62l25,61.51a4,4,0,0,0,7.42,0l25-61.51H240a4,4,0,0,0,0-8ZM76,189.37,55.94,140H96.06ZM107.94,132,128,82.63,148.06,132ZM180,189.37,159.94,140h40.12Z"/>
    </svg>
  );
}
