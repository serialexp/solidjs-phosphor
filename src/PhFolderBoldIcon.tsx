import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhFolderBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNjhIMTMzLjM5bC0yNi0yOS4yOWEyMCwyMCwwLDAsMC0xNS02LjcxSDQwQTIwLDIwLDAsMCwwLDIwLDUyVjIwMC42MkExOS40MSwxOS40MSwwLDAsMCwzOS4zOCwyMjBIMjE2Ljg5QTE5LjEzLDE5LjEzLDAsMCwwLDIzNiwyMDAuODlWODhBMjAsMjAsMCwwLDAsMjE2LDY4Wk00NCw1Nkg5MC42MWwxMC42NywxMkg0NFpNMjEyLDE5Nkg0NFY5MkgyMTJaIi8+PC9zdmc+)
 */
export function PhFolderBoldIcon(props: PhFolderBoldIconProps) {
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
      <path d="M216,68H133.39l-26-29.29a20,20,0,0,0-15-6.71H40A20,20,0,0,0,20,52V200.62A19.41,19.41,0,0,0,39.38,220H216.89A19.13,19.13,0,0,0,236,200.89V88A20,20,0,0,0,216,68ZM44,56H90.61l10.67,12H44ZM212,196H44V92H212Z"/>
    </svg>
  );
}
