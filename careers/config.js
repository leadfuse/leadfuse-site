/* Where /careers/apply/ sends each application.
   webhookUrl = the LEADFUSE App inbound webhook URL (Automation > Workflow > trigger "Inbound Webhook").
   It feeds App workflow 08.01 | HIRING | Careers application (webhook): contact + talent_* fields, tags
   "talent | applicant" and "talent | <role>", a card in 08 | Hiring Pipeline at Applied, and an email to Sebastian.
   Left empty, the form still shows the thank-you screen but sends nothing and says so in the browser console. */
window.LF_CAREERS = {
  webhookUrl: "https://services.leadconnectorhq.com/hooks/vXjfOvfK4qVI4MO4WcRR/webhook-trigger/012688d7-4cd4-4b45-ac17-b99c1dc6a5a1"
};
