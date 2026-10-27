#!/usr/bin/env python3
"""Builds leadfuse.co/apply/test-drive/ (the 4-Week Test Drive, Oct 27 to Oct 31 2026).
It is the live apply.leadfuse.co landing page, same design, with only the words swapped and the form pointed at the
site form (D8gcUEt2, formsource=test-drive). Run: python3 apply/_src/test_drive.py [/path/to/client-leadfuse-funnel/deploy]
Every swap must match, or the script stops, so a change on the funnel page can't silently ship the old words."""
import pathlib, re, sys
HERE = pathlib.Path(__file__).resolve().parent
SITE = HERE.parent.parent
SRC = pathlib.Path(sys.argv[1] if len(sys.argv) > 1 else "/Users/fuseai/Documents/client-leadfuse-funnel/deploy")
html = (SRC / "index.html").read_text()

def swap(old, new, count=1):
    global html
    n = html.count(old)
    if n != count:
        raise SystemExit(f"expected {count}x, found {n}x: {old[:90]!r}")
    html = html.replace(old, new)

# 1. same path fixes as port.py (absolute asset paths, site legal links)
html = re.sub(r'<script>\s*/\* Site traffic\..*?</script>\s*', '', html, flags=re.S)
for f in ("attribution.js", "meta-pixel.js", "support.js"):
    html = html.replace(f'src="./{f}"', f'src="/{f}"')
html = re.sub(r'(["\'(])(assets|vendor|_ds)/', r'\1/\2/', html)
html = html.replace('href="/privacy-policy"', 'href="/privacy/"').replace('href="/terms-of-use"', 'href="/terms/"').replace('href="/earnings-disclaimer"', 'href="https://apply.leadfuse.co/earnings-disclaimer"')

# 2. head: noindex, tags on every visit, close after Sat Oct 31 midnight PT (Nov 1 07:00 UTC) -> regular application
HEAD = """<meta name="robots" content="noindex">
<script>/* 4-Week Test Drive: ends Sat Oct 31 2026 midnight PT, then this page sends people to the regular application. */
if (Date.now() >= Date.UTC(2026, 10, 1, 7, 0, 0)) location.replace('/apply/' + location.search);
/* Make sure the form always gets the campaign tags; tags on the link (utm_medium=email or sms) win. */
(function () { try { var q = new URLSearchParams(location.search), ch = false,
  d = { utm_source: 'test_drive', utm_medium: 'campaign', utm_campaign: 'test-drive' };
  if (q.get('formsource') !== 'test-drive') { q.set('formsource', 'test-drive'); ch = true; }
  for (var k in d) if (!q.get(k)) { q.set(k, d[k]); ch = true; }
  if (ch) history.replaceState(null, '', location.pathname + '?' + q.toString() + location.hash);
} catch (e) {} })();</script>
"""
i = html.find('<script src="/attribution.js"')
if i < 0: raise SystemExit("attribution.js tag not found")
html = html[:i] + HEAD + html[i:]

# 3. the form: the site's copy (endings go to leadfuse.co/apply/book, never the ads funnel)
swap('data-tf-live="01KF0BV88MYWBHWXTH9X0KN2ET"', 'data-tf-widget="D8gcUEt2"')
html = html.replace(".lf-tf[data-tf-live]", ".lf-tf")

# 4. words
swap("<title>LEADFUSE | Find the bottleneck. Break the ceiling.</title>", "<title>LEADFUSE | The 4-Week Test Drive</title>")
swap('content="LEADFUSE | Find the bottleneck. Break the ceiling."', 'content="LEADFUSE | The 4-Week Test Drive"')
swap("We fix what's broken in your ad system so you can scale past your revenue ceiling. For detailing, coating, PPF, and tint shops doing $10K+ a month.",
     "We run your Facebook and Instagram ads for 4 weeks. Only 5 spots. Ends Saturday, October 31.")
swap("For detailing, coating, PPF &amp; tint shops doing $10K+/month", "The 4-Week Test Drive · Only 5 spots · Ends Sat, Oct 31")
swap("Your shop does $10K+ a month. Your ", "We&#8217;ll run your ")
swap(" ads should be ", " ads for 4 weeks. ")
swap("filling the calendar.</em>", "You decide after.</em>")
swap("We find what&#8217;s capping your ads, follow-up, and sales, then fix it for you or with you, until qualified buyers book every week. Even if an agency burned you before.",
     "A test drive of our Done For You ads for detailing businesses doing $10K+ a month. Keep going after 4 weeks and your deposit comes off your program. Walk away and it covers your 4 weeks.")
swap("Takes 60 seconds.", "Takes 2 minutes.", count=html.count("Takes 60 seconds."))
swap("Book your free discovery call in ", "Claim your test drive in ")
swap(">60 seconds.</em>", ">2 minutes.</em>")

# 5. FAQ: same card design, test-drive answers (the funnel's price, minimum and guarantee answers would contradict the offer)
S = '<strong style="color:#fff;font-weight:600">'
def card(q, a, first=False):
    return f'''<details{" open" if first else ""} style="border-radius:14px;background:var(--glass-bg);border:var(--glass-border);padding:18px 22px">
          <summary style="cursor:pointer;list-style:none;display:flex;align-items:flex-start;justify-content:space-between;gap:16px">
            <h3 style="margin:0;font-size:15px;font-weight:600;line-height:1.45;color:#fff">{q}</h3>
            <span class="lf-fx" style="flex:none;width:18px;height:18px;display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,.45);font-size:18px;font-weight:300;line-height:1;margin-top:1px;transition:transform .18s cubic-bezier(.4,0,.2,1)">+</span>
          </summary>
          <p style="margin:8px 0 0;font-size:14px;line-height:1.7;color:rgba(255,255,255,.6)">{a}</p>
        </details>
        '''
FAQ = [
 ("Am I the right fit for this?", f"{S}We don&#8217;t take everyone, and there are only 5 spots.</strong> This is for detailing and protection businesses doing {S}at least $10K a month</strong>. Mobile, shop, or both. You need {S}room for more jobs</strong> and {S}$50 a day</strong> for ads. If that&#8217;s you, fill out the application. If it&#8217;s not, don&#8217;t waste your time or ours."),
 ("What do I get in the 4 weeks?", f"An offer that makes people want to book. Ad scripts written for you, and {S}you film one day, on your phone</strong>. Your Facebook and Instagram ads built and run every day. The LEADFUSE App texting every lead back for you. A weekly check on your numbers, and {S}a week-4 review</strong> where we look at what you spent, your leads and your booked jobs together."),
 ("How does the money work?", f"You put down a deposit on your first call. For most owners, it&#8217;s about the price of one coating job. {S}Keep going after 4 weeks?</strong> Your deposit comes off your program, so those 4 weeks cost you nothing. {S}Walk away?</strong> The deposit covers your 4 weeks. Nothing else to pay. Your ad spend goes to Meta, not us."),
 ("Why is there a deposit?", f"Because we&#8217;ve tried &#8220;$0 to start.&#8221; The people who signed up weren&#8217;t serious. They didn&#8217;t film. They didn&#8217;t call their leads back. Then they blamed the ads. {S}We take this seriously because our business depends on it.</strong> Yours probably does too."),
 ("What if I change my mind?", f"{S}The 72-hour guarantee.</strong> Don&#8217;t like our onboarding? Don&#8217;t like how we communicate? Having second thoughts? Tell us within 72 hours of paying your deposit and we&#8217;ll refund it."),
 ("What if it doesn&#8217;t work?", f"{S}The performance guarantee.</strong> Before you pay a dollar, we agree on a number, in writing. If we don&#8217;t hit it in your first 4 weeks, you get your deposit back. No questions asked. {S}As long as you do your part:</strong> film within 7 days, keep your ads on, call your leads back fast, and log your jobs in the App. We go over all of it on the call."),
 ("How fast do my ads go live?", f"{S}Within 7 days of your launch call.</strong> The faster you film, the faster you&#8217;re live."),
 ("When does this end?", f"{S}Saturday, October 31 at midnight Pacific</strong>, or when the 5 spots are gone. Whichever comes first."),
]
i = html.find('<section id="faq"'); j = html.find('</section>', i)
faq = html[i:j]
a = faq.find('<details'); b = faq.rfind('</details>') + len('</details>')
if a < 0 or b < a: raise SystemExit("FAQ cards not found")
new_faq = faq[:a] + "".join(card(q, ans, first=(n == 0)) for n, (q, ans) in enumerate(FAQ)).rstrip() + faq[b:]
html = html[:i] + new_faq + html[j:]

html = html.replace("<!DOCTYPE html>\n", "<!DOCTYPE html>\n<!-- Generated by apply/_src/test_drive.py from client-leadfuse-funnel/deploy/index.html (same design, test-drive words). Edit test_drive.py, then re-run it. -->\n", 1)
out = SITE / "apply" / "test-drive"; out.mkdir(parents=True, exist_ok=True)
(out / "index.html").write_text(html)
missing = sorted({m for m in re.findall(r'(/(?:assets|_ds|vendor)/[^"\')\s?#]+)', html) if not (SITE / m.lstrip("/")).exists()})
print("apply/test-drive/index.html written | missing local files:", missing or "none")
