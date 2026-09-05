import { z } from "zod";

export const directorSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  surname: z.string().min(2, "Surname is required"),
  otherNames: z.string().optional(),
  dob: z.string().min(1, "Date of birth is required"),
  gender: z.enum(["Male", "Female"], {
    errorMap: () => ({ message: "Please select gender" }),
  }),
  sharePercentage: z
    .number({ invalid_type_error: "Enter a valid percentage" })
    .min(0.01, "Percentage must be greater than 0")
    .max(100, "Percentage cannot exceed 100"),
  email: z.string().email("Enter a valid email address"),
  phoneCountryCode: z.string().default("+234"),
  phone: z.string().min(9, "Enter a valid phone number"),
  stateOfResidence: z.string().min(1, "Please select state of residence"),
  lgaOfResidence: z.string().min(1, "Please select LGA"),
  cityOfResidence: z.string().min(2, "City/Town is required"),
  residentialAddress: z.string().min(5, "Complete residential address is required"),
  idType: z.enum(["NIN", "International Passport", "Drivers License", "Voters Card"], {
    errorMap: () => ({ message: "Select valid ID type" }),
  }),
  identificationNumber: z.string().min(5, "Identification number is required"),
  idDocumentUrl: z.string().optional(),
  signatureUrl: z.string().optional(),
  passportPhotoUrl: z.string().optional(),
});

export const limitedCompanyFormSchema = z
  .object({
    packageChoice: z.enum(["Starter", "Pro", "Premium"]),
    isOutsourcing: z.boolean().default(false),
    billingName: z.string().optional(),
    billingEmail: z.string().email().optional().or(z.literal("")),
    billingPhone: z.string().optional(),
    billingBusinessName: z.string().optional(),
    billingAddress: z.string().optional(),

    shareCapitalMillions: z.number().min(1).default(1),
    proposedName1: z.string().min(3, "Proposed name 1 is required"),
    proposedName2: z.string().min(3, "Proposed name 2 is required"),
    businessActivity: z.string().min(10, "Please describe the business nature/activity"),

    directors: z
      .array(directorSchema)
      .min(1, "At least one director/shareholder is required")
      .max(10, "Maximum 10 directors allowed online"),

    includeAiVideo: z.boolean().default(false),
    includeAutomatedInvoicing: z.boolean().default(false),

    additionalNotes: z.string().optional(),
    referralCode: z.string().optional(),
    termsConsent: z.literal(true, {
      errorMap: () => ({ message: "You must accept the Terms and Privacy Policy" }),
    }),
  })
  .refine(
    (data) => {
      // Validate that total share percentage across all directors equals 100%
      const totalShares = data.directors.reduce((acc, curr) => acc + (curr.sharePercentage || 0), 0);
      return Math.abs(totalShares - 100) < 0.01;
    },
    {
      message: "Director shareholder percentages must total exactly 100%",
      path: ["directors"],
    }
  );

export const leadCaptureSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  whatsappPhone: z.string().min(10, "Valid WhatsApp number is required"),
  email: z.string().email("Valid email is required").optional().or(z.literal("")),
  proposedBusinessName: z.string().optional(),
  packageInterested: z.string().default("Pro"),
  shareCapitalMillions: z.number().default(1),
  source: z.string().default("launch-simulator"),
});

export type LimitedCompanyFormValues = z.infer<typeof limitedCompanyFormSchema>;
export type DirectorValues = z.infer<typeof directorSchema>;
export type LeadCaptureValues = z.infer<typeof leadCaptureSchema>;
