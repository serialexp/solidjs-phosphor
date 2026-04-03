import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhSubtitlesSlashIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik00OCwxMzZhOCw4LDAsMCwxLDgtOEg3MmE4LDgsMCwwLDEsMCwxNkg1NkE4LDgsMCwwLDEsNDgsMTM2Wm0xNjUuOTIsNzQuNjJhOCw4LDAsMSwxLTExLjg0LDEwLjc2TDE4OS45MiwyMDhIMzJhMTYsMTYsMCwwLDEtMTYtMTZWNjRBMTYsMTYsMCwwLDEsMzIsNDhINDQuNDZsLTIuMzgtMi42MkE4LDgsMCwxLDEsNTMuOTIsMzQuNjJaTTE3NS4zNywxOTJsLTE0LjU1LTE2SDU2YTgsOCwwLDAsMSwwLTE2aDkwLjI4bC0xNC41NS0xNkgxMDRhOCw4LDAsMCwxLDAtMTZoMTMuMTlMNTksNjRIMzJWMTkyWk0yMDAsMTQ0YTgsOCwwLDAsMCwwLTE2SDE3OC41MmE4LDgsMCwxLDAsMCwxNlptMjQtOTZIMTA1Ljc5YTgsOCwwLDAsMCwwLDE2SDIyNFYxOTQuODNhOCw4LDAsMSwwLDE2LDBWNjRBMTYsMTYsMCwwLDAsMjI0LDQ4WiIvPjwvc3ZnPg==)
 */
export function PhSubtitlesSlashIcon(props: PhSubtitlesSlashIconProps) {
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
      <path d="M48,136a8,8,0,0,1,8-8H72a8,8,0,0,1,0,16H56A8,8,0,0,1,48,136Zm165.92,74.62a8,8,0,1,1-11.84,10.76L189.92,208H32a16,16,0,0,1-16-16V64A16,16,0,0,1,32,48H44.46l-2.38-2.62A8,8,0,1,1,53.92,34.62ZM175.37,192l-14.55-16H56a8,8,0,0,1,0-16h90.28l-14.55-16H104a8,8,0,0,1,0-16h13.19L59,64H32V192ZM200,144a8,8,0,0,0,0-16H178.52a8,8,0,1,0,0,16Zm24-96H105.79a8,8,0,0,0,0,16H224V194.83a8,8,0,1,0,16,0V64A16,16,0,0,0,224,48Z"/>
    </svg>
  );
}
