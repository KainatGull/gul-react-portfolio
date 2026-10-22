# Kainat Gul — React Portfolio

A motion-driven, responsive React + Vite portfolio starter inspired by the supplied editorial portfolio references.

## Run locally

1. Install Node.js (LTS recommended).
2. Extract the ZIP and open this folder in your terminal.
3. Run `npm install`.
4. Run `npm run dev`.

## Build

- `npm run build`
- `npm run preview`

## Customize

- Personal details: `src/data/personalInfo.js`
- Projects and URLs: `src/data/projects.js`
- Technologies: `src/data/skills.js`
- Theme colors: `src/styles/variables.css`
- CV: place the final PDF at `public/Kainat_Gul_CV.pdf`
- Email form: configure the variables below.

## EmailJS

1. Create an EmailJS service and email template.
2. Copy `.env.example` to `.env`.
3. Fill in `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, and `VITE_EMAILJS_PUBLIC_KEY`.
4. Ensure the template expects `from_name`, `reply_to`, `subject`, and `message`.
5. Restart the dev server after changing `.env`.

The form displays a setup warning until the credentials are configured. Email delivery has not been verified in this starter.

## Notes

- Sikoya intentionally has no repository link because its source code is private.
- Project feature descriptions are editable placeholders and should be verified before publication.
- The CV PDF is not included; add your own file.
