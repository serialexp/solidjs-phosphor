import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhNumberCircleNineThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDQsODAuMjlhMzIsMzIsMCwxLDAtNi4yMyw1OC4xNkwxMTYuNTcsMTc0YTQsNCwwLDAsMCwxLjM4LDUuNDgsMy45MiwzLjkyLDAsMCwwLDIsLjU3LDQsNCwwLDAsMCwzLjQzLTEuOTVMMTU1LjcxLDEyNEEzMiwzMiwwLDAsMCwxNDQsODAuMjlaTTE0OC44LDEyMGwtLjA2LjA5YTIyLjYyLDIyLjYyLDAsMSwxLC4wNi0uMDlaTTEyOCwyOEExMDAsMTAwLDAsMSwwLDIyOCwxMjgsMTAwLjExLDEwMC4xMSwwLDAsMCwxMjgsMjhabTAsMTkyYTkyLDkyLDAsMSwxLDkyLTkyQTkyLjEsOTIuMSwwLDAsMSwxMjgsMjIwWiIvPjwvc3ZnPg==)
 */
export function PhNumberCircleNineThinIcon(props: PhNumberCircleNineThinIconProps) {
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
      <path d="M144,80.29a32,32,0,1,0-6.23,58.16L116.57,174a4,4,0,0,0,1.38,5.48,3.92,3.92,0,0,0,2,.57,4,4,0,0,0,3.43-1.95L155.71,124A32,32,0,0,0,144,80.29ZM148.8,120l-.06.09a22.62,22.62,0,1,1,.06-.09ZM128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Z"/>
    </svg>
  );
}
