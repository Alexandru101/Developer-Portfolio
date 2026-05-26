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
            subject: enquiry,
            html: `
                <h2>Contact Form Submission</h2>
                <p><strong>Full Name:</strong> ${fullName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Enquiry Reason:</strong> ${enquiryReason}</p>
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