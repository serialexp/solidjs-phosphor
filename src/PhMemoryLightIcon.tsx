import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhMemoryLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsNThIMjRBMTQsMTQsMCwwLDAsMTAsNzJWMjAwYTYsNiwwLDAsMCwxMiwwVjE4Mkg0MnYxOGE2LDYsMCwwLDAsMTIsMFYxODJINzR2MThhNiw2LDAsMCwwLDEyLDBWMTgyaDIwdjE4YTYsNiwwLDAsMCwxMiwwVjE4MmgyMHYxOGE2LDYsMCwwLDAsMTIsMFYxODJoMjB2MThhNiw2LDAsMCwwLDEyLDBWMTgyaDIwdjE4YTYsNiwwLDAsMCwxMiwwVjE4MmgyMHYxOGE2LDYsMCwwLDAsMTIsMFY3MkExNCwxNCwwLDAsMCwyMzIsNThaTTIyLDcyYTIsMiwwLDAsMSwyLTJIMjMyYTIsMiwwLDAsMSwyLDJ2OThIMjJabTkwLDc4YTYsNiwwLDAsMCw2LTZWOTZhNiw2LDAsMCwwLTYtNkg0OGE2LDYsMCwwLDAtNiw2djQ4YTYsNiwwLDAsMCw2LDZaTTU0LDEwMmg1MnYzNkg1NFptOTAsNDhoNjRhNiw2LDAsMCwwLDYtNlY5NmE2LDYsMCwwLDAtNi02SDE0NGE2LDYsMCwwLDAtNiw2djQ4QTYsNiwwLDAsMCwxNDQsMTUwWm02LTQ4aDUydjM2SDE1MFoiLz48L3N2Zz4=)
 */
export function PhMemoryLightIcon(props: PhMemoryLightIconProps) {
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
      <path d="M232,58H24A14,14,0,0,0,10,72V200a6,6,0,0,0,12,0V182H42v18a6,6,0,0,0,12,0V182H74v18a6,6,0,0,0,12,0V182h20v18a6,6,0,0,0,12,0V182h20v18a6,6,0,0,0,12,0V182h20v18a6,6,0,0,0,12,0V182h20v18a6,6,0,0,0,12,0V182h20v18a6,6,0,0,0,12,0V72A14,14,0,0,0,232,58ZM22,72a2,2,0,0,1,2-2H232a2,2,0,0,1,2,2v98H22Zm90,78a6,6,0,0,0,6-6V96a6,6,0,0,0-6-6H48a6,6,0,0,0-6,6v48a6,6,0,0,0,6,6ZM54,102h52v36H54Zm90,48h64a6,6,0,0,0,6-6V96a6,6,0,0,0-6-6H144a6,6,0,0,0-6,6v48A6,6,0,0,0,144,150Zm6-48h52v36H150Z"/>
    </svg>
  );
}
