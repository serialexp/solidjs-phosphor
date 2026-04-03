import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhOptionThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjgsMTkyYTQsNCwwLDAsMS00LDRIMTYwLjk0YTExLjk0LDExLjk0LDAsMCwxLTEwLjczLTYuNjNMOTguNjMsODYuMjFBNCw0LDAsMCwwLDk1LjA2LDg0SDMyYTQsNCwwLDAsMSwwLThIOTUuMDZhMTEuOTQsMTEuOTQsMCwwLDEsMTAuNzMsNi42M2w1MS41OCwxMDMuMTZhNCw0LDAsMCwwLDMuNTcsMi4yMUgyMjRBNCw0LDAsMCwxLDIyOCwxOTJaTTE1Miw4NGg3MmE0LDQsMCwwLDAsMC04SDE1MmE0LDQsMCwwLDAsMCw4WiIvPjwvc3ZnPg==)
 */
export function PhOptionThinIcon(props: PhOptionThinIconProps) {
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
      <path d="M228,192a4,4,0,0,1-4,4H160.94a11.94,11.94,0,0,1-10.73-6.63L98.63,86.21A4,4,0,0,0,95.06,84H32a4,4,0,0,1,0-8H95.06a11.94,11.94,0,0,1,10.73,6.63l51.58,103.16a4,4,0,0,0,3.57,2.21H224A4,4,0,0,1,228,192ZM152,84h72a4,4,0,0,0,0-8H152a4,4,0,0,0,0,8Z"/>
    </svg>
  );
}
