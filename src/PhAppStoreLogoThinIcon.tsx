import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhAppStoreLogoThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik02MC45LDE5NGwtOS40NiwxNkE0LDQsMCwxLDEsNDQuNTYsMjA2TDU0LDE5MEE0LDQsMCwwLDEsNjAuOSwxOTRaTTIzMiwxNTZIMTgxLjkyTDE1MCwxMDJhNCw0LDAsMSwwLTYuODksNC4wN0wyMDQuNTYsMjEwYTQsNCwwLDEsMCw2Ljg4LTQuMDdsLTI0Ljc5LTQySDIzMmE0LDQsMCwwLDAsMC04Wm0tODkuNTMsMEg4My4zN0wxNTUuNDQsMzRBNCw0LDAsMSwwLDE0OC41NiwzMEwxMjgsNjQuNzUsMTA3LjQ0LDMwQTQsNCwwLDEsMCwxMDAuNTYsMzRsMjIuNzksMzguNThMNzQuMDgsMTU2SDI0YTQsNCwwLDAsMCwwLDhIMTQyLjQ3YTQsNCwwLDEsMCwwLThaIi8+PC9zdmc+)
 */
export function PhAppStoreLogoThinIcon(props: PhAppStoreLogoThinIconProps) {
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
      <path d="M60.9,194l-9.46,16A4,4,0,1,1,44.56,206L54,190A4,4,0,0,1,60.9,194ZM232,156H181.92L150,102a4,4,0,1,0-6.89,4.07L204.56,210a4,4,0,1,0,6.88-4.07l-24.79-42H232a4,4,0,0,0,0-8Zm-89.53,0H83.37L155.44,34A4,4,0,1,0,148.56,30L128,64.75,107.44,30A4,4,0,1,0,100.56,34l22.79,38.58L74.08,156H24a4,4,0,0,0,0,8H142.47a4,4,0,1,0,0-8Z"/>
    </svg>
  );
}
