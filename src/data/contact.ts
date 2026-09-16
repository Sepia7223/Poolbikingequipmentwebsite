// Keep the branch's existing business contact details consistent across the site.
export const CONTACT_EMAIL =
  (import.meta.env.VITE_CONTACT_EMAIL as string | undefined) ||
  "info@seraphic.me";
export const CONTACT_PHONE_DISPLAY = "+5999 5142050";
export const CONTACT_PHONE_HREF = "tel:+59995142050";
