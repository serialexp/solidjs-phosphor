import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhChalkboardLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMTk0SDIzMFY1NmExNCwxNCwwLDAsMC0xNC0xNEg0MEExNCwxNCwwLDAsMCwyNiw1NlYxOTRIMTZhNiw2LDAsMCwwLDAsMTJIMjQwYTYsNiwwLDAsMCwwLTEyWk0zOCw1NmEyLDIsMCwwLDEsMi0ySDIxNmEyLDIsMCwwLDEsMiwyVjE5NEgxOThWMTY4YTYsNiwwLDAsMC02LTZIMTIwYTYsNiwwLDAsMC02LDZ2MjZINzBWODZIMTg2djUwYTYsNiwwLDAsMCwxMiwwVjgwYTYsNiwwLDAsMC02LTZINjRhNiw2LDAsMCwwLTYsNlYxOTRIMzhaTTE4NiwxOTRIMTI2VjE3NGg2MFoiLz48L3N2Zz4=)
 */
export function PhChalkboardLightIcon(props: PhChalkboardLightIconProps) {
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
      <path d="M240,194H230V56a14,14,0,0,0-14-14H40A14,14,0,0,0,26,56V194H16a6,6,0,0,0,0,12H240a6,6,0,0,0,0-12ZM38,56a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2V194H198V168a6,6,0,0,0-6-6H120a6,6,0,0,0-6,6v26H70V86H186v50a6,6,0,0,0,12,0V80a6,6,0,0,0-6-6H64a6,6,0,0,0-6,6V194H38ZM186,194H126V174h60Z"/>
    </svg>
  );
}
