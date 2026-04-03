import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCalendarSlashFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNDhWMTg3LjU3YTQsNCwwLDAsMS03LDIuN0wxMTYuOCw4MEgyMDhWNDhIMTg0djhhOCw4LDAsMCwxLTguNTIsOEE4LjE4LDguMTgsMCwwLDEsMTY4LDU1LjczVjQ4SDg3LjcxbC04LjQ2LTkuMzFhNCw0LDAsMCwxLDMtNi42OUgxNjhWMjRhOCw4LDAsMCwxLDguNTItOEE4LjE4LDguMTgsMCwwLDEsMTg0LDI0LjI3VjMyaDI0QTE2LDE2LDAsMCwxLDIyNCw0OFpNMjEzLjkyLDIxMC42MkE4LDgsMCwwLDEsMjA4LDIyNEg0OGExNiwxNiwwLDAsMS0xNi0xNlY0OEExNiwxNiwwLDAsMSw0OCwzMmE4LDgsMCwwLDEsNS45MywyLjYyWk03My41NSw4MCw0OCw1MS44OVY4MFoiLz48L3N2Zz4=)
 */
export function PhCalendarSlashFillIcon(props: PhCalendarSlashFillIconProps) {
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
      <path d="M224,48V187.57a4,4,0,0,1-7,2.7L116.8,80H208V48H184v8a8,8,0,0,1-8.52,8A8.18,8.18,0,0,1,168,55.73V48H87.71l-8.46-9.31a4,4,0,0,1,3-6.69H168V24a8,8,0,0,1,8.52-8A8.18,8.18,0,0,1,184,24.27V32h24A16,16,0,0,1,224,48ZM213.92,210.62A8,8,0,0,1,208,224H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32a8,8,0,0,1,5.93,2.62ZM73.55,80,48,51.89V80Z"/>
    </svg>
  );
}
