import emailjs from "@emailjs/browser";

export interface SendContactEmailParams {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface EmailServiceConfigStatus {
  isConfigured: boolean;
  missingKeys: string[];
}

/** Check whether required EmailJS environment variables are present */
export function getEmailServiceConfigStatus(): EmailServiceConfigStatus {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const missingKeys: string[] = [];
  if (!serviceId) missingKeys.push("VITE_EMAILJS_SERVICE_ID");
  if (!templateId) missingKeys.push("VITE_EMAILJS_TEMPLATE_ID");
  if (!publicKey) missingKeys.push("VITE_EMAILJS_PUBLIC_KEY");

  return {
    isConfigured: missingKeys.length === 0,
    missingKeys,
  };
}

/**
 * Send contact form message directly via EmailJS.
 * Messages are dispatched to worldtech851@gmail.com with reply_to set to visitor's email.
 */
export async function sendContactEmail(params: SendContactEmailParams): Promise<void> {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error("EMAILJS_NOT_CONFIGURED");
  }

  const templateParams = {
    // Primary parameters matching template body
    from_name: params.name.trim(),
    from_email: params.email.trim(),
    subject: params.subject.trim(),
    message: params.message.trim(),

    // Settings compatibility aliases
    name: params.name.trim(),
    email: params.email.trim(),
    reply_to: params.email.trim(),
    to_email: "worldtech851@gmail.com",
  };

  await emailjs.send(serviceId, templateId, templateParams, {
    publicKey,
  });
}
