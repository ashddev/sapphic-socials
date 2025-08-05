import z from "zod";

const MAILERLITE_API_KEY = process.env.MAILERLITE_API_KEY;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const requestSchema = z.object({
  method: z.string(),
  path: z.string(),
  body: {
    email: z.email(),
    fields: {
      name: z.string(),
      last_name: z.string(),
    },
    groups: z.string().array(),
  },
});

type MailerLiteRequest = z.infer<typeof requestSchema>;

export const mailerLiteBatchRequest = (requests: MailerLiteRequest[]) =>
  fetch("https://connect.mailerlite.com/api/batch", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${MAILERLITE_API_KEY!}`,
    },
    body: JSON.stringify({ requests: requests }),
  }).catch((error) => console.error(error));
