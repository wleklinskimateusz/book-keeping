import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

const firebaseAuthJsonSchema = z
  .object({
    type: z.string(),
    project_id: z.string(),
    private_key_id: z.string(),
    private_key: z.string().transform((key) => key.replace(/\\n/gm, "\n")),
    client_email: z.string(),
    client_id: z.string(),
    auth_uri: z.string(),
    token_uri: z.string(),
    auth_provider_x509_cert_url: z.string(),
    client_x509_cert_url: z.string(),
    universe_domain: z.string(),
  })
  .transform(({ project_id, client_email, private_key }) => ({
    projectId: project_id,
    clientEmail: client_email,
    privateKey: private_key,
  }));

export const env = createEnv({
  server: {
    FIREBASE_API_KEY: z.string(),
    FIREBASE_APP_ID: z.string(),
    FIREBASE_AUTH_DOMAIN: z.string(),
    FIREBASE_MESSAGING_SENDER_ID: z.string(),
    FIREBASE_PROJECT_ID: z.string(),
    FIREBASE_STORAGE_BUCKET: z.string(),
    FIREBASE_AUTH_JSON: z.string().transform((json) => {
      const result = JSON.parse(json);
      return firebaseAuthJsonSchema.parse(result);
    }),
  },
  experimental__runtimeEnv: {},
});
