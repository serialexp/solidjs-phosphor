import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhPersonFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMDAsMzZhMjgsMjgsMCwxLDEsMjgsMjhBMjgsMjgsMCwwLDEsMTAwLDM2Wk0yMTUuNDIsMTQwLjc4bC00NS4yNS01MS4zYTI4LDI4LDAsMCwwLTIxLTkuNDhIMTA2LjgzYTI4LDI4LDAsMCwwLTIxLDkuNDhsLTQ1LjI1LDUxLjNhMTYsMTYsMCwwLDAsMjIuNTYsMjIuNjlMODksMTQyLjdsLTE5LjcsNzQuODhhMTYsMTYsMCwwLDAsMjkuMDgsMTMuMzVMMTI4LDE4MGwyOS41OCw1MWExNiwxNiwwLDAsMCwyOS4wOC0xMy4zNUwxNjcsMTQyLjdsMjUuOSwyMC43N2ExNiwxNiwwLDAsMCwyMi41Ni0yMi42OVoiLz48L3N2Zz4=)
 */
export function PhPersonFillIcon(props: PhPersonFillIconProps) {
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
      <path d="M100,36a28,28,0,1,1,28,28A28,28,0,0,1,100,36ZM215.42,140.78l-45.25-51.3a28,28,0,0,0-21-9.48H106.83a28,28,0,0,0-21,9.48l-45.25,51.3a16,16,0,0,0,22.56,22.69L89,142.7l-19.7,74.88a16,16,0,0,0,29.08,13.35L128,180l29.58,51a16,16,0,0,0,29.08-13.35L167,142.7l25.9,20.77a16,16,0,0,0,22.56-22.69Z"/>
    </svg>
  );
}
