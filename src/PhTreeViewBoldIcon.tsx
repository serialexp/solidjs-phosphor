import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTreeViewBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzYsMTU2aDMyYTIwLDIwLDAsMCwwLDIwLTIwVjEwNGEyMCwyMCwwLDAsMC0yMC0yMEgxNzZhMjAsMjAsMCwwLDAtMjAsMjB2NEg5MlY4NGg0YTIwLDIwLDAsMCwwLDIwLTIwVjMyQTIwLDIwLDAsMCwwLDk2LDEySDY0QTIwLDIwLDAsMCwwLDQ0LDMyVjY0QTIwLDIwLDAsMCwwLDY0LDg0aDRWMTkyYTI4LDI4LDAsMCwwLDI4LDI4aDYwdjRhMjAsMjAsMCwwLDAsMjAsMjBoMzJhMjAsMjAsMCwwLDAsMjAtMjBWMTkyYTIwLDIwLDAsMCwwLTIwLTIwSDE3NmEyMCwyMCwwLDAsMC0yMCwyMHY0SDk2YTQsNCwwLDAsMS00LTRWMTMyaDY0djRBMjAsMjAsMCwwLDAsMTc2LDE1NlpNNjgsMzZIOTJWNjBINjhaTTE4MCwxOTZoMjR2MjRIMTgwWm0wLTg4aDI0djI0SDE4MFoiLz48L3N2Zz4=)
 */
export function PhTreeViewBoldIcon(props: PhTreeViewBoldIconProps) {
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
      <path d="M176,156h32a20,20,0,0,0,20-20V104a20,20,0,0,0-20-20H176a20,20,0,0,0-20,20v4H92V84h4a20,20,0,0,0,20-20V32A20,20,0,0,0,96,12H64A20,20,0,0,0,44,32V64A20,20,0,0,0,64,84h4V192a28,28,0,0,0,28,28h60v4a20,20,0,0,0,20,20h32a20,20,0,0,0,20-20V192a20,20,0,0,0-20-20H176a20,20,0,0,0-20,20v4H96a4,4,0,0,1-4-4V132h64v4A20,20,0,0,0,176,156ZM68,36H92V60H68ZM180,196h24v24H180Zm0-88h24v24H180Z"/>
    </svg>
  );
}
