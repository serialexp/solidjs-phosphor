import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCaretUpDownFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik03Mi42MSw4My4wNmE4LDgsMCwwLDEsMS43My04LjcybDQ4LTQ4YTgsOCwwLDAsMSwxMS4zMiwwbDQ4LDQ4QTgsOCwwLDAsMSwxNzYsODhIODBBOCw4LDAsMCwxLDcyLjYxLDgzLjA2Wk0xNzYsMTY4SDgwYTgsOCwwLDAsMC01LjY2LDEzLjY2bDQ4LDQ4YTgsOCwwLDAsMCwxMS4zMiwwbDQ4LTQ4QTgsOCwwLDAsMCwxNzYsMTY4WiIvPjwvc3ZnPg==)
 */
export function PhCaretUpDownFillIcon(props: PhCaretUpDownFillIconProps) {
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
      <path d="M72.61,83.06a8,8,0,0,1,1.73-8.72l48-48a8,8,0,0,1,11.32,0l48,48A8,8,0,0,1,176,88H80A8,8,0,0,1,72.61,83.06ZM176,168H80a8,8,0,0,0-5.66,13.66l48,48a8,8,0,0,0,11.32,0l48-48A8,8,0,0,0,176,168Z"/>
    </svg>
  );
}
