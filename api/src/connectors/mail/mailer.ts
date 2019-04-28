import * as nodemailer from "nodemailer";
import {
  MAIL_USER,
  MAIL_CLIENT_ID,
  MAIL_CLIENT_SECRET,
  MAIL_REFRESH_TOKEN,
  MAIL_ACCESS_TOKEN,
  MAIL_NAME,
  MAIL_WATCHERS
} from "../../utils/config";

export class Mailer {
  public static sendMail = async (text: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      const transport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          type: "OAuth2",
          user: MAIL_USER,
          clientId: MAIL_CLIENT_ID,
          clientSecret: MAIL_CLIENT_SECRET,
          refreshToken: MAIL_REFRESH_TOKEN,
          accessToken: MAIL_ACCESS_TOKEN
        }
      });

      const msg = {
        from: `${MAIL_NAME} <${MAIL_USER}>`,
        to: MAIL_WATCHERS,
        subject: "[ALERT] MAXITO'S IN DANGER!",
        text
      };

      transport.sendMail(msg, (err, infos) => {
        if (err) {
          reject(err);
        } else {
          resolve(infos);
        }
      });
    });
  };
}
