import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhShieldFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNTZ2NTZjMCw1Mi43Mi0yNS41Miw4NC42Ny00Ni45MywxMDIuMTktMjMuMDYsMTguODYtNDYsMjUuMjctNDcsMjUuNTNhOCw4LDAsMCwxLTQuMiwwYy0xLS4yNi0yMy45MS02LjY3LTQ3LTI1LjUzQzU3LjUyLDE5Ni42NywzMiwxNjQuNzIsMzIsMTEyVjU2QTE2LDE2LDAsMCwxLDQ4LDQwSDIwOEExNiwxNiwwLDAsMSwyMjQsNTZaIi8+PC9zdmc+)
 */
export function PhShieldFillIcon(props: PhShieldFillIconProps) {
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
      <path d="M224,56v56c0,52.72-25.52,84.67-46.93,102.19-23.06,18.86-46,25.27-47,25.53a8,8,0,0,1-4.2,0c-1-.26-23.91-6.67-47-25.53C57.52,196.67,32,164.72,32,112V56A16,16,0,0,1,48,40H208A16,16,0,0,1,224,56Z"/>
    </svg>
  );
}
