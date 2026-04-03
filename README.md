# solidjs-phosphor

[Phosphor Icons](https://phosphoricons.com/) as SolidJS components. Auto-generated from [phosphor-icons/core](https://github.com/phosphor-icons/core).

## Install

```bash
pnpm add solidjs-phosphor
```

## Usage

```tsx
import { PhGearIcon, PhArrowClockwiseIcon, PhGearBoldIcon } from "solidjs-phosphor";

function App() {
  return (
    <div>
      <PhGearIcon size={24} />
      <PhArrowClockwiseIcon size={16} color="#569cd6" />
      <PhGearBoldIcon size={32} class="my-icon" />
    </div>
  );
}
```

## Naming

Components follow the pattern `Ph{IconName}{Weight}Icon`:

| Weight | Example | Notes |
|--------|---------|-------|
| Regular | `PhGearIcon` | Default — no weight in name |
| Bold | `PhGearBoldIcon` | |
| Light | `PhGearLightIcon` | |
| Thin | `PhGearThinIcon` | |
| Fill | `PhGearFillIcon` | |
| Duotone | `PhGearDuotoneIcon` | |

All 1512 Phosphor icons are available in all 6 weights (9072 components total).

## Props

Each component accepts all standard SVG attributes plus:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number \| string` | `"1em"` | Width and height |
| `color` | `string` | `"currentColor"` | Fill color |

## How it works

A GitHub Action runs weekly, clones [phosphor-icons/core](https://github.com/phosphor-icons/core), transforms SVGs into SolidJS components, and publishes a new version if anything changed.

The package ships `.tsx` source files — your bundler (Vite + `vite-plugin-solid`) compiles them. This is the standard approach for SolidJS libraries and ensures tree-shaking works correctly.

## License

MIT (this package) — Phosphor Icons are [MIT licensed](https://github.com/phosphor-icons/core/blob/main/LICENSE).
