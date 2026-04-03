import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTildeBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjUuMzUsMTMzLjFjLTE1LjIyLDE4LjkzLTMwLjQzLDI5LTQ2LjUsMzAuNjVBNDYuNzEsNDYuNzEsMCwwLDEsMTc0LDE2NGMtMjAuODEsMC0zOC4xNi0xNC4xMy01My41OS0yNi43LTE0LjI0LTExLjYtMjcuNjgtMjIuNTQtNDAuNzUtMjEuMTgtOS4yNiwxLTE5LjQ2LDguMzItMzAuMzIsMjEuODJhMTIsMTIsMCwwLDEtMTguNy0xNUM0NS44NywxMDQsNjEuMDgsOTQsNzcuMTUsOTIuMjVjMjMtMi40Miw0MS44MiwxMi45Miw1OC40MywyNi40NSwxNC4yNCwxMS42LDI3LjY4LDIyLjU0LDQwLjc1LDIxLjE4LDkuMjYtMSwxOS40Ni04LjMyLDMwLjMyLTIxLjgyYTEyLDEyLDAsMSwxLDE4LjcsMTVaIi8+PC9zdmc+)
 */
export function PhTildeBoldIcon(props: PhTildeBoldIconProps) {
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
      <path d="M225.35,133.1c-15.22,18.93-30.43,29-46.5,30.65A46.71,46.71,0,0,1,174,164c-20.81,0-38.16-14.13-53.59-26.7-14.24-11.6-27.68-22.54-40.75-21.18-9.26,1-19.46,8.32-30.32,21.82a12,12,0,0,1-18.7-15C45.87,104,61.08,94,77.15,92.25c23-2.42,41.82,12.92,58.43,26.45,14.24,11.6,27.68,22.54,40.75,21.18,9.26-1,19.46-8.32,30.32-21.82a12,12,0,1,1,18.7,15Z"/>
    </svg>
  );
}
