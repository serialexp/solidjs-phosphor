import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhMemberOfThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsMTMySDUyLjExQTc2LjA5LDc2LjA5LDAsMCwwLDEyOCwyMDRoNzJhNCw0LDAsMCwxLDAsOEgxMjhhODQsODQsMCwwLDEsMC0xNjhoNzJhNCw0LDAsMCwxLDAsOEgxMjhhNzYuMDksNzYuMDksMCwwLDAtNzUuODksNzJIMjAwYTQsNCwwLDAsMSwwLDhaIi8+PC9zdmc+)
 */
export function PhMemberOfThinIcon(props: PhMemberOfThinIconProps) {
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
      <path d="M200,132H52.11A76.09,76.09,0,0,0,128,204h72a4,4,0,0,1,0,8H128a84,84,0,0,1,0-168h72a4,4,0,0,1,0,8H128a76.09,76.09,0,0,0-75.89,72H200a4,4,0,0,1,0,8Z"/>
    </svg>
  );
}
