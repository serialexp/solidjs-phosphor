import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhBracketsAngleThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04My4zNyw0Mi4xNSwyOC43NCwxMjhsNTQuNjMsODUuODVhNCw0LDAsMCwxLTEuMjIsNS41MkE0LDQsMCwwLDEsODAsMjIwYTQsNCwwLDAsMS0zLjM3LTEuODVsLTU2LTg4YTQsNCwwLDAsMSwwLTQuM2w1Ni04OGE0LDQsMCwxLDEsNi43NCw0LjNabTE1Miw4My43LTU2LTg4YTQsNCwwLDEsMC02Ljc0LDQuM0wyMjcuMjYsMTI4bC01NC42Myw4NS44NWE0LDQsMCwwLDAsMS4yMiw1LjUyQTQsNCwwLDAsMCwxNzYsMjIwYTQsNCwwLDAsMCwzLjM3LTEuODVsNTYtODhBNCw0LDAsMCwwLDIzNS4zNywxMjUuODVaIi8+PC9zdmc+)
 */
export function PhBracketsAngleThinIcon(props: PhBracketsAngleThinIconProps) {
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
      <path d="M83.37,42.15,28.74,128l54.63,85.85a4,4,0,0,1-1.22,5.52A4,4,0,0,1,80,220a4,4,0,0,1-3.37-1.85l-56-88a4,4,0,0,1,0-4.3l56-88a4,4,0,1,1,6.74,4.3Zm152,83.7-56-88a4,4,0,1,0-6.74,4.3L227.26,128l-54.63,85.85a4,4,0,0,0,1.22,5.52A4,4,0,0,0,176,220a4,4,0,0,0,3.37-1.85l56-88A4,4,0,0,0,235.37,125.85Z"/>
    </svg>
  );
}
