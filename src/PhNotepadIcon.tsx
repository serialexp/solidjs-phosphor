import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhNotepadIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjgsMTI4YTgsOCwwLDAsMS04LDhIOTZhOCw4LDAsMCwxLDAtMTZoNjRBOCw4LDAsMCwxLDE2OCwxMjhabS04LDI0SDk2YTgsOCwwLDAsMCwwLDE2aDY0YTgsOCwwLDAsMCwwLTE2Wk0yMTYsNDBWMjAwYTMyLDMyLDAsMCwxLTMyLDMySDcyYTMyLDMyLDAsMCwxLTMyLTMyVjQwYTgsOCwwLDAsMSw4LThINzJWMjRhOCw4LDAsMCwxLDE2LDB2OGgzMlYyNGE4LDgsMCwwLDEsMTYsMHY4aDMyVjI0YTgsOCwwLDAsMSwxNiwwdjhoMjRBOCw4LDAsMCwxLDIxNiw0MFptLTE2LDhIMTg0djhhOCw4LDAsMCwxLTE2LDBWNDhIMTM2djhhOCw4LDAsMCwxLTE2LDBWNDhIODh2OGE4LDgsMCwwLDEtMTYsMFY0OEg1NlYyMDBhMTYsMTYsMCwwLDAsMTYsMTZIMTg0YTE2LDE2LDAsMCwwLDE2LTE2WiIvPjwvc3ZnPg==)
 */
export function PhNotepadIcon(props: PhNotepadIconProps) {
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
      <path d="M168,128a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,128Zm-8,24H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16ZM216,40V200a32,32,0,0,1-32,32H72a32,32,0,0,1-32-32V40a8,8,0,0,1,8-8H72V24a8,8,0,0,1,16,0v8h32V24a8,8,0,0,1,16,0v8h32V24a8,8,0,0,1,16,0v8h24A8,8,0,0,1,216,40Zm-16,8H184v8a8,8,0,0,1-16,0V48H136v8a8,8,0,0,1-16,0V48H88v8a8,8,0,0,1-16,0V48H56V200a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16Z"/>
    </svg>
  );
}
