import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhHighlighterCircleThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTguNzEsNTcuMjlBMTAwLDEwMCwwLDEsMCw1Ny4yOSwxOTguNzEsMTAwLDEwMCwwLDEsMCwxOTguNzEsNTcuMjlaTTkyLDIxMi43VjE1MmE0LDQsMCwwLDEsNC00aDY0YTQsNCwwLDAsMSw0LDR2NjAuN2E5Mi40Miw5Mi40MiwwLDAsMS03MiwwWk0xNDgsMTQwSDEwOFY5OC40N2w0MC0yMFptNDUuMDUsNTMuMDVBOTIsOTIsMCwwLDEsMTcyLDIwOC44M1YxNTJhMTIsMTIsMCwwLDAtMTItMTJoLTRWNzJhNCw0LDAsMCwwLTUuNzktMy41OGwtNDgsMjRBNCw0LDAsMCwwLDEwMCw5NnY0NEg5NmExMiwxMiwwLDAsMC0xMiwxMnY1Ni44M2E5Miw5MiwwLDEsMSwxMDkuMDUtMTUuNzhaIi8+PC9zdmc+)
 */
export function PhHighlighterCircleThinIcon(props: PhHighlighterCircleThinIconProps) {
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
      <path d="M198.71,57.29A100,100,0,1,0,57.29,198.71,100,100,0,1,0,198.71,57.29ZM92,212.7V152a4,4,0,0,1,4-4h64a4,4,0,0,1,4,4v60.7a92.42,92.42,0,0,1-72,0ZM148,140H108V98.47l40-20Zm45.05,53.05A92,92,0,0,1,172,208.83V152a12,12,0,0,0-12-12h-4V72a4,4,0,0,0-5.79-3.58l-48,24A4,4,0,0,0,100,96v44H96a12,12,0,0,0-12,12v56.83a92,92,0,1,1,109.05-15.78Z"/>
    </svg>
  );
}
