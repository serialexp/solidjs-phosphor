import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhGitlabLogoSimpleFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDguMTQsMTc4LjA2bC03My4yNyw1MS43NmExMS45MSwxMS45MSwwLDAsMS0xMy43NCwwTDQ3Ljg2LDE3OC4wNmE1Ny4xOSw1Ny4xOSwwLDAsMS0yMi02MUw0NS43NSw0MWExMS45NCwxMS45NCwwLDAsMSwyMi43OS0xLjExTDg2LjIyLDg4aDgzLjU2bDE3LjY4LTQ4LjEzQTExLjk0LDExLjk0LDAsMCwxLDIxMC4yNSw0MWwxOS45LDc2LjEyQTU3LjE5LDU3LjE5LDAsMCwxLDIwOC4xNCwxNzguMDZaIi8+PC9zdmc+)
 */
export function PhGitlabLogoSimpleFillIcon(props: PhGitlabLogoSimpleFillIconProps) {
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
      <path d="M208.14,178.06l-73.27,51.76a11.91,11.91,0,0,1-13.74,0L47.86,178.06a57.19,57.19,0,0,1-22-61L45.75,41a11.94,11.94,0,0,1,22.79-1.11L86.22,88h83.56l17.68-48.13A11.94,11.94,0,0,1,210.25,41l19.9,76.12A57.19,57.19,0,0,1,208.14,178.06Z"/>
    </svg>
  );
}
