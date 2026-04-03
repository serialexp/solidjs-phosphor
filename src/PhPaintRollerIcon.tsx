import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhPaintRollerIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsODhIMjE2VjY0YTE2LDE2LDAsMCwwLTE2LTE2SDQ4QTE2LDE2LDAsMCwwLDMyLDY0Vjg4SDE2YTgsOCwwLDAsMCwwLDE2SDMydjI0YTE2LDE2LDAsMCwwLDE2LDE2SDIwMGExNiwxNiwwLDAsMCwxNi0xNlYxMDRoMTZ2NTBMMTMxLjYsMTgyLjY1QTE2LjA3LDE2LjA3LDAsMCwwLDEyMCwxOTh2MzRhOCw4LDAsMCwwLDE2LDBWMTk4bDEwMC40LTI4LjY4QTE2LjA3LDE2LjA3LDAsMCwwLDI0OCwxNTRWMTA0QTE2LDE2LDAsMCwwLDIzMiw4OFptLTMyLDQwSDQ4VjY0SDIwMHY2NFoiLz48L3N2Zz4=)
 */
export function PhPaintRollerIcon(props: PhPaintRollerIconProps) {
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
      <path d="M232,88H216V64a16,16,0,0,0-16-16H48A16,16,0,0,0,32,64V88H16a8,8,0,0,0,0,16H32v24a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V104h16v50L131.6,182.65A16.07,16.07,0,0,0,120,198v34a8,8,0,0,0,16,0V198l100.4-28.68A16.07,16.07,0,0,0,248,154V104A16,16,0,0,0,232,88Zm-32,40H48V64H200v64Z"/>
    </svg>
  );
}
