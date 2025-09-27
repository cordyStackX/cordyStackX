import { UseEffect, UseState } from "@/app/modules";
import Fetch_to from "@/app/utilities/Fetch_to";

export default function ContactLink() {
  const [email, setEmail] = UseState("");

  UseEffect({
    callback: () => {
    async function getEmail() {
      const data = await Fetch_to<{ email_b64: string }>(
        "/services/api/getEmail",
        {},
        { "x-api-token": "SuperSecretToken123" }
      );
      if (data?.email_b64) setEmail(atob(data.email_b64));
    }
    getEmail();
  }
  }
);

  if (!email) return "Email Not Found";

  return email;
}
