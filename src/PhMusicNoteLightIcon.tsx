import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhMusicNoteLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDkuNzIsNTguMjVsLTgwLTI0QTYsNiwwLDAsMCwxMjIsNDBWMTUzLjA1QTQ2LDQ2LDAsMSwwLDEzNCwxODRWOTYuMDZsNzIuMjgsMjEuNjlBNiw2LDAsMCwwLDIxNCwxMTJWNjRBNiw2LDAsMCwwLDIwOS43Miw1OC4yNVpNODgsMjE4YTM0LDM0LDAsMSwxLDM0LTM0QTM0LDM0LDAsMCwxLDg4LDIxOFpNMjAyLDEwMy45NGwtNjgtMjAuNFY0OC4wNmw2OCwyMC40WiIvPjwvc3ZnPg==)
 */
export function PhMusicNoteLightIcon(props: PhMusicNoteLightIconProps) {
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
      <path d="M209.72,58.25l-80-24A6,6,0,0,0,122,40V153.05A46,46,0,1,0,134,184V96.06l72.28,21.69A6,6,0,0,0,214,112V64A6,6,0,0,0,209.72,58.25ZM88,218a34,34,0,1,1,34-34A34,34,0,0,1,88,218ZM202,103.94l-68-20.4V48.06l68,20.4Z"/>
    </svg>
  );
}
