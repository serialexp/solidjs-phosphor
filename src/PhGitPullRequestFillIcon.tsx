import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhGitPullRequestFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMDQsNjRBMzIsMzIsMCwxLDAsNjQsOTV2NjZhMzIsMzIsMCwxLDAsMTYsMFY5NUEzMi4wNiwzMi4wNiwwLDAsMCwxMDQsNjRaTTg4LDE5MmExNiwxNiwwLDEsMS0xNi0xNkExNiwxNiwwLDAsMSw4OCwxOTJabTE0NCwwYTMyLDMyLDAsMSwxLTQwLTMxVjExMC42M2E4LDgsMCwwLDAtMi4zNC01LjY2TDE1Miw2Ny4zMVY5NmE4LDgsMCwwLDEtMTYsMFY0OGE4LDgsMCwwLDEsOC04aDQ4YTgsOCwwLDAsMSwwLDE2SDE2My4zMUwyMDEsOTMuNjZhMjMuODUsMjMuODUsMCwwLDEsNywxN1YxNjFBMzIuMDYsMzIuMDYsMCwwLDEsMjMyLDE5MloiLz48L3N2Zz4=)
 */
export function PhGitPullRequestFillIcon(props: PhGitPullRequestFillIconProps) {
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
      <path d="M104,64A32,32,0,1,0,64,95v66a32,32,0,1,0,16,0V95A32.06,32.06,0,0,0,104,64ZM88,192a16,16,0,1,1-16-16A16,16,0,0,1,88,192Zm144,0a32,32,0,1,1-40-31V110.63a8,8,0,0,0-2.34-5.66L152,67.31V96a8,8,0,0,1-16,0V48a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H163.31L201,93.66a23.85,23.85,0,0,1,7,17V161A32.06,32.06,0,0,1,232,192Z"/>
    </svg>
  );
}
