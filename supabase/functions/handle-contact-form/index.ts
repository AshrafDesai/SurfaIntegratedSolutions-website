import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { enquiryId, name, email, phone, company, message } = await req.json();

    if (!name || !email || !phone || !message) {
      throw new Error("Missing required fields");
    }

    const adminEmail = "surfaintsoln@gmail.com";

    // Admin Email Content (User Details)
    const adminEmailContent = `
      **New Inquiry Received**

      - **Enquiry ID:** ${enquiryId}
      - **Name:** ${name}
      - **Email:** ${email}
      - **Phone:** ${phone}
      - **Company:** ${company || "N/A"}
      - **Message:** ${message}
    `;

    // Auto-reply to User
    const userEmailContent = `
      Dear ${name},

      Thank you for reaching out to SurfaTech Integrated Solution. We have received your inquiry.

      **Your Enquiry ID:** ${enquiryId}

      We will review your message and get back to you soon.

      Best regards,  
      **SurfaTech Integrated Solution Team**
    `;

    // Send Emails Concurrently
    const [adminNotification, userNotification] = await Promise.all([
      resend.emails.send({
        from: "SurfaTech <onboarding@resend.dev>",
        to: adminEmail,
        subject: `New Inquiry Received - ${enquiryId}`,
        text: adminEmailContent,
      }),
      resend.emails.send({
        from: "SurfaTech <onboarding@resend.dev>",
        to: email,
        subject: "Thank you for contacting SurfaTech Integrated Solution",
        text: userEmailContent,
      }),
    ]);

    console.log("Emails sent successfully:", { adminNotification, userNotification });

    return new Response(
      JSON.stringify({
        message: "Emails sent successfully",
        enquiryId,
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error in handle-contact-form function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 400,
      }
    );
  }
});
