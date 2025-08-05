import { syncMailerLiteSubscribers } from "@/services/syncSubscribers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ status: 401, message: "Unauthorized" });
  }

  await syncMailerLiteSubscribers();

  // get all events
  // if event is 5 days away from today
  // send event promotion campaign

  return NextResponse.json({
    status: 201,
    message: "Synced customers with subscribers!",
  });
}
