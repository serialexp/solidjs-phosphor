import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhUserListLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTQsODBhNiw2LDAsMCwxLDYtNmg4OGE2LDYsMCwwLDEsMCwxMkgxNjBBNiw2LDAsMCwxLDE1NCw4MFptOTQsNDJIMTYwYTYsNiwwLDAsMCwwLDEyaDg4YTYsNiwwLDAsMCwwLTEyWm0wLDQ4SDE4NGE2LDYsMCwwLDAsMCwxMmg2NGE2LDYsMCwwLDAsMC0xMlptLTk4LjE5LDIwLjVhNiw2LDAsMSwxLTExLjYyLDNDMTMxLjcsMTY4LjI5LDEwNy4yMywxNTAsODAsMTUwcy01MS43LDE4LjI5LTU4LjE5LDQzLjQ5YTYsNiwwLDEsMS0xMS42Mi0zYzUuNzQtMjIuMjgsMjMtNDAuMDcsNDQuNjctNDhhNDYsNDYsMCwxLDEsNTAuMjgsMEMxMjYuNzksMTUwLjQzLDE0NC4wOCwxNjguMjIsMTQ5LjgxLDE5MC41Wk04MCwxMzhhMzQsMzQsMCwxLDAtMzQtMzRBMzQsMzQsMCwwLDAsODAsMTM4WiIvPjwvc3ZnPg==)
 */
export function PhUserListLightIcon(props: PhUserListLightIconProps) {
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
      <path d="M154,80a6,6,0,0,1,6-6h88a6,6,0,0,1,0,12H160A6,6,0,0,1,154,80Zm94,42H160a6,6,0,0,0,0,12h88a6,6,0,0,0,0-12Zm0,48H184a6,6,0,0,0,0,12h64a6,6,0,0,0,0-12Zm-98.19,20.5a6,6,0,1,1-11.62,3C131.7,168.29,107.23,150,80,150s-51.7,18.29-58.19,43.49a6,6,0,1,1-11.62-3c5.74-22.28,23-40.07,44.67-48a46,46,0,1,1,50.28,0C126.79,150.43,144.08,168.22,149.81,190.5ZM80,138a34,34,0,1,0-34-34A34,34,0,0,0,80,138Z"/>
    </svg>
  );
}
