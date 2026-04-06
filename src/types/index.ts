import type { SvgComponent } from "astro/types";

export type SVG = SvgComponent & ImageMetadata;

export type ImgLoading = "eager" | "lazy" | undefined | null;
