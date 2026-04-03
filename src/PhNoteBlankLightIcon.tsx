import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhNoteBlankLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzRINDhBMTQsMTQsMCwwLDAsMzQsNDhWMjA4YTE0LDE0LDAsMCwwLDE0LDE0SDE1Ni42OWExMy45NCwxMy45NCwwLDAsMCw5LjktNC4xbDUxLjMxLTUxLjMxYTEzLjk0LDEzLjk0LDAsMCwwLDQuMS05LjlWNDhBMTQsMTQsMCwwLDAsMjA4LDM0Wk00NiwyMDhWNDhhMiwyLDAsMCwxLDItMkgyMDhhMiwyLDAsMCwxLDIsMlYxNTRIMTYwYTYsNiwwLDAsMC02LDZ2NTBINDhBMiwyLDAsMCwxLDQ2LDIwOFptMTIwLTYuNDlWMTY2aDM1LjUyWiIvPjwvc3ZnPg==)
 */
export function PhNoteBlankLightIcon(props: PhNoteBlankLightIconProps) {
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
      <path d="M208,34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H156.69a13.94,13.94,0,0,0,9.9-4.1l51.31-51.31a13.94,13.94,0,0,0,4.1-9.9V48A14,14,0,0,0,208,34ZM46,208V48a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2V154H160a6,6,0,0,0-6,6v50H48A2,2,0,0,1,46,208Zm120-6.49V166h35.52Z"/>
    </svg>
  );
}
