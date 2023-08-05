import { db } from "@/lib/db";
import { IncomingHttpHeaders } from "http";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { Webhook, WebhookRequiredHeaders } from "svix";
import type { WebhookEvent } from "@clerk/clerk-sdk-node";

export async function POST(req: Request) {
  const payload = await req.json();
  const headersList = req.headers;

  let heads;

  heads = {
    "svix-id": headersList.get("svix-id"),
    "svix-timestamp": headersList.get("svix-timestamp"),
    "svix-signature": headersList.get("svix-signature"),
  };

  const wh = new Webhook(process.env.WEBHOOK_SECRET!);
  let evt: WebhookEvent | null = null;

  try {
    evt = wh.verify(
      JSON.stringify(payload),
      heads as IncomingHttpHeaders & WebhookRequiredHeaders
    ) as WebhookEvent;
  } catch (err) {
    console.log((err as Error).message);
    return NextResponse.json({}, { status: 400 });
  }

  if (evt.type === "user.created" || evt.type === "user.updated") {
    const { id, ...attributes } = evt.data;

    await db?.user.upsert({
      where: { id: id as string },
      create: {
        id: id as string,
        email: attributes.primary_email_address_id,
        name: attributes.first_name,
      },
      update: {
        ...attributes,
      },
    });
  }

  return NextResponse.json({});
}
