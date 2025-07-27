/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BACKEND_CANISTER_ID: string
  readonly VITE_INTERNET_IDENTITY_CANISTER_ID: string
  readonly VITE_IC_HOST: string
  readonly VITE_DFX_NETWORK: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
