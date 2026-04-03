import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhImageLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDJINDBBMTQsMTQsMCwwLDAsMjYsNTZWMjAwYTE0LDE0LDAsMCwwLDE0LDE0SDIxNmExNCwxNCwwLDAsMCwxNC0xNFY1NkExNCwxNCwwLDAsMCwyMTYsNDJaTTQwLDU0SDIxNmEyLDIsMCwwLDEsMiwyVjE2My41N0wxODguNTMsMTM0LjFhMTQsMTQsMCwwLDAtMTkuOCwwbC0yMS40MiwyMS40MkwxMDEuOSwxMTAuMWExNCwxNCwwLDAsMC0xOS44LDBMMzgsMTU0LjJWNTZBMiwyLDAsMCwxLDQwLDU0Wk0zOCwyMDBWMTcxLjE3bDUyLjU4LTUyLjU4YTIsMiwwLDAsMSwyLjg0LDBMMTc2LjgzLDIwMkg0MEEyLDIsMCwwLDEsMzgsMjAwWm0xNzgsMkgxOTMuOGwtMzgtMzgsMjEuNDEtMjEuNDJhMiwyLDAsMCwxLDIuODMsMGwzOCwzOFYyMDBBMiwyLDAsMCwxLDIxNiwyMDJaTTE0NiwxMDBhMTAsMTAsMCwxLDEsMTAsMTBBMTAsMTAsMCwwLDEsMTQ2LDEwMFoiLz48L3N2Zz4=)
 */
export function PhImageLightIcon(props: PhImageLightIconProps) {
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
      <path d="M216,42H40A14,14,0,0,0,26,56V200a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A14,14,0,0,0,216,42ZM40,54H216a2,2,0,0,1,2,2V163.57L188.53,134.1a14,14,0,0,0-19.8,0l-21.42,21.42L101.9,110.1a14,14,0,0,0-19.8,0L38,154.2V56A2,2,0,0,1,40,54ZM38,200V171.17l52.58-52.58a2,2,0,0,1,2.84,0L176.83,202H40A2,2,0,0,1,38,200Zm178,2H193.8l-38-38,21.41-21.42a2,2,0,0,1,2.83,0l38,38V200A2,2,0,0,1,216,202ZM146,100a10,10,0,1,1,10,10A10,10,0,0,1,146,100Z"/>
    </svg>
  );
}
