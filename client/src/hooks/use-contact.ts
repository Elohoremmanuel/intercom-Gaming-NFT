import { useMutation } from "@tanstack/react-query";
import { api } from "@shared/routes";
import type { ContactInput, ContactSuccessResponse } from "@shared/routes";

export function useSubmitContact() {
  return useMutation({
    mutationFn: async (data: ContactInput): Promise<ContactSuccessResponse> => {
      const res = await fetch(api.contact.submit.path, {
        method: api.contact.submit.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (!res.ok) {
        let errorMessage = "Failed to submit contact form";
        try {
          const errorData = await res.json();
          errorMessage = errorData.message || errorMessage;
        } catch (e) {
          // Fallback to default message if parsing fails
        }
        throw new Error(errorMessage);
      }
      
      return api.contact.submit.responses[201].parse(await res.json());
    }
  });
}
