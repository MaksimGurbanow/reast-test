/// <reference types="vite/client" />

/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_URL;
  readonly VITE_LIMIT;
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
