import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhLifebuoyThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjhBMTAwLDEwMCwwLDEsMCwyMjgsMTI4LDEwMC4xMSwxMDAuMTEsMCwwLDAsMTI4LDI4Wm02Ny43OSwxNjIuMTMtMzQtMzRhNDMuOTIsNDMuOTIsMCwwLDAsMC01Ni4yOGwzNC0zNGE5MS44Myw5MS44MywwLDAsMSwwLDEyNC4yNlpNOTIsMTI4YTM2LDM2LDAsMSwxLDM2LDM2QTM2LDM2LDAsMCwxLDkyLDEyOFptOTguMTMtNjcuNzktMzQsMzRhNDMuOTIsNDMuOTIsMCwwLDAtNTYuMjgsMGwtMzQtMzRhOTEuODMsOTEuODMsMCwwLDEsMTI0LjI2LDBaTTYwLjIxLDY1Ljg3bDM0LDM0YTQzLjkyLDQzLjkyLDAsMCwwLDAsNTYuMjhsLTM0LDM0YTkxLjgzLDkxLjgzLDAsMCwxLDAtMTI0LjI2Wm01LjY2LDEyOS45MiwzNC0zNGE0My45Miw0My45MiwwLDAsMCw1Ni4yOCwwbDM0LDM0YTkxLjgzLDkxLjgzLDAsMCwxLTEyNC4yNiwwWiIvPjwvc3ZnPg==)
 */
export function PhLifebuoyThinIcon(props: PhLifebuoyThinIconProps) {
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
      <path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm67.79,162.13-34-34a43.92,43.92,0,0,0,0-56.28l34-34a91.83,91.83,0,0,1,0,124.26ZM92,128a36,36,0,1,1,36,36A36,36,0,0,1,92,128Zm98.13-67.79-34,34a43.92,43.92,0,0,0-56.28,0l-34-34a91.83,91.83,0,0,1,124.26,0ZM60.21,65.87l34,34a43.92,43.92,0,0,0,0,56.28l-34,34a91.83,91.83,0,0,1,0-124.26Zm5.66,129.92,34-34a43.92,43.92,0,0,0,56.28,0l34,34a91.83,91.83,0,0,1-124.26,0Z"/>
    </svg>
  );
}
