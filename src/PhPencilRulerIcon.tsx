import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhPencilRulerIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzJIMTYwYTE2LDE2LDAsMCwwLTE2LDE2VjIwOGExNiwxNiwwLDAsMCwxNiwxNmg0OGExNiwxNiwwLDAsMCwxNi0xNlY0OEExNiwxNiwwLDAsMCwyMDgsMzJabTAsMTc2SDE2MFYxNzZoMjRhOCw4LDAsMCwwLDAtMTZIMTYwVjEzNmgyNGE4LDgsMCwwLDAsMC0xNkgxNjBWOTZoMjRhOCw4LDAsMCwwLDAtMTZIMTYwVjQ4aDQ4VjIwOFpNNzcuNjYsMjYuMzRhOCw4LDAsMCwwLTExLjMyLDBsLTMyLDMyQTgsOCwwLDAsMCwzMiw2NFYyMDhhMTYsMTYsMCwwLDAsMTYsMTZIOTZhMTYsMTYsMCwwLDAsMTYtMTZWNjRhOCw4LDAsMCwwLTIuMzQtNS42NlpNNDgsMTc2VjgwSDY0djk2Wk04MCw4MEg5NnY5Nkg4MFpNNzIsNDMuMzEsOTIuNjksNjRINTEuMzFaTTQ4LDIwOFYxOTJIOTZ2MTZaIi8+PC9zdmc+)
 */
export function PhPencilRulerIcon(props: PhPencilRulerIconProps) {
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
      <path d="M208,32H160a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,176H160V176h24a8,8,0,0,0,0-16H160V136h24a8,8,0,0,0,0-16H160V96h24a8,8,0,0,0,0-16H160V48h48V208ZM77.66,26.34a8,8,0,0,0-11.32,0l-32,32A8,8,0,0,0,32,64V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V64a8,8,0,0,0-2.34-5.66ZM48,176V80H64v96ZM80,80H96v96H80ZM72,43.31,92.69,64H51.31ZM48,208V192H96v16Z"/>
    </svg>
  );
}
