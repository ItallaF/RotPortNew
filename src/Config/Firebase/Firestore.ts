import { initializeFirestore } from "firebase/firestore";
import { app } from "./Firebase";

export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});
