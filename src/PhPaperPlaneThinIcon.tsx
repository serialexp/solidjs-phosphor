import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhPaperPlaneThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzQuNDMsMjAyLjA4LDEzOC4zNSwzNC4xNGExMiwxMiwwLDAsMC0yMC45MiwwbC05NS44OCwxNjhBMTIsMTIsMCwwLDAsMzYsMjE5LjNsOTItMzEuMDgsOTEuOTQsMzEuMDZhMTIsMTIsMCwwLDAsMTQuNDktMTcuMlpNMjI3LDIxMC41NmEzLjk0LDMuOTQsMCwwLDEtNC40NywxLjE2TDEzMiwxODEuMTNWMTIwYTQsNCwwLDAsMC04LDB2NjEuMTNMMzMuMzcsMjExLjc0YTQsNCwwLDAsMS00Ljg1LTUuNjlsOTUuODctMTY4YTQsNCwwLDAsMSw3LDBMMjI3LjQ3LDIwNkEzLjkxLDMuOTEsMCwwLDEsMjI3LDIxMC41NloiLz48L3N2Zz4=)
 */
export function PhPaperPlaneThinIcon(props: PhPaperPlaneThinIconProps) {
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
      <path d="M234.43,202.08,138.35,34.14a12,12,0,0,0-20.92,0l-95.88,168A12,12,0,0,0,36,219.3l92-31.08,91.94,31.06a12,12,0,0,0,14.49-17.2ZM227,210.56a3.94,3.94,0,0,1-4.47,1.16L132,181.13V120a4,4,0,0,0-8,0v61.13L33.37,211.74a4,4,0,0,1-4.85-5.69l95.87-168a4,4,0,0,1,7,0L227.47,206A3.91,3.91,0,0,1,227,210.56Z"/>
    </svg>
  );
}
