import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhSpeakerSimpleLowLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjIuNjQsMjYuNjFhNiw2LDAsMCwwLTYuMzIuNjVMODUuOTQsODJINDBBMTQsMTQsMCwwLDAsMjYsOTZ2NjRhMTQsMTQsMCwwLDAsMTQsMTRIODUuOTRsNzAuMzgsNTQuNzRBNiw2LDAsMCwwLDE2NiwyMjRWMzJBNiw2LDAsMCwwLDE2Mi42NCwyNi42MVpNMTU0LDIxMS43Myw5MS42OCwxNjMuMjZBNiw2LDAsMCwwLDg4LDE2Mkg0MGEyLDIsMCwwLDEtMi0yVjk2YTIsMiwwLDAsMSwyLTJIODhhNiw2LDAsMCwwLDMuNjgtMS4yNkwxNTQsNDQuMjdaTTIwNiwxMDR2NDhhNiw2LDAsMCwxLTEyLDBWMTA0YTYsNiwwLDAsMSwxMiwwWiIvPjwvc3ZnPg==)
 */
export function PhSpeakerSimpleLowLightIcon(props: PhSpeakerSimpleLowLightIconProps) {
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
      <path d="M162.64,26.61a6,6,0,0,0-6.32.65L85.94,82H40A14,14,0,0,0,26,96v64a14,14,0,0,0,14,14H85.94l70.38,54.74A6,6,0,0,0,166,224V32A6,6,0,0,0,162.64,26.61ZM154,211.73,91.68,163.26A6,6,0,0,0,88,162H40a2,2,0,0,1-2-2V96a2,2,0,0,1,2-2H88a6,6,0,0,0,3.68-1.26L154,44.27ZM206,104v48a6,6,0,0,1-12,0V104a6,6,0,0,1,12,0Z"/>
    </svg>
  );
}
