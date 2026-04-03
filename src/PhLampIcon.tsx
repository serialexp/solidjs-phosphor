import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhLampIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDcuMzUsMTQ4Ljg1bC00OC0xMTJBOCw4LDAsMCwwLDE5MiwzMkg2NGE4LDgsMCwwLDAtNy4zNSw0Ljg1bC00OCwxMTJBOCw4LDAsMCwwLDE2LDE2MEgxMjB2NDhIOTZhOCw4LDAsMCwwLDAsMTZoNjRhOCw4LDAsMCwwLDAtMTZIMTM2VjE2MGg1NnYzMmE4LDgsMCwwLDAsMTYsMFYxNjBoMzJhOCw4LDAsMCwwLDcuMzUtMTEuMTVaTTI4LjEzLDE0NCw2OS4yOCw0OEgxODYuNzJsNDEuMTUsOTZaIi8+PC9zdmc+)
 */
export function PhLampIcon(props: PhLampIconProps) {
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
      <path d="M247.35,148.85l-48-112A8,8,0,0,0,192,32H64a8,8,0,0,0-7.35,4.85l-48,112A8,8,0,0,0,16,160H120v48H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V160h56v32a8,8,0,0,0,16,0V160h32a8,8,0,0,0,7.35-11.15ZM28.13,144,69.28,48H186.72l41.15,96Z"/>
    </svg>
  );
}
