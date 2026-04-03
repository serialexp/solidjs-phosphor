import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTextTSlashThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTAuNjksMjE5YTQsNCwwLDAsMS01LjY1LS4yN2wtNzMtODAuMzRWMTk2aDI4YTQsNCwwLDAsMSwwLDhIOTZhNCw0LDAsMCwxLDAtOGgyOFYxMjkuNTVMNjAuNzgsNjBINjBWODhhNCw0LDAsMCwxLTgsMFY1NmE0LDQsMCwwLDEsMi0zLjQ1bC05LTkuODZBNCw0LDAsMCwxLDUxLDM3LjMxbDE2MCwxNzZBNCw0LDAsMCwxLDIxMC42OSwyMTlaTTEwNS43OSw2MEgxMjRWODAuNDNhNCw0LDAsMCwwLDgsMFY2MGg2NFY4OGE0LDQsMCwwLDAsOCwwVjU2YTQsNCwwLDAsMC00LTRIMTA1Ljc5YTQsNCwwLDAsMCwwLDhaIi8+PC9zdmc+)
 */
export function PhTextTSlashThinIcon(props: PhTextTSlashThinIconProps) {
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
      <path d="M210.69,219a4,4,0,0,1-5.65-.27l-73-80.34V196h28a4,4,0,0,1,0,8H96a4,4,0,0,1,0-8h28V129.55L60.78,60H60V88a4,4,0,0,1-8,0V56a4,4,0,0,1,2-3.45l-9-9.86A4,4,0,0,1,51,37.31l160,176A4,4,0,0,1,210.69,219ZM105.79,60H124V80.43a4,4,0,0,0,8,0V60h64V88a4,4,0,0,0,8,0V56a4,4,0,0,0-4-4H105.79a4,4,0,0,0,0,8Z"/>
    </svg>
  );
}
