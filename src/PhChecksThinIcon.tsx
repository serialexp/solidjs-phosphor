import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhChecksThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDYuOCw4Mi44NWwtODkuNiw4OGE0LDQsMCwwLDEtNS42LDBMMTMuMiwxMzMuMTRhNCw0LDAsMCwxLDUuNi01LjcxbDM1LjYsMzUsODYuOC04NS4yNGE0LDQsMCwwLDEsNS42LDUuN1ptOTYtNS42NWE0LDQsMCwwLDAtNS42NSwwbC04Ni44LDg1LjI0LTIxLjYzLTIxLjI0YTQsNCwwLDEsMC01LjYxLDUuN2wyNC40NCwyNGE0LDQsMCwwLDAsNS42LDBsODkuNi04OEE0LDQsMCwwLDAsMjQyLjg1LDc3LjJaIi8+PC9zdmc+)
 */
export function PhChecksThinIcon(props: PhChecksThinIconProps) {
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
      <path d="M146.8,82.85l-89.6,88a4,4,0,0,1-5.6,0L13.2,133.14a4,4,0,0,1,5.6-5.71l35.6,35,86.8-85.24a4,4,0,0,1,5.6,5.7Zm96-5.65a4,4,0,0,0-5.65,0l-86.8,85.24-21.63-21.24a4,4,0,1,0-5.61,5.7l24.44,24a4,4,0,0,0,5.6,0l89.6-88A4,4,0,0,0,242.85,77.2Z"/>
    </svg>
  );
}
