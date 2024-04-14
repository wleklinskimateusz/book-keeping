import { initializeApp, credential } from "firebase-admin";
import { env } from "./env";

export const app = initializeApp({
  credential: credential.cert(env.FIREBASE_AUTH_JSON),
});

export const db = app.firestore();
