import { parseColorHexRGB } from "https://unpkg.com/@microsoft/fast-colors";
import { createColorPalette } from "https://unpkg.com/@microsoft/fast-components";

const palette = createColorPalette(parseColorHexRGB("#031f30"));
const provider = document.querySelector("fast-design-system-provider");

provider.neutralPalette = palette;