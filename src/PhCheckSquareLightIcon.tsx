import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCheckSquareLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzIuMjQsOTkuNzZhNiw2LDAsMCwxLDAsOC40OGwtNTYsNTZhNiw2LDAsMCwxLTguNDgsMGwtMjQtMjRhNiw2LDAsMCwxLDguNDgtOC40OEwxMTIsMTUxLjUxbDUxLjc2LTUxLjc1QTYsNiwwLDAsMSwxNzIuMjQsOTkuNzZaTTIyMiw0OFYyMDhhMTQsMTQsMCwwLDEtMTQsMTRINDhhMTQsMTQsMCwwLDEtMTQtMTRWNDhBMTQsMTQsMCwwLDEsNDgsMzRIMjA4QTE0LDE0LDAsMCwxLDIyMiw0OFptLTEyLDBhMiwyLDAsMCwwLTItMkg0OGEyLDIsMCwwLDAtMiwyVjIwOGEyLDIsMCwwLDAsMiwySDIwOGEyLDIsMCwwLDAsMi0yWiIvPjwvc3ZnPg==)
 */
export function PhCheckSquareLightIcon(props: PhCheckSquareLightIconProps) {
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
      <path d="M172.24,99.76a6,6,0,0,1,0,8.48l-56,56a6,6,0,0,1-8.48,0l-24-24a6,6,0,0,1,8.48-8.48L112,151.51l51.76-51.75A6,6,0,0,1,172.24,99.76ZM222,48V208a14,14,0,0,1-14,14H48a14,14,0,0,1-14-14V48A14,14,0,0,1,48,34H208A14,14,0,0,1,222,48Zm-12,0a2,2,0,0,0-2-2H48a2,2,0,0,0-2,2V208a2,2,0,0,0,2,2H208a2,2,0,0,0,2-2Z"/>
    </svg>
  );
}
