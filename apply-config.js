/*
 * LEADFUSE application form settings. See APPLY-FORM.md in leadfuse/leadfuse-funnel.
 *
 * Nov 23 2026: Typeform is retired. Our own form (apply-form.js) is the only form; DEFAULT_FORM is kept
 * for old code and is always 'own'. The Typeforms xPLSrpmn / D8gcUEt2 are left in the account, not deleted.
 *
 * WEBHOOK_URL   the LEADFUSE App inbound webhook of workflow
 *               "01.22 | CALL | Intake: own application form (webhook)" (id 024fadee-1d19-4b2a-b8bf-71d31bef252f).
 */
window.LF_APPLY_CONFIG = {
  DEFAULT_FORM: 'own',
  WEBHOOK_URL: 'https://services.leadconnectorhq.com/hooks/vXjfOvfK4qVI4MO4WcRR/webhook-trigger/5b198105-4184-482c-ad6a-142a79120a7c'
};
