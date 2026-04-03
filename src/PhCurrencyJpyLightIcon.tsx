import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCurrencyJpyLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDQuNjQsNTEuOGwtNjQsNzguMkgxNzZhNiw2LDAsMCwxLDAsMTJIMTM0djIwaDQyYTYsNiwwLDAsMSwwLDEySDEzNHY0MmE2LDYsMCwwLDEtMTIsMFYxNzRIODBhNiw2LDAsMCwxLDAtMTJoNDJWMTQySDgwYTYsNiwwLDAsMSwwLTEyaDM1LjM0bC02NC03OC4yYTYsNiwwLDEsMSw5LjI4LTcuNkwxMjgsMTI2LjUzLDE5NS4zNiw0NC4yYTYsNiwwLDAsMSw5LjI4LDcuNloiLz48L3N2Zz4=)
 */
export function PhCurrencyJpyLightIcon(props: PhCurrencyJpyLightIconProps) {
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
      <path d="M204.64,51.8l-64,78.2H176a6,6,0,0,1,0,12H134v20h42a6,6,0,0,1,0,12H134v42a6,6,0,0,1-12,0V174H80a6,6,0,0,1,0-12h42V142H80a6,6,0,0,1,0-12h35.34l-64-78.2a6,6,0,1,1,9.28-7.6L128,126.53,195.36,44.2a6,6,0,0,1,9.28,7.6Z"/>
    </svg>
  );
}
