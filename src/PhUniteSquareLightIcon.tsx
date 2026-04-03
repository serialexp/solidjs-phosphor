import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhUniteSquareLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsOTBIMTY2VjQwYTYsNiwwLDAsMC02LTZINDBhNiw2LDAsMCwwLTYsNlYxNjBhNiw2LDAsMCwwLDYsNkg5MHY1MGE2LDYsMCwwLDAsNiw2SDIxNmE2LDYsMCwwLDAsNi02Vjk2QTYsNiwwLDAsMCwyMTYsOTBaTTE1NC40OCwyMTAsNDYsMTAxLjUydi00N0wyMDEuNTIsMjEwWk01NC40OCw0Nmg0N0wyMTAsMTU0LjQ4djQ3Wk0yMTAsMTM3LjUyLDE3NC40OCwxMDJIMjEwWm0tNTYtNTZMMTE4LjQ4LDQ2SDE1NFptLTEwOCwzN0w4MS41MiwxNTRINDZabTU2LDU2TDEzNy41MiwyMTBIMTAyWiIvPjwvc3ZnPg==)
 */
export function PhUniteSquareLightIcon(props: PhUniteSquareLightIconProps) {
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
      <path d="M216,90H166V40a6,6,0,0,0-6-6H40a6,6,0,0,0-6,6V160a6,6,0,0,0,6,6H90v50a6,6,0,0,0,6,6H216a6,6,0,0,0,6-6V96A6,6,0,0,0,216,90ZM154.48,210,46,101.52v-47L201.52,210ZM54.48,46h47L210,154.48v47ZM210,137.52,174.48,102H210Zm-56-56L118.48,46H154Zm-108,37L81.52,154H46Zm56,56L137.52,210H102Z"/>
    </svg>
  );
}
