import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Newsletter } from "./Newsletter";

export const MailchimpForm = () => {
  const mailchimpUrl = import.meta.env.VITE_MAILCHIMP_URL;
  const mailchimpU = import.meta.env.VITE_MAILCHIMP_U;
  const mailchimpId = import.meta.env.VITE_MAILCHIMP_ID;

  if (!mailchimpUrl || !mailchimpU || !mailchimpId) {
    return null;
  }

  const postUrl = `${mailchimpUrl}?u=${mailchimpU}&id=${mailchimpId}`;

  return (
    <MailchimpSubscribe
      url={postUrl}
      render={({ subscribe, status, message }) => (
        <Newsletter
          status={status}
          message={message}
          onValidated={(formData) => subscribe(formData)}
        />
      )}
    />
  );
};
