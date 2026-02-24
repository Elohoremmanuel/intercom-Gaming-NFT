import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSubmissionSchema, type InsertContactSubmission } from "@shared/schema";
import { useSubmitContact } from "@/hooks/use-contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export function ContactForm() {
  const { toast } = useToast();
  const [isSuccess, setIsSuccess] = useState(false);
  const submitMutation = useSubmitContact();

  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = (data: InsertContactSubmission) => {
    submitMutation.mutate(data, {
      onSuccess: () => {
        setIsSuccess(true);
        form.reset();
        toast({
          title: "Message Sent!",
          description: "We'll be in touch with you shortly.",
        });
        setTimeout(() => setIsSuccess(false), 5000);
      },
      onError: (error) => {
        toast({
          title: "Submission Failed",
          description: error.message,
          variant: "destructive",
        });
      },
    });
  };

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-panel rounded-2xl p-12 flex flex-col items-center justify-center text-center h-full"
      >
        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="w-10 h-10 text-green-400" />
        </div>
        <h3 className="text-2xl font-display font-bold text-white mb-2">Message Received</h3>
        <p className="text-muted-foreground">
          Thanks for reaching out! Our team will review your inquiry and get back to you within 24 hours.
        </p>
        <Button 
          variant="outline" 
          className="mt-8"
          onClick={() => setIsSuccess(false)}
        >
          Send Another Message
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="glass-panel rounded-2xl p-8 md:p-10 relative overflow-hidden">
      {/* Decorative gradient orb */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="mb-8">
        <h3 className="text-2xl font-display font-bold text-white mb-2">Ready to integrate?</h3>
        <p className="text-muted-foreground">Fill out the form below to get early access to our developer SDK.</p>
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-white/80">Full Name *</label>
            <Input 
              placeholder="John Doe" 
              {...form.register("name")}
              className={form.formState.errors.name ? "border-destructive/50 focus-visible:ring-destructive" : ""}
            />
            {form.formState.errors.name && (
              <p className="text-xs text-destructive">{form.formState.errors.name.message}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-white/80">Email Address *</label>
            <Input 
              type="email" 
              placeholder="john@studio.com" 
              {...form.register("email")}
              className={form.formState.errors.email ? "border-destructive/50 focus-visible:ring-destructive" : ""}
            />
            {form.formState.errors.email && (
              <p className="text-xs text-destructive">{form.formState.errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-white/80">Studio / Company</label>
          <Input 
            placeholder="Awesome Games Inc." 
            {...form.register("company")} 
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-white/80">How can we help? *</label>
          <Textarea 
            placeholder="Tell us about the game you're building..." 
            {...form.register("message")}
            className={form.formState.errors.message ? "border-destructive/50 focus-visible:ring-destructive" : ""}
          />
          {form.formState.errors.message && (
            <p className="text-xs text-destructive">{form.formState.errors.message.message}</p>
          )}
        </div>

        <Button 
          type="submit" 
          size="lg" 
          className="w-full"
          disabled={submitMutation.isPending}
        >
          {submitMutation.isPending ? (
            <span className="flex items-center gap-2">
              <span className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
              Submitting...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Send className="w-4 h-4" />
              Request Early Access
            </span>
          )}
        </Button>
      </form>
    </div>
  );
}
