import { db } from "./db";
import { contactSubmissions, type CreateContactRequest, type ContactResponse } from "@shared/schema";

export interface IStorage {
  createContactSubmission(submission: CreateContactRequest): Promise<ContactResponse>;
}

export class DatabaseStorage implements IStorage {
  async createContactSubmission(submission: CreateContactRequest): Promise<ContactResponse> {
    const [created] = await db.insert(contactSubmissions).values(submission).returning();
    return created;
  }
}

export const storage = new DatabaseStorage();
