import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhEnvelopeSimpleOpenIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjguNDQsODkuMzRsLTk2LTY0YTgsOCwwLDAsMC04Ljg4LDBsLTk2LDY0QTgsOCwwLDAsMCwyNCw5NlYyMDBhMTYsMTYsMCwwLDAsMTYsMTZIMjE2YTE2LDE2LDAsMCwwLDE2LTE2Vjk2QTgsOCwwLDAsMCwyMjguNDQsODkuMzRaTTEyOCw0MS42MWw4MS45MSw1NC42MS02Nyw0Ny43OEgxMTMuMTFsLTY3LTQ3Ljc4Wk00MCwyMDBWMTExLjUzbDY1LjksNDdhOCw4LDAsMCwwLDQuNjUsMS40OWgzNC45YTgsOCwwLDAsMCw0LjY1LTEuNDlsNjUuOS00N1YyMDBaIi8+PC9zdmc+)
 */
export function PhEnvelopeSimpleOpenIcon(props: PhEnvelopeSimpleOpenIconProps) {
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
      <path d="M228.44,89.34l-96-64a8,8,0,0,0-8.88,0l-96,64A8,8,0,0,0,24,96V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V96A8,8,0,0,0,228.44,89.34ZM128,41.61l81.91,54.61-67,47.78H113.11l-67-47.78ZM40,200V111.53l65.9,47a8,8,0,0,0,4.65,1.49h34.9a8,8,0,0,0,4.65-1.49l65.9-47V200Z"/>
    </svg>
  );
}
