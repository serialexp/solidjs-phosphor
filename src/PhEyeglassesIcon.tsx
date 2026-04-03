import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhEyeglassesIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsNDBhOCw4LDAsMCwwLDAsMTYsMTYsMTYsMCwwLDEsMTYsMTZ2NTguMDhBNDQsNDQsMCwwLDAsMTQ1LjY4LDE1MkgxMTAuMzJBNDQsNDQsMCwwLDAsNDAsMTMwLjA4VjcyQTE2LDE2LDAsMCwxLDU2LDU2YTgsOCwwLDAsMCwwLTE2QTMyLDMyLDAsMCwwLDI0LDcydjkyYTQ0LDQ0LDAsMCwwLDg3LjgxLDRoMzIuMzhBNDQsNDQsMCwwLDAsMjMyLDE2NFY3MkEzMiwzMiwwLDAsMCwyMDAsNDBaTTY4LDE5MmEyOCwyOCwwLDEsMSwyOC0yOEEyOCwyOCwwLDAsMSw2OCwxOTJabTEyMCwwYTI4LDI4LDAsMSwxLDI4LTI4QTI4LDI4LDAsMCwxLDE4OCwxOTJaIi8+PC9zdmc+)
 */
export function PhEyeglassesIcon(props: PhEyeglassesIconProps) {
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
      <path d="M200,40a8,8,0,0,0,0,16,16,16,0,0,1,16,16v58.08A44,44,0,0,0,145.68,152H110.32A44,44,0,0,0,40,130.08V72A16,16,0,0,1,56,56a8,8,0,0,0,0-16A32,32,0,0,0,24,72v92a44,44,0,0,0,87.81,4h32.38A44,44,0,0,0,232,164V72A32,32,0,0,0,200,40ZM68,192a28,28,0,1,1,28-28A28,28,0,0,1,68,192Zm120,0a28,28,0,1,1,28-28A28,28,0,0,1,188,192Z"/>
    </svg>
  );
}
