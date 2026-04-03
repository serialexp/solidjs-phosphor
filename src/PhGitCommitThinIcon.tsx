import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhGitCommitThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDgsMTI0SDE3OS44M2E1Miw1MiwwLDAsMC0xMDMuNjYsMEg4YTQsNCwwLDAsMCwwLDhINzYuMTdhNTIsNTIsMCwwLDAsMTAzLjY2LDBIMjQ4YTQsNCwwLDAsMCwwLThaTTEyOCwxNzJhNDQsNDQsMCwxLDEsNDQtNDRBNDQuMDUsNDQuMDUsMCwwLDEsMTI4LDE3MloiLz48L3N2Zz4=)
 */
export function PhGitCommitThinIcon(props: PhGitCommitThinIconProps) {
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
      <path d="M248,124H179.83a52,52,0,0,0-103.66,0H8a4,4,0,0,0,0,8H76.17a52,52,0,0,0,103.66,0H248a4,4,0,0,0,0-8ZM128,172a44,44,0,1,1,44-44A44.05,44.05,0,0,1,128,172Z"/>
    </svg>
  );
}
