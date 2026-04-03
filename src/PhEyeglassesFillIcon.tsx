import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhEyeglassesFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsNzJ2OTJhNDQsNDQsMCwwLDEtODcuODEsNEgxMTEuODFBNDQsNDQsMCwwLDEsMjQsMTY0VjcyQTMyLDMyLDAsMCwxLDU2LDQwYTgsOCwwLDAsMSwwLDE2QTE2LDE2LDAsMCwwLDQwLDcydjU4LjA4QTQ0LDQ0LDAsMCwxLDExMC4zMiwxNTJoMzUuMzZBNDQsNDQsMCwwLDEsMjE2LDEzMC4wOFY3MmExNiwxNiwwLDAsMC0xNi0xNiw4LDgsMCwwLDEsMC0xNkEzMiwzMiwwLDAsMSwyMzIsNzJaIi8+PC9zdmc+)
 */
export function PhEyeglassesFillIcon(props: PhEyeglassesFillIconProps) {
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
      <path d="M232,72v92a44,44,0,0,1-87.81,4H111.81A44,44,0,0,1,24,164V72A32,32,0,0,1,56,40a8,8,0,0,1,0,16A16,16,0,0,0,40,72v58.08A44,44,0,0,1,110.32,152h35.36A44,44,0,0,1,216,130.08V72a16,16,0,0,0-16-16,8,8,0,0,1,0-16A32,32,0,0,1,232,72Z"/>
    </svg>
  );
}
