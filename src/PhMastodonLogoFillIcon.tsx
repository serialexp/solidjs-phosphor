import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhMastodonLogoFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsMzJINzJBNDAsNDAsMCwwLDAsMzIsNzJWMTkyYTQwLDQwLDAsMCwwLDQwLDQwaDg4YTgsOCwwLDAsMCwwLTE2SDcyYTI0LDI0LDAsMCwxLTI0LTI0di04SDE4NGE0MCw0MCwwLDAsMCw0MC00MFY3MkE0MCw0MCwwLDAsMCwxODQsMzJabTAsMTA0YTgsOCwwLDAsMS0xNiwwVjEwNGExNiwxNiwwLDAsMC0zMiwwdjMyYTgsOCwwLDAsMS0xNiwwVjEwNGExNiwxNiwwLDAsMC0zMiwwdjMyYTgsOCwwLDAsMS0xNiwwVjEwNGEzMiwzMiwwLDAsMSw1Ni0yMS4xM0EzMiwzMiwwLDAsMSwxODQsMTA0WiIvPjwvc3ZnPg==)
 */
export function PhMastodonLogoFillIcon(props: PhMastodonLogoFillIconProps) {
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
      <path d="M184,32H72A40,40,0,0,0,32,72V192a40,40,0,0,0,40,40h88a8,8,0,0,0,0-16H72a24,24,0,0,1-24-24v-8H184a40,40,0,0,0,40-40V72A40,40,0,0,0,184,32Zm0,104a8,8,0,0,1-16,0V104a16,16,0,0,0-32,0v32a8,8,0,0,1-16,0V104a16,16,0,0,0-32,0v32a8,8,0,0,1-16,0V104a32,32,0,0,1,56-21.13A32,32,0,0,1,184,104Z"/>
    </svg>
  );
}
