import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCircuitryBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMjhINDhBMjAsMjAsMCwwLDAsMjgsNDhWMjA4YTIwLDIwLDAsMCwwLDIwLDIwSDIwOGEyMCwyMCwwLDAsMCwyMC0yMFY0OEEyMCwyMCwwLDAsMCwyMDgsMjhaTTUyLDUySDc2djk1LjIyYTI0LDI0LDAsMSwwLDI0LDBWMTI1bDQwLDQwdjM5SDUyWk0yMDQsMjA0SDE2NFYxNjBhMTIsMTIsMCwwLDAtMy41MS04LjQ5TDEwMCw5MVY1MmgyNFY3MmExMiwxMiwwLDAsMCwzLjUxLDguNDlsMTcuMzEsMTcuM2EyNCwyNCwwLDEsMCwxNy0xN0wxNDgsNjdWNTJoNTZaIi8+PC9zdmc+)
 */
export function PhCircuitryBoldIcon(props: PhCircuitryBoldIconProps) {
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
      <path d="M208,28H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28ZM52,52H76v95.22a24,24,0,1,0,24,0V125l40,40v39H52ZM204,204H164V160a12,12,0,0,0-3.51-8.49L100,91V52h24V72a12,12,0,0,0,3.51,8.49l17.31,17.3a24,24,0,1,0,17-17L148,67V52h56Z"/>
    </svg>
  );
}
