import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhMastodonLogoLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsMzRINzJBMzgsMzgsMCwwLDAsMzQsNzJWMTkyYTM4LDM4LDAsMCwwLDM4LDM4aDg4YTYsNiwwLDAsMCwwLTEySDcyYTI2LDI2LDAsMCwxLTI2LTI2VjE4MkgxODRhMzgsMzgsMCwwLDAsMzgtMzhWNzJBMzgsMzgsMCwwLDAsMTg0LDM0Wm0yNiwxMTBhMjYsMjYsMCwwLDEtMjYsMjZINDZWNzJBMjYsMjYsMCwwLDEsNzIsNDZIMTg0YTI2LDI2LDAsMCwxLDI2LDI2Wm0tMjgtNDB2MzJhNiw2LDAsMCwxLTEyLDBWMTA0YTE4LDE4LDAsMCwwLTM2LDB2MzJhNiw2LDAsMCwxLTEyLDBWMTA0YTE4LDE4LDAsMCwwLTM2LDB2MzJhNiw2LDAsMCwxLTEyLDBWMTA0YTMwLDMwLDAsMCwxLDU0LTE4LDMwLDMwLDAsMCwxLDU0LDE4WiIvPjwvc3ZnPg==)
 */
export function PhMastodonLogoLightIcon(props: PhMastodonLogoLightIconProps) {
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
      <path d="M184,34H72A38,38,0,0,0,34,72V192a38,38,0,0,0,38,38h88a6,6,0,0,0,0-12H72a26,26,0,0,1-26-26V182H184a38,38,0,0,0,38-38V72A38,38,0,0,0,184,34Zm26,110a26,26,0,0,1-26,26H46V72A26,26,0,0,1,72,46H184a26,26,0,0,1,26,26Zm-28-40v32a6,6,0,0,1-12,0V104a18,18,0,0,0-36,0v32a6,6,0,0,1-12,0V104a18,18,0,0,0-36,0v32a6,6,0,0,1-12,0V104a30,30,0,0,1,54-18,30,30,0,0,1,54,18Z"/>
    </svg>
  );
}
