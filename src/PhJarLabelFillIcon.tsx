import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhJarLabelFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsNDguODFWMzJhMTYsMTYsMCwwLDAtMTYtMTZIODhBMTYsMTYsMCwwLDAsNzIsMzJWNDguODFBNDAuMDUsNDAuMDUsMCwwLDAsNDAsODhWMjAwYTQwLDQwLDAsMCwwLDQwLDQwaDk2YTQwLDQwLDAsMCwwLDQwLTQwVjg4QTQwLjA1LDQwLjA1LDAsMCwwLDE4NCw0OC44MVpNMTY4LDQ4SDE1MlYzMmgxNlptLTQ4LDBWMzJoMTZWNDhaTTEwNCwzMlY0OEg4OFYzMlpNODAsNjRoOTZhMjQsMjQsMCwwLDEsMjQsMjR2OEg1NlY4OEEyNCwyNCwwLDAsMSw4MCw2NFptOTYsMTYwSDgwYTI0LDI0LDAsMCwxLTI0LTI0di04SDIwMHY4QTI0LDI0LDAsMCwxLDE3NiwyMjRaIi8+PC9zdmc+)
 */
export function PhJarLabelFillIcon(props: PhJarLabelFillIconProps) {
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
      <path d="M184,48.81V32a16,16,0,0,0-16-16H88A16,16,0,0,0,72,32V48.81A40.05,40.05,0,0,0,40,88V200a40,40,0,0,0,40,40h96a40,40,0,0,0,40-40V88A40.05,40.05,0,0,0,184,48.81ZM168,48H152V32h16Zm-48,0V32h16V48ZM104,32V48H88V32ZM80,64h96a24,24,0,0,1,24,24v8H56V88A24,24,0,0,1,80,64Zm96,160H80a24,24,0,0,1-24-24v-8H200v8A24,24,0,0,1,176,224Z"/>
    </svg>
  );
}
