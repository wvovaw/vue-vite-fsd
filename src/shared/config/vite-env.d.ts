/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SAMPLE_VAR: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
