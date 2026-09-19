import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../Config/Firebase/Firestore";

export class FirestoreRepository<T> {
  constructor(private collectionName: string) {}

  async findAll(): Promise<T[]> {
    const snapshot = await getDocs(collection(db, this.collectionName));
    return snapshot.docs.map((d) => ({ id: d.id, ...d.data() })) as T[];
  }

  async findById(id: string): Promise<T | null> {
    const document = await getDoc(doc(db, this.collectionName, id));
    if (!document.exists()) return null;
    return { id: document.id, ...document.data() } as T;
  }
}
