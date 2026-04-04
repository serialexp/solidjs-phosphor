# solidjs-phosphor

[Phosphor Icons](https://phosphoricons.com/) as SolidJS components. Auto-generated from [phosphor-icons/core](https://github.com/phosphor-icons/core).

## Install

```bash
pnpm add solidjs-phosphor
```

## Usage

```tsx
import { PhGearIcon, PhArrowClockwiseIcon } from "solidjs-phosphor";

function App() {
  return (
    <div>
      <PhGearIcon size={24} />
      <PhGearIcon size={32} weight="bold" />
      <PhGearIcon size={32} weight="duotone" color="#569cd6" />
      <PhArrowClockwiseIcon size={16} mirrored />
    </div>
  );
}
```

## Naming

Components follow the pattern `Ph{IconName}Icon`. All 1512 Phosphor icons are available.

## Props

Each component accepts all standard SVG attributes plus:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number \| string` | `"1em"` | Width and height |
| `color` | `string` | `"currentColor"` | Fill color |
| `weight` | `"thin" \| "light" \| "regular" \| "bold" \| "fill" \| "duotone"` | `"regular"` | Icon weight/style |
| `mirrored` | `boolean` | `false` | Flip horizontally (useful for RTL) |

## How it works

A GitHub Action runs weekly, clones [phosphor-icons/core](https://github.com/phosphor-icons/core), transforms SVGs into SolidJS components, and publishes a new version if anything changed.

The package ships pre-compiled JS and type declarations. The `solid` export condition also provides raw `.ts`/`.tsx` source for Solid-native toolchains.

## License

MIT (this package) — Phosphor Icons are [MIT licensed](https://github.com/phosphor-icons/core/blob/main/LICENSE).
