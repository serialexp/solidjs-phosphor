import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhWaveSquareThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzYsMTI4djU2YTQsNCwwLDAsMS00LDRIMTI4YTQsNCwwLDAsMS00LTRWNzZIMjh2NTJhNCw0LDAsMCwxLTgsMFY3MmE0LDQsMCwwLDEsNC00SDEyOGE0LDQsMCwwLDEsNCw0VjE4MGg5NlYxMjhhNCw0LDAsMCwxLDgsMFoiLz48L3N2Zz4=)
 */
export function PhWaveSquareThinIcon(props: PhWaveSquareThinIconProps) {
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
      <path d="M236,128v56a4,4,0,0,1-4,4H128a4,4,0,0,1-4-4V76H28v52a4,4,0,0,1-8,0V72a4,4,0,0,1,4-4H128a4,4,0,0,1,4,4V180h96V128a4,4,0,0,1,8,0Z"/>
    </svg>
  );
}
