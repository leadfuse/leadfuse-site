/* @ds-bundle: {"format":4,"namespace":"LeadfuseDesignSystem_e3be75","components":[{"name":"BrandPattern","sourcePath":"components/brand/BrandPattern.jsx"},{"name":"Emblem","sourcePath":"components/brand/Emblem.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"SectionHeader","sourcePath":"components/brand/SectionHeader.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Stat","sourcePath":"components/core/Stat.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"ToastStack","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Textarea","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Eyebrow","sourcePath":"components/funnel/Eyebrow.jsx"},{"name":"GlassPanel","sourcePath":"components/funnel/GlassPanel.jsx"},{"name":"GlowButton","sourcePath":"components/funnel/GlowButton.jsx"},{"name":"SerifAccent","sourcePath":"components/funnel/SerifAccent.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/brand/BrandPattern.jsx":"25b72c9be747","components/brand/Emblem.jsx":"602275f3875f","components/brand/Logo.jsx":"79e150d6ce62","components/brand/SectionHeader.jsx":"fc5fa891f169","components/core/Badge.jsx":"ab51778bbd1d","components/core/Button.jsx":"8d2ccfa62f22","components/core/Card.jsx":"6cf6770c9be9","components/core/IconButton.jsx":"f0446c31deab","components/core/Stat.jsx":"5d08ded7c386","components/core/Tag.jsx":"852b9c60c339","components/feedback/Dialog.jsx":"13983337ade6","components/feedback/Toast.jsx":"57a8fd112cf7","components/feedback/Tooltip.jsx":"7ea21f213f52","components/forms/Checkbox.jsx":"f58f1f62c333","components/forms/Field.jsx":"5a09901e6c08","components/forms/Input.jsx":"46949eb9babd","components/forms/Radio.jsx":"178a86b68648","components/forms/Select.jsx":"ed90e5ebdccd","components/forms/Switch.jsx":"0ed589083c48","components/funnel/Eyebrow.jsx":"8364809c6f74","components/funnel/GlassPanel.jsx":"13a058331579","components/funnel/GlowButton.jsx":"cf88610cdd1c","components/funnel/SerifAccent.jsx":"229e7801f374","components/navigation/Tabs.jsx":"b0ff8bdf4168","ui_kits/website/Funnel.jsx":"2c5b3d1cefc1","ui_kits/website/FunnelProof.jsx":"893e4044eb16","ui_kits/website/FunnelSystem.jsx":"db3684452bc7","ui_kits/website/image-slot.js":"d797f41b7d66","ui_kits/website/v1-archive/Closing.jsx":"dffc4091f02d","ui_kits/website/v1-archive/Hero.jsx":"4c6355aa04a5","ui_kits/website/v1-archive/Nav.jsx":"e8b7def91a0b","ui_kits/website/v1-archive/Sections.jsx":"d3cccec6074c"},"inlinedExternals":[],"unexposedExports":[{"name":"injectLfCss","sourcePath":"components/core/Button.jsx"}]} */

(() => {

const __ds_ns = (window.LeadfuseDesignSystem_e3be75 = window.LeadfuseDesignSystem_e3be75 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Emblem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* emblem-red.svg is a red square TILE with the LF glyph cut out — the backing div's color becomes the glyph color. */
function Emblem({
  size = 48,
  shape = 'square',
  tile = 'red',
  base = 'assets',
  style,
  ...rest
}) {
  const radius = shape === 'circle' ? '50%' : shape === 'app' ? Math.round(size * .22) : 0;
  const glyphTile = (w = '100%', h = '100%') => /*#__PURE__*/React.createElement("div", {
    style: {
      width: w,
      height: h,
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${base}/emblem-red.svg`,
    alt: "LF",
    style: {
      width: '100%',
      height: '100%',
      display: 'block'
    }
  }));
  if (tile === 'black') return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: size,
      height: size,
      borderRadius: radius,
      overflow: 'hidden',
      background: 'var(--lf-black)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...style
    }
  }, rest), glyphTile('56%', '56%'));
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: size,
      height: size,
      borderRadius: radius,
      overflow: 'hidden',
      ...style
    }
  }, rest), glyphTile());
}
Object.assign(__ds_scope, { Emblem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Emblem.jsx", error: String((e && e.message) || e) }); }

// components/brand/BrandPattern.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function BrandPattern({
  cols = 10,
  rows = 4,
  cell = 56,
  tileScale = .64,
  base = 'assets',
  style,
  ...rest
}) {
  const cells = [];
  for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) cells.push((r + c) % 2 === 1);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${cols},${cell}px)`,
      gridAutoRows: `${cell}px`,
      ...style
    }
  }, rest), cells.map((on, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, on && /*#__PURE__*/React.createElement(__ds_scope.Emblem, {
    size: Math.round(cell * tileScale),
    base: base
  }))));
}
Object.assign(__ds_scope, { BrandPattern });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/BrandPattern.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const lfLogoSrc = {
  primary: 'logo-primary@4x.png',
  'on-dark': 'logo-silver@4x.png',
  'on-red': 'logo-white@4x.png'
};
function Logo({
  variant = 'primary',
  height = 32,
  base = 'assets',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: `${base}/${lfLogoSrc[variant]}`,
    alt: "LEADFUSE",
    style: {
      height,
      width: 'auto',
      display: 'block',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.lf-btn{white-space:nowrap;font-family:var(--font-sans);font-weight:600;letter-spacing:.06em;text-transform:uppercase;border:1px solid transparent;border-radius:var(--radius-interactive);cursor:pointer;display:inline-flex;align-items:center;justify-content:center;gap:8px;transition:background var(--dur-fast) var(--ease-brand),color var(--dur-fast) var(--ease-brand),border-color var(--dur-fast) var(--ease-brand),transform var(--dur-fast) var(--ease-brand)}
.lf-btn:focus-visible{outline:none;box-shadow:var(--focus-ring)}
.lf-btn:active:not(:disabled){transform:translateY(1px)}
.lf-btn:disabled{cursor:not-allowed;opacity:.45}
.lf-btn--sm{font-size:11px;padding:8px 14px}
.lf-btn--md{font-size:13px;padding:12px 22px}
.lf-btn--lg{font-size:14px;padding:16px 32px}
.lf-btn--primary{background:var(--accent);color:#fff}
.lf-btn--primary:hover:not(:disabled){background:var(--accent-hover)}
.lf-btn--primary:active:not(:disabled){background:var(--accent-press)}
.lf-btn--dark{background:var(--lf-black);color:#fff}
.lf-btn--dark:hover:not(:disabled){background:#1E1E1E}
.lf-btn--outline{background:transparent;color:var(--text-heading);border-color:var(--text-heading)}
.lf-btn--outline:hover:not(:disabled){background:var(--lf-black);color:#fff}
.lf-btn--ghost{background:transparent;color:var(--text-heading);text-transform:none;letter-spacing:0;font-weight:500}
.lf-btn--ghost:hover:not(:disabled){background:rgba(0,0,0,.06)}
.lf-btn--on-dark{background:#fff;color:var(--lf-black)}
.lf-btn--on-dark:hover:not(:disabled){background:var(--lf-gray-300)}
.lf-btn--outline-on-dark{background:transparent;color:#fff;border-color:#fff}
.lf-btn--outline-on-dark:hover:not(:disabled){background:#fff;color:var(--lf-black)}
.lf-btn--block{display:flex;width:100%}
`;
function injectLfCss(id, text) {
  if (typeof document !== 'undefined' && !document.getElementById(id)) {
    const s = document.createElement('style');
    s.id = id;
    s.textContent = text;
    document.head.appendChild(s);
  }
}
function Button({
  variant = 'primary',
  size = 'md',
  block = false,
  children,
  className = '',
  ...rest
}) {
  injectLfCss('lf-css-button', css);
  return /*#__PURE__*/React.createElement("button", _extends({
    className: `lf-btn lf-btn--${size} lf-btn--${variant}${block ? ' lf-btn--block' : ''} ${className}`
  }, rest), children);
}
Object.assign(__ds_scope, { injectLfCss, Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/brand/SectionHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.lf-sh{font-family:var(--font-sans);display:flex;flex-direction:column;gap:14px;max-width:560px}
.lf-sh__eyebrow{font-size:12px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;color:var(--accent)}
.lf-sh__title{font-size:var(--fs-h1);font-weight:800;line-height:1.05;letter-spacing:-.01em;color:var(--text-heading);margin:0;text-wrap:pretty}
.lf-sh__kicker{font-size:16px;line-height:1.6;color:var(--text-body);margin:0}
.lf-sh--dark .lf-sh__title{color:#fff}
.lf-sh--dark .lf-sh__kicker{color:var(--text-on-dark-muted)}
.lf-sh--center{align-items:center;text-align:center;margin-inline:auto}
`;
function SectionHeader({
  eyebrow,
  title,
  kicker,
  dark = false,
  center = false,
  className = '',
  ...rest
}) {
  __ds_scope.injectLfCss('lf-css-sh', css);
  return /*#__PURE__*/React.createElement("header", _extends({
    className: `lf-sh${dark ? ' lf-sh--dark' : ''}${center ? ' lf-sh--center' : ''} ${className}`
  }, rest), eyebrow && /*#__PURE__*/React.createElement("span", {
    className: "lf-sh__eyebrow"
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "lf-sh__title"
  }, title), kicker && /*#__PURE__*/React.createElement("p", {
    className: "lf-sh__kicker"
  }, kicker));
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.lf-badge{display:inline-flex;align-items:center;gap:6px;font-family:var(--font-sans);font-size:10px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;padding:5px 10px;border-radius:6px;border:1px solid transparent}
.lf-badge--red{background:var(--accent);color:#fff}
.lf-badge--black{background:var(--lf-black);color:#fff}
.lf-badge--amber{background:var(--accent-highlight);color:#000}
.lf-badge--orange{background:var(--accent-support);color:#fff}
.lf-badge--tint{background:var(--lf-red-tint);color:var(--accent)}
.lf-badge--outline{background:transparent;color:var(--text-heading);border-color:var(--text-heading)}
.lf-badge--on-dark{background:transparent;color:#fff;border-color:var(--border-on-dark)}
.lf-badge__dot{width:6px;height:6px;border-radius:50%;background:currentColor}
`;
function Badge({
  tone = 'red',
  dot = false,
  children,
  className = '',
  ...rest
}) {
  __ds_scope.injectLfCss('lf-css-badge', css);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `lf-badge lf-badge--${tone} ${className}`
  }, rest), dot && /*#__PURE__*/React.createElement("i", {
    className: "lf-badge__dot"
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.lf-card{font-family:var(--font-sans);border-radius:var(--radius-card);background:var(--surface-card);color:var(--text-body)}
.lf-card--line{border:var(--border-light)}
.lf-card--shadow{box-shadow:var(--shadow-card)}
.lf-card--dark{background:var(--surface-dark-raised);color:var(--text-on-dark);border:var(--border-dark)}
.lf-card--black{background:var(--surface-dark);color:var(--text-on-dark);border:var(--border-dark)}
.lf-card--red{background:var(--accent);color:#fff}
.lf-card--accent-top{border-top:3px solid var(--accent)}
`;
const lfCardPad = {
  none: '0',
  sm: '16px',
  md: '24px',
  lg: '40px'
};
function Card({
  variant = 'line',
  accentTop = false,
  pad = 'md',
  children,
  className = '',
  style,
  ...rest
}) {
  __ds_scope.injectLfCss('lf-css-card', css);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `lf-card lf-card--${variant}${accentTop ? ' lf-card--accent-top' : ''} ${className}`,
    style: {
      padding: lfCardPad[pad],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.lf-iconbtn{display:inline-flex;align-items:center;justify-content:center;border:1px solid transparent;border-radius:var(--radius-interactive);cursor:pointer;transition:background var(--dur-fast) var(--ease-brand),color var(--dur-fast) var(--ease-brand)}
.lf-iconbtn:focus-visible{outline:none;box-shadow:var(--focus-ring)}
.lf-iconbtn:disabled{cursor:not-allowed;opacity:.45}
.lf-iconbtn--sm{width:32px;height:32px}
.lf-iconbtn--md{width:40px;height:40px}
.lf-iconbtn--lg{width:48px;height:48px}
.lf-iconbtn--primary{background:var(--accent);color:#fff}
.lf-iconbtn--primary:hover:not(:disabled){background:var(--accent-hover)}
.lf-iconbtn--dark{background:var(--lf-black);color:#fff}
.lf-iconbtn--dark:hover:not(:disabled){background:#1E1E1E}
.lf-iconbtn--outline{background:transparent;color:var(--text-heading);border-color:var(--lf-gray-300)}
.lf-iconbtn--outline:hover:not(:disabled){border-color:var(--text-heading)}
.lf-iconbtn--ghost{background:transparent;color:var(--text-heading)}
.lf-iconbtn--ghost:hover:not(:disabled){background:rgba(0,0,0,.06)}
.lf-iconbtn--on-dark{background:transparent;color:#fff;border-color:var(--border-on-dark)}
.lf-iconbtn--on-dark:hover:not(:disabled){border-color:#fff}
`;
function IconButton({
  variant = 'outline',
  size = 'md',
  label,
  children,
  className = '',
  ...rest
}) {
  __ds_scope.injectLfCss('lf-css-iconbtn', css);
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    title: label,
    className: `lf-iconbtn lf-iconbtn--${size} lf-iconbtn--${variant} ${className}`
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.lf-stat{font-family:var(--font-sans);display:flex;flex-direction:column;gap:6px}
.lf-stat__label{font-size:11px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:var(--text-muted)}
.lf-stat__value{font-size:44px;font-weight:800;line-height:1;color:var(--text-heading);letter-spacing:-.01em}
.lf-stat__delta{font-size:13px;font-weight:600}
.lf-stat--dark .lf-stat__label{color:var(--text-on-dark-muted)}
.lf-stat--dark .lf-stat__value{color:#fff}
`;
function Stat({
  label,
  value,
  delta,
  deltaTone = 'amber',
  dark = false,
  className = '',
  ...rest
}) {
  __ds_scope.injectLfCss('lf-css-stat', css);
  const tones = {
    amber: 'var(--accent-highlight)',
    orange: 'var(--accent-support)',
    red: 'var(--accent)',
    muted: 'var(--text-muted)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `lf-stat${dark ? ' lf-stat--dark' : ''} ${className}`
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "lf-stat__label"
  }, label), /*#__PURE__*/React.createElement("span", {
    className: "lf-stat__value"
  }, value), delta && /*#__PURE__*/React.createElement("span", {
    className: "lf-stat__delta",
    style: {
      color: tones[deltaTone]
    }
  }, delta));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stat.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.lf-tag{display:inline-flex;align-items:center;gap:8px;font-family:var(--font-sans);font-size:12px;font-weight:500;padding:6px 12px;border:1px solid var(--lf-gray-300);background:#fff;color:var(--text-body);border-radius:8px}
.lf-tag--dark{background:var(--surface-dark-raised);border-color:var(--border-on-dark);color:#fff}
.lf-tag__x{all:unset;cursor:pointer;font-size:13px;line-height:1;color:var(--text-muted);display:inline-flex}
.lf-tag__x:hover{color:var(--accent)}
`;
function Tag({
  dark = false,
  onRemove,
  children,
  className = '',
  ...rest
}) {
  __ds_scope.injectLfCss('lf-css-tag', css);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `lf-tag${dark ? ' lf-tag--dark' : ''} ${className}`
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("button", {
    className: "lf-tag__x",
    "aria-label": "Remove",
    onClick: onRemove
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.lf-dialog-ov{position:fixed;inset:0;background:rgba(0,0,0,.6);display:flex;align-items:center;justify-content:center;z-index:1000;font-family:var(--font-sans)}
.lf-dialog{border-radius:var(--radius-card);overflow:hidden;background:#fff;width:min(480px,calc(100vw - 48px));box-shadow:var(--shadow-pop);border-top:3px solid var(--accent)}
.lf-dialog__head{display:flex;align-items:flex-start;justify-content:space-between;padding:24px 24px 0}
.lf-dialog__title{font-size:22px;font-weight:700;color:var(--text-heading);line-height:1.2}
.lf-dialog__x{all:unset;cursor:pointer;font-size:20px;line-height:1;color:var(--text-muted);padding:2px 6px}
.lf-dialog__x:hover{color:var(--accent)}
.lf-dialog__body{padding:12px 24px 24px;font-size:14px;color:var(--text-body);line-height:1.6}
.lf-dialog__foot{display:flex;justify-content:flex-end;gap:10px;padding:0 24px 24px}
`;
function Dialog({
  open,
  title,
  onClose,
  footer,
  children,
  className = '',
  ...rest
}) {
  __ds_scope.injectLfCss('lf-css-dialog', css);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "lf-dialog-ov",
    onClick: e => {
      if (e.target === e.currentTarget && onClose) onClose();
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    "aria-label": typeof title === 'string' ? title : undefined,
    className: `lf-dialog ${className}`
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "lf-dialog__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lf-dialog__title"
  }, title), onClose && /*#__PURE__*/React.createElement("button", {
    className: "lf-dialog__x",
    "aria-label": "Close",
    onClick: onClose
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    className: "lf-dialog__body"
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    className: "lf-dialog__foot"
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.lf-toast{border-radius:12px;font-family:var(--font-sans);display:flex;align-items:flex-start;gap:12px;background:var(--surface-dark-raised);color:#fff;border-left:3px solid var(--accent);padding:14px 16px;box-shadow:var(--shadow-dark);max-width:380px}
.lf-toast--amber{border-left-color:var(--accent-highlight)}
.lf-toast--white{background:#fff;color:var(--text-heading);box-shadow:var(--shadow-pop)}
.lf-toast__title{font-size:13px;font-weight:700;letter-spacing:.02em}
.lf-toast__msg{font-size:12.5px;color:var(--text-on-dark-muted);line-height:1.5;margin-top:2px}
.lf-toast--white .lf-toast__msg{color:var(--text-muted)}
.lf-toast__x{all:unset;cursor:pointer;margin-left:auto;color:inherit;opacity:.6;font-size:16px;line-height:1}
.lf-toast__x:hover{opacity:1}
.lf-toast-stack{position:fixed;bottom:24px;right:24px;display:flex;flex-direction:column;gap:10px;z-index:1100}
`;
function Toast({
  title,
  message,
  tone = 'red',
  onDismiss,
  className = '',
  ...rest
}) {
  __ds_scope.injectLfCss('lf-css-toast', css);
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    className: `lf-toast${tone !== 'red' ? ` lf-toast--${tone}` : ''} ${className}`
  }, rest), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "lf-toast__title"
  }, title), message && /*#__PURE__*/React.createElement("div", {
    className: "lf-toast__msg"
  }, message)), onDismiss && /*#__PURE__*/React.createElement("button", {
    className: "lf-toast__x",
    "aria-label": "Dismiss",
    onClick: onDismiss
  }, "\xD7"));
}
function ToastStack({
  children
}) {
  __ds_scope.injectLfCss('lf-css-toast', css);
  return /*#__PURE__*/React.createElement("div", {
    className: "lf-toast-stack"
  }, children);
}
Object.assign(__ds_scope, { Toast, ToastStack });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.lf-tip{position:relative;display:inline-flex}
.lf-tip__bubble{position:absolute;bottom:calc(100% + 8px);left:50%;transform:translateX(-50%) translateY(2px);background:var(--lf-black);color:#fff;font-family:var(--font-sans);font-size:12px;line-height:1.4;padding:7px 10px;border-radius:8px;white-space:nowrap;opacity:0;pointer-events:none;transition:opacity var(--dur-fast) var(--ease-brand),transform var(--dur-fast) var(--ease-brand);z-index:50}
.lf-tip__bubble::after{content:'';position:absolute;top:100%;left:50%;transform:translateX(-50%);border:5px solid transparent;border-top-color:var(--lf-black)}
.lf-tip:hover .lf-tip__bubble,.lf-tip:focus-within .lf-tip__bubble{opacity:1;transform:translateX(-50%) translateY(0)}
`;
function Tooltip({
  text,
  children,
  className = '',
  ...rest
}) {
  __ds_scope.injectLfCss('lf-css-tip', css);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `lf-tip ${className}`
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    className: "lf-tip__bubble"
  }, text));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.lf-check{font-family:var(--font-sans);display:inline-flex;align-items:center;gap:10px;font-size:14px;color:var(--text-body);cursor:pointer;user-select:none}
.lf-check input{appearance:none;margin:0;width:18px;height:18px;border:1.5px solid var(--lf-gray-600);background:#fff;border-radius:0;display:inline-grid;place-content:center;cursor:pointer;transition:background var(--dur-fast) var(--ease-brand),border-color var(--dur-fast) var(--ease-brand)}
.lf-check input:focus-visible{outline:none;box-shadow:var(--focus-ring)}
.lf-check input:checked{background:var(--accent);border-color:var(--accent)}
.lf-check input:checked::before{content:'';width:10px;height:10px;background:#fff;clip-path:polygon(14% 44%,0 65%,50% 100%,100% 16%,80% 0,43% 62%)}
.lf-check input:disabled{background:var(--surface-sunken);border-color:var(--lf-gray-300);cursor:not-allowed}
.lf-check--dark{color:#fff}
.lf-check--dark input{background:transparent;border-color:var(--lf-gray-600)}
`;
function Checkbox({
  label,
  dark = false,
  className = '',
  ...rest
}) {
  __ds_scope.injectLfCss('lf-css-check', css);
  return /*#__PURE__*/React.createElement("label", {
    className: `lf-check${dark ? ' lf-check--dark' : ''} ${className}`
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox"
  }, rest)), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.lf-field{font-family:var(--font-sans);display:flex;flex-direction:column;gap:6px}
.lf-field__label{font-size:12px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--text-heading)}
.lf-field__label em{font-style:normal;color:var(--accent)}
.lf-field__hint{font-size:12px;color:var(--text-muted)}
.lf-field__hint--error{color:var(--accent)}
.lf-field--dark .lf-field__label{color:#fff}
.lf-field--dark .lf-field__hint{color:var(--text-on-dark-muted)}
`;
function Field({
  label,
  required = false,
  hint,
  error,
  dark = false,
  children,
  className = '',
  ...rest
}) {
  __ds_scope.injectLfCss('lf-css-field', css);
  return /*#__PURE__*/React.createElement("label", _extends({
    className: `lf-field${dark ? ' lf-field--dark' : ''} ${className}`
  }, rest), label && /*#__PURE__*/React.createElement("span", {
    className: "lf-field__label"
  }, label, required && /*#__PURE__*/React.createElement("em", null, " *")), children, (error || hint) && /*#__PURE__*/React.createElement("span", {
    className: `lf-field__hint${error ? ' lf-field__hint--error' : ''}`
  }, error || hint));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.lf-input{font-family:var(--font-sans);font-size:14px;color:var(--text-heading);background:#fff;border:1px solid var(--lf-gray-300);border-radius:var(--radius-interactive);padding:12px 14px;width:100%;box-sizing:border-box;transition:border-color var(--dur-fast) var(--ease-brand),box-shadow var(--dur-fast) var(--ease-brand)}
.lf-input::placeholder{color:var(--lf-gray-500)}
.lf-input:hover:not(:disabled){border-color:var(--lf-gray-600)}
.lf-input:focus{outline:none;border-color:var(--accent);box-shadow:0 0 0 3px var(--lf-red-tint)}
.lf-input:disabled{background:var(--surface-sunken);cursor:not-allowed}
.lf-input--error{border-color:var(--accent)}
.lf-input--dark{background:var(--surface-dark-raised);border-color:var(--border-on-dark);color:#fff}
.lf-input--dark::placeholder{color:var(--lf-gray-600)}
.lf-input--dark:focus{box-shadow:0 0 0 3px rgba(229,0,17,.25)}
.lf-input--sm{padding:8px 12px;font-size:13px}
.lf-input--lg{padding:16px 16px;font-size:15px}
`;
function Input({
  size = 'md',
  error = false,
  dark = false,
  className = '',
  ...rest
}) {
  __ds_scope.injectLfCss('lf-css-input', css);
  return /*#__PURE__*/React.createElement("input", _extends({
    className: `lf-input lf-input--${size}${error ? ' lf-input--error' : ''}${dark ? ' lf-input--dark' : ''} ${className}`
  }, rest));
}
function Textarea({
  rows = 4,
  error = false,
  dark = false,
  className = '',
  ...rest
}) {
  __ds_scope.injectLfCss('lf-css-input', css);
  return /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    className: `lf-input${error ? ' lf-input--error' : ''}${dark ? ' lf-input--dark' : ''} ${className}`,
    style: {
      resize: 'vertical'
    }
  }, rest));
}
Object.assign(__ds_scope, { Input, Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.lf-radio{font-family:var(--font-sans);display:inline-flex;align-items:center;gap:10px;font-size:14px;color:var(--text-body);cursor:pointer;user-select:none}
.lf-radio input{appearance:none;margin:0;width:18px;height:18px;border:1.5px solid var(--lf-gray-600);border-radius:50%;background:#fff;display:inline-grid;place-content:center;cursor:pointer;transition:border-color var(--dur-fast) var(--ease-brand)}
.lf-radio input:focus-visible{outline:none;box-shadow:var(--focus-ring)}
.lf-radio input:checked{border-color:var(--accent);border-width:2px}
.lf-radio input:checked::before{content:'';width:9px;height:9px;border-radius:50%;background:var(--accent)}
.lf-radio input:disabled{background:var(--surface-sunken);cursor:not-allowed}
.lf-radio--dark{color:#fff}
.lf-radio--dark input{background:transparent}
`;
function Radio({
  label,
  dark = false,
  className = '',
  ...rest
}) {
  __ds_scope.injectLfCss('lf-css-radio', css);
  return /*#__PURE__*/React.createElement("label", {
    className: `lf-radio${dark ? ' lf-radio--dark' : ''} ${className}`
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio"
  }, rest)), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
const css = `
.lf-select{position:relative;display:block;width:100%}
.lf-select select{appearance:none;font-family:var(--font-sans);font-size:14px;color:var(--text-heading);background:#fff;border:1px solid var(--lf-gray-300);border-radius:var(--radius-interactive);padding:12px 40px 12px 14px;width:100%;cursor:pointer;transition:border-color var(--dur-fast) var(--ease-brand)}
.lf-select select:hover{border-color:var(--lf-gray-600)}
.lf-select select:focus{outline:none;border-color:var(--accent);box-shadow:0 0 0 3px var(--lf-red-tint)}
.lf-select__chev{position:absolute;right:14px;top:50%;transform:translateY(-50%);pointer-events:none;color:var(--text-heading);font-size:11px}
.lf-select--dark select{background:var(--surface-dark-raised);border-color:var(--border-on-dark);color:#fff}
.lf-select--dark .lf-select__chev{color:#fff}
`;
function Select({
  options = [],
  dark = false,
  className = '',
  ...rest
}) {
  __ds_scope.injectLfCss('lf-css-select', css);
  return /*#__PURE__*/React.createElement("span", {
    className: `lf-select${dark ? ' lf-select--dark' : ''} ${className}`
  }, /*#__PURE__*/React.createElement("select", rest, options.map(o => typeof o === 'string' ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    className: "lf-select__chev"
  }, "\u25BC"));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.lf-switch{font-family:var(--font-sans);display:inline-flex;align-items:center;gap:10px;font-size:14px;color:var(--text-body);cursor:pointer;user-select:none}
.lf-switch input{appearance:none;margin:0;width:40px;height:22px;background:var(--lf-gray-300);position:relative;cursor:pointer;transition:background var(--dur-base) var(--ease-brand);border-radius:0}
.lf-switch input::before{content:'';position:absolute;top:3px;left:3px;width:16px;height:16px;background:#fff;transition:transform var(--dur-base) var(--ease-brand)}
.lf-switch input:checked{background:var(--accent)}
.lf-switch input:checked::before{transform:translateX(18px)}
.lf-switch input:focus-visible{outline:none;box-shadow:var(--focus-ring)}
.lf-switch--dark{color:#fff}
.lf-switch--dark input{background:var(--lf-line-dark)}
.lf-switch--dark input:checked{background:var(--accent)}
`;
function Switch({
  label,
  dark = false,
  className = '',
  ...rest
}) {
  __ds_scope.injectLfCss('lf-css-switch', css);
  return /*#__PURE__*/React.createElement("label", {
    className: `lf-switch${dark ? ' lf-switch--dark' : ''} ${className}`
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch"
  }, rest)), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/funnel/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Eyebrow({
  center = false,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '.22em',
      textTransform: 'uppercase',
      color: 'var(--accent)',
      textAlign: center ? 'center' : 'left',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/funnel/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/funnel/GlassPanel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.lf-glass{background:var(--glass-bg);border:var(--glass-border);border-radius:var(--radius-card);transition:all var(--dur-base) var(--ease-brand)}
.lf-glass--blur{backdrop-filter:var(--glass-blur);-webkit-backdrop-filter:var(--glass-blur)}
.lf-glass--hover:hover{background:rgba(255,255,255,.06);border-color:rgba(229,0,17,.35);box-shadow:var(--glow-red-soft);transform:translateY(-4px)}
`;
const lfGlassPad = {
  none: '0',
  sm: '18px 20px',
  md: '28px 26px',
  lg: '40px 36px'
};
function GlassPanel({
  pad = 'md',
  hover = false,
  blur = false,
  children,
  className = '',
  style,
  ...rest
}) {
  __ds_scope.injectLfCss('lf-css-glass', css);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `lf-glass${hover ? ' lf-glass--hover' : ''}${blur ? ' lf-glass--blur' : ''} ${className}`,
    style: {
      padding: lfGlassPad[pad],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { GlassPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/funnel/GlassPanel.jsx", error: String((e && e.message) || e) }); }

// components/funnel/GlowButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.lf-glowbtn{font-family:var(--font-sans);font-weight:600;letter-spacing:.05em;text-transform:uppercase;border-radius:var(--radius-interactive);cursor:pointer;border:1px solid transparent;white-space:nowrap;transition:all var(--dur-base) var(--ease-brand);display:inline-flex;align-items:center;justify-content:center;gap:8px}
.lf-glowbtn--lg{font-size:14px;padding:18px 36px}
.lf-glowbtn--md{font-size:13px;padding:14px 26px}
.lf-glowbtn--sm{font-size:12px;padding:12px 22px}
.lf-glowbtn--solid{background:var(--accent);color:#fff;box-shadow:var(--glow-red)}
.lf-glowbtn--solid:hover{background:#FF1524;box-shadow:0 0 50px rgba(229,0,17,.55),0 0 140px rgba(229,0,17,.25);transform:translateY(-2px)}
.lf-glowbtn--solid:active{transform:translateY(0);background:var(--accent-press)}
.lf-glowbtn--ghost{background:transparent;color:#fff;border-color:rgba(255,255,255,.25)}
.lf-glowbtn--ghost:hover{background:rgba(255,255,255,.08)}
.lf-glowbtn--block{display:flex;width:100%}
.lf-glowbtn:focus-visible{outline:none;box-shadow:var(--focus-ring-dark)}
`;
function GlowButton({
  size = 'lg',
  ghost = false,
  block = false,
  children,
  className = '',
  ...rest
}) {
  __ds_scope.injectLfCss('lf-css-glowbtn', css);
  return /*#__PURE__*/React.createElement("button", _extends({
    className: `lf-glowbtn lf-glowbtn--${size} lf-glowbtn--${ghost ? 'ghost' : 'solid'}${block ? ' lf-glowbtn--block' : ''} ${className}`
  }, rest), children);
}
Object.assign(__ds_scope, { GlowButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/funnel/GlowButton.jsx", error: String((e && e.message) || e) }); }

// components/funnel/SerifAccent.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SerifAccent({
  red = false,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("em", _extends({
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontStyle: 'italic',
      fontWeight: 400,
      letterSpacing: 0,
      color: red ? 'var(--accent)' : 'inherit',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { SerifAccent });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/funnel/SerifAccent.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.lf-tabs{font-family:var(--font-sans);display:flex;gap:4px;border-bottom:1px solid var(--border-subtle)}
.lf-tabs__tab{all:unset;cursor:pointer;font-size:13px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--text-muted);padding:12px 18px;border-bottom:2px solid transparent;margin-bottom:-1px;transition:color var(--dur-fast) var(--ease-brand)}
.lf-tabs__tab:hover{color:var(--text-heading)}
.lf-tabs__tab[aria-selected="true"]{color:var(--text-heading);border-bottom-color:var(--accent)}
.lf-tabs__tab:focus-visible{box-shadow:var(--focus-ring)}
.lf-tabs--dark{border-bottom-color:var(--border-on-dark)}
.lf-tabs--dark .lf-tabs__tab{color:var(--text-on-dark-muted)}
.lf-tabs--dark .lf-tabs__tab:hover,.lf-tabs--dark .lf-tabs__tab[aria-selected="true"]{color:#fff}
`;
function Tabs({
  tabs = [],
  active,
  defaultActive,
  onChange,
  dark = false,
  className = '',
  ...rest
}) {
  __ds_scope.injectLfCss('lf-css-tabs', css);
  const [inner, setInner] = React.useState(defaultActive ?? tabs[0]);
  const cur = active !== undefined ? active : inner;
  const pick = t => {
    if (active === undefined) setInner(t);
    onChange && onChange(t);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    className: `lf-tabs${dark ? ' lf-tabs--dark' : ''} ${className}`
  }, rest), tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    role: "tab",
    "aria-selected": t === cur,
    className: "lf-tabs__tab",
    onClick: () => pick(t)
  }, t)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Funnel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const LFNS = window.LeadfuseDesignSystem_e3be75 || {};
const lfB = '../../assets';
/* Fallbacks: the compiled bundle only picks up components/funnel/* at end-of-turn; the page must render on a stale bundle too. */
function FallbackCta({
  children,
  size = 'lg',
  ghost = false,
  block = false,
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const base = {
    fontFamily: 'var(--font-sans)',
    fontWeight: 600,
    letterSpacing: '.05em',
    textTransform: 'uppercase',
    fontSize: size === 'lg' ? 14 : size === 'md' ? 13 : 12,
    padding: size === 'lg' ? '18px 36px' : size === 'md' ? '14px 26px' : '12px 22px',
    borderRadius: 10,
    cursor: 'pointer',
    transition: 'all .24s cubic-bezier(.4,0,.2,1)',
    border: '1px solid transparent',
    whiteSpace: 'nowrap',
    width: block ? '100%' : undefined,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center'
  };
  const solid = {
    background: h ? '#FF1524' : '#E50011',
    color: '#fff',
    boxShadow: h ? '0 0 50px rgba(229,0,17,.55),0 0 140px rgba(229,0,17,.25)' : 'var(--glow-red)',
    transform: h ? 'translateY(-2px)' : 'none'
  };
  const gh = {
    background: h ? 'rgba(255,255,255,.08)' : 'transparent',
    color: '#fff',
    border: '1px solid rgba(255,255,255,.25)'
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    style: {
      ...base,
      ...(ghost ? gh : solid),
      ...style
    },
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false)
  }, rest), children);
}
function FallbackKicker({
  children,
  center,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '.22em',
      textTransform: 'uppercase',
      color: '#E50011',
      textAlign: center ? 'center' : 'left',
      ...style
    }
  }, rest), children);
}
function FallbackSerifEm({
  children,
  red,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("em", _extends({
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontStyle: 'italic',
      fontWeight: 400,
      color: red ? '#E50011' : 'inherit',
      letterSpacing: 0,
      ...style
    }
  }, rest), children);
}
function FallbackLfLogo({
  variant,
  height = 22,
  base = lfB,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: `${base}/logo-silver@4x.png`,
    alt: "LEADFUSE",
    style: {
      height,
      width: 'auto',
      display: 'block',
      ...style
    }
  }, rest));
}
const Cta = LFNS.GlowButton || FallbackCta;
const Kicker = LFNS.Eyebrow || FallbackKicker;
const SerifEm = LFNS.SerifAccent || FallbackSerifEm;
const LfLogo = LFNS.Logo || FallbackLfLogo;
function FunnelNav({
  onBook
}) {
  const link = {
    color: 'rgba(255,255,255,.65)',
    fontSize: 13,
    fontWeight: 500,
    textDecoration: 'none',
    transition: 'color .15s'
  };
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 200,
      background: 'rgba(5,5,5,.65)',
      backdropFilter: 'var(--glass-blur)',
      WebkitBackdropFilter: 'var(--glass-blur)',
      borderBottom: '1px solid rgba(255,255,255,.07)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1140,
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      gap: 32,
      padding: '14px 32px'
    }
  }, /*#__PURE__*/React.createElement(LfLogo, {
    variant: "on-dark",
    height: 22,
    base: lfB
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 26,
      marginLeft: 'auto',
      alignItems: 'center'
    }
  }, [['#results', 'Results'], ['#system', 'The System'], ['#proof', 'Proof'], ['#faq', 'FAQ']].map(([h, t]) => /*#__PURE__*/React.createElement("a", {
    key: h,
    href: h,
    style: link,
    onMouseEnter: e => e.target.style.color = '#fff',
    onMouseLeave: e => e.target.style.color = 'rgba(255,255,255,.65)'
  }, t)), /*#__PURE__*/React.createElement(Cta, {
    size: "sm",
    onClick: onBook
  }, "Book my call"))));
}
function FunnelHero({
  onBook
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'relative',
      padding: '150px 32px 90px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -260,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 1100,
      height: 640,
      background: 'radial-gradient(ellipse at center,rgba(229,0,17,.16),transparent 62%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "rv",
    style: {
      maxWidth: 880,
      margin: '0 auto',
      textAlign: 'center',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      padding: '8px 18px',
      borderRadius: 999,
      background: 'var(--glass-bg)',
      border: 'var(--glass-border)',
      fontSize: 12.5,
      color: 'rgba(255,255,255,.75)',
      fontWeight: 500,
      letterSpacing: '.04em'
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: '#E50011',
      boxShadow: '0 0 12px rgba(229,0,17,.9)'
    }
  }), "For ceramic coating, PPF, tint & wrap shops doing $15K+/month"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '30px 0 0',
      fontSize: 72,
      fontWeight: 800,
      lineHeight: 1.03,
      letterSpacing: '-.02em',
      color: '#fff',
      textWrap: 'balance'
    }
  }, "Fill your calendar with ", /*#__PURE__*/React.createElement(SerifEm, {
    red: true
  }, "high-ticket"), " jobs."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '26px auto 0',
      maxWidth: 600,
      fontSize: 18,
      lineHeight: 1.65,
      color: 'rgba(255,255,255,.6)'
    }
  }, "The 12-week lead generation system built exclusively for automotive detailing and protection businesses. Stop chasing referrals \u2014 start booking qualified jobs on demand."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      justifyContent: 'center',
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement(Cta, {
    onClick: onBook
  }, "Book my call"), /*#__PURE__*/React.createElement(Cta, {
    ghost: true,
    onClick: () => {
      location.hash = 'results';
    }
  }, "See the results")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      fontSize: 13,
      color: 'rgba(255,255,255,.45)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#F5B300',
      letterSpacing: 2
    }
  }, "\u2605\u2605\u2605\u2605\u2605"), "\xA0 25+ verified Trustpilot reviews")), /*#__PURE__*/React.createElement("div", {
    className: "rv",
    style: {
      maxWidth: 940,
      margin: '64px auto 0',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: -1,
      borderRadius: 18,
      background: 'linear-gradient(135deg,rgba(229,0,17,.5),rgba(255,255,255,.08) 40%,rgba(229,0,17,.25))',
      filter: 'blur(.5px)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 16,
      overflow: 'hidden',
      aspectRatio: '16/9',
      background: '#0C0C0C',
      boxShadow: '0 40px 120px rgba(0,0,0,.7),var(--glow-red-soft)'
    }
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: "vsl-poster",
    shape: "rect",
    placeholder: "Drop the VSL thumbnail / a cinematic detailing still"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 88,
      height: 88,
      borderRadius: '50%',
      background: 'rgba(229,0,17,.92)',
      boxShadow: 'var(--glow-red)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "26",
    height: "26",
    viewBox: "0 0 24 24",
    fill: "#fff",
    style: {
      marginLeft: 4
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 5v14l11-7z"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      padding: '40px 24px 16px',
      background: 'linear-gradient(transparent,rgba(0,0,0,.75))',
      textAlign: 'center',
      fontSize: 13,
      color: 'rgba(255,255,255,.75)',
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      fontWeight: 600,
      pointerEvents: 'none'
    }
  }, "Watch: how the system books your calendar out \u2014 4 min"))));
}
Object.assign(window, {
  GlowButton: Cta,
  Eyebrow: Kicker,
  Serif: SerifEm,
  FunnelNav,
  FunnelHero,
  lfB
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Funnel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/FunnelProof.jsx
try { (() => {
function QuoteStrip() {
  const qs = [['“I\u2019ve never used an ad company that provides results this fast.”', 'Austin Elworth'], ['“First lead closed for $1,000 — let\u2019s continue to run it up.”', 'Patrick Coursin'], ['“Best week ever — about $8,000 just off the SMS blast.”', 'Mike Reynoso']];
  return /*#__PURE__*/React.createElement("div", {
    className: "rv",
    style: {
      borderTop: '1px solid rgba(255,255,255,.07)',
      borderBottom: '1px solid rgba(255,255,255,.07)',
      background: 'rgba(255,255,255,.015)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1140,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 0
    }
  }, qs.map(([q, n], i) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      padding: '26px 30px',
      borderLeft: i ? '1px solid rgba(255,255,255,.07)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      lineHeight: 1.55,
      color: 'rgba(255,255,255,.75)'
    }
  }, q), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 10,
      fontSize: 11,
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,.4)',
      fontWeight: 600
    }
  }, n)))));
}
function CaseStudy() {
  return /*#__PURE__*/React.createElement("section", {
    id: "results",
    style: {
      position: 'relative',
      padding: '110px 32px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: -300,
      top: '20%',
      width: 800,
      height: 600,
      background: 'radial-gradient(ellipse,rgba(229,0,17,.1),transparent 60%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1140,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 70,
      alignItems: 'center',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rv"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Case study \u2014 Caruso's Mobile Detailing"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '20px 0 0',
      fontSize: 52,
      fontWeight: 800,
      lineHeight: 1.05,
      letterSpacing: '-.02em',
      color: '#fff'
    }
  }, "Vincent went from ", /*#__PURE__*/React.createElement(Serif, null, "$10K"), " to ", /*#__PURE__*/React.createElement(Serif, {
    red: true
  }, "$70K+"), " a month."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '22px 0 0',
      fontSize: 16.5,
      lineHeight: 1.7,
      color: 'rgba(255,255,255,.6)',
      maxWidth: 460
    }
  }, "Same shop. Same crew. The difference: a lead system engineered for ceramic coating \u2014 Meta ads, instant SMS follow-up, and human scheduling that answers in under 5 minutes."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 44,
      marginTop: 36
    }
  }, [['7×', 'revenue in 12 months'], ['$1,500+', 'avg. ceramic ticket'], ['#1', 'shop in his city']].map(([v, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontSize: 44,
      color: '#fff',
      lineHeight: 1
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontSize: 11.5,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,.45)',
      fontWeight: 600
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    className: "rv",
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 16,
      overflow: 'hidden',
      border: 'var(--glass-border)',
      aspectRatio: '4/3',
      background: '#0C0C0C'
    }
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: "caruso-proof",
    shape: "rect",
    placeholder: "Drop Vincent Caruso's result screenshot / Trustpilot review"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 24,
      bottom: -28,
      right: 24,
      padding: '18px 22px',
      borderRadius: 14,
      background: 'rgba(12,12,12,.9)',
      backdropFilter: 'var(--glass-blur)',
      border: 'var(--glass-border)',
      boxShadow: '0 24px 60px rgba(0,0,0,.6)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#F5B300',
      letterSpacing: 2,
      fontSize: 13
    }
  }, "\u2605\u2605\u2605\u2605\u2605"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      fontSize: 13.5,
      lineHeight: 1.55,
      color: 'rgba(255,255,255,.8)'
    }
  }, "\u201CThe name people mention first when you ask about coating in my city \u2014 that's us now.\u201D")))));
}
function ProofWall() {
  const slots = [['proof-austin', 'Austin Elworth — “closed over 8K… 13K by end of day”'], ['proof-patrick', 'Patrick Coursin — two $1,000 closes in a day'], ['proof-jack', 'Jack TerHaar — “$19K on the schedule”'], ['proof-mike', 'Mike Reynoso — $8K week off SMS'], ['proof-christian', 'Christian Douglas — 6K booked in a day'], ['proof-tp', 'Trustpilot — 5-star review wall']];
  const quotes = [['“By this evening when we launched our Ceramic Coating Campaign I\u2019ve already secured $850. Pushing for a $6,000 week, next week.”', 'Austin Elworth', 'Launch night'], ['“We\u2019ve done over 4K in booked revenue from the offer and are continuing to close deals.”', 'Christian Douglas', 'Same-day booked revenue'], ['“I\u2019m finally starting to get the sales process dialed. We have $19K on the schedule right now.”', 'Jack TerHaar', 'On pace for a $50K month']];
  return /*#__PURE__*/React.createElement("section", {
    id: "proof",
    style: {
      padding: '110px 32px',
      borderTop: '1px solid rgba(255,255,255,.07)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1140,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rv",
    style: {
      textAlign: 'center',
      maxWidth: 640,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    center: true
  }, "The wall of proof"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '18px 0 0',
      fontSize: 52,
      fontWeight: 800,
      letterSpacing: '-.02em',
      color: '#fff',
      lineHeight: 1.05
    }
  }, "Real shops. Real Slack messages. ", /*#__PURE__*/React.createElement(Serif, {
    red: true
  }, "Real money.")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '18px 0 0',
      fontSize: 16,
      color: 'rgba(255,255,255,.55)',
      lineHeight: 1.65
    }
  }, "No stock testimonials. This is what clients send us, unprompted.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 18,
      marginTop: 56
    }
  }, quotes.map(([q, n, k], i) => /*#__PURE__*/React.createElement("div", {
    key: n,
    className: "rv",
    style: {
      gridRow: 'span 1',
      padding: '26px 26px 22px',
      borderRadius: 16,
      background: 'var(--glass-bg)',
      border: 'var(--glass-border)',
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14.5,
      lineHeight: 1.65,
      color: 'rgba(255,255,255,.85)'
    }
  }, q), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 12.5,
      fontWeight: 700,
      color: '#fff'
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 3,
      fontSize: 11,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: '#E50011',
      fontWeight: 600
    }
  }, k)))), slots.map(([id, ph]) => /*#__PURE__*/React.createElement("div", {
    key: id,
    className: "rv",
    style: {
      borderRadius: 16,
      overflow: 'hidden',
      border: 'var(--glass-border)',
      aspectRatio: '4/3',
      background: '#0B0B0B'
    }
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: id,
    shape: "rect",
    placeholder: ph
  }))))));
}
Object.assign(window, {
  QuoteStrip,
  CaseStudy,
  ProofWall
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/FunnelProof.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/FunnelSystem.jsx
try { (() => {
function TheSystem() {
  const steps = [['01', 'Ads engineered for detailers', 'Meta campaigns built from 100+ launches in this exact niche — creative, targeting and offers proven on ceramic, PPF, tint and wrap.'], ['02', 'Every lead answered in minutes', 'The LEADFUSE App fires SMS follow-up instantly and human scheduling gets qualified car owners onto your calendar — before they call the shop down the road.'], ['03', 'You close high-ticket work', 'Pre-qualified appointments, a proven closing framework, and continuation past launch. You do the work you\u2019re known for; the pipeline stays full.']];
  return /*#__PURE__*/React.createElement("section", {
    id: "system",
    style: {
      position: 'relative',
      padding: '110px 32px',
      borderTop: '1px solid rgba(255,255,255,.07)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: -300,
      bottom: -200,
      width: 800,
      height: 600,
      background: 'radial-gradient(ellipse,rgba(229,0,17,.09),transparent 60%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1140,
      margin: '0 auto',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rv",
    style: {
      maxWidth: 560
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "The system"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '18px 0 0',
      fontSize: 52,
      fontWeight: 800,
      letterSpacing: '-.02em',
      color: '#fff',
      lineHeight: 1.05
    }
  }, "One machine. ", /*#__PURE__*/React.createElement(Serif, {
    red: true
  }, "Twelve weeks.")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '18px 0 0',
      fontSize: 16,
      color: 'rgba(255,255,255,.55)',
      lineHeight: 1.65
    }
  }, "We build it, run it and optimize it. You take the jobs.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 18,
      marginTop: 54
    }
  }, steps.map(([n, t, d]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    className: "rv lf-sys-card",
    style: {
      padding: '30px 28px',
      borderRadius: 16,
      background: 'var(--glass-bg)',
      border: 'var(--glass-border)',
      transition: 'all .3s cubic-bezier(.4,0,.2,1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontStyle: 'italic',
      fontSize: 40,
      color: '#E50011',
      lineHeight: 1,
      textShadow: '0 0 30px rgba(229,0,17,.5)'
    }
  }, n), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '18px 0 10px',
      fontSize: 19,
      fontWeight: 700,
      color: '#fff'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      lineHeight: 1.65,
      color: 'rgba(255,255,255,.55)'
    }
  }, d)))), /*#__PURE__*/React.createElement("div", {
    className: "rv",
    style: {
      marginTop: 44,
      display: 'flex',
      justifyContent: 'center',
      gap: 0,
      flexWrap: 'wrap'
    }
  }, ['Freedom', 'Utility', 'Systemization', 'Excellence'].map((w, i) => /*#__PURE__*/React.createElement("span", {
    key: w,
    style: {
      fontSize: 12,
      letterSpacing: '.26em',
      textTransform: 'uppercase',
      fontWeight: 600,
      color: 'rgba(255,255,255,.35)',
      padding: '0 22px',
      borderLeft: i ? '1px solid rgba(255,255,255,.12)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: '#E50011'
    }
  }, w[0]), w.slice(1))))));
}
function Faq() {
  const [open, setOpen] = React.useState(0);
  const qa = [['I\u2019ve been burned by marketing agencies before. Why is this different?', 'Because we only do this. One niche — automotive detailing and protection — 100+ launches deep. You can read the Slack messages and Trustpilot reviews above; every one is a real shop owner you can look up.'], ['What if the leads are junk?', 'Leads are pre-qualified for service, vehicle and area before they reach your calendar, and every lead gets SMS follow-up plus human scheduling. Junk leads don\u2019t survive that filter.'], ['Do I have to run the software myself?', 'No. The LEADFUSE App (our CRM) comes set up and managed. Your only job: answer your calendar and close.'], ['What does it take on my side?', 'A shop doing $15K+/month, at least one tech besides you, capacity for more work, and a minimum $1,500/month ad budget paid directly to Meta.'], ['How fast until it\u2019s live?', 'Campaigns launch within the first week. Clients like Austin Elworth booked $850 the evening his campaign went live.']];
  return /*#__PURE__*/React.createElement("section", {
    id: "faq",
    style: {
      padding: '110px 32px',
      borderTop: '1px solid rgba(255,255,255,.07)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rv",
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    center: true
  }, "FAQ"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '18px 0 44px',
      fontSize: 44,
      fontWeight: 800,
      letterSpacing: '-.02em',
      color: '#fff'
    }
  }, "Straight answers.")), /*#__PURE__*/React.createElement("div", {
    className: "rv",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, qa.map(([q, a], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      borderRadius: 14,
      background: open === i ? 'rgba(255,255,255,.05)' : 'var(--glass-bg)',
      border: 'var(--glass-border)',
      overflow: 'hidden',
      transition: 'background .2s'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(open === i ? -1 : i),
    style: {
      all: 'unset',
      boxSizing: 'border-box',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      width: '100%',
      padding: '20px 24px',
      fontFamily: 'var(--font-sans)',
      fontSize: 15.5,
      fontWeight: 600,
      color: '#fff'
    }
  }, q, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#E50011',
      fontSize: 20,
      fontWeight: 400,
      transform: open === i ? 'rotate(45deg)' : 'none',
      transition: 'transform .2s',
      flexShrink: 0
    }
  }, "+")), open === i && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      padding: '0 24px 20px',
      fontSize: 14.5,
      lineHeight: 1.7,
      color: 'rgba(255,255,255,.6)'
    }
  }, a))))));
}
function FinalCta({
  onBook
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      padding: '130px 32px 120px',
      borderTop: '1px solid rgba(255,255,255,.07)',
      overflow: 'hidden',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: -320,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 1100,
      height: 600,
      background: 'radial-gradient(ellipse,rgba(229,0,17,.2),transparent 62%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "rv",
    style: {
      position: 'relative',
      maxWidth: 760,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 64,
      fontWeight: 800,
      letterSpacing: '-.02em',
      lineHeight: 1.05,
      color: '#fff'
    }
  }, "Stop chasing.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Serif, {
    red: true
  }, "Start closing.")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '24px auto 0',
      maxWidth: 480,
      fontSize: 16.5,
      lineHeight: 1.65,
      color: 'rgba(255,255,255,.6)'
    }
  }, "Book a 15-minute call. If your shop qualifies, your system is live within the week."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement(GlowButton, {
    onClick: onBook
  }, "Book my call")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      fontSize: 12.5,
      color: 'rgba(255,255,255,.35)'
    }
  }, "book.leadfuse.co \xB7 limited onboarding slots each month")));
}
function FunnelFooter() {
  const Logo = (window.LeadfuseDesignSystem_e3be75 || {}).Logo || (({
    height = 18,
    base
  }) => /*#__PURE__*/React.createElement("img", {
    src: `${base}/logo-silver@4x.png`,
    alt: "LEADFUSE",
    style: {
      height,
      width: 'auto',
      display: 'block'
    }
  }));
  const l = {
    color: 'rgba(255,255,255,.45)',
    fontSize: 12.5,
    textDecoration: 'none'
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: '1px solid rgba(255,255,255,.07)',
      padding: '40px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1140,
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      gap: 26
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "on-dark",
    height: 18,
    base: lfB
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgba(255,255,255,.28)',
      fontSize: 12
    }
  }, "\xA9 2026 LEADFUSE. All rights reserved."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: l
  }, "Instagram @LEADFUSE"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: l
  }, "Trustpilot"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: l
  }, "Privacy"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: l
  }, "Terms"))));
}
Object.assign(window, {
  TheSystem,
  Faq,
  FinalCta,
  FunnelFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/FunnelSystem.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever a design needs an image.
 * You control the slot's shape; it sizes to its container by default. When the search_stock_photos tool
 * is available, prefill the slot by default — write the photo's URL into
 * src (with credit/credit-href); the user can still fill or replace it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The sidecar is a SIBLING of the HTML file that uses this component: the
 * read is a document-relative fetch, and the host resolves the bridge's
 * sidecar writes into the previewed file's directory to match (same
 * contract as design_canvas.jsx). Pages in the same directory share one
 * sidecar; keep slot ids distinct across them.
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          Initial framing baseline: cover | contain.   (default 'cover')
 *                cover starts the image filling the frame (overflow cropped);
 *                contain starts it fully visible (letterboxed). Either way the
 *                user can always pan/scale from there — double-click, or the
 *                Edit control, enters reframe mode (drag to move, scroll or
 *                corner-handles to scale; Escape / click-out commits). The
 *                crop persists alongside the image in the sidecar.
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. Prefill it with a real
 *                photo via search_stock_photos when that tool is available
 *                (set credit/credit-href from the result). A user drop
 *                overrides it; clearing the drop reveals src again.
 *   credit       Attribution text shown as a small overlay at the
 *                bottom-left of the filled slot. REQUIRED whenever src
 *                points at any Unsplash host (images.unsplash.com,
 *                plus.unsplash.com, …): an Unsplash src with no credit
 *                renders an error tile INSTEAD of the photo (Unsplash
 *                terms forbid showing their photos unattributed). Use the
 *                exact form 'Photo by {photographer name} on Unsplash' —
 *                the overlay then links the name to credit-href and
 *                'Unsplash' to the Unsplash homepage, and links back to
 *                unsplash.com automatically get the required utm referral
 *                params appended at render time. The credit belongs to
 *                the src image, so it only shows while src is what's
 *                displayed — a user-dropped image hides it.
 *   credit-href  Link for the photographer's name in the credit overlay
 *                (their Unsplash profile URL from the stock-photo search
 *                results). http(s) URLs only — anything else renders the
 *                name as plain text.
 *
 * Sizing: the slot fills its container by default (width/height 100%).
 * Put it in a sized wrapper — absolutely positioned, a grid cell, a fixed
 * frame — and it takes exactly that box. When the parent's height is
 * indefinite (ordinary flow), it falls back to full width at a 3:2 aspect
 * ratio instead of collapsing. In a shrink-to-fit parent (a float,
 * width:max-content, an unsized absolute wrapper), percentages have
 * nothing to resolve against — size the slot or its wrapper explicitly
 * there. For a fixed-size slot, set
 * width/height on the element itself (inline style), which overrides the
 * default. When
 * layering content above a slot (full-bleed layouts), make the overlay
 * click-through — pointer-events: none on scrims/text plates, re-enabled
 * on interactive children — so the slot's hover controls stay reachable.
 * Keep the slot's bottom-left corner visually clear as well: the credit
 * overlay renders there, and a dark fade or text plate covering it hides
 * the attribution Unsplash's terms require — end the fade above that
 * corner, or keep it nearly transparent where the credit sits.
 *
 * Usage:
 *   <div style="position:relative;width:100%;height:100%">      <!-- full-bleed: -->
 *     <image-slot id="bg" shape="rect"></image-slot>            <!-- fills the wrapper -->
 *   </div>
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';

  // Unsplash terms require visible attribution wherever their photos
  // display, and every link back to unsplash.com must carry utm referral
  // params. Two render-time rules enforce that here:
  //  - an Unsplash-src slot with NO credit attribute renders an error
  //    tile INSTEAD of the photo (an uncredited Unsplash photo on screen
  //    is itself the terms violation, so it never renders bare);
  //  - rendered credit links pointing at unsplash.com get the referral
  //    params appended when absent (credit-href values live in page
  //    content that can't be edited after the fact).
  // Keep the utm_source value in sync with UTM_SOURCE in
  // platform/web-agent/unsplash.ts — this file is a project-local
  // artifact and cannot import it (equality is pinned by tests).
  const UNSPLASH_HOMEPAGE_HREF = 'https://unsplash.com/?utm_source=claude_design&utm_medium=referral';
  // Host rule mirrors the hotlink validator that admits Unsplash srcs into
  // pages in the first place (cdn$ in unsplash.ts: apex or any subdomain)
  // — Unsplash+ results serve from plus.unsplash.com, not just images.*,
  // and an admitted-but-uncredited photo must error whatever unsplash
  // host it rides on.
  // Trailing-dot FQDNs (images.unsplash.com.) are the same host to the
  // browser but would miss the regex — strip one dot so the check fails
  // CLOSED (unrecognized-but-real Unsplash srcs must error, not render).
  const isUnsplashHost = u => {
    try {
      return /(^|\.)unsplash\.com$/.test(new URL(u, document.baseURI).hostname.replace(/\.$/, ''));
    } catch {
      return false;
    }
  };
  // Render-time referral normalization for links back to Unsplash:
  // appends utm_source/utm_medium when absent, preserves every existing
  // query param, never overwrites an existing utm_source, and passes
  // non-Unsplash URLs through untouched. Input is an ABSOLUTE validated
  // http(s) URL (the credit render funnel resolves + validates first).
  const withReferral = href => {
    try {
      const u = new URL(href);
      if (!/(^|\.)unsplash\.com$/.test(u.hostname.replace(/\.$/, ''))) {
        return href;
      }
      if (!u.searchParams.has('utm_source')) {
        u.searchParams.set('utm_source', 'claude_design');
      }
      if (!u.searchParams.has('utm_medium')) {
        u.searchParams.set('utm_medium', 'referral');
      }
      return u.toString();
    } catch (e) {
      return href;
    }
  };
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  // Unload-time flush: save()'s serialization defers a mid-RTT re-fire to a
  // .then that never runs in an unloading document, silently dropping a
  // pagehide commit. Post the current slots immediately instead — content
  // is a superset snapshot of any in-flight save's, the write is a
  // whole-file last-writer-wins replace, and postMessage FIFO delivers it
  // to the host after the in-flight one, so a backend-side reorder at
  // worst reproduces the dropped-commit outcome this flush improves on.
  // Guarded on the initial sidecar read: pre-hydration slots can miss
  // other slots' persisted entries, and flushing it would clobber them —
  // that narrow case stays best-effort (the in-memory merge in load()
  // cannot happen in an unloading document anyway).
  function flushNow() {
    if (!loaded) return;
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    try {
      Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {});
    } catch (e) {}
  }
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet =
  // Fill the container by default: slots are usually placed inside a
  // sized wrapper (a hero frame, a grid cell, an inset:0 layer) and are
  // expected to take that box — a fixed intrinsic size would render as
  // a small tile in the corner of a full-bleed wrapper instead.
  // aspect-ratio is the companion fallback that keeps a bare slot
  // visible when the parent's height is indefinite: height:100%
  // resolves to auto there, and the ratio then derives height from
  // width instead of letting the slot collapse to zero height.
  // Explicit width/height on the element override all of this.
  // color:inherit (not a fixed near-black): the placeholder chrome —
  // empty-state icon/caption (currentColor) and the dashed ring — must
  // read on dark decks too, and the slide's own text color is the one
  // color guaranteed to contrast with the slide background. The soft
  // look comes from opacity on those parts, not from a baked-in alpha.
  ':host{display:block;position:relative;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;' + '  width:100%;height:100%;aspect-ratio:3/2}' + '.empty .cap,.empty .sub{opacity:.75}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(127,127,127,.08)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  // popover=manual promotes the spill to the top layer on reframe, so it is
  // not clipped by any overflow:hidden / clip-path / scroll-container
  // ancestor (a plain z-index can't escape overflow clipping). UA popover
  // defaults (inset:0;margin:auto) are reset; _applyView sets viewport px.
  '.spill{position:fixed;margin:0;inset:auto;border:0;padding:0;background:transparent;' + '  overflow:visible;transform:translate(-50%,-50%);z-index:1;cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px}' + '.empty:hover .sub{opacity:1}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed currentColor;' + '  opacity:.35;transition:border-color .12s,opacity .12s}' + ':host([data-over]) .ring{border-color:#c96442;opacity:1}' + ':host([data-filled]) .ring{display:none}' +
  // Controls overlay INSIDE the frame, pinned to the top-right corner, so
  // a full-bleed slot in an overflow:hidden container still shows them
  // (the old below-mask placement got clipped). Credit sits bottom-left,
  // so top-right avoids collision. The blurred pill background keeps them
  // legible over the image.
  // The UA [popover] base rule styles the element in EVERY state (only
  // display:none is gated on :not(:popover-open), and the display:flex
  // below overrides that) — so the UA resets live HERE, like .spill's,
  // or the ordinary hover-state strip renders as a bordered Canvas box
  // centered by margin:auto. inset:auto precedes top/right (shorthand).
  '.ctl{position:absolute;inset:auto;top:8px;right:8px;margin:0;border:0;padding:0;' + '  background:transparent;overflow:visible;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' +
  // While reframing, the spill owns the top layer and would swallow every
  // click on the in-frame controls. Promoting .ctl into the top layer
  // ABOVE the spill (shown after it — later popovers stack higher) keeps
  // Edit-as-toggle and Replace clickable mid-reframe. _applyView pins it
  // to the frame's top-right in viewport px (translateX(-100%)
  // right-aligns against the computed left edge); inset:auto clears the
  // base rule's top/right so the inline left/top position it alone.
  '.ctl:popover-open{position:fixed;inset:auto;transform:translateX(-100%)}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}' +
  // Replacement in flight: after a src swap the browser keeps painting
  // the PREVIOUS image until the new one decodes, so a Replace would
  // flash the old photo and then pop. Hide the stale frame (visibility,
  // not display — _applyView geometry still applies) and spin until the
  // new image reports in (load/error clears data-swapping).
  ':host([data-swapping]) .frame img{visibility:hidden}' + '.loading{position:absolute;inset:0;display:none;align-items:center;' + '  justify-content:center;pointer-events:none}' + ':host([data-swapping]) .loading{display:flex}' + '.loading::after{content:"";width:22px;height:22px;border-radius:50%;' + '  border:2px solid rgba(127,127,127,.25);border-top-color:currentColor;' + '  animation:om-slot-spin .7s linear infinite}' + '@keyframes om-slot-spin{to{transform:rotate(360deg)}}' +
  // Reduced motion: the static two-tone ring still reads as "working".
  '@media (prefers-reduced-motion:reduce){.loading::after{animation:none}}' + '.credit{position:absolute;left:6px;bottom:6px;max-width:calc(100% - 12px);display:none;' + '  padding:3px 7px;border-radius:5px;background:rgba(0,0,0,.55);color:#fff;' + '  font:10px/1.2 system-ui,-apple-system,sans-serif;text-decoration:none;' + '  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;backdrop-filter:blur(6px)}' +
  // The credit is a SPAN holding one or two <a>s (Unsplash's prescribed
  // form links the photographer AND Unsplash) — anchors style inline so
  // the overlay reads as one line of text.
  '.credit a{color:inherit;text-decoration:none}' + '.credit a:hover,.credit a:focus-visible{text-decoration:underline}' + ':host([data-filled][data-credit]) .credit{display:block}' +
  // Exports must ship JUST the image — no hover controls, no credit chip
  // (the host marks <html data-om-exporting> for the capture window; the
  // page-level hide script can't reach shadow DOM, this rule can).
  ':host-context([data-om-exporting]) .ctl,' + ':host-context([data-om-exporting]) .credit{display:none !important}' +
  // Print must ship just the image too: the hover-gated controls can be
  // mid-hover when print() fires, and the credit chip is screen chrome —
  // the same rule the capture window gets, keyed on print media instead
  // of the host's data-om-exporting mark (the print path sets no mark).
  '@media print{.ctl,.credit{display:none !important}}' +
  // No export-window mask rules here on purpose: the export capture
  // releases the replacement mask by REMOVING data-swapping (the
  // shadow-root pass in pages/export/shared.ts HIDE_EXPORT_CHROME_SCRIPT)
  // — attribute removal works in every engine (:host-context is
  // Chromium-only), is scoped by construction to slots actually
  // mid-swap, and hides the spinner through the same gate. A masked img
  // would otherwise be silently dropped from PPTX decks (the capture
  // walk skips visibility:hidden imgs).
  // Attribution error tile: REPLACES the photo when an Unsplash src has
  // no credit attribute — rendering the photo uncredited is the terms
  // violation, so the photo must not appear at all.
  // Calm and neutral on purpose (review feedback): the tile informs the
  // user; the fix instructions are machine-facing (usage docblock, tool
  // description, and the turn-end scan's bounce copy name the attributes
  // for the agent).
  '.attr-error{position:absolute;inset:0;display:none;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  background:#f2f1ef;color:#6e6c66;user-select:none;' + '  font:13px/1.45 system-ui,-apple-system,sans-serif}' + '.attr-error svg{opacity:.55}' + '.attr-error .cap{max-width:92%;font-weight:500;letter-spacing:.01em}' + ':host([data-attribution-error]) .attr-error{display:flex}' + ':host([data-attribution-error]) .ring{display:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  const warnIcon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>' + '<path d="M12 9v4"/><path d="M12 17h.01"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'placeholder', 'src', 'id', 'credit', 'credit-href'];
    }

    /** Duplicate-slide hook (called by deck-stage, see its
     *  _remintDuplicateIds): copy this id's stored image, if any, under a
     *  freshly minted key and return that key — so a duplicated slide's
     *  slot keeps its dropped photo instead of reverting to the
     *  placeholder. 'isFree' is the caller's uniqueness check (document
     *  ids); candidates must ALSO be unused in the sidecar, which can
     *  hold keys from other pages sharing the project root. (An EMPTY
     *  slot on another page leaves no sidecar entry, so its id is not
     *  detectable here — a minted key can collide with it and that slot
     *  would show this photo. Same blast radius as two pages reusing an
     *  id by hand, which the shared sidecar already permits.) Returns null
     *  when no id could be minted (caller strips the id, today's
     *  behavior). */
    static cloneSlot(fromId, isFree) {
      if (typeof fromId !== 'string' || !fromId) return null;
      // Pre-hydration the store can't veto candidates or source the copy
      // — degrade to the strip (today's behavior) rather than mint
      // against keys we can't see yet. Any rendered (= droppable) slot
      // means load() has already settled.
      if (!loaded) return null;
      const stem = fromId.replace(/-\d+$/, '') || fromId;
      for (let n = 2; n < 100; n++) {
        const toId = stem + '-' + n;
        if (toId === fromId) continue;
        if (slots[toId] !== undefined) {
          // Reuse a key holding this exact value (bytes AND crop) if no
          // live element here owns it — a duplicate op the host refused
          // after minting leaves such a key behind, and reusing keeps
          // refused retries from accumulating one orphaned copy per
          // attempt. Full equality (not just bytes) so a byte-identical
          // key another PAGE owns with its own crop is stepped past, not
          // adopted or rewritten. (Entries without .u never match.)
          const prev = getSlot(toId);
          const cur = getSlot(fromId);
          if (!(prev && cur && prev.u && prev.u === cur.u && prev.s === cur.s && prev.x === cur.x && prev.y === cur.y && (typeof isFree !== 'function' || isFree(toId)))) continue;
          return toId;
        }
        if (typeof isFree === 'function' && !isFree(toId)) continue;
        const v = getSlot(fromId);
        if (v) setSlot(toId, Object.assign({}, v));
        return toId;
      }
      return null;
    }
    constructor() {
      super();
      // clonable: rail thumbnails deep-clone slides and carry this shadow
      // along; reuse an already-cloned root so upgrade-after-clone works.
      // (Deliberately NOT serializable — a getHTML consumer would embed
      // multi-MB sidecar data-URLs into serialized page HTML.)
      const root = this.shadowRoot || this.attachShadow({
        mode: 'open',
        clonable: true
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="attr-error" part="attribution-error">' + warnIcon + '    <div class="cap">This photo needs attribution</div></div>' + '  <div class="loading" part="loading"></div>' + '  <div class="ring" part="ring"></div>' + '</div>' +
      // Outside .frame, like .spill/.ctl — the frame's overflow:hidden +
      // border-radius/clip-path would cut the credit off on circle/pill/mask.
      // A SPAN, not an <a>: the prescribed Unsplash credit holds two links
      // (photographer + Unsplash), built per-render in _render().
      '<span class="credit" part="credit"></span>' + '<div class="spill" popover="manual" data-dc-edit-transparent>' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' +
      // data-dc-edit-transparent: the DC editor's edit-mode picker lets
      // clicks through for chrome marked with it (EDIT_TRANSPARENT_SEL)
      // — without it, Replace/Edit clicks in Edit mode are swallowed by
      // element selection and the controls look dead.
      '<div class="ctl" popover="manual" data-dc-edit-transparent><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="edit" title="Reframe image">Edit</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ctl = root.querySelector('.ctl');
      this._credit = root.querySelector('.credit');
      this._attrError = root.querySelector('.attr-error');
      // Credit clicks open the link, not browse/reframe.
      this._credit.addEventListener('click', e => e.stopPropagation());
      this._credit.addEventListener('dblclick', e => e.stopPropagation());
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      // Encode-in-flight marker (the owning _ingest generation): while set,
      // the same-src "nothing in flight" clear in _render must not fire —
      // the stored value still points at the OLD image until the encode
      // lands, so that clear would unmask the stale image mid-replace.
      this._swapGen = 0;
      // Render-owned swap in flight: set when _render assigns a new src,
      // cleared only by the img's own load/error (or the empty branch).
      // img.complete CANNOT stand in for this — setting src only QUEUES
      // the current-request swap (a microtask), so synchronously after an
      // assignment, complete still reports the OLD settled request. The
      // pick path does exactly that: the host sets src, credit, and
      // credit-href back-to-back in one task, and renders #2/#3 would
      // read the stale complete === true and drop the mask one render
      // after it was set.
      this._loadPending = false;
      // See _render's empty branch: a transient attribution-error wipe of a
      // showing image must make the follow-up render a replacement (spinner),
      // not a first fill (blank frame).
      this._hidShowing = false;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        // The hidden controls are opacity-0 but still tabbable — without
        // this gate a keyboard user could drive them on a read-only share
        // link (mirrors the dblclick handler's editable gate).
        if (!this.hasAttribute('data-editable')) return;
        if (act === 'replace') {
          this._exitReframe(true);
          // Host-owned picker (Unsplash modal; it also offers local import).
          this.dispatchEvent(new CustomEvent('image-slot:pick', {
            bubbles: true,
            composed: true,
            detail: {
              id: this.id || null
            }
          }));
        }
        if (act === 'edit') {
          if (!this._reframes()) return;
          if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      // load/error also release the replacement-in-flight mask (via the
      // single discipline in _releaseMask): the swap is only revealed once
      // the new image can actually paint (on error the frame shows its
      // background, same as a fresh slot with a broken src).
      this._img.addEventListener('load', () => {
        this._loadPending = false;
        this._releaseMask(true);
        this._applyView();
      });
      this._img.addEventListener('error', () => {
        this._loadPending = false;
        this._releaseMask(true);
      });
      // Gated only on editable — any filled slot can be repositioned/scaled,
      // regardless of fit. Share links (no writeFile) stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
          const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // The host may inject window.omelette.writeFile AFTER the first render;
      // re-render on hover so the editable-gated controls reliably appear.
      this.addEventListener('pointerenter', this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('pointerenter', this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      // commit=false: a disconnect is not a user intent — committing here
      // would persist whatever half-finished drag a React remount or DOM
      // splice happened to interrupt. Deliberate exits commit on their own
      // paths (Escape/click-out/toggle), and unloads commit via pagehide.
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._signalReframe(true);
      // Best-effort commit when the document unloads mid-reframe (a host
      // navigation racing the enter signal, a manual reload, tab close):
      // the sidecar write rides the host bridge, which outlives this
      // document, so the crop survives even though the mode dies with the
      // DOM. Held on the instance so _exitReframe detaches exactly what
      // was attached.
      this._pagehide = () => {
        this._exitReframe(true);
        flushNow();
      };
      window.addEventListener('pagehide', this._pagehide);
      // Promote spill to the top layer, then keep it pinned over the frame:
      // scroll/resize cover the common cases, and a per-frame rect check
      // catches layout shifts that fire neither (an image above finishing
      // load, streamed DOM pushing the slot down, an ancestor transform
      // change) so the overlay can't detach from the frame.
      try {
        this._spill.showPopover();
      } catch {}
      // After the spill, so the controls stack above it in the top layer.
      try {
        this._ctl.showPopover();
      } catch {}
      this._reposition = () => {
        if (this.hasAttribute('data-reframe')) this._applyView();
      };
      window.addEventListener('scroll', this._reposition, true);
      window.addEventListener('resize', this._reposition);
      this._lastRect = '';
      this._watch = () => {
        if (!this.hasAttribute('data-reframe')) return;
        const r = this.getBoundingClientRect();
        const key = r.left + ',' + r.top + ',' + r.width + ',' + r.height;
        if (key !== this._lastRect) {
          this._lastRect = key;
          this._applyView();
        }
        this._watchId = requestAnimationFrame(this._watch);
      };
      this._watchId = requestAnimationFrame(this._watch);
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (this._reposition) {
        window.removeEventListener('scroll', this._reposition, true);
        window.removeEventListener('resize', this._reposition);
        this._reposition = null;
      }
      if (this._watchId) {
        cancelAnimationFrame(this._watchId);
        this._watchId = 0;
      }
      if (this._pagehide) {
        window.removeEventListener('pagehide', this._pagehide);
        this._pagehide = null;
      }
      try {
        this._spill.hidePopover();
      } catch {}
      try {
        this._ctl.hidePopover();
      } catch {}
      this._ctl.style.left = '';
      this._ctl.style.top = '';
      if (commit) this._commitView();
      this._signalReframe(false);
    }

    // Reframe state lives only in this DOM until commit, invisible to the
    // host's dirty signals — announce enter/exit so the host can hold
    // auto-reloads for exactly the gesture (the guest bundle forwards
    // image-slot:reframe to the host as imageSlotReframe). Dispatched on
    // the element (composed, so it escapes shadow roots) while connected;
    // a disconnected exit (disconnectedCallback) falls back to document so
    // the host still hears it.
    _signalReframe(active) {
      const target = this.isConnected ? this : document;
      target.dispatchEvent(new CustomEvent('image-slot:reframe', {
        bubbles: true,
        composed: true,
        detail: {
          active: active,
          id: this.id || null
        }
      }));
    }

    // Public: host's "Import from computer" calls this to run local browse.
    openFilePicker() {
      this._exitReframe(true);
      this._input.click();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      // Replacing a shown image: surface the swap through the encode too,
      // not just the decode — otherwise the old photo sits there with no
      // feedback while the canvas re-encode runs. An empty slot keeps its
      // placeholder (no spinner) until the encode lands, as before.
      // _swapGen guards the mask against re-renders DURING the encode
      // (pointerenter, ResizeObserver, another slot's store write): the
      // stored value still resolves to the old image there, so _render's
      // same-src clear would otherwise unmask it mid-replace.
      if (this.hasAttribute('data-filled')) {
        this.setAttribute('data-swapping', '');
        this._swapGen = gen;
      }
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        // Clear BEFORE setSlot: its synchronous re-render must see no
        // pending encode, so a byte-identical re-upload (same data URL, no
        // load event coming) still clears the mask via the complete branch.
        this._swapGen = 0;
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._swapGen = 0;
        // Reveal the kept old image — unless another replacement (a
        // remote pick's src swap) is still in flight, in which case the
        // mask stays until THAT image settles (its load/error releases).
        this._releaseMask();
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is available on any filled slot — the user can
    // always reposition/scale. `fit` only sets the initial baseline (see
    // _geom): contain starts fully-visible, cover starts frame-filling.
    _reframes() {
      return this.hasAttribute('data-filled');
    }

    // The single release discipline for the replacement-in-flight mask
    // (data-swapping). The mask comes off only when BOTH hold:
    //  - no encode is pending (_swapGen) — mid-encode the stored value
    //    still resolves to the old image, so any reveal paints it;
    //  - the frame img has settled on its current src — an unsettled src
    //    means some replacement is still in flight (e.g. a remote pick),
    //    whoever started it, and revealing would paint the previous
    //    frame. The load/error listeners pass settled=true (the event IS
    //    the settlement signal, per spec complete is true by then);
    //    other callers rely on the complete flag (covers loaded AND
    //    failed).
    // Every release path funnels through here EXCEPT _render's empty
    // branch (the img is being cleared — nothing will ever settle).
    _releaseMask(settled) {
      if (!this._swapGen && !this._loadPending && (settled || this._img.complete)) {
        this.removeAttribute('data-swapping');
      }
    }

    // Baseline geometry, shared by clamp/apply/resize. `base` is the scale at
    // view-scale s=1: cover = fill the frame (overflow on the looser axis),
    // contain = fit fully inside (letterboxed). Zooming a contain image past
    // s where it overflows naturally becomes a crop. Null until the img has
    // loaded (naturalWidth is 0 before that) or when the slot has no layout
    // box — ResizeObserver fires with a 0×0 rect under display:none, and
    // clamping against a degenerate 1×1 frame would silently pull the stored
    // pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
      const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
      return {
        iw,
        ih,
        fw,
        fh,
        base
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      // Top-layer controls: pin to the frame's top-right in viewport px
      // (the same 8px inset as the in-frame layout; unscaled — top-layer UI
      // reads as chrome, not page content). BEFORE the geometry branch:
      // placement needs only the frame rect, and a not-yet-loaded or broken
      // src must not leave the promoted strip floating unpositioned. Gated
      // on the popover actually being open: without the Popover API,
      // showPopover() threw (swallowed in _enterReframe), .ctl stays in
      // its in-frame absolute layout, and viewport-px coordinates would
      // shove it off-frame — and matches(':popover-open') itself throws
      // there (unknown pseudo-class), hence the try/catch.
      if (this.hasAttribute('data-reframe')) {
        let onTop = false;
        try {
          onTop = this._ctl.matches(':popover-open');
        } catch {}
        if (onTop) {
          const r = this.getBoundingClientRect();
          this._ctl.style.left = r.right - 8 + 'px';
          this._ctl.style.top = r.top + 8 + 'px';
        }
      }
      if (!g) {
        // Dimensions not known yet (before img load) — centered fit so there
        // is no flash of an unpositioned image before the geometry lands.
        const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = contain ? 'contain' : 'cover';
        return;
      }
      // Baseline (cover-fill or contain-fit) × view scale. Width/height and
      // left/top are all frame-% — depends only on the frame aspect ratio, so
      // a responsive resize keeps the same crop. The spill layer mirrors the
      // same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      if (this.hasAttribute('data-reframe')) {
        // Top-layer spill: position in viewport px over the frame. The top
        // layer escapes ancestor transforms entirely, so EVERY term must be
        // in viewport units: getBoundingClientRect gives the frame's scaled
        // origin AND size, and the rect/layout ratio rescales the ghost —
        // sizing from layout px alone renders it 1/scale too large under a
        // scaled deck slide. Inner ghost + handles stay box-relative.
        const r = this.getBoundingClientRect();
        const sx = g.fw ? r.width / g.fw : 1;
        const sy = g.fh ? r.height / g.fh : 1;
        this._spill.style.width = g.iw * k * sx + 'px';
        this._spill.style.height = g.ih * k * sy + 'px';
        this._spill.style.left = r.left + (50 + this._view.x) / 100 * r.width + 'px';
        this._spill.style.top = r.top + (50 + this._view.y) / 100 * r.height + 'px';
      }
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      // An Unsplash src with no credit attribute must NOT render — showing
      // the photo uncredited is the Unsplash-terms violation itself. The
      // error tile replaces the photo until the credit is written. A
      // user-dropped image is the user's own content and always renders.
      // Trimmed: credit is agent/user-editable content, and a whitespace-
      // only value must count as missing — otherwise it would suppress the
      // error tile AND render an empty credit box (no text, no links),
      // exactly the unattributed state this gate exists to prevent.
      const credit = (this.getAttribute('credit') || '').trim();
      const attrError = !!(!credit && !this._userUrl && srcAttr && isUnsplashHost(srcAttr));
      this.toggleAttribute('data-attribution-error', attrError);
      if (url && !attrError) {
        const prev = this._img.getAttribute('src');
        if (prev !== url) {
          // Replacing an already-shown image: mark the swap BEFORE setting
          // src so the stale frame is never revealed (see the data-swapping
          // stylesheet rules). First fill (prev empty) keeps the existing
          // placeholder-until-load behavior — no spinner. _hidShowing
          // covers the pick path's transient attribution-error wipe: prev
          // is gone, but an image WAS showing, so this is a replacement.
          if (prev || this._hidShowing) this.setAttribute('data-swapping', '');
          // Mark the swap BEFORE assigning src: complete keeps reporting
          // the old settled request until the browser's
          // update-the-image-data microtask runs, so same-task re-renders
          // (the pick path's credit/credit-href setAttributes) need this
          // flag, not complete, to know a load is in flight.
          this._loadPending = true;
          this._img.src = url;
          this._ghost.src = url;
        } else {
          // Same-src re-render — release if settled, so an ingest-set
          // spinner can't stick after a byte-identical re-upload (same
          // data URL, no further load event ever fires).
          this._releaseMask();
        }
        this._hidShowing = false;
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this.removeAttribute('data-swapping');
        // The src is being removed — no load/error will ever fire for it.
        this._loadPending = false;
        // A transient attribution-error wipe of a showing image happens on
        // the pick path: the host sets src one setAttribute before credit,
        // so render N hides the old image (attrError) and render N+1
        // restores a URL. Remember the wipe so that restore renders as a
        // replacement (spinner), not a first fill (blank frame).
        this._hidShowing = attrError && !!this._img.getAttribute('src');
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        // The error tile owns the blocked-photo state; .empty stays for
        // the genuinely-empty slot.
        this._empty.style.display = attrError ? 'none' : 'flex';
        this.removeAttribute('data-filled');
      }

      // Credit belongs to the author src, so a user drop hides it.
      // textContent + the http(s)-only funnel keep external strings inert.
      const showCredit = !!(url && credit && !this._userUrl && !attrError);
      this._credit.textContent = '';
      if (showCredit) {
        // Validate once (resolved against the document, http(s) only),
        // then append the terms-required utm referral params to links
        // that point back at unsplash.com.
        let href = '';
        const rawHref = this.getAttribute('credit-href') || '';
        if (rawHref) {
          try {
            const u = new URL(rawHref, document.baseURI);
            if (u.protocol === 'http:' || u.protocol === 'https:') {
              href = withReferral(u.href);
            }
          } catch {}
        }
        const mkLink = (text, linkHref) => {
          const a = document.createElement('a');
          a.setAttribute('target', '_blank');
          a.setAttribute('rel', 'noopener noreferrer');
          a.setAttribute('href', linkHref);
          a.textContent = text;
          return a;
        };
        // Unsplash's prescribed credit is TWO links — the photographer's
        // name to their profile (credit-href) and 'Unsplash' to the
        // homepage. Render that split whenever the text has the canonical
        // shape; other text keeps the legacy single-link rendering.
        const m = /^Photo by (.+) on Unsplash$/.exec(credit);
        if (m) {
          this._credit.appendChild(document.createTextNode('Photo by '));
          this._credit.appendChild(href ? mkLink(m[1], href) : document.createTextNode(m[1]));
          this._credit.appendChild(document.createTextNode(' on '));
          this._credit.appendChild(mkLink('Unsplash', UNSPLASH_HOMEPAGE_HREF));
        } else if (href) {
          this._credit.appendChild(mkLink(credit, href));
        } else {
          this._credit.textContent = credit;
        }
      }
      this.toggleAttribute('data-credit', showCredit);
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/image-slot.js", error: String((e && e.message) || e) }); }

// ui_kits/website/v1-archive/Closing.jsx
try { (() => {
const {
  SectionHeader,
  Field,
  Input,
  Select,
  Button,
  Checkbox,
  Logo,
  Dialog,
  Toast,
  ToastStack
} = window.LeadfuseDesignSystem_e3be75;
function LeadForm({
  onSubmit
}) {
  const [name, setName] = React.useState('');
  return /*#__PURE__*/React.createElement("section", {
    id: "book",
    style: {
      background: '#F2F2F2',
      padding: '96px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 64,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Limited Availability",
    title: "Lock in your spot.",
    kicker: "We only take on 5 new detailers per month. When it's full, it's gone."
  }), /*#__PURE__*/React.createElement("form", {
    style: {
      background: '#fff',
      boxShadow: 'var(--shadow-card)',
      padding: 40,
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    },
    onSubmit: e => {
      e.preventDefault();
      onSubmit(name || 'there');
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Your name",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Mike Caruso",
    value: name,
    onChange: e => setName(e.target.value)
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Business name",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Caruso's Mobile Detailing"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Phone",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "(555) 010-0134"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Primary service"
  }, /*#__PURE__*/React.createElement(Select, {
    options: ["Ceramic coating", "PPF", "Wrap", "Full detail", "Interior detail"]
  }))), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Send me the bonus closing script",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    block: true,
    type: "submit"
  }, "Book my call"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      color: '#6E6E6E',
      textAlign: 'center'
    }
  }, "100% risk-free. 150 leads in 30 days or we pay you $1,000."))));
}
function Footer() {
  const l = {
    color: '#A7A7A7',
    fontSize: 12.5,
    textDecoration: 'none'
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: '#000',
      borderTop: '1px solid #2A2A2A',
      padding: '48px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "on-dark",
    height: 20,
    base: "../../../assets"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#4D4D4D',
      fontSize: 12
    }
  }, "\xA9 2026 Leadfuse. All rights reserved."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: l
  }, "Instagram @LEADFUSE"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: l
  }, "Privacy"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: l
  }, "Terms"))));
}
function ClosingLayer({
  open,
  name,
  onClose,
  toast,
  onToastDismiss
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Dialog, {
    open: open,
    title: "You're almost in",
    onClose: onClose,
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: onClose
    }, "Not yet"), /*#__PURE__*/React.createElement(Button, {
      onClick: onClose
    }, "Confirm booking"))
  }, name, ", pick a time on the next screen. Your spot is held for 15 minutes \u2014 only 5 detailers get in this month."), toast && /*#__PURE__*/React.createElement(ToastStack, null, /*#__PURE__*/React.createElement(Toast, {
    title: "Spot held for 15:00",
    message: "Complete the booking to lock it in.",
    onDismiss: onToastDismiss
  })));
}
Object.assign(window, {
  LeadForm,
  Footer,
  ClosingLayer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/v1-archive/Closing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/v1-archive/Hero.jsx
try { (() => {
const {
  Badge,
  Button,
  Stat,
  Emblem
} = window.LeadfuseDesignSystem_e3be75;
function DotGrid({
  color = '#2A2A2A',
  n = 24,
  cols = 6
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${cols},1fr)`,
      gap: 10,
      width: 'fit-content'
    }
  }, Array.from({
    length: n
  }).map((_, i) => /*#__PURE__*/React.createElement("i", {
    key: i,
    style: {
      width: 4,
      height: 4,
      borderRadius: '50%',
      background: color
    }
  })));
}
function Hero({
  onBook
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      background: '#000',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../../assets/emblem-red.svg",
    alt: "",
    style: {
      position: 'absolute',
      right: -120,
      top: -60,
      width: 560,
      filter: 'brightness(0) invert(.07)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '88px 32px 96px',
      display: 'grid',
      gridTemplateColumns: '1.25fr .75fr',
      gap: 64,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "red",
    dot: true
  }, "Only 5 detailers per month"), /*#__PURE__*/React.createElement("h1", {
    style: {
      color: '#fff',
      fontSize: 72,
      fontWeight: 800,
      lineHeight: 1.04,
      letterSpacing: '-.01em',
      margin: '26px 0 0'
    }
  }, "Your calendar.", /*#__PURE__*/React.createElement("br", null), "Booked out."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: '#A7A7A7',
      fontSize: 19,
      lineHeight: 1.6,
      maxWidth: 520,
      margin: '24px 0 0'
    }
  }, "Done-for-you lead systems for ceramic coating, PPF, wrap and detailing businesses. We build it, run it, and optimize it \u2014 you take the jobs."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: onBook
  }, "Book your call"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "outline-on-dark",
    onClick: () => {
      location.hash = 'proof';
    }
  }, "See results")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement(DotGrid, null))), /*#__PURE__*/React.createElement("aside", {
    style: {
      background: '#161616',
      borderTop: '3px solid #E50011',
      padding: '36px 32px',
      display: 'flex',
      flexDirection: 'column',
      gap: 30,
      alignSelf: 'start'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    dark: true,
    label: "Leads in 30 days",
    value: "150",
    delta: "or we pay you $1,000",
    deltaTone: "red"
  }), /*#__PURE__*/React.createElement(Stat, {
    dark: true,
    label: "Added monthly revenue",
    value: "$10\u201320K",
    delta: "high-ticket jobs only",
    deltaTone: "amber"
  }), /*#__PURE__*/React.createElement(Stat, {
    dark: true,
    label: "Cold calls required",
    value: "0",
    delta: "zero door knocking, zero chasing",
    deltaTone: "muted"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      borderTop: '1px solid #2A2A2A',
      paddingTop: 22
    }
  }, /*#__PURE__*/React.createElement(Emblem, {
    size: 34,
    base: "../../../assets"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#A7A7A7',
      fontSize: 12.5,
      lineHeight: 1.5
    }
  }, "Pre-qualified car owners who actually want your service.")))));
}
Object.assign(window, {
  Hero,
  DotGrid
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/v1-archive/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/v1-archive/Nav.jsx
try { (() => {
const {
  Logo,
  Button
} = window.LeadfuseDesignSystem_e3be75;
function Nav({
  onBook
}) {
  const link = {
    color: '#A7A7A7',
    fontSize: 13,
    fontWeight: 500,
    textDecoration: 'none',
    letterSpacing: '.02em'
  };
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: '#000',
      borderBottom: '1px solid #2A2A2A'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      gap: 32,
      padding: '18px 32px'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "on-dark",
    height: 24,
    base: "../../../assets"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28,
      marginLeft: 'auto',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#offer",
    style: link,
    onMouseEnter: e => e.target.style.color = '#fff',
    onMouseLeave: e => e.target.style.color = '#A7A7A7'
  }, "The System"), /*#__PURE__*/React.createElement("a", {
    href: "#guarantee",
    style: link,
    onMouseEnter: e => e.target.style.color = '#fff',
    onMouseLeave: e => e.target.style.color = '#A7A7A7'
  }, "Guarantee"), /*#__PURE__*/React.createElement("a", {
    href: "#process",
    style: link,
    onMouseEnter: e => e.target.style.color = '#fff',
    onMouseLeave: e => e.target.style.color = '#A7A7A7'
  }, "Process"), /*#__PURE__*/React.createElement("a", {
    href: "#proof",
    style: link,
    onMouseEnter: e => e.target.style.color = '#fff',
    onMouseLeave: e => e.target.style.color = '#A7A7A7'
  }, "Results"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: onBook
  }, "Book a call"))));
}
Object.assign(window, {
  Nav
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/v1-archive/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/v1-archive/Sections.jsx
try { (() => {
const {
  SectionHeader,
  Card,
  Button,
  Badge,
  Stat,
  BrandPattern
} = window.LeadfuseDesignSystem_e3be75;
const IcCheck = () => /*#__PURE__*/React.createElement("svg", {
  width: "18",
  height: "18",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.5"
}, /*#__PURE__*/React.createElement("path", {
  d: "M20 6 9 17l-5-5"
}));
function Offer() {
  const items = [{
    t: 'Guaranteed lead flow',
    d: '150 quality leads in 30 days — pre-qualified car owners in your service area, or we pay you $1,000.'
  }, {
    t: 'Done-for-you system',
    d: 'Ads, funnel, SMS follow-up and booking — we build, run, and optimize the whole machine.'
  }, {
    t: 'High-ticket closing',
    d: 'A proven closing script that turns leads into $500+ ceramic, PPF and wrap jobs.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "offer",
    style: {
      background: '#F2F2F2',
      padding: '96px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "The System",
    title: "Everything handled. Nothing chased.",
    kicker: "No junk leads. No lead droughts. No guesswork."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 20,
      marginTop: 48
    }
  }, items.map(x => /*#__PURE__*/React.createElement(Card, {
    key: x.t,
    variant: "shadow",
    pad: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      background: '#E50011',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(IcCheck, null)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 20,
      fontWeight: 700,
      margin: '18px 0 8px'
    }
  }, x.t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14.5,
      color: '#333',
      lineHeight: 1.65
    }
  }, x.d))))));
}
function Guarantee({
  onBook
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "guarantee",
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: '#E50011'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      left: '50%',
      background: '#EB2431'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../../assets/emblem-red.svg",
    alt: "",
    style: {
      position: 'absolute',
      right: -60,
      top: '50%',
      transform: 'translateY(-50%)',
      width: 420,
      filter: 'brightness(0) saturate(100%) invert(14%) sepia(97%) saturate(7000%) hue-rotate(352deg) brightness(85%)',
      opacity: .5,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '84px 32px',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '.18em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,.8)'
    }
  }, "The Guarantee"), /*#__PURE__*/React.createElement("h2", {
    style: {
      color: '#fff',
      fontSize: 52,
      fontWeight: 800,
      lineHeight: 1.06,
      margin: '16px 0 0',
      maxWidth: 640
    }
  }, "150 leads in 30 days \u2014 or we pay you $1,000."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,.85)',
      fontSize: 17,
      margin: '18px 0 0'
    }
  }, "Full refund plus a thousand dollars. That's how sure we are.")), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "on-dark",
    onClick: onBook,
    style: {
      flexShrink: 0
    }
  }, "Claim your spot")));
}
function Process() {
  const steps = [{
    n: '01',
    t: 'Book the call',
    d: '15 minutes. We map your area, services and capacity.'
  }, {
    n: '02',
    t: 'We build the machine',
    d: 'Ads, funnel and SMS automations live within 7 days.'
  }, {
    n: '03',
    t: 'Leads start booking',
    d: 'Pre-qualified owners hit your calendar — you just close.'
  }, {
    n: '04',
    t: 'Scale up or down',
    d: 'Add crew, raise prices, or cap volume. Your call.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "process",
    style: {
      background: '#fff',
      padding: '96px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "The Process",
    title: "Live in 7 days.",
    kicker: "Dead weeks? Fixed."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 20,
      marginTop: 48
    }
  }, steps.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    style: {
      borderTop: '2px solid #000',
      paddingTop: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: '#E50011',
      letterSpacing: '.1em'
    }
  }, s.n), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      margin: '10px 0 6px'
    }
  }, s.t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13.5,
      color: '#6E6E6E',
      lineHeight: 1.6
    }
  }, s.d))))));
}
function Proof() {
  return /*#__PURE__*/React.createElement("section", {
    id: "proof",
    style: {
      background: '#000',
      padding: '96px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    dark: true,
    eyebrow: "Results",
    title: "Detailers don't need more hustle. They need a system."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 20,
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#161616',
      padding: '32px'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    dark: true,
    label: "Avg. added revenue",
    value: "$14.2K",
    delta: "per month, first 90 days",
    deltaTone: "amber"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#161616',
      padding: '32px'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    dark: true,
    label: "Show-up rate",
    value: "86%",
    delta: "SMS-confirmed bookings",
    deltaTone: "orange"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#161616',
      padding: '32px'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    dark: true,
    label: "Cost per booked job",
    value: "\u219354%",
    delta: "vs. self-run ads",
    deltaTone: "red"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      background: '#161616',
      borderLeft: '3px solid #E50011',
      padding: '32px 36px',
      display: 'flex',
      gap: 24,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: '50%',
      background: '#E50011',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 700,
      fontSize: 18,
      flexShrink: 0
    }
  }, "CM"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: '#fff',
      fontSize: 17,
      lineHeight: 1.6,
      fontWeight: 500
    }
  }, "\"Calendar's booked three weeks out. I stopped chasing lowballers completely \u2014 every job that comes through is $500-plus.\""), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 10,
      fontSize: 12,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: '#A7A7A7',
      fontWeight: 600
    }
  }, "Caruso's Mobile Detailing \u2014 ceramic coating")))));
}
Object.assign(window, {
  Offer,
  Guarantee,
  Process,
  Proof
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/v1-archive/Sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.BrandPattern = __ds_scope.BrandPattern;

__ds_ns.Emblem = __ds_scope.Emblem;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.ToastStack = __ds_scope.ToastStack;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.GlassPanel = __ds_scope.GlassPanel;

__ds_ns.GlowButton = __ds_scope.GlowButton;

__ds_ns.SerifAccent = __ds_scope.SerifAccent;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
