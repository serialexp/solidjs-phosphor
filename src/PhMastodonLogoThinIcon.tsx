import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhMastodonLogoThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsMzZINzJBMzYsMzYsMCwwLDAsMzYsNzJWMTkyYTM2LDM2LDAsMCwwLDM2LDM2aDg4YTQsNCwwLDAsMCwwLThINzJhMjgsMjgsMCwwLDEtMjgtMjhWMTgwSDE4NGEzNiwzNiwwLDAsMCwzNi0zNlY3MkEzNiwzNiwwLDAsMCwxODQsMzZabTI4LDEwOGEyOCwyOCwwLDAsMS0yOCwyOEg0NFY3MkEyOCwyOCwwLDAsMSw3Miw0NEgxODRhMjgsMjgsMCwwLDEsMjgsMjhabS0zMi00MHYzMmE0LDQsMCwwLDEtOCwwVjEwNGEyMCwyMCwwLDAsMC00MCwwdjMyYTQsNCwwLDAsMS04LDBWMTA0YTIwLDIwLDAsMCwwLTQwLDB2MzJhNCw0LDAsMCwxLTgsMFYxMDRhMjgsMjgsMCwwLDEsNTItMTQuNDFBMjgsMjgsMCwwLDEsMTgwLDEwNFoiLz48L3N2Zz4=)
 */
export function PhMastodonLogoThinIcon(props: PhMastodonLogoThinIconProps) {
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
      <path d="M184,36H72A36,36,0,0,0,36,72V192a36,36,0,0,0,36,36h88a4,4,0,0,0,0-8H72a28,28,0,0,1-28-28V180H184a36,36,0,0,0,36-36V72A36,36,0,0,0,184,36Zm28,108a28,28,0,0,1-28,28H44V72A28,28,0,0,1,72,44H184a28,28,0,0,1,28,28Zm-32-40v32a4,4,0,0,1-8,0V104a20,20,0,0,0-40,0v32a4,4,0,0,1-8,0V104a20,20,0,0,0-40,0v32a4,4,0,0,1-8,0V104a28,28,0,0,1,52-14.41A28,28,0,0,1,180,104Z"/>
    </svg>
  );
}
