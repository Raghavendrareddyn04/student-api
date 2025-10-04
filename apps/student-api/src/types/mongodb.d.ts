// Custom type declarations for MongoDB
import { ObjectId } from 'mongodb';

declare global {
  // Extend the global Object type to include toHexString
  interface Object {
    toHexString?(): string;
  }

  // Extend the global ObjectConstructor to recognize ObjectId
  interface ObjectConstructor {
    (value: ObjectId): ObjectId;
  }
}

export {};
