import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhVaultLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDJINDBBMTQsMTQsMCwwLDAsMjYsNTZWMTkyYTE0LDE0LDAsMCwwLDE0LDE0SDU4djE4YTYsNiwwLDAsMCwxMiwwVjIwNkgxODZ2MThhNiw2LDAsMCwwLDEyLDBWMjA2aDE4YTE0LDE0LDAsMCwwLDE0LTE0VjU2QTE0LDE0LDAsMCwwLDIxNiw0MlptMCwxNTJINDBhMiwyLDAsMCwxLTItMlY1NmEyLDIsMCwwLDEsMi0ySDIxNmEyLDIsMCwwLDEsMiwydjY2SDE5Ny42YTQ2LDQ2LDAsMSwwLDAsMTJIMjE4djU4QTIsMiwwLDAsMSwyMTYsMTk0Wm0tNTEuMzctNzJhMTQsMTQsMCwxLDAsMCwxMmgyMC44M2EzNCwzNCwwLDEsMSwwLTEyWiIvPjwvc3ZnPg==)
 */
export function PhVaultLightIcon(props: PhVaultLightIconProps) {
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
      <path d="M216,42H40A14,14,0,0,0,26,56V192a14,14,0,0,0,14,14H58v18a6,6,0,0,0,12,0V206H186v18a6,6,0,0,0,12,0V206h18a14,14,0,0,0,14-14V56A14,14,0,0,0,216,42Zm0,152H40a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2v66H197.6a46,46,0,1,0,0,12H218v58A2,2,0,0,1,216,194Zm-51.37-72a14,14,0,1,0,0,12h20.83a34,34,0,1,1,0-12Z"/>
    </svg>
  );
}
