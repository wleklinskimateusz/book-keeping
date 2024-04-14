import { initializeApp, getApps, cert } from "firebase-admin/app";
import { env } from "./env";

export function customInitApp() {
  if (getApps().length <= 0) {
    initializeApp({
      credential: cert(env.FIREBASE_AUTH_JSON),
    });
  }
}
