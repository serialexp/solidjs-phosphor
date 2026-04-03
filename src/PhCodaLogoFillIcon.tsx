import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCodaLogoFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMzYsMTI4YTQwLDQwLDAsMCwwLDQwLDQwaC4zMmM3LjgzLjMsMTQtMS40NiwyMS4yNC02LjExQTEyLDEyLDAsMCwxLDIxNiwxNzJ2MzZhMTYsMTYsMCwwLDEtMTYsMTZINTZhMTYsMTYsMCwwLDEtMTYtMTZWNDhBMTYsMTYsMCwwLDEsNTYsMzJIMjAwYTE2LDE2LDAsMCwxLDE2LDE2Vjg0YTEyLDEyLDAsMCwxLTE4LjQ3LDEwLjFBNDAuMjMsNDAuMjMsMCwwLDAsMTM2LDEyOFoiLz48L3N2Zz4=)
 */
export function PhCodaLogoFillIcon(props: PhCodaLogoFillIconProps) {
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
      <path d="M136,128a40,40,0,0,0,40,40h.32c7.83.3,14-1.46,21.24-6.11A12,12,0,0,1,216,172v36a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V48A16,16,0,0,1,56,32H200a16,16,0,0,1,16,16V84a12,12,0,0,1-18.47,10.1A40.23,40.23,0,0,0,136,128Z"/>
    </svg>
  );
}
