import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhChatFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsNjRWMTkyYTE2LDE2LDAsMCwxLTE2LDE2SDgzbC0zMi42LDI4LjE2LS4wOS4wN0ExNS44OSwxNS44OSwwLDAsMSw0MCwyNDBhMTYuMDUsMTYuMDUsMCwwLDEtNi43OS0xLjUyQTE1Ljg0LDE1Ljg0LDAsMCwxLDI0LDIyNFY2NEExNiwxNiwwLDAsMSw0MCw0OEgyMTZBMTYsMTYsMCwwLDEsMjMyLDY0WiIvPjwvc3ZnPg==)
 */
export function PhChatFillIcon(props: PhChatFillIconProps) {
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
      <path d="M232,64V192a16,16,0,0,1-16,16H83l-32.6,28.16-.09.07A15.89,15.89,0,0,1,40,240a16.05,16.05,0,0,1-6.79-1.52A15.84,15.84,0,0,1,24,224V64A16,16,0,0,1,40,48H216A16,16,0,0,1,232,64Z"/>
    </svg>
  );
}
