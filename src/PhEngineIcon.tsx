import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhEngineIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMTA0SDIyNy4zMUwxOTIsNjguNjlBMTUuODYsMTUuODYsMCwwLDAsMTgwLjY5LDY0SDE0MFY0MGgyNGE4LDgsMCwwLDAsMC0xNkgxMDBhOCw4LDAsMCwwLDAsMTZoMjRWNjRINjRBMTYsMTYsMCwwLDAsNDgsODB2NTJIMjRWMTA4YTgsOCwwLDAsMC0xNiwwdjY0YTgsOCwwLDAsMCwxNiwwVjE0OEg0OHYyMC42OUExNS44NiwxNS44NiwwLDAsMCw1Mi42OSwxODBMOTIsMjE5LjMxQTE1Ljg2LDE1Ljg2LDAsMCwwLDEwMy4zMSwyMjRoNzcuMzhBMTUuODYsMTUuODYsMCwwLDAsMTkyLDIxOS4zMUwyMjcuMzEsMTg0SDI0MGExNiwxNiwwLDAsMCwxNi0xNlYxMjBBMTYsMTYsMCwwLDAsMjQwLDEwNFptMCw2NEgyMjRhOCw4LDAsMCwwLTUuNjYsMi4zNEwxODAuNjksMjA4SDEwMy4zMUw2NCwxNjguNjlWODBIMTgwLjY5bDM3LjY1LDM3LjY2QTgsOCwwLDAsMCwyMjQsMTIwaDE2WiIvPjwvc3ZnPg==)
 */
export function PhEngineIcon(props: PhEngineIconProps) {
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
      <path d="M240,104H227.31L192,68.69A15.86,15.86,0,0,0,180.69,64H140V40h24a8,8,0,0,0,0-16H100a8,8,0,0,0,0,16h24V64H64A16,16,0,0,0,48,80v52H24V108a8,8,0,0,0-16,0v64a8,8,0,0,0,16,0V148H48v20.69A15.86,15.86,0,0,0,52.69,180L92,219.31A15.86,15.86,0,0,0,103.31,224h77.38A15.86,15.86,0,0,0,192,219.31L227.31,184H240a16,16,0,0,0,16-16V120A16,16,0,0,0,240,104Zm0,64H224a8,8,0,0,0-5.66,2.34L180.69,208H103.31L64,168.69V80H180.69l37.65,37.66A8,8,0,0,0,224,120h16Z"/>
    </svg>
  );
}
