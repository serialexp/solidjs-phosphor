import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhToggleRightLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzYsNThIODBhNzAsNzAsMCwwLDAsMCwxNDBoOTZhNzAsNzAsMCwwLDAsMC0xNDBabTAsMTI4SDgwQTU4LDU4LDAsMCwxLDgwLDcwaDk2YTU4LDU4LDAsMCwxLDAsMTE2Wm0wLTk2YTM4LDM4LDAsMSwwLDM4LDM4QTM4LDM4LDAsMCwwLDE3Niw5MFptMCw2NGEyNiwyNiwwLDEsMSwyNi0yNkEyNiwyNiwwLDAsMSwxNzYsMTU0WiIvPjwvc3ZnPg==)
 */
export function PhToggleRightLightIcon(props: PhToggleRightLightIconProps) {
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
      <path d="M176,58H80a70,70,0,0,0,0,140h96a70,70,0,0,0,0-140Zm0,128H80A58,58,0,0,1,80,70h96a58,58,0,0,1,0,116Zm0-96a38,38,0,1,0,38,38A38,38,0,0,0,176,90Zm0,64a26,26,0,1,1,26-26A26,26,0,0,1,176,154Z"/>
    </svg>
  );
}
