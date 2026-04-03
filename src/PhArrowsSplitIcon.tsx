import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowsSplitIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjkuNjYsMTg5LjY2bC0zMiwzMmE4LDgsMCwwLDEtMTEuMzIsMGwtMzItMzJhOCw4LDAsMCwxLDExLjMyLTExLjMyTDE4NCwxOTYuNjlWMTM5LjMxbC01Ni01Ni01Niw1NnY1Ny4zOGwxOC4zNC0xOC4zNWE4LDgsMCwwLDEsMTEuMzIsMTEuMzJsLTMyLDMyYTgsOCwwLDAsMS0xMS4zMiwwbC0zMi0zMmE4LDgsMCwwLDEsMTEuMzItMTEuMzJMNTYsMTk2LjY5VjEzNmE4LDgsMCwwLDEsMi4zNC01LjY2TDEyMCw2OC42OVYyNGE4LDgsMCwwLDEsMTYsMFY2OC42OWw2MS42Niw2MS42NUE4LDgsMCwwLDEsMjAwLDEzNnY2MC42OWwxOC4zNC0xOC4zNWE4LDgsMCwwLDEsMTEuMzIsMTEuMzJaIi8+PC9zdmc+)
 */
export function PhArrowsSplitIcon(props: PhArrowsSplitIconProps) {
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
      <path d="M229.66,189.66l-32,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,0,1,11.32-11.32L184,196.69V139.31l-56-56-56,56v57.38l18.34-18.35a8,8,0,0,1,11.32,11.32l-32,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,0,1,11.32-11.32L56,196.69V136a8,8,0,0,1,2.34-5.66L120,68.69V24a8,8,0,0,1,16,0V68.69l61.66,61.65A8,8,0,0,1,200,136v60.69l18.34-18.35a8,8,0,0,1,11.32,11.32Z"/>
    </svg>
  );
}
