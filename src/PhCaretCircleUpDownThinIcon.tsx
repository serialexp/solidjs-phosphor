import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCaretCircleUpDownThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjhBMTAwLDEwMCwwLDEsMCwyMjgsMTI4LDEwMC4xMSwxMDAuMTEsMCwwLDAsMTI4LDI4Wm0wLDE5MmE5Miw5MiwwLDEsMSw5Mi05MkE5Mi4xLDkyLjEsMCwwLDEsMTI4LDIyMFptMzQuODMtMTE4LjgzYTQsNCwwLDAsMS01LjY2LDUuNjZMMTI4LDc3LjY2LDk4LjgzLDEwNi44M2E0LDQsMCwwLDEtNS42Ni01LjY2bDMyLTMyYTQsNCwwLDAsMSw1LjY2LDBabTAsNDhhNCw0LDAsMCwxLDAsNS42NmwtMzIsMzJhNCw0LDAsMCwxLTUuNjYsMGwtMzItMzJhNCw0LDAsMCwxLDUuNjYtNS42NkwxMjgsMTc4LjM0bDI5LjE3LTI5LjE3QTQsNCwwLDAsMSwxNjIuODMsMTQ5LjE3WiIvPjwvc3ZnPg==)
 */
export function PhCaretCircleUpDownThinIcon(props: PhCaretCircleUpDownThinIconProps) {
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
      <path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm34.83-118.83a4,4,0,0,1-5.66,5.66L128,77.66,98.83,106.83a4,4,0,0,1-5.66-5.66l32-32a4,4,0,0,1,5.66,0Zm0,48a4,4,0,0,1,0,5.66l-32,32a4,4,0,0,1-5.66,0l-32-32a4,4,0,0,1,5.66-5.66L128,178.34l29.17-29.17A4,4,0,0,1,162.83,149.17Z"/>
    </svg>
  );
}
