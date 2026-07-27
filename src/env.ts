import { createEnv } from "@t3-oss/env-nextjs";
import { type } from "arktype";

export const env = createEnv({
  server: {
    NODE_ENV: type("'development' | 'test' | 'production' | undefined").pipe((v) => v ?? "development"),
    RESEND_API_KEY: type("string"),
    RESEND_EMAIL_TO: type("string"),
    RESEND_EMAIL_FROM: type("string"),
    SANITY_API_READ_TOKEN: type("string"),
    SPOTIFY_TRACK_URL: type("string"),
  },
  client: {
    NEXT_PUBLIC_URL: type("string"),
    NEXT_PUBLIC_SANITY_DATASET: type("string"),
    NEXT_PUBLIC_SANITY_PROJECT_ID: type("string"),
    NEXT_PUBLIC_GTM_ID: type("string"),
  },
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    SPOTIFY_TRACK_URL: process.env.SPOTIFY_TRACK_URL,
    SANITY_API_READ_TOKEN: process.env.SANITY_API_READ_TOKEN,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    RESEND_EMAIL_TO: process.env.RESEND_EMAIL_TO,
    RESEND_EMAIL_FROM: process.env.RESEND_EMAIL_FROM,
    NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
    NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,
    NEXT_PUBLIC_GTM_ID: process.env.NEXT_PUBLIC_GTM_ID,
  },
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  emptyStringAsUndefined: true,
});
