import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhSubtitlesLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNTBIMzJBMTQsMTQsMCwwLDAsMTgsNjRWMTkyYTE0LDE0LDAsMCwwLDE0LDE0SDIyNGExNCwxNCwwLDAsMCwxNC0xNFY2NEExNCwxNCwwLDAsMCwyMjQsNTBabTIsMTQyYTIsMiwwLDAsMS0yLDJIMzJhMiwyLDAsMCwxLTItMlY2NGEyLDIsMCwwLDEsMi0ySDIyNGEyLDIsMCwwLDEsMiwyWk01MCwxMzZhNiw2LDAsMCwxLDYtNkg3MmE2LDYsMCwwLDEsMCwxMkg1NkE2LDYsMCwwLDEsNTAsMTM2Wm0xNTYsMGE2LDYsMCwwLDEtNiw2SDEwNGE2LDYsMCwwLDEsMC0xMmg5NkE2LDYsMCwwLDEsMjA2LDEzNlptLTQ4LDMyYTYsNiwwLDAsMS02LDZINTZhNiw2LDAsMCwxLDAtMTJoOTZBNiw2LDAsMCwxLDE1OCwxNjhabTQ4LDBhNiw2LDAsMCwxLTYsNkgxODRhNiw2LDAsMCwxLDAtMTJoMTZBNiw2LDAsMCwxLDIwNiwxNjhaIi8+PC9zdmc+)
 */
export function PhSubtitlesLightIcon(props: PhSubtitlesLightIconProps) {
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
      <path d="M224,50H32A14,14,0,0,0,18,64V192a14,14,0,0,0,14,14H224a14,14,0,0,0,14-14V64A14,14,0,0,0,224,50Zm2,142a2,2,0,0,1-2,2H32a2,2,0,0,1-2-2V64a2,2,0,0,1,2-2H224a2,2,0,0,1,2,2ZM50,136a6,6,0,0,1,6-6H72a6,6,0,0,1,0,12H56A6,6,0,0,1,50,136Zm156,0a6,6,0,0,1-6,6H104a6,6,0,0,1,0-12h96A6,6,0,0,1,206,136Zm-48,32a6,6,0,0,1-6,6H56a6,6,0,0,1,0-12h96A6,6,0,0,1,158,168Zm48,0a6,6,0,0,1-6,6H184a6,6,0,0,1,0-12h16A6,6,0,0,1,206,168Z"/>
    </svg>
  );
}
