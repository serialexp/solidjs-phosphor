import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhGitCommitDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzYsMTI4YTQ4LDQ4LDAsMSwxLTQ4LTQ4QTQ4LDQ4LDAsMCwxLDE3NiwxMjhaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjQ4LDEyMEgxODMuNDJhNTYsNTYsMCwwLDAtMTEwLjg0LDBIOGE4LDgsMCwwLDAsMCwxNkg3Mi41OGE1Niw1NiwwLDAsMCwxMTAuODQsMEgyNDhhOCw4LDAsMCwwLDAtMTZaTTEyOCwxNjhhNDAsNDAsMCwxLDEsNDAtNDBBNDAsNDAsMCwwLDEsMTI4LDE2OFoiLz48L3N2Zz4=)
 */
export function PhGitCommitDuotoneIcon(props: PhGitCommitDuotoneIconProps) {
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
      <path d="M176,128a48,48,0,1,1-48-48A48,48,0,0,1,176,128Z" opacity="0.2"/><path d="M248,120H183.42a56,56,0,0,0-110.84,0H8a8,8,0,0,0,0,16H72.58a56,56,0,0,0,110.84,0H248a8,8,0,0,0,0-16ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z"/>
    </svg>
  );
}
