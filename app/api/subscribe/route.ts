import z from "zod";

const MAILERLITE_API_KEY = process.env.MAILERLITE_API_KEY;
const MAILERLITE_GROUP_ID = process.env.MAILERLITE_GROUP_ID;

const subscribeSchema = z.object({ email: z.string().email() });

export async function POST(request: Request) {
  try {
    const bodyRaw = await request.json();
    const body = subscribeSchema.parse(bodyRaw);
    const { email } = body;

    const res = await fetch("https://connect.mailerlite.com/api/subscribers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${MAILERLITE_API_KEY!}`,
      },
      body: JSON.stringify({ email, groups: [MAILERLITE_GROUP_ID] }),
    });

    if (!res.ok) {
      const error = await res.json();
      console.log(error);
      return new Response(JSON.stringify({ error }), {
        status: res.status,
        headers: { "Content-Type": "application/json" },
      });
    }

    const result = await res.json();
    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Server error:", err);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
