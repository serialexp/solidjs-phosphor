import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhSwordBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMjhIMTUyYTEyLDEyLDAsMCwwLTkuMzMsNC40NUw3OS41LDExMC41MWwtNC42Ni00LjY1YTIwLDIwLDAsMCwwLTI4LjI5LDBMMjkuODYsMTIyLjU1YTIwLDIwLDAsMCwwLDAsMjguMjloMEw0NSwxNjYsMjMuODYsMTg3LjE3YTIwLDIwLDAsMCwwLDAsMjguMjhsMTYuNjksMTYuNjlhMjAsMjAsMCwwLDAsMjguMjgsMEw5MCwyMTFsMTUuMTcsMTUuMTZhMjAsMjAsMCwwLDAsMjguMjksMGwxNi42OS0xNi42OWEyMCwyMCwwLDAsMCwwLTI4LjNsLTQuNjUtNC42NSw3OC4wNi02My4xN0ExMiwxMiwwLDAsMCwyMjgsMTA0VjQwQTEyLDEyLDAsMCwwLDIxNiwyOFpNNTQuNjksMjEyLjM0bC0xMS0xMUw2MiwxODNsMTEsMTFabTY0LjYxLTZMNDkuNjUsMTM2LjdsMTEuMDUtMTEsNjkuNjUsNjkuNjVaTTIwNCw5OC4yN2wtNzUuNTgsNjEuMTdMMTIxLDE1Mmw0Ny41MS00Ny41YTEyLDEyLDAsMCwwLTE3LTE3TDEwNCwxMzVsLTcuNDUtNy40NEwxNTcuNzMsNTJIMjA0WiIvPjwvc3ZnPg==)
 */
export function PhSwordBoldIcon(props: PhSwordBoldIconProps) {
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
      <path d="M216,28H152a12,12,0,0,0-9.33,4.45L79.5,110.51l-4.66-4.65a20,20,0,0,0-28.29,0L29.86,122.55a20,20,0,0,0,0,28.29h0L45,166,23.86,187.17a20,20,0,0,0,0,28.28l16.69,16.69a20,20,0,0,0,28.28,0L90,211l15.17,15.16a20,20,0,0,0,28.29,0l16.69-16.69a20,20,0,0,0,0-28.3l-4.65-4.65,78.06-63.17A12,12,0,0,0,228,104V40A12,12,0,0,0,216,28ZM54.69,212.34l-11-11L62,183l11,11Zm64.61-6L49.65,136.7l11.05-11,69.65,69.65ZM204,98.27l-75.58,61.17L121,152l47.51-47.5a12,12,0,0,0-17-17L104,135l-7.45-7.44L157.73,52H204Z"/>
    </svg>
  );
}
