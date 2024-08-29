namespace NodeJS {
  interface ProcessEnv extends NodeJS.ProcessEnv {
    readonly NEXT_PUBLIC_CMS_HOST: string;
    readonly CMS_API_TOKEN: string;
  }
}
