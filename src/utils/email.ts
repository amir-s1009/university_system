import nodemailer from "nodemailer";
/**
 * Sends an email using SMTP via Nodemailer
 * @param to - Recipient email address
 * @param subject - Email subject
 * @param html - Email body in HTML format
 */
export async function sendEmail(to: string, subject: string, html: string) {
  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // e.g., "smtp.gmail.com"
      port: Number(process.env.SMTP_PORT),
      secure: true, // true for port 465, false for 587
      auth: {
        user: process.env.SMTP_USER, // SMTP username
        pass: process.env.SMTP_PASSWORD, // SMTP password
      },
    });

    // Send email
    const info = await transporter.sendMail({
      from: {
        name: "YadinoAI | یادینو",
        address: process.env.SMTP_ADDRESS!,
      }, // sender
      to,
      subject,
      html,
    });

    console.log("Email sent:", info.messageId);
    return info;
  } catch (err) {
    console.error("Failed to send email:", err);
    throw new Error("Email could not be sent");
  }
}

export const verifyEmailTemplate = (otp: number) => {
  return `
<!DOCTYPE html>
<html>
<body style="margin:0; padding:0; background:#f6f7f9; font-family:Tahoma, Arial, sans-serif; direction:rtl;">
  <table width="100%" cellpadding="0" cellspacing="0" style="direction:rtl;">
    <tr>
      <td align="center" style="padding:40px 16px; direction:rtl;">
        <table width="100%" style="
          max-width:480px;
          background:#ffffff;
          border-radius:12px;
          padding:32px;
          direction:rtl;
        ">
          
          <tr>
            <td style="
              text-align:right;
              font-size:20px;
              font-weight:bold;
              color:#111;
              direction:rtl;
            ">
              تأیید ایمیل
            </td>
          </tr>

          <tr>
            <td style="
              padding-top:16px;
              font-size:14px;
              color:#444;
              line-height:1.8;
              text-align:right;
              direction:rtl;
            ">
              سلام 👋<br/>
              برای تکمیل ثبت‌نام در <b>YadinoAI</b>، کد تأیید زیر را وارد کنید:
            </td>
          </tr>

          <tr>
            <td align="center" style="padding:24px 0;">
              <div style="
                display:inline-block;
                padding:12px 24px;
                font-size:24px;
                letter-spacing:6px;
                font-weight:bold;
                background:#f1f3f5;
                border-radius:8px;
                color:#111;
                direction:ltr; /* خیلی مهم برای OTP */
              ">
                ${otp}
              </div>
            </td>
          </tr>

          <tr>
            <td style="
              font-size:13px;
              color:#666;
              line-height:1.7;
              text-align:right;
              direction:rtl;
            ">
              این کد تا <b>۴ دقیقه</b> معتبر است.<br/>
              اگر شما این درخواست را ثبت نکرده‌اید، این ایمیل را نادیده بگیرید.
            </td>
          </tr>

          <tr>
            <td style="
              padding-top:24px;
              font-size:12px;
              color:#999;
              text-align:center;
              direction:ltr;
            ">
              © ${new Date().getFullYear()} YadinoAI
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;
};
