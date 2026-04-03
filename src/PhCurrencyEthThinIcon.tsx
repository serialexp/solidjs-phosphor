import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCurrencyEthThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTkuMTUsMTI1LjUzbC04OC0xMTJhNCw0LDAsMCwwLTYuMywwbC04OCwxMTJhNCw0LDAsMCwwLDAsNC45NGw4OCwxMTJhNCw0LDAsMCwwLDYuMywwbDg4LTExMkE0LDQsMCwwLDAsMjE5LjE1LDEyNS41M1pNMTMyLDI3LjU3bDc3LjcxLDk4LjlMMTMyLDE2MS43OVptLTgsMTM0LjIyTDQ2LjI5LDEyNi40NywxMjQsMjcuNTdabTAsOC43OXY1Ny44NWwtNzAuNzItOTBabTgsMCw3MC43Mi0zMi4xNS03MC43Miw5MFoiLz48L3N2Zz4=)
 */
export function PhCurrencyEthThinIcon(props: PhCurrencyEthThinIconProps) {
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
      <path d="M219.15,125.53l-88-112a4,4,0,0,0-6.3,0l-88,112a4,4,0,0,0,0,4.94l88,112a4,4,0,0,0,6.3,0l88-112A4,4,0,0,0,219.15,125.53ZM132,27.57l77.71,98.9L132,161.79Zm-8,134.22L46.29,126.47,124,27.57Zm0,8.79v57.85l-70.72-90Zm8,0,70.72-32.15-70.72,90Z"/>
    </svg>
  );
}
