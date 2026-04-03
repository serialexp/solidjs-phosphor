import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowSquareOutLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjIsMTA0YTYsNiwwLDAsMS0xMiwwVjU0LjQ5bC02OS43NSw2OS43NWE2LDYsMCwwLDEtOC40OC04LjQ4TDIwMS41MSw0NkgxNTJhNiw2LDAsMCwxLDAtMTJoNjRhNiw2LDAsMCwxLDYsNlptLTM4LDI2YTYsNiwwLDAsMC02LDZ2NzJhMiwyLDAsMCwxLTIsMkg0OGEyLDIsMCwwLDEtMi0yVjgwYTIsMiwwLDAsMSwyLTJoNzJhNiw2LDAsMCwwLDAtMTJINDhBMTQsMTQsMCwwLDAsMzQsODBWMjA4YTE0LDE0LDAsMCwwLDE0LDE0SDE3NmExNCwxNCwwLDAsMCwxNC0xNFYxMzZBNiw2LDAsMCwwLDE4NCwxMzBaIi8+PC9zdmc+)
 */
export function PhArrowSquareOutLightIcon(props: PhArrowSquareOutLightIconProps) {
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
      <path d="M222,104a6,6,0,0,1-12,0V54.49l-69.75,69.75a6,6,0,0,1-8.48-8.48L201.51,46H152a6,6,0,0,1,0-12h64a6,6,0,0,1,6,6Zm-38,26a6,6,0,0,0-6,6v72a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V80a2,2,0,0,1,2-2h72a6,6,0,0,0,0-12H48A14,14,0,0,0,34,80V208a14,14,0,0,0,14,14H176a14,14,0,0,0,14-14V136A6,6,0,0,0,184,130Z"/>
    </svg>
  );
}
