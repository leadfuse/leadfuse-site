/*
 * The capacity math behind leadfuse.co/calculator/.
 *
 * The same math as the capacity tracker on the client dashboard in LEADFUSE OS
 * (Sebastian's "Capacity & Goal Tracker" spec, Nov 2026). Change one, change both.
 *
 *   Weeks per month   = 4.33 (52 / 12)
 *   Max jobs a month  = techs x (hours a day / hours per job) x days open a week x 4.33
 *   Max revenue       = max jobs x average job price
 *   Target revenue    = max revenue x target % (80% unless they change it)
 *   Gap               = target revenue - last month's revenue
 *
 * Worked example (check it with `node calculator/capacity.js`):
 *   100 max jobs x $500 = $50,000 ceiling; 80% = $40,000 = 80 jobs, about 18.5 a week.
 *
 * Works in the browser (window.LFCapacity) and in Node (module.exports).
 */
(function (root) {
  var WEEKS_PER_MONTH = 4.33;

  /** Everything after the ceiling in jobs. Pure. */
  function fromMaxJobs(maxJobs, i) {
    var aov = i.aov;
    var maxRevenue = maxJobs * aov;
    var targetRevenue = maxRevenue * (i.targetPct / 100);
    var targetJobs = aov > 0 ? targetRevenue / aov : 0;
    var lastMonth = i.lastMonth || 0;
    var currentJobs = aov > 0 ? lastMonth / aov : 0;
    var gap = targetRevenue - lastMonth;
    return {
      maxJobs: maxJobs,
      maxRevenue: maxRevenue,
      targetRevenue: targetRevenue,
      targetJobs: targetJobs,
      targetJobsPerWeek: targetJobs / WEEKS_PER_MONTH,
      currentJobs: currentJobs,
      gap: gap,
      gapPerYear: gap * 12,
      moreJobsPerWeek: (targetJobs - currentJobs) / WEEKS_PER_MONTH,
      usedPct: maxRevenue > 0 ? (lastMonth / maxRevenue) * 100 : 0
    };
  }

  /**
   * i = { lastMonth, techs, daysPerWeek, hoursPerDay, aov, jobHours, targetPct }
   * Returns null until every number it needs is above zero.
   */
  function capacity(i) {
    if (!(i.techs > 0 && i.daysPerWeek > 0 && i.hoursPerDay > 0 && i.aov > 0 && i.jobHours > 0 && i.targetPct > 0)) return null;
    var jobsPerTechPerDay = i.hoursPerDay / i.jobHours;
    var maxJobs = i.techs * jobsPerTechPerDay * i.daysPerWeek * WEEKS_PER_MONTH;
    var out = fromMaxJobs(maxJobs, i);
    out.jobsPerTechPerDay = jobsPerTechPerDay;
    return out;
  }

  var api = { WEEKS_PER_MONTH: WEEKS_PER_MONTH, capacity: capacity, fromMaxJobs: fromMaxJobs };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = api;
    // `node calculator/capacity.js` checks the worked example from the spec.
    if (typeof require !== 'undefined' && require.main === module) {
      var assert = require('assert');
      var ex = fromMaxJobs(100, { aov: 500, targetPct: 80, lastMonth: 0 });
      assert.strictEqual(ex.maxRevenue, 50000);
      assert.strictEqual(ex.targetRevenue, 40000);
      assert.strictEqual(ex.targetJobs, 80);
      assert.strictEqual(Math.round(ex.targetJobsPerWeek * 10) / 10, 18.5);
      var two = capacity({ lastMonth: 25000, techs: 2, daysPerWeek: 6, hoursPerDay: 8, aov: 400, jobHours: 4, targetPct: 80 });
      // 2 techs x 2 jobs a day x 6 days x 4.33 = 103.92 jobs; x $400 = $41,568; 80% = $33,254.40
      assert.strictEqual(Math.round(two.maxJobs * 100) / 100, 103.92);
      assert.strictEqual(Math.round(two.maxRevenue * 100) / 100, 41568);
      assert.strictEqual(Math.round(two.gap * 100) / 100, 8254.4);
      assert.strictEqual(capacity({ techs: 0, daysPerWeek: 6, hoursPerDay: 8, aov: 400, jobHours: 4, targetPct: 80 }), null);
      console.log('capacity.js: worked example OK ($50,000 ceiling, $40,000 at 80%, 80 jobs, 18.5 a week)');
    }
  } else {
    root.LFCapacity = api;
  }
})(typeof window !== 'undefined' ? window : this);
