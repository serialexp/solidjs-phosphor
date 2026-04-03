import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhGridNineBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDRINDBBMjAsMjAsMCwwLDAsMjAsNjRWMTkyYTIwLDIwLDAsMCwwLDIwLDIwSDIxNmEyMCwyMCwwLDAsMCwyMC0yMFY2NEEyMCwyMCwwLDAsMCwyMTYsNDRaTTEwOCwxNDBWMTE2aDQwdjI0Wm00MCwyNHYyNEgxMDhWMTY0Wk00NCwxMTZIODR2MjRINDRabTY0LTI0VjY4aDQwVjkyWm02NCwyNGg0MHYyNEgxNzJabTQwLTI0SDE3MlY2OGg0MFpNODQsNjhWOTJINDRWNjhaTTQ0LDE2NEg4NHYyNEg0NFptMTI4LDI0VjE2NGg0MHYyNFoiLz48L3N2Zz4=)
 */
export function PhGridNineBoldIcon(props: PhGridNineBoldIconProps) {
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
      <path d="M216,44H40A20,20,0,0,0,20,64V192a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V64A20,20,0,0,0,216,44ZM108,140V116h40v24Zm40,24v24H108V164ZM44,116H84v24H44Zm64-24V68h40V92Zm64,24h40v24H172Zm40-24H172V68h40ZM84,68V92H44V68ZM44,164H84v24H44Zm128,24V164h40v24Z"/>
    </svg>
  );
}
