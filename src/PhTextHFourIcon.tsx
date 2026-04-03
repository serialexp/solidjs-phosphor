import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTextHFourIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTIsNTZWMTc2YTgsOCwwLDAsMS0xNiwwVjEyNEg0OHY1MmE4LDgsMCwwLDEtMTYsMFY1NmE4LDgsMCwwLDEsMTYsMHY1Mmg4OFY1NmE4LDgsMCwwLDEsMTYsMFpNMjU2LDE4NGE4LDgsMCwwLDEtOCw4aC04djE2YTgsOCwwLDAsMS0xNiwwVjE5MkgxNzZhOCw4LDAsMCwxLTYuMzEtMTIuOTFsNTYtNzJBOCw4LDAsMCwxLDI0MCwxMTJ2NjRoOEE4LDgsMCwwLDEsMjU2LDE4NFptLTMyLTQ4LjY4TDE5Mi4zNiwxNzZIMjI0WiIvPjwvc3ZnPg==)
 */
export function PhTextHFourIcon(props: PhTextHFourIconProps) {
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
      <path d="M152,56V176a8,8,0,0,1-16,0V124H48v52a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0v52h88V56a8,8,0,0,1,16,0ZM256,184a8,8,0,0,1-8,8h-8v16a8,8,0,0,1-16,0V192H176a8,8,0,0,1-6.31-12.91l56-72A8,8,0,0,1,240,112v64h8A8,8,0,0,1,256,184Zm-32-48.68L192.36,176H224Z"/>
    </svg>
  );
}
