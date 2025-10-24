import { NextRequest, NextResponse } from "next/server";

async function sendMailtrapEmail({
  to,
  template_uuid,
  template_variables,
}: {
  to: { email: string; name?: string }[];
  template_uuid: string;
  template_variables: Record<string, any>;
}) {
  const MAILTRAP_API_TOKEN = process.env.MAILTRAP_API_TOKEN;
  const FROM_EMAIL = process.env.FROM_EMAIL;
  const SENDER_NAME = process.env.SENDER_NAME || "Experiences by Beyond";

  if (!MAILTRAP_API_TOKEN || !FROM_EMAIL) {
    throw new Error("Missing Mailtrap environment variables for sending email.");
  }

  const mailtrapApiUrl = "https://send.api.mailtrap.io/api/send";

  const emailData = {
    from: { email: FROM_EMAIL, name: SENDER_NAME },
    to,
    template_uuid,
    template_variables,
  };

  const response = await fetch(mailtrapApiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Api-Token": MAILTRAP_API_TOKEN,
    },
    body: JSON.stringify(emailData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    console.error("Mailtrap API Error:", errorData);
    throw new Error("Failed to send email via Mailtrap.");
  }

  return response.json();
}

export async function POST(req: NextRequest) {
  const { firstName, lastName, email } = await req.json();

  if (!firstName || !lastName || !email) {
    return NextResponse.json(
      { error: "First name, last name, and email are required." },
      { status: 400 }
    );
  }

  const CLIENT_TEMPLATE_UUID = "676b7f16-fd17-449e-80a7-57651fb48cad"; // Replace with your actual client template UUID
  const INTERNAL_TEMPLATE_UUID = "d699b5ca-bfdc-43a0-9479-29fcb3e98f6c"; // Replace with your actual internal template UUID
  const INTERNAL_TEAM_EMAIL = "concierge@experiencesbybeyond.com"; // Replace with your actual internal team email

  try {
    // Send email to the client
    await sendMailtrapEmail({
      to: [{ email }],
      template_uuid: CLIENT_TEMPLATE_UUID,
      template_variables: {
        first_name: firstName,
        last_name: lastName,
        email,
      },
    });

    // Send email to the internal team
    await sendMailtrapEmail({
      to: [{ email: INTERNAL_TEAM_EMAIL }],
      template_uuid: INTERNAL_TEMPLATE_UUID,
      template_variables: {
        first_name: firstName,
        last_name: lastName,
        email,
      },
    });

    return NextResponse.json({ message: "Successfully subscribed!" });
  } catch (error) {
    console.error("Error processing subscription:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
