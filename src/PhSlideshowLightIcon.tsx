import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhSlideshowLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTIsNTBINjRBMTQsMTQsMCwwLDAsNTAsNjRWMTkyYTE0LDE0LDAsMCwwLDE0LDE0SDE5MmExNCwxNCwwLDAsMCwxNC0xNFY2NEExNCwxNCwwLDAsMCwxOTIsNTBabTIsMTQyYTIsMiwwLDAsMS0yLDJINjRhMiwyLDAsMCwxLTItMlY2NGEyLDIsMCwwLDEsMi0ySDE5MmEyLDIsMCwwLDEsMiwyWk0yMzgsNTZWMjAwYTYsNiwwLDAsMS0xMiwwVjU2YTYsNiwwLDAsMSwxMiwwWk0zMCw1NlYyMDBhNiw2LDAsMCwxLTEyLDBWNTZhNiw2LDAsMCwxLDEyLDBaIi8+PC9zdmc+)
 */
export function PhSlideshowLightIcon(props: PhSlideshowLightIconProps) {
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
      <path d="M192,50H64A14,14,0,0,0,50,64V192a14,14,0,0,0,14,14H192a14,14,0,0,0,14-14V64A14,14,0,0,0,192,50Zm2,142a2,2,0,0,1-2,2H64a2,2,0,0,1-2-2V64a2,2,0,0,1,2-2H192a2,2,0,0,1,2,2ZM238,56V200a6,6,0,0,1-12,0V56a6,6,0,0,1,12,0ZM30,56V200a6,6,0,0,1-12,0V56a6,6,0,0,1,12,0Z"/>
    </svg>
  );
}
