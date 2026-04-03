import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhShapesDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik02NCw2NGw0MCwxMjBIMjRaTTIwMCw3NmE0NCw0NCwwLDEsMC00NCw0NEE0NCw0NCwwLDAsMCwyMDAsNzZabS02NCw3NnY1Nmg4OFYxNTJaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjI0LDE0NEgxMzZhOCw4LDAsMCwwLTgsOHY1NmE4LDgsMCwwLDAsOCw4aDg4YTgsOCwwLDAsMCw4LThWMTUyQTgsOCwwLDAsMCwyMjQsMTQ0Wm0tOCw1NkgxNDRWMTYwaDcyWk03MS41OSw2MS40N2E4LDgsMCwwLDAtMTUuMTgsMGwtNDAsMTIwQTgsOCwwLDAsMCwyNCwxOTJoODBhOCw4LDAsMCwwLDcuNTktMTAuNTNaTTM1LjEsMTc2LDY0LDg5LjMsOTIuOSwxNzZaTTIwOCw3NmE1Miw1MiwwLDEsMC01Miw1MkE1Mi4wNiw1Mi4wNiwwLDAsMCwyMDgsNzZabS04OCwwYTM2LDM2LDAsMSwxLDM2LDM2QTM2LDM2LDAsMCwxLDEyMCw3NloiLz48L3N2Zz4=)
 */
export function PhShapesDuotoneIcon(props: PhShapesDuotoneIconProps) {
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
      <path d="M64,64l40,120H24ZM200,76a44,44,0,1,0-44,44A44,44,0,0,0,200,76Zm-64,76v56h88V152Z" opacity="0.2"/><path d="M224,144H136a8,8,0,0,0-8,8v56a8,8,0,0,0,8,8h88a8,8,0,0,0,8-8V152A8,8,0,0,0,224,144Zm-8,56H144V160h72ZM71.59,61.47a8,8,0,0,0-15.18,0l-40,120A8,8,0,0,0,24,192h80a8,8,0,0,0,7.59-10.53ZM35.1,176,64,89.3,92.9,176ZM208,76a52,52,0,1,0-52,52A52.06,52.06,0,0,0,208,76Zm-88,0a36,36,0,1,1,36,36A36,36,0,0,1,120,76Z"/>
    </svg>
  );
}
