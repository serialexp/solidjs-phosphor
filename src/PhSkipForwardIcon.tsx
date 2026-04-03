import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhSkipForwardIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsMzJhOCw4LDAsMCwwLTgsOHY2OS4yM0w3Mi40MywzNC40NUExNS45NSwxNS45NSwwLDAsMCw0OCw0Ny44OFYyMDguMTJhMTYsMTYsMCwwLDAsMjQuNDMsMTMuNDNMMTkyLDE0Ni43N1YyMTZhOCw4LDAsMCwwLDE2LDBWNDBBOCw4LDAsMCwwLDIwMCwzMlpNNjQsMjA3LjkzVjQ4LjA1bDEyNy44NCw4MFoiLz48L3N2Zz4=)
 */
export function PhSkipForwardIcon(props: PhSkipForwardIconProps) {
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
      <path d="M200,32a8,8,0,0,0-8,8v69.23L72.43,34.45A15.95,15.95,0,0,0,48,47.88V208.12a16,16,0,0,0,24.43,13.43L192,146.77V216a8,8,0,0,0,16,0V40A8,8,0,0,0,200,32ZM64,207.93V48.05l127.84,80Z"/>
    </svg>
  );
}
