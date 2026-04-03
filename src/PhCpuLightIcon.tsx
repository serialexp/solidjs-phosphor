import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCpuLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTIsOThIMTA0YTYsNiwwLDAsMC02LDZ2NDhhNiw2LDAsMCwwLDYsNmg0OGE2LDYsMCwwLDAsNi02VjEwNEE2LDYsMCwwLDAsMTUyLDk4Wm0tNiw0OEgxMTBWMTEwaDM2Wm04NiwwSDIxNFYxMTBoMThhNiw2LDAsMCwwLDAtMTJIMjE0VjU2YTE0LDE0LDAsMCwwLTE0LTE0SDE1OFYyNGE2LDYsMCwwLDAtMTIsMFY0MkgxMTBWMjRhNiw2LDAsMCwwLTEyLDBWNDJINTZBMTQsMTQsMCwwLDAsNDIsNTZWOThIMjRhNiw2LDAsMCwwLDAsMTJINDJ2MzZIMjRhNiw2LDAsMCwwLDAsMTJINDJ2NDJhMTQsMTQsMCwwLDAsMTQsMTRIOTh2MThhNiw2LDAsMCwwLDEyLDBWMjE0aDM2djE4YTYsNiwwLDAsMCwxMiwwVjIxNGg0MmExNCwxNCwwLDAsMCwxNC0xNFYxNThoMThhNiw2LDAsMCwwLDAtMTJabS0zMCw1NGEyLDIsMCwwLDEtMiwySDU2YTIsMiwwLDAsMS0yLTJWNTZhMiwyLDAsMCwxLDItMkgyMDBhMiwyLDAsMCwxLDIsMloiLz48L3N2Zz4=)
 */
export function PhCpuLightIcon(props: PhCpuLightIconProps) {
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
      <path d="M152,98H104a6,6,0,0,0-6,6v48a6,6,0,0,0,6,6h48a6,6,0,0,0,6-6V104A6,6,0,0,0,152,98Zm-6,48H110V110h36Zm86,0H214V110h18a6,6,0,0,0,0-12H214V56a14,14,0,0,0-14-14H158V24a6,6,0,0,0-12,0V42H110V24a6,6,0,0,0-12,0V42H56A14,14,0,0,0,42,56V98H24a6,6,0,0,0,0,12H42v36H24a6,6,0,0,0,0,12H42v42a14,14,0,0,0,14,14H98v18a6,6,0,0,0,12,0V214h36v18a6,6,0,0,0,12,0V214h42a14,14,0,0,0,14-14V158h18a6,6,0,0,0,0-12Zm-30,54a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2H200a2,2,0,0,1,2,2Z"/>
    </svg>
  );
}
