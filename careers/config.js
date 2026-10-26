/* Where /careers/apply/ sends each application.
   webhookUrl = the LEADFUSE App inbound webhook URL (Automation > Workflow > trigger "Inbound Webhook").
   Left empty, the form still shows the thank-you screen but sends nothing and says so in the browser console,
   so previews never create test contacts. */
window.LF_CAREERS = {
  webhookUrl: ""
};
