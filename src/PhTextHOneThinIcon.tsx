import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTextHOneThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjgsMTEydjk2YTQsNCwwLDAsMS04LDBWMTE5LjQ3bC0xNy43OCwxMS44NmE0LDQsMCwxLDEtNC40NC02LjY2bDI0LTE2QTQsNCwwLDAsMSwyMjgsMTEyWk0xNDQsNTJhNCw0LDAsMCwwLTQsNHY1Nkg0NFY1NmE0LDQsMCwwLDAtOCwwVjE3NmE0LDQsMCwwLDAsOCwwVjEyMGg5NnY1NmE0LDQsMCwwLDAsOCwwVjU2QTQsNCwwLDAsMCwxNDQsNTJaIi8+PC9zdmc+)
 */
export function PhTextHOneThinIcon(props: PhTextHOneThinIconProps) {
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
      <path d="M228,112v96a4,4,0,0,1-8,0V119.47l-17.78,11.86a4,4,0,1,1-4.44-6.66l24-16A4,4,0,0,1,228,112ZM144,52a4,4,0,0,0-4,4v56H44V56a4,4,0,0,0-8,0V176a4,4,0,0,0,8,0V120h96v56a4,4,0,0,0,8,0V56A4,4,0,0,0,144,52Z"/>
    </svg>
  );
}
