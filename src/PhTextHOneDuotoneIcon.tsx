import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTextHOneDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNzJWMjA4SDU2YTE2LDE2LDAsMCwxLTE2LTE2VjU2SDIwOEExNiwxNiwwLDAsMSwyMjQsNzJaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMTUyLDU2VjE3NmE4LDgsMCwwLDEtMTYsMFYxMjRINDh2NTJhOCw4LDAsMCwxLTE2LDBWNTZhOCw4LDAsMCwxLDE2LDB2NTJoODhWNTZhOCw4LDAsMCwxLDE2LDBabTc1Ljc3LDQ5YTgsOCwwLDAsMC04LjIxLjM5bC0yNCwxNmE4LDgsMCwxLDAsOC44OCwxMy4zMkwyMTYsMTI3VjIwOGE4LDgsMCwwLDAsMTYsMFYxMTJBOCw4LDAsMCwwLDIyNy43NywxMDVaIi8+PC9zdmc+)
 */
export function PhTextHOneDuotoneIcon(props: PhTextHOneDuotoneIconProps) {
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
      <path d="M224,72V208H56a16,16,0,0,1-16-16V56H208A16,16,0,0,1,224,72Z" opacity="0.2"/><path d="M152,56V176a8,8,0,0,1-16,0V124H48v52a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0v52h88V56a8,8,0,0,1,16,0Zm75.77,49a8,8,0,0,0-8.21.39l-24,16a8,8,0,1,0,8.88,13.32L216,127V208a8,8,0,0,0,16,0V112A8,8,0,0,0,227.77,105Z"/>
    </svg>
  );
}
