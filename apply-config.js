/*
 * LEADFUSE application form: the two settings. See APPLY-FORM.md at the repo root.
 *
 * DEFAULT_FORM  which form a visitor gets when the link has no ?form=
 *               'typeform' = the Typeform (xPLSrpmn here, D8gcUEt2 on leadfuse.co/apply), as today
 *               'own'      = our own form (apply-form.js), posting to WEBHOOK_URL
 *               Ships as 'typeform', so merging this changes nothing for real visitors.
 *
 * WEBHOOK_URL   the LEADFUSE App inbound webhook of workflow
 *               "01.22 | CALL | Intake: own application form (webhook)" (id 024fadee-1d19-4b2a-b8bf-71d31bef252f,
 *               published Nov 9 2026). Set, so ?form=own (and ?test=1&form=own) now posts to the App.
 *               Next step after a hand test: flip DEFAULT_FORM to 'own'.
 *
 * Switch back instantly: set DEFAULT_FORM to 'typeform' (one line), or add ?form=typeform to a link.
 */
window.LF_APPLY_CONFIG = {
  DEFAULT_FORM: 'own',
  WEBHOOK_URL: 'https://services.leadconnectorhq.com/hooks/vXjfOvfK4qVI4MO4WcRR/webhook-trigger/5b198105-4184-482c-ad6a-142a79120a7c'
};
