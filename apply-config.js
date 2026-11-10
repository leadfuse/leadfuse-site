/*
 * LEADFUSE application form: the two settings. See APPLY-FORM.md at the repo root.
 *
 * DEFAULT_FORM  which form a visitor gets when the link has no ?form=
 *               'typeform' = the Typeform (xPLSrpmn here, D8gcUEt2 on leadfuse.co/apply), as today
 *               'own'      = our own form (apply-form.js), posting to WEBHOOK_URL
 *               Ships as 'typeform', so merging this changes nothing for real visitors.
 *
 * WEBHOOK_URL   the LEADFUSE App inbound webhook of the new apply intake workflow.
 *               TODO(App): create the workflow (see APPLY-FORM.md "What the App needs"), paste its
 *               inbound webhook URL here, then flip DEFAULT_FORM to 'own'.
 *               While this is still the placeholder, the own form only shows in test mode
 *               (?test=1&form=own) and sends nothing; everyone else gets the Typeform.
 *
 * Switch back instantly: set DEFAULT_FORM to 'typeform' (one line), or add ?form=typeform to a link.
 */
window.LF_APPLY_CONFIG = {
  DEFAULT_FORM: 'typeform',
  WEBHOOK_URL: 'APPLY_WEBHOOK_URL'
};
