import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({
            message: "Method not allowed",
        });
    }

    try {
        const { fullName, email, enquiry, enquiryReason } = req.body;

        const data = await resend.emails.send({
            from: "Contact Form Submission <onboarding@resend.dev>",
            to: "alexandru_dev15@proton.me",
            subject: `Enquiry Reason: ${enquiry}`,
            html: `
            <div style="background-color:#000000; color:#ffffff; padding:20px; font-family: Arial, sans-serif;">
                
                <h2 style="color:#00ff4c;">Contact Form Submission</h2>

                <p><strong>Full Name:</strong> ${fullName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Enquiry:</strong> ${enquiry}</p>
                <p><strong>Enquiry Reason:</strong> ${enquiryReason}</p>

                <hr style="border:1px solid #333;" />

                <p style="font-size:12px; color:#888;">
                This message was sent from your portfolio contact form.
                </p>

            </div>
            `,
        });

        return res.status(200).json({
            success: true,
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            errMsg: error.message,
        });
    }
}