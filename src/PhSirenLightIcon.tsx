import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhSirenLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjIsMTZWOGE2LDYsMCwwLDEsMTIsMHY4YTYsNiwwLDAsMS0xMiwwWm03OCwzMGE2LDYsMCwwLDAsNC4yNC0xLjc2bDgtOGE2LDYsMCwxLDAtOC40OC04LjQ4bC04LDhBNiw2LDAsMCwwLDIwMCw0NlpNNTEuNzYsNDQuMjRhNiw2LDAsMCwwLDguNDgtOC40OGwtOC04YTYsNiwwLDAsMC04LjQ4LDguNDhaTTEzNyw3NC4wOGE2LDYsMCwxLDAtMiwxMS44NGMyMCwzLjM0LDM1LDIxLjQ0LDM1LDQyLjA4YTYsNiwwLDAsMCwxMiwwQzE4MiwxMDEuNTcsMTYyLjY1LDc4LjM5LDEzNyw3NC4wOFpNMjMwLDE3NnYyNGExNCwxNCwwLDAsMS0xNCwxNEg0MGExNCwxNCwwLDAsMS0xNC0xNFYxNzZhMTQsMTQsMCwwLDEsMTQtMTRoMlYxMjhhODYsODYsMCwwLDEsODYtODZoLjY1YzQ3LjA2LjM1LDg1LjM1LDM5LjM4LDg1LjM1LDg3djMzaDJBMTQsMTQsMCwwLDEsMjMwLDE3NlpNNTQsMTYySDIwMlYxMjljMC00MS0zMi45NC03NC43LTczLjQ0LTc1SDEyOGE3NCw3NCwwLDAsMC03NCw3NFptMTY0LDE0YTIsMiwwLDAsMC0yLTJINDBhMiwyLDAsMCwwLTIsMnYyNGEyLDIsMCwwLDAsMiwySDIxNmEyLDIsMCwwLDAsMi0yWiIvPjwvc3ZnPg==)
 */
export function PhSirenLightIcon(props: PhSirenLightIconProps) {
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
      <path d="M122,16V8a6,6,0,0,1,12,0v8a6,6,0,0,1-12,0Zm78,30a6,6,0,0,0,4.24-1.76l8-8a6,6,0,1,0-8.48-8.48l-8,8A6,6,0,0,0,200,46ZM51.76,44.24a6,6,0,0,0,8.48-8.48l-8-8a6,6,0,0,0-8.48,8.48ZM137,74.08a6,6,0,1,0-2,11.84c20,3.34,35,21.44,35,42.08a6,6,0,0,0,12,0C182,101.57,162.65,78.39,137,74.08ZM230,176v24a14,14,0,0,1-14,14H40a14,14,0,0,1-14-14V176a14,14,0,0,1,14-14h2V128a86,86,0,0,1,86-86h.65c47.06.35,85.35,39.38,85.35,87v33h2A14,14,0,0,1,230,176ZM54,162H202V129c0-41-32.94-74.7-73.44-75H128a74,74,0,0,0-74,74Zm164,14a2,2,0,0,0-2-2H40a2,2,0,0,0-2,2v24a2,2,0,0,0,2,2H216a2,2,0,0,0,2-2Z"/>
    </svg>
  );
}
