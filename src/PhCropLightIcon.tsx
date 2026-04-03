import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCropLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzgsMTkyYTYsNiwwLDAsMS02LDZIMTk4djM0YTYsNiwwLDAsMS0xMiwwVjE5OEg2NGE2LDYsMCwwLDEtNi02VjcwSDI0YTYsNiwwLDAsMSwwLTEySDU4VjI0YTYsNiwwLDAsMSwxMiwwVjE4NkgyMzJBNiw2LDAsMCwxLDIzOCwxOTJaTTk2LDcwaDkwdjkwYTYsNiwwLDAsMCwxMiwwVjY0YTYsNiwwLDAsMC02LTZIOTZhNiw2LDAsMCwwLDAsMTJaIi8+PC9zdmc+)
 */
export function PhCropLightIcon(props: PhCropLightIconProps) {
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
      <path d="M238,192a6,6,0,0,1-6,6H198v34a6,6,0,0,1-12,0V198H64a6,6,0,0,1-6-6V70H24a6,6,0,0,1,0-12H58V24a6,6,0,0,1,12,0V186H232A6,6,0,0,1,238,192ZM96,70h90v90a6,6,0,0,0,12,0V64a6,6,0,0,0-6-6H96a6,6,0,0,0,0,12Z"/>
    </svg>
  );
}
