import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhWaveTriangleDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik03Niw1Nmw1Miw3MkgyNFptMTU2LDcySDEyOGw1Miw3MloiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0yMzguNDgsMTMyLjY4bC01Miw3MmE4LDgsMCwwLDEtMTMsMEw3Niw2OS42NmwtNDUuNTEsNjNhOCw4LDAsMSwxLTEzLTkuMzZsNTItNzJhOCw4LDAsMCwxLDEzLDBsOTcuNTEsMTM1LDQ1LjUxLTYzYTgsOCwwLDEsMSwxMyw5LjM2WiIvPjwvc3ZnPg==)
 */
export function PhWaveTriangleDuotoneIcon(props: PhWaveTriangleDuotoneIconProps) {
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
      <path d="M76,56l52,72H24Zm156,72H128l52,72Z" opacity="0.2"/><path d="M238.48,132.68l-52,72a8,8,0,0,1-13,0L76,69.66l-45.51,63a8,8,0,1,1-13-9.36l52-72a8,8,0,0,1,13,0l97.51,135,45.51-63a8,8,0,1,1,13,9.36Z"/>
    </svg>
  );
}
