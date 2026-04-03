import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhShapesIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik03MS41OSw2MS40N2E4LDgsMCwwLDAtMTUuMTgsMGwtNDAsMTIwQTgsOCwwLDAsMCwyNCwxOTJoODBhOCw4LDAsMCwwLDcuNTktMTAuNTNaTTM1LjEsMTc2LDY0LDg5LjMsOTIuOSwxNzZaTTIwOCw3NmE1Miw1MiwwLDEsMC01Miw1MkE1Mi4wNiw1Mi4wNiwwLDAsMCwyMDgsNzZabS04OCwwYTM2LDM2LDAsMSwxLDM2LDM2QTM2LDM2LDAsMCwxLDEyMCw3NlptMTA0LDY4SDEzNmE4LDgsMCwwLDAtOCw4djU2YTgsOCwwLDAsMCw4LDhoODhhOCw4LDAsMCwwLDgtOFYxNTJBOCw4LDAsMCwwLDIyNCwxNDRabS04LDU2SDE0NFYxNjBoNzJaIi8+PC9zdmc+)
 */
export function PhShapesIcon(props: PhShapesIconProps) {
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
      <path d="M71.59,61.47a8,8,0,0,0-15.18,0l-40,120A8,8,0,0,0,24,192h80a8,8,0,0,0,7.59-10.53ZM35.1,176,64,89.3,92.9,176ZM208,76a52,52,0,1,0-52,52A52.06,52.06,0,0,0,208,76Zm-88,0a36,36,0,1,1,36,36A36,36,0,0,1,120,76Zm104,68H136a8,8,0,0,0-8,8v56a8,8,0,0,0,8,8h88a8,8,0,0,0,8-8V152A8,8,0,0,0,224,144Zm-8,56H144V160h72Z"/>
    </svg>
  );
}
