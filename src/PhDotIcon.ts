import { createIcon } from "./createIcon.js";

export type { PhIconProps as PhDotIconProps } from "./createIcon.js";

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDAsMTI4YTEyLDEyLDAsMSwxLTEyLTEyQTEyLDEyLDAsMCwxLDE0MCwxMjhaIi8+PC9zdmc+)
 */
export const PhDotIcon = createIcon({
  thin: `<path d="M136,128a8,8,0,1,1-8-8A8,8,0,0,1,136,128Z"/>`,
  light: `<path d="M138,128a10,10,0,1,1-10-10A10,10,0,0,1,138,128Z"/>`,
  regular: `<path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Z"/>`,
  bold: `<path d="M144,128a16,16,0,1,1-16-16A16,16,0,0,1,144,128Z"/>`,
  fill: `<path d="M128,80a48,48,0,1,0,48,48A48,48,0,0,0,128,80Zm0,60a12,12,0,1,1,12-12A12,12,0,0,1,128,140Z"/>`,
  duotone: `<path d="M176,128a48,48,0,1,1-48-48A48,48,0,0,1,176,128Z" opacity="0.2"/><path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Z"/>`
});
