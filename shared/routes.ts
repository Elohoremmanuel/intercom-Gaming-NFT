import { z } from 'zod';
import { insertContactSubmissionSchema } from './schema';

export const errorSchemas = {
  validation: z.object({
    message: z.string(),
    field: z.string().optional(),
  }),
  internal: z.object({
    message: z.string(),
  }),
};

export const api = {
  contact: {
    submit: {
      method: 'POST' as const,
      path: '/api/contact' as const,
      input: insertContactSubmissionSchema,
      responses: {
        201: z.object({
          message: z.string(),
        }),
        400: errorSchemas.validation,
        500: errorSchemas.internal,
      },
    },
  },
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}

export type ContactInput = z.infer<typeof api.contact.submit.input>;
export type ContactSuccessResponse = z.infer<typeof api.contact.submit.responses[201]>;
export type ValidationError = z.infer<typeof errorSchemas.validation>;
export type InternalError = z.infer<typeof errorSchemas.internal>;
