import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhOrangeSliceIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDgsODBIOGE4LDgsMCwwLDAtOCw4LDEyOCwxMjgsMCwwLDAsMjU2LDBBOCw4LDAsMCwwLDI0OCw4MFpNNzcuNCwxNDkuOTFsNDIuNi00Mi42VjE2Ny42QTc5LjU5LDc5LjU5LDAsMCwxLDc3LjQsMTQ5LjkxWk02Ni4wOSwxMzguNkE3OS41OSw3OS41OSwwLDAsMSw0OC40LDk2aDYwLjI5Wk0xMzYsMTA3LjMxbDQyLjYsNDIuNkE3OS41OSw3OS41OSwwLDAsMSwxMzYsMTY3LjZabTUzLjkxLDMxLjI5TDE0Ny4zMSw5NkgyMDcuNkE3OS41OSw3OS41OSwwLDAsMSwxODkuOTEsMTM4LjZaTTEyOCwyMDBBMTEyLjE1LDExMi4xNSwwLDAsMSwxNi4yOCw5NkgzMi4zNGE5Niw5NiwwLDAsMCwxOTEuMzIsMGgxNi4wNkExMTIuMTUsMTEyLjE1LDAsMCwxLDEyOCwyMDBaIi8+PC9zdmc+)
 */
export function PhOrangeSliceIcon(props: PhOrangeSliceIconProps) {
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
      <path d="M248,80H8a8,8,0,0,0-8,8,128,128,0,0,0,256,0A8,8,0,0,0,248,80ZM77.4,149.91l42.6-42.6V167.6A79.59,79.59,0,0,1,77.4,149.91ZM66.09,138.6A79.59,79.59,0,0,1,48.4,96h60.29ZM136,107.31l42.6,42.6A79.59,79.59,0,0,1,136,167.6Zm53.91,31.29L147.31,96H207.6A79.59,79.59,0,0,1,189.91,138.6ZM128,200A112.15,112.15,0,0,1,16.28,96H32.34a96,96,0,0,0,191.32,0h16.06A112.15,112.15,0,0,1,128,200Z"/>
    </svg>
  );
}
