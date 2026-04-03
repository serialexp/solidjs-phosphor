import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhDotsThreeOutlineThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMTAwYTI4LDI4LDAsMSwwLDI4LDI4QTI4LDI4LDAsMCwwLDEyOCwxMDBabTAsNDhhMjAsMjAsMCwxLDEsMjAtMjBBMjAsMjAsMCwwLDEsMTI4LDE0OFpNNDgsMTAwYTI4LDI4LDAsMSwwLDI4LDI4QTI4LDI4LDAsMCwwLDQ4LDEwMFptMCw0OGEyMCwyMCwwLDEsMSwyMC0yMEEyMCwyMCwwLDAsMSw0OCwxNDhabTE2MC00OGEyOCwyOCwwLDEsMCwyOCwyOEEyOCwyOCwwLDAsMCwyMDgsMTAwWm0wLDQ4YTIwLDIwLDAsMSwxLDIwLTIwQTIwLDIwLDAsMCwxLDIwOCwxNDhaIi8+PC9zdmc+)
 */
export function PhDotsThreeOutlineThinIcon(props: PhDotsThreeOutlineThinIconProps) {
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
      <path d="M128,100a28,28,0,1,0,28,28A28,28,0,0,0,128,100Zm0,48a20,20,0,1,1,20-20A20,20,0,0,1,128,148ZM48,100a28,28,0,1,0,28,28A28,28,0,0,0,48,100Zm0,48a20,20,0,1,1,20-20A20,20,0,0,1,48,148Zm160-48a28,28,0,1,0,28,28A28,28,0,0,0,208,100Zm0,48a20,20,0,1,1,20-20A20,20,0,0,1,208,148Z"/>
    </svg>
  );
}
