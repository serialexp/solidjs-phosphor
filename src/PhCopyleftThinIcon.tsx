import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCopyleftThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjhBMTAwLDEwMCwwLDEsMCwyMjgsMTI4LDEwMC4xMSwxMDAuMTEsMCwwLDAsMTI4LDI4Wm0wLDE5MmE5Miw5MiwwLDEsMSw5Mi05MkE5Mi4xLDkyLjEsMCwwLDEsMTI4LDIyMFptNDQtOTJhNDQsNDQsMCwwLDEtNzkuMiwyNi40MSw0LDQsMCwwLDEsNi40LTQuODEsMzYsMzYsMCwxLDAsMC00My4yLDQsNCwwLDAsMS02LjQtNC44MUE0NCw0NCwwLDAsMSwxNzIsMTI4WiIvPjwvc3ZnPg==)
 */
export function PhCopyleftThinIcon(props: PhCopyleftThinIconProps) {
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
      <path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm44-92a44,44,0,0,1-79.2,26.41,4,4,0,0,1,6.4-4.81,36,36,0,1,0,0-43.2,4,4,0,0,1-6.4-4.81A44,44,0,0,1,172,128Z"/>
    </svg>
  );
}
