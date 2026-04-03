import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhBookmarkLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsMzRINzJBMTQsMTQsMCwwLDAsNTgsNDhWMjI0YTYsNiwwLDAsMCw5LjE4LDUuMDlsNjAuODEtMzgsNjAuODMsMzhBNiw2LDAsMCwwLDE5OCwyMjRWNDhBMTQsMTQsMCwwLDAsMTg0LDM0Wk03Miw0NkgxODRhMiwyLDAsMCwxLDIsMlYxNjUuMThsLTU0LjgzLTM0LjI3YTYsNiwwLDAsMC02LjM2LDBMNzAsMTY1LjE3VjQ4QTIsMiwwLDAsMSw3Miw0NlptNTkuMTcsMTMyLjkxYTYsNiwwLDAsMC02LjM2LDBMNzAsMjEzLjE3VjE3OS4zM2w1OC0zNi4yNSw1OCwzNi4yNXYzMy44NFoiLz48L3N2Zz4=)
 */
export function PhBookmarkLightIcon(props: PhBookmarkLightIconProps) {
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
      <path d="M184,34H72A14,14,0,0,0,58,48V224a6,6,0,0,0,9.18,5.09l60.81-38,60.83,38A6,6,0,0,0,198,224V48A14,14,0,0,0,184,34ZM72,46H184a2,2,0,0,1,2,2V165.18l-54.83-34.27a6,6,0,0,0-6.36,0L70,165.17V48A2,2,0,0,1,72,46Zm59.17,132.91a6,6,0,0,0-6.36,0L70,213.17V179.33l58-36.25,58,36.25v33.84Z"/>
    </svg>
  );
}
