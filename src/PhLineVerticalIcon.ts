import { createIcon } from "./createIcon.js";

export type { PhIconProps as PhLineVerticalIconProps } from "./createIcon.js";

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMzYsMjRWMjMyYTgsOCwwLDAsMS0xNiwwVjI0YTgsOCwwLDAsMSwxNiwwWiIvPjwvc3ZnPg==)
 */
export const PhLineVerticalIcon = createIcon({
  thin: `<path d="M132,24V232a4,4,0,0,1-8,0V24a4,4,0,0,1,8,0Z"/>`,
  light: `<path d="M134,24V232a6,6,0,0,1-12,0V24a6,6,0,0,1,12,0Z"/>`,
  regular: `<path d="M136,24V232a8,8,0,0,1-16,0V24a8,8,0,0,1,16,0Z"/>`,
  bold: `<path d="M140,24V232a12,12,0,0,1-24,0V24a12,12,0,0,1,24,0Z"/>`,
  fill: `<path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM136,192a8,8,0,0,1-16,0V64a8,8,0,0,1,16,0Z"/>`,
  duotone: `<path d="M224,48V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48Z" opacity="0.2"/><path d="M136,24V232a8,8,0,0,1-16,0V24a8,8,0,0,1,16,0Z"/>`
});
