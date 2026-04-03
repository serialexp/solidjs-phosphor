import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCalendarBlankLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzRIMTgyVjI0YTYsNiwwLDAsMC0xMiwwVjM0SDg2VjI0YTYsNiwwLDAsMC0xMiwwVjM0SDQ4QTE0LDE0LDAsMCwwLDM0LDQ4VjIwOGExNCwxNCwwLDAsMCwxNCwxNEgyMDhhMTQsMTQsMCwwLDAsMTQtMTRWNDhBMTQsMTQsMCwwLDAsMjA4LDM0Wk00OCw0Nkg3NFY1NmE2LDYsMCwwLDAsMTIsMFY0Nmg4NFY1NmE2LDYsMCwwLDAsMTIsMFY0NmgyNmEyLDIsMCwwLDEsMiwyVjgySDQ2VjQ4QTIsMiwwLDAsMSw0OCw0NlpNMjA4LDIxMEg0OGEyLDIsMCwwLDEtMi0yVjk0SDIxMFYyMDhBMiwyLDAsMCwxLDIwOCwyMTBaIi8+PC9zdmc+)
 */
export function PhCalendarBlankLightIcon(props: PhCalendarBlankLightIconProps) {
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
      <path d="M208,34H182V24a6,6,0,0,0-12,0V34H86V24a6,6,0,0,0-12,0V34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34ZM48,46H74V56a6,6,0,0,0,12,0V46h84V56a6,6,0,0,0,12,0V46h26a2,2,0,0,1,2,2V82H46V48A2,2,0,0,1,48,46ZM208,210H48a2,2,0,0,1-2-2V94H210V208A2,2,0,0,1,208,210Z"/>
    </svg>
  );
}
