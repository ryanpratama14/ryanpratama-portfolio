import { createEnv } from "@t3-oss/env-nextjs";
import * as v from "valibot";

export const env = createEnv({
  server: {
    NODE_ENV: v.optional(v.picklist(["development", "test", "production"]), "development"),
    RESEND_API_KEY: v.string(),
    RESEND_EMAIL_TO: v.string(),
    RESEND_EMAIL_FROM: v.string(),
    SANITY_API_READ_TOKEN: v.string(),
    SPOTIFY_TRACK_URL: v.string(),
  },
  client: {
    NEXT_PUBLIC_URL: v.pipe(v.string(), v.url()),
    NEXT_PUBLIC_SANITY_DATASET: v.string(),
    NEXT_PUBLIC_SANITY_PROJECT_ID: v.string(),
    NEXT_PUBLIC_GTM_ID: v.string(),
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
