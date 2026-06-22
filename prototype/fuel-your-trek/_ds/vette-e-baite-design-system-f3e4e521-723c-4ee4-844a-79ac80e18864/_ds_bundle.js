/* @ds-bundle: {"format":3,"namespace":"VetteEBaiteDesignSystem_f3e4e5","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"StatusBadge","sourcePath":"components/core/StatusBadge.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"EventCard","sourcePath":"components/event/EventCard.jsx"},{"name":"SectionHeading","sourcePath":"components/event/SectionHeading.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"NewsletterForm","sourcePath":"components/forms/NewsletterForm.jsx"}],"sourceHashes":{"components/core/Button.jsx":"a4462a0fff36","components/core/Eyebrow.jsx":"6deed7822118","components/core/StatusBadge.jsx":"00b5c28accf3","components/core/Tag.jsx":"21a487ce7950","components/event/EventCard.jsx":"87b95efa8cff","components/event/SectionHeading.jsx":"e2c08da67f81","components/forms/Input.jsx":"b1b2e2148e4d","components/forms/NewsletterForm.jsx":"aa771b144ae5","ui_kits/website/app.jsx":"172595756bb3","ui_kits/website/components.jsx":"93b07bb0773e","ui_kits/website/data.js":"77ef1ef5935b","ui_kits/website/detail.jsx":"3d21f0719441"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.VetteEBaiteDesignSystem_f3e4e5 = window.VetteEBaiteDesignSystem_f3e4e5 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Vette e Baite — Button
 * Brand CTA. Pill by default (matches site "LE NOSTRE USCITE" buttons).
 */
function Button({
  variant = 'primary',
  size = 'md',
  pill = true,
  fullWidth = false,
  disabled = false,
  href,
  leftIcon,
  rightIcon,
  children,
  onClick,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '8px 16px',
      fontSize: '13px',
      gap: '6px'
    },
    md: {
      padding: '12px 24px',
      fontSize: '15px',
      gap: '8px'
    },
    lg: {
      padding: '16px 34px',
      fontSize: '17px',
      gap: '10px'
    }
  };
  const variants = {
    primary: {
      background: 'var(--brand-primary)',
      color: 'var(--text-inverse)',
      border: '2px solid var(--brand-primary)'
    },
    accent: {
      background: 'var(--brand-accent)',
      color: 'var(--text-on-accent)',
      border: '2px solid var(--brand-accent)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--brand-primary)',
      border: '2px solid var(--brand-primary)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--brand-primary)',
      border: '2px solid transparent'
    }
  };
  const base = {
    display: fullWidth ? 'flex' : 'inline-flex',
    width: fullWidth ? '100%' : 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    gap: sizes[size].gap,
    fontFamily: 'var(--font-text)',
    fontWeight: 700,
    letterSpacing: '0.02em',
    fontSize: sizes[size].fontSize,
    padding: sizes[size].padding,
    borderRadius: pill ? 'var(--radius-pill)' : 'var(--radius-md)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    textDecoration: 'none',
    transition: 'transform var(--dur-fast) var(--ease-out), background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out)',
    whiteSpace: 'nowrap',
    ...variants[variant],
    ...style
  };
  const hover = e => {
    if (disabled) return;
    e.currentTarget.style.transform = 'translateY(-2px)';
    if (variant === 'primary') e.currentTarget.style.background = 'var(--brand-primary-hover)';
    if (variant === 'accent') e.currentTarget.style.background = 'var(--brand-accent-hover)';
    if (variant === 'secondary' || variant === 'ghost') {
      e.currentTarget.style.background = 'var(--green-50)';
    }
  };
  const leave = e => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.background = variants[variant].background;
  };
  const down = e => {
    if (!disabled) e.currentTarget.style.transform = 'translateY(0) scale(0.97)';
  };
  const up = e => {
    if (!disabled) e.currentTarget.style.transform = 'translateY(-2px)';
  };
  const Tag = href && !disabled ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: disabled ? undefined : onClick,
    disabled: Tag === 'button' ? disabled : undefined,
    style: base,
    onMouseEnter: hover,
    onMouseLeave: leave,
    onMouseDown: down,
    onMouseUp: up
  }, rest), leftIcon, children, rightIcon);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Vette e Baite — Eyebrow
 * Uppercase tracked overline used above section titles.
 */
function Eyebrow({
  children,
  tone = 'accent',
  style,
  ...rest
}) {
  const colors = {
    accent: 'var(--brand-accent)',
    green: 'var(--brand-primary)',
    muted: 'var(--text-secondary)',
    inverse: 'var(--amber-400)'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-block',
      fontFamily: 'var(--font-text)',
      fontWeight: 700,
      fontSize: 'var(--text-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: colors[tone] || colors.accent,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/StatusBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Vette e Baite — StatusBadge
 * Event availability pill. Mirrors the live site labels.
 */
const STATUS = {
  confermato: {
    bg: 'var(--status-confirmed-bg)',
    fg: 'var(--status-confirmed-fg)',
    label: 'Confermato'
  },
  ultimi: {
    bg: 'var(--status-last-bg)',
    fg: 'var(--status-last-fg)',
    label: 'Ultimi posti'
  },
  attesa: {
    bg: 'var(--status-wait-bg)',
    fg: 'var(--status-wait-fg)',
    label: "Lista d'attesa"
  },
  soldout: {
    bg: 'var(--status-soldout-bg)',
    fg: 'var(--status-soldout-fg)',
    label: 'Sold-out'
  }
};
function StatusBadge({
  status = 'confermato',
  label,
  dot = true,
  style,
  ...rest
}) {
  const s = STATUS[status] || STATUS.confermato;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '7px',
      background: s.bg,
      color: s.fg,
      fontFamily: 'var(--font-text)',
      fontWeight: 700,
      fontSize: '12px',
      letterSpacing: '0.03em',
      padding: '6px 13px',
      borderRadius: 'var(--radius-pill)',
      lineHeight: 1,
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: 'currentColor',
      opacity: 0.85
    }
  }), label || s.label);
}
Object.assign(__ds_scope, { StatusBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatusBadge.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Vette e Baite — Tag
 * Small pill used for regions and event categories.
 */
function Tag({
  children,
  tone = 'region',
  style,
  ...rest
}) {
  const tones = {
    region: {
      background: 'var(--tag-region-bg)',
      color: 'var(--tag-region-fg)',
      border: 'transparent'
    },
    category: {
      background: 'transparent',
      color: 'var(--brand-primary)',
      border: '1.5px solid var(--border-subtle)'
    },
    accent: {
      background: 'var(--clay-100)',
      color: 'var(--clay-700)',
      border: 'transparent'
    },
    solid: {
      background: 'var(--brand-primary)',
      color: 'var(--text-inverse)',
      border: 'transparent'
    }
  };
  const t = tones[tone] || tones.region;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      fontFamily: 'var(--font-text)',
      fontWeight: 700,
      fontSize: '11.5px',
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
      padding: '5px 11px',
      borderRadius: 'var(--radius-pill)',
      lineHeight: 1,
      background: t.background,
      color: t.color,
      border: t.border ? `1.5px solid ${t.border}` : 'none',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/event/EventCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Vette e Baite — EventCard
 * The signature listing card: full-bleed photo, date chip, status badge,
 * category, title, region(s) and time. Hover lifts and deepens shadow.
 */
function EventCard({
  image,
  title,
  category,
  regions = [],
  dateStart,
  dateEnd,
  time,
  status,
  href = '#',
  style,
  ...rest
}) {
  const regionList = Array.isArray(regions) ? regions : [regions].filter(Boolean);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    style: {
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-raised)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      textDecoration: 'none',
      color: 'var(--text-primary)',
      boxShadow: 'var(--shadow-sm)',
      border: '1px solid var(--border-subtle)',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      ...style
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.boxShadow = 'var(--shadow-card-hover)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '4 / 3',
      overflow: 'hidden',
      background: 'linear-gradient(135deg,#3a6b4e,#1f472f 65%,#0f241a)'
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    referrerPolicy: "no-referrer",
    src: image,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-soft)'
    }
  }), status && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.StatusBadge, {
    status: status
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 12,
      right: 12,
      display: 'flex',
      alignItems: 'stretch',
      gap: 0,
      background: 'rgba(255,253,248,0.95)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-sm)',
      backdropFilter: 'blur(2px)'
    }
  }, /*#__PURE__*/React.createElement(DatePart, {
    value: dateStart
  }), dateEnd && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      alignSelf: 'center',
      color: 'var(--text-muted)',
      fontWeight: 700,
      padding: '0 2px'
    }
  }, "\u2013"), /*#__PURE__*/React.createElement(DatePart, {
    value: dateEnd
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 18px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      flex: 1
    }
  }, category && /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    tone: "category",
    style: {
      alignSelf: 'flex-start'
    }
  }, category), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: '18px',
      lineHeight: 1.18,
      letterSpacing: '-0.01em'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      alignItems: 'center',
      fontFamily: 'var(--font-text)',
      fontSize: '13px',
      color: 'var(--text-secondary)'
    }
  }, regionList.length > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement(PinIcon, null), regionList.join(' · ')), time && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      fontWeight: 600,
      color: 'var(--brand-primary)'
    }
  }, /*#__PURE__*/React.createElement(ClockIcon, null), time))));
}
function DatePart({
  value
}) {
  if (!value) return null;
  const parts = String(value).split(' ');
  const day = parts[0];
  const month = parts.slice(1).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '7px 12px',
      textAlign: 'center',
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: '17px',
      color: 'var(--brand-primary)'
    }
  }, day), month && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-text)',
      fontWeight: 700,
      fontSize: '10px',
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      color: 'var(--text-secondary)',
      marginTop: 2
    }
  }, month));
}
function PinIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "3"
  }));
}
function ClockIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 7v5l3 2"
  }));
}
Object.assign(__ds_scope, { EventCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/event/EventCard.jsx", error: String((e && e.message) || e) }); }

// components/event/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Vette e Baite — SectionHeading
 * Eyebrow + title + optional subtitle and trailing action.
 */
function SectionHeading({
  eyebrow,
  title,
  subtitle,
  action,
  align = 'left',
  inverse = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 24,
      flexWrap: 'wrap',
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '52ch'
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: inverse ? 'inverse' : 'accent'
  }, eyebrow)), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-display-m)',
      lineHeight: 1.06,
      letterSpacing: '-0.02em',
      color: inverse ? 'var(--text-inverse)' : 'var(--text-primary)'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '12px 0 0',
      fontFamily: 'var(--font-text)',
      fontSize: '18px',
      lineHeight: 1.5,
      color: inverse ? 'rgba(255,255,255,0.82)' : 'var(--text-secondary)'
    }
  }, subtitle)), action && /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0
    }
  }, action));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/event/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Vette e Baite — Input
 * Text field with optional label, leading icon and helper/error text.
 */
function Input({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  leftIcon,
  helper,
  error,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const borderColor = error ? 'var(--status-soldout-bg)' : focus ? 'var(--brand-primary)' : 'var(--border-subtle)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-text)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--text-primary)',
      letterSpacing: '0.01em'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-raised)',
      border: `1.5px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      padding: '0 14px',
      height: 48,
      boxShadow: focus ? 'var(--ring-brand)' : 'none',
      transition: 'border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)'
    }
  }, leftIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      display: 'inline-flex'
    }
  }, leftIcon), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-text)',
      fontSize: 15,
      color: 'var(--text-primary)',
      height: '100%'
    }
  }, rest))), (helper || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: error ? 'var(--status-soldout-bg)' : 'var(--text-muted)'
    }
  }, error || helper));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/NewsletterForm.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Vette e Baite — NewsletterForm
 * "Resta aggiornato / Stay tuned" email capture. Inline on light,
 * or inverse on the pine-green band.
 */
function NewsletterForm({
  inverse = false,
  buttonLabel = 'Iscriviti',
  placeholder = 'La tua email',
  onSubmit,
  style,
  ...rest
}) {
  const [email, setEmail] = React.useState('');
  const submit = e => {
    e.preventDefault();
    onSubmit && onSubmit(email);
  };
  return /*#__PURE__*/React.createElement("form", _extends({
    onSubmit: submit,
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("input", {
    type: "email",
    required: true,
    value: email,
    placeholder: placeholder,
    onChange: e => setEmail(e.target.value),
    style: {
      flex: '1 1 220px',
      height: 52,
      padding: '0 18px',
      fontFamily: 'var(--font-text)',
      fontSize: 15,
      borderRadius: 'var(--radius-pill)',
      outline: 'none',
      border: inverse ? '1.5px solid rgba(255,255,255,0.35)' : '1.5px solid var(--border-subtle)',
      background: inverse ? 'rgba(255,255,255,0.10)' : 'var(--surface-raised)',
      color: inverse ? '#fff' : 'var(--text-primary)'
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    type: "submit",
    variant: inverse ? 'accent' : 'primary',
    size: "lg"
  }, buttonLabel));
}
Object.assign(__ds_scope, { NewsletterForm });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/NewsletterForm.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/app.jsx
try { (() => {
/* global React */
// Vette e Baite website — App shell, home listing, booking flow
const DSa = window.VetteEBaiteDesignSystem_f3e4e5 || {};
function Home({
  onOpen
}) {
  const {
    EventCard,
    SectionHeading,
    Button,
    Eyebrow
  } = DSa;
  const [cat, setCat] = React.useState('tutti');
  const events = window.VEB_EVENTS;
  const cats = window.VEB_CATEGORIES;
  const shown = cat === 'tutti' ? events : events.filter(e => e.catKey === cat);
  return /*#__PURE__*/React.createElement("main", null, window.VEBHero && /*#__PURE__*/React.createElement(window.VEBHero, {
    onExplore: () => document.getElementById('uscite').scrollIntoView({
      behavior: 'smooth'
    })
  }), /*#__PURE__*/React.createElement("section", {
    id: "uscite",
    style: {
      maxWidth: 'var(--container-wide)',
      margin: '0 auto',
      padding: 'clamp(48px,7vw,96px) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Le nostre uscite",
    title: "Prossime avventure",
    subtitle: "Dalle escursioni di un giorno ai cammini di pi\xF9 giorni, in giro per lo stivale."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap',
      margin: '28px 0 32px'
    }
  }, cats.map(c => {
    const active = c.key === cat;
    return /*#__PURE__*/React.createElement("button", {
      key: c.key,
      onClick: () => setCat(c.key),
      style: {
        fontFamily: 'var(--font-text)',
        fontWeight: 700,
        fontSize: 14,
        padding: '9px 18px',
        borderRadius: 'var(--radius-pill)',
        cursor: 'pointer',
        border: active ? '1.5px solid var(--brand-primary)' : '1.5px solid var(--border-subtle)',
        background: active ? 'var(--brand-primary)' : 'var(--surface-raised)',
        color: active ? '#fff' : 'var(--text-primary)',
        transition: 'all var(--dur-base) var(--ease-out)'
      }
    }, c.label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))',
      gap: 24
    }
  }, shown.map(e => /*#__PURE__*/React.createElement(EventCard, {
    key: e.id,
    image: e.image,
    category: e.cat,
    title: e.title,
    regions: e.regions,
    dateStart: e.dateStart,
    dateEnd: e.dateEnd,
    time: e.time,
    status: e.status,
    href: "#",
    onClick: ev => {
      ev.preventDefault();
      onOpen(e);
    }
  })))), window.VEBStatsBand && /*#__PURE__*/React.createElement(window.VEBStatsBand, null), window.VEBNewsletterBand && /*#__PURE__*/React.createElement(window.VEBNewsletterBand, null), window.VEBPartners && /*#__PURE__*/React.createElement(window.VEBPartners, null));
}

/* ---------- Booking confirmation modal ---------- */
function BookingModal({
  event,
  onClose
}) {
  const {
    Button
  } = DSa;
  if (!event) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'rgba(15,36,26,0.55)',
      backdropFilter: 'blur(4px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: 'var(--surface-raised)',
      borderRadius: 'var(--radius-2xl)',
      maxWidth: 440,
      width: '100%',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--brand-primary)',
      padding: '32px 28px',
      textAlign: 'center',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.14)',
      margin: '0 auto 16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "34",
    height: "34",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--amber-400)",
    strokeWidth: "2.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }))), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 26,
      margin: 0
    }
  }, "Sei dei nostri!"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,0.85)',
      margin: '8px 0 0',
      fontSize: 15
    }
  }, "Posto richiesto per l'uscita")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 28px 28px'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 18,
      margin: '0 0 4px'
    }
  }, event.title), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)',
      fontSize: 14,
      margin: '0 0 20px'
    }
  }, event.dateEnd ? `${event.dateStart} – ${event.dateEnd}` : `${event.dateStart} · ${event.time || ''}`, " \xB7 \u20AC", event.price), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)',
      fontSize: 14,
      lineHeight: 1.6,
      margin: '0 0 22px'
    }
  }, "Ti abbiamo inviato una mail con tutti i dettagli e il punto di ritrovo. Ci vediamo sul sentiero! \uD83E\uDD7E"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    onClick: onClose
  }, "Perfetto, a presto"))));
}

/* ---------- App ---------- */
function App() {
  const [view, setView] = React.useState({
    name: 'home'
  });
  const [booking, setBooking] = React.useState(null);
  const [cart, setCart] = React.useState(0);
  const goHome = () => {
    setView({
      name: 'home'
    });
    window.scrollTo({
      top: 0
    });
  };
  const openEvent = e => {
    setView({
      name: 'detail',
      event: e
    });
    window.scrollTo({
      top: 0
    });
  };
  const book = e => {
    setBooking(e);
    setCart(c => c + 1);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, window.VEBHeader && /*#__PURE__*/React.createElement(window.VEBHeader, {
    onHome: goHome,
    cartCount: cart
  }), view.name === 'home' ? /*#__PURE__*/React.createElement(Home, {
    onOpen: openEvent
  }) : /*#__PURE__*/React.createElement(window.VEBEventDetail, {
    event: view.event,
    onBack: goHome,
    onBook: book
  }), window.VEBFooter && /*#__PURE__*/React.createElement(window.VEBFooter, {
    onHome: goHome
  }), /*#__PURE__*/React.createElement(BookingModal, {
    event: booking,
    onClose: () => setBooking(null)
  }));
}
window.VEBApp = App;
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/components.jsx
try { (() => {
/* global React */
// Vette e Baite website — chrome & section components.
// DS primitives come from the compiled bundle namespace.
const DS = window.VetteEBaiteDesignSystem_f3e4e5 || {};

/* ---------- Icons (simple 2px line set) ---------- */
function Icon({
  d,
  size = 20,
  fill = 'none',
  sw = 2
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: fill,
    stroke: "currentColor",
    strokeWidth: sw,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      display: 'block'
    }
  }, Array.isArray(d) ? d.map((p, i) => /*#__PURE__*/React.createElement("path", {
    key: i,
    d: p
  })) : /*#__PURE__*/React.createElement("path", {
    d: d
  }));
}
const Icons = {
  cart: () => /*#__PURE__*/React.createElement(Icon, {
    d: ['M5 7h15l-1.5 9.5a2 2 0 0 1-2 1.7H8.5a2 2 0 0 1-2-1.7L5 4H2', 'M9 21h.01', 'M17 21h.01'],
    sw: 1.9
  }),
  user: () => /*#__PURE__*/React.createElement(Icon, {
    d: ['M20 21a8 8 0 1 0-16 0', 'M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z'],
    sw: 1.9
  }),
  menu: () => /*#__PURE__*/React.createElement(Icon, {
    d: ['M3 6h18', 'M3 12h18', 'M3 18h18']
  }),
  chevron: () => /*#__PURE__*/React.createElement(Icon, {
    d: "M6 9l6 6 6-6",
    size: 16
  }),
  arrow: () => /*#__PURE__*/React.createElement(Icon, {
    d: ['M5 12h14', 'M13 6l6 6-6 6'],
    size: 18
  }),
  back: () => /*#__PURE__*/React.createElement(Icon, {
    d: ['M19 12H5', 'M11 18l-6-6 6-6'],
    size: 18
  }),
  pin: () => /*#__PURE__*/React.createElement(Icon, {
    d: ['M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z', 'M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z'],
    size: 17,
    sw: 1.9
  }),
  clock: () => /*#__PURE__*/React.createElement(Icon, {
    d: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z', 'M12 7v5l3 2'],
    size: 17,
    sw: 1.9
  }),
  trail: () => /*#__PURE__*/React.createElement(Icon, {
    d: ['M3 20h18', 'M7 20l5-14 5 14', 'M9.5 12h5'],
    size: 17,
    sw: 1.9
  }),
  up: () => /*#__PURE__*/React.createElement(Icon, {
    d: ['M3 18l6-8 4 5 3-4 5 7', 'M3 18h18'],
    size: 17,
    sw: 1.9
  }),
  cal: () => /*#__PURE__*/React.createElement(Icon, {
    d: ['M5 6h14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z', 'M16 3v4', 'M8 3v4', 'M4 11h16'],
    size: 17,
    sw: 1.9
  }),
  ig: () => /*#__PURE__*/React.createElement(Icon, {
    d: ['M4 8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4Z', 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z', 'M17 7h.01'],
    sw: 1.8
  }),
  fb: () => /*#__PURE__*/React.createElement(Icon, {
    d: "M14 8h2V5h-2a3 3 0 0 0-3 3v2H9v3h2v6h3v-6h2.2l.8-3H14V8.5c0-.3.2-.5.5-.5Z",
    fill: "currentColor",
    sw: 0
  })
};
window.VEBIcons = Icons;
const LOGO = 'https://www.vetteebaite.it/wp-content/uploads/2024/08/Logo_vetteebaite_colori-300x300.webp';
const LOGO_W = 'https://www.vetteebaite.it/wp-content/uploads/2024/08/Logo_vetteebaite_bianco-300x300.webp';
const HERO = 'https://www.vetteebaite.it/wp-content/uploads/2024/08/hero-tesseramento-768x576.webp';

/* ---------- Wordmark (image + type fallback) ---------- */
function Wordmark({
  white = false,
  size = 44
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("img", {
    referrerPolicy: "no-referrer",
    src: white ? LOGO_W : LOGO,
    alt: "Vette e Baite",
    style: {
      width: size,
      height: size,
      objectFit: 'contain'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 19,
      letterSpacing: '-0.01em',
      lineHeight: 1,
      color: white ? '#fff' : 'var(--brand-primary)'
    }
  }, "Vette", /*#__PURE__*/React.createElement("span", {
    style: {
      color: white ? 'var(--amber-400)' : 'var(--brand-accent)'
    }
  }, " e "), "Baite"));
}

/* ---------- Header ---------- */
function Header({
  onHome,
  cartCount = 0
}) {
  const nav = ['Eventi', 'Corsi', 'Noleggio Canoe', 'Chi Siamo', 'Carta Fedeltà', 'Blog', 'Shop'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(250,247,240,0.88)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-wide)',
      margin: '0 auto',
      padding: '0 var(--gutter)',
      height: 74,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onHome && onHome();
    },
    style: {
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, null)), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 22
    },
    className: "veb-nav"
  }, nav.map((n, i) => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onHome && onHome();
    },
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 14.5,
      fontWeight: 600,
      color: 'var(--text-primary)',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4
    },
    onMouseEnter: e => e.currentTarget.style.color = 'var(--brand-accent)',
    onMouseLeave: e => e.currentTarget.style.color = 'var(--text-primary)'
  }, n, (i === 0 || i === 1) && /*#__PURE__*/React.createElement(Icons.chevron, null)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: iconBtn,
    title: "Account"
  }, /*#__PURE__*/React.createElement(Icons.user, null)), /*#__PURE__*/React.createElement("button", {
    style: {
      ...iconBtn,
      position: 'relative'
    },
    title: "Carrello"
  }, /*#__PURE__*/React.createElement(Icons.cart, null), cartCount > 0 && /*#__PURE__*/React.createElement("span", {
    style: cartBadge
  }, cartCount)))));
}
const iconBtn = {
  width: 42,
  height: 42,
  borderRadius: 'var(--radius-pill)',
  border: '1.5px solid var(--border-subtle)',
  background: 'var(--surface-raised)',
  color: 'var(--brand-primary)',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center'
};
const cartBadge = {
  position: 'absolute',
  top: -4,
  right: -4,
  minWidth: 18,
  height: 18,
  padding: '0 4px',
  borderRadius: 9,
  background: 'var(--brand-accent)',
  color: '#fff',
  fontSize: 11,
  fontWeight: 800,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'var(--font-text)'
};

/* ---------- Hero ---------- */
function Hero({
  onExplore
}) {
  const {
    Button
  } = DS;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'var(--brand-primary)',
      color: '#fff',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0.34
    }
  }, /*#__PURE__*/React.createElement("img", {
    referrerPolicy: "no-referrer",
    src: HERO,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(120deg, var(--green-800) 8%, rgba(15,36,26,0.35) 75%)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container-wide)',
      margin: '0 auto',
      padding: 'clamp(60px,9vw,120px) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 880
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-text)',
      fontWeight: 700,
      fontSize: 14,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--amber-400)'
    }
  }, "Un collettivo di"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'var(--text-display-xl)',
      lineHeight: 0.98,
      letterSpacing: '-0.03em',
      margin: '16px 0 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--amber-400)'
    }
  }, "#"), "portatorisani", /*#__PURE__*/React.createElement("br", null), "di trekking"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 'clamp(18px,2.2vw,23px)',
      lineHeight: 1.5,
      color: 'rgba(255,255,255,0.88)',
      margin: '26px 0 34px',
      maxWidth: 560
    }
  }, "Frequentare la montagna in modo consapevole. A passo lento, supportati dai nostri ideali."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    rightIcon: /*#__PURE__*/React.createElement(Icons.arrow, null),
    onClick: onExplore
  }, "Le nostre uscite"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    style: {
      color: '#fff',
      border: '2px solid rgba(255,255,255,0.45)'
    }
  }, "Conosci il team")))));
}

/* ---------- Stats band ---------- */
function StatsBand() {
  const stats = [['10.000+', 'Escursionisti accompagnati'], ['450+', 'Uscite ogni anno'], ['20', 'Regioni esplorate'], ['1', 'Cooperativa sociale']];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--green-800)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'clamp(40px,6vw,72px) var(--gutter)',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))',
      gap: 28
    }
  }, stats.map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(40px,5vw,58px)',
      lineHeight: 1,
      color: 'var(--amber-400)',
      letterSpacing: '-0.02em'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 15,
      color: 'rgba(255,255,255,0.82)',
      marginTop: 8
    }
  }, l)))));
}

/* ---------- Newsletter band ---------- */
function NewsletterBand() {
  const {
    Eyebrow,
    NewsletterForm
  } = DS;
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--brand-primary)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'clamp(48px,7vw,90px) var(--gutter)',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
      gap: 40,
      alignItems: 'center'
    },
    className: "veb-news"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "inverse"
  }, "Resta aggiornato"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'var(--text-display-m)',
      letterSpacing: '-0.02em',
      margin: '12px 0 10px'
    }
  }, "Stay tuned"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      color: 'rgba(255,255,255,0.82)',
      margin: 0,
      maxWidth: '42ch'
    }
  }, "Iscriviti alla newsletter per restare sempre aggiornato sulle nostre escursioni.")), /*#__PURE__*/React.createElement("div", null, sent ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 22,
      color: 'var(--amber-400)'
    }
  }, "Ci sei! Ti scriveremo presto. \uD83C\uDFD4\uFE0F") : /*#__PURE__*/React.createElement(NewsletterForm, {
    inverse: true,
    onSubmit: () => setSent(true)
  }))));
}

/* ---------- Partners ---------- */
function Partners() {
  const logos = ['https://www.vetteebaite.it/wp-content/uploads/2024/08/LogoAigae-300x141.webp', 'https://www.vetteebaite.it/wp-content/uploads/2025/03/Logo-Garmont-300x153.webp', 'https://www.vetteebaite.it/wp-content/uploads/2025/03/REDELK-Logo-Rosso-Nero-2023-sfondo-trasparente-300x100.webp', 'https://www.vetteebaite.it/wp-content/uploads/2025/03/marchio-lagap-2016-300x120.webp', 'https://www.vetteebaite.it/wp-content/uploads/2026/02/IT-CETS-logo_partners_transp-300x138.webp'];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-raised)',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '40px var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      fontFamily: 'var(--font-text)',
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      margin: '0 0 22px'
    }
  }, "I nostri partner"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'clamp(24px,5vw,56px)',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, logos.map((l, i) => /*#__PURE__*/React.createElement("img", {
    key: i,
    referrerPolicy: "no-referrer",
    src: l,
    alt: "",
    style: {
      height: 42,
      objectFit: 'contain',
      opacity: 0.72,
      filter: 'grayscale(0.4)'
    }
  })))));
}

/* ---------- Footer ---------- */
function Footer({
  onHome
}) {
  const col = (title, items) => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-text)',
      fontWeight: 800,
      fontSize: 12,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--amber-400)',
      margin: '0 0 14px'
    }
  }, title), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 9
    }
  }, items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onHome && onHome();
    },
    style: {
      color: 'rgba(255,255,255,0.78)',
      textDecoration: 'none',
      fontSize: 14.5
    },
    onMouseEnter: e => e.currentTarget.style.color = '#fff',
    onMouseLeave: e => e.currentTarget.style.color = 'rgba(255,255,255,0.78)'
  }, it)))));
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--green-900)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-wide)',
      margin: '0 auto',
      padding: 'clamp(48px,6vw,72px) var(--gutter) 32px',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 36
    },
    className: "veb-foot"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Wordmark, {
    white: true,
    size: 56
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,0.72)',
      fontSize: 14.5,
      lineHeight: 1.6,
      margin: '18px 0 18px',
      maxWidth: '34ch'
    }
  }, "A passo lento, supportati dai nostri ideali, ci distinguiamo per lo stile semplice con cui trasmettiamo il nostro slogan ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: '#fff'
    }
  }, "#portatorisaniditrekking"), "."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: socialBtn
  }, /*#__PURE__*/React.createElement(Icons.fb, null)), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: socialBtn
  }, /*#__PURE__*/React.createElement(Icons.ig, null)))), col('Eventi', ['Escursioni Giornaliere', 'Trek Weekend', 'Ferrate e Alpinismo', 'Trekking e Cammini', 'Viaggi Estero']), col('Vette e Baite', ['Chi Siamo', 'Regolamento Escursioni', 'Privacy Policy', 'Contatti', 'F.A.Q.']), col('Contatti', ['info@vetteebaite.it', 'Riccardo · 392 040 1247', 'Alessandro · 329 446 8647', 'Bologna, Via Buvalelli 3'])), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,255,255,0.12)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-wide)',
      margin: '0 auto',
      padding: '18px var(--gutter)',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 10,
      fontSize: 13,
      color: 'rgba(255,255,255,0.6)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Vette e Baite Societ\xE0 Cooperativa Sociale \xB7 P.iva 04244541209"), /*#__PURE__*/React.createElement("span", null, "\xA9 2026 \u2014 All Rights Reserved"))));
}
const socialBtn = {
  width: 40,
  height: 40,
  borderRadius: 'var(--radius-pill)',
  border: '1.5px solid rgba(255,255,255,0.25)',
  color: '#fff',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  textDecoration: 'none'
};
Object.assign(window, {
  VEBHeader: Header,
  VEBHero: Hero,
  VEBStatsBand: StatsBand,
  VEBNewsletterBand: NewsletterBand,
  VEBPartners: Partners,
  VEBFooter: Footer,
  VEBWordmark: Wordmark
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/components.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
// Vette e Baite — sample event data (real titles/photos from the live site)
window.VEB_EVENTS = [{
  id: 'antrona',
  cat: 'Escursioni Giornaliere',
  catKey: 'giornaliere',
  title: 'Valle Antrona Wild – I Laghi di Trivera e il Mottone',
  image: 'https://www.vetteebaite.it/wp-content/uploads/2026/05/Laghi-di-Trivera-300x169.webp',
  regions: ['Lombardia', 'Piemonte'],
  dateStart: '27 Giugno',
  time: '07:00–17:00',
  status: 'ultimi',
  price: 38,
  diff: 'EE · Escursionisti Esperti',
  dislivello: '950 m',
  durata: '6 ore',
  lunghezza: '14 km',
  blurb: "Un anello selvaggio nel cuore della Valle Antrona, tra laghi di origine glaciale e il panorama aperto del Mottone. Una giornata per chi cerca la montagna vera, lontano dai sentieri affollati."
}, {
  id: 'rondinaio',
  cat: 'Escursioni Giornaliere',
  catKey: 'giornaliere',
  title: 'Hike & Dinner – Il Lago Turchino e il versante orientale del Monte Rondinaio',
  image: 'https://www.vetteebaite.it/wp-content/uploads/2024/11/06_27_HikeDinner-Lago_Turchino_Rondinaio_01-300x200.webp',
  regions: ['Emilia-Romagna'],
  dateStart: '27 Giugno',
  time: '09:30–17:00',
  status: 'confermato',
  price: 32,
  diff: 'E · Escursionistico',
  dislivello: '700 m',
  durata: '5 ore',
  lunghezza: '11 km',
  blurb: "Trekking panoramico fino al Lago Turchino, con cena conviviale in rifugio a chiudere la giornata. Il modo migliore per vivere la montagna: a passo lento e in buona compagnia."
}, {
  id: 'benigni',
  cat: 'Escursioni Giornaliere',
  catKey: 'giornaliere',
  title: 'Domenica Orobica – Il Rifugio Benigni e Cima Piazzotti',
  image: 'https://www.vetteebaite.it/wp-content/uploads/2026/05/Rifugio-Benigni-300x195.webp',
  regions: ['Lombardia'],
  dateStart: '28 Giugno',
  time: '07:30–17:00',
  status: 'confermato',
  price: 35,
  diff: 'EE · Escursionisti Esperti',
  dislivello: '1100 m',
  durata: '6.5 ore',
  lunghezza: '15 km',
  blurb: "Una classica orobica fino al Rifugio Benigni e alla Cima Piazzotti, tra creste, laghetti alpini e silenzi d'alta quota."
}, {
  id: 'bewild',
  cat: 'Trek Weekend',
  catKey: 'weekend',
  title: 'Weekend di formazione – BeWild BeWacco Experience sulle Alpi',
  image: 'https://www.vetteebaite.it/wp-content/uploads/2026/05/puntaVerzel-300x169.webp',
  regions: ['Lombardia', 'Piemonte'],
  dateStart: '27 Giugno',
  dateEnd: '28 Giugno',
  status: 'confermato',
  price: 145,
  diff: 'EE · Escursionisti Esperti',
  dislivello: '1300 m',
  durata: '2 giorni',
  lunghezza: '22 km',
  blurb: "Due giorni di formazione e avventura tra le Alpi: tecniche di bivacco, orientamento e vita selvatica, con notte sotto le stelle. Per imparare a frequentare la montagna in autonomia e consapevolezza."
}, {
  id: 'bocchette',
  cat: 'Ferrate e Alpinismo',
  catKey: 'ferrate',
  title: 'Trek & Via Ferrata Weekend – Le iconiche Bocchette Centrali del Brenta',
  image: 'https://www.vetteebaite.it/wp-content/uploads/2024/11/Bocchette-Centrali-300x225.webp',
  regions: ['Trentino-Alto Adige'],
  dateStart: '11 Luglio',
  dateEnd: '12 Luglio',
  status: 'confermato',
  price: 180,
  diff: 'EEA · con attrezzatura',
  dislivello: '1500 m',
  durata: '2 giorni',
  lunghezza: '18 km',
  blurb: "La via ferrata più leggendaria delle Dolomiti di Brenta. Due giorni sospesi tra guglie e cenge, con pernottamento in rifugio. Richiesta esperienza su vie ferrate."
}, {
  id: 'vandelli',
  cat: 'Trekking e Cammini',
  catKey: 'cammini',
  title: 'La Via Vandelli – Dall’Appennino al Tirreno',
  image: 'https://www.vetteebaite.it/wp-content/uploads/2026/02/86842070Master-300x225.webp',
  regions: ['Emilia-Romagna', 'Toscana'],
  dateStart: '30 Giugno',
  dateEnd: '4 Luglio',
  status: 'confermato',
  price: 420,
  diff: 'E · Escursionistico',
  dislivello: '2800 m',
  durata: '5 giorni',
  lunghezza: '90 km',
  blurb: "Lo storico cammino settecentesco che collega Modena a Massa, dove la montagna finisce nel mare. Cinque giorni a piedi tra crinali, boschi e antichi borghi."
}, {
  id: 'marguareis',
  cat: 'Trekking e Cammini',
  catKey: 'cammini',
  title: 'Tour del Marguareis – La montagna vuota delle Alpi Liguri',
  image: 'https://www.vetteebaite.it/wp-content/uploads/2026/02/Marguareis_3-300x201.webp',
  regions: ['Piemonte'],
  dateStart: '9 Luglio',
  dateEnd: '12 Luglio',
  status: 'soldout',
  price: 360,
  diff: 'EE · Escursionisti Esperti',
  dislivello: '2400 m',
  durata: '4 giorni',
  lunghezza: '52 km',
  blurb: "Un anello selvaggio attorno al Marguareis, regno del carsismo e dei grandi spazi delle Alpi Liguri. Quattro giorni tra rifugi e altipiani lunari."
}, {
  id: 'translagorai',
  cat: 'Trekking e Cammini',
  catKey: 'cammini',
  title: 'Tenda Trek Translagorai – La catena più lunga del Trentino orientale',
  image: 'https://www.vetteebaite.it/wp-content/uploads/2025/04/Foto-da-Luca-Adani-1-300x225.webp',
  regions: ['Trentino-Alto Adige'],
  dateStart: '21 Luglio',
  dateEnd: '25 Luglio',
  status: 'ultimi',
  price: 480,
  diff: 'EE · Escursionisti Esperti',
  dislivello: '4200 m',
  durata: '5 giorni',
  lunghezza: '68 km',
  blurb: "La traversata integrale della Catena del Lagorai, una delle ultime aree selvagge delle Alpi. Cinque giorni in tenda, senza rifugi, in totale autonomia."
}];
window.VEB_CATEGORIES = [{
  key: 'tutti',
  label: 'Tutti gli Eventi'
}, {
  key: 'giornaliere',
  label: 'Escursioni Giornaliere'
}, {
  key: 'weekend',
  label: 'Trek Weekend'
}, {
  key: 'ferrate',
  label: 'Ferrate e Alpinismo'
}, {
  key: 'cammini',
  label: 'Trekking e Cammini'
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

// ui_kits/website/detail.jsx
try { (() => {
/* global React */
// Vette e Baite — Event detail view + booking confirmation
const DSd = window.VetteEBaiteDesignSystem_f3e4e5 || {};
function EventDetail({
  event,
  onBack,
  onBook
}) {
  const {
    Button,
    StatusBadge,
    Tag,
    Eyebrow
  } = DSd;
  const I = window.VEBIcons;
  const facts = [[I.up, 'Dislivello', event.dislivello], [I.clock, 'Durata', event.durata], [I.trail, 'Lunghezza', event.lunghezza], [I.cal, 'Difficoltà', event.diff]];
  const range = event.dateEnd ? `${event.dateStart} – ${event.dateEnd}` : event.dateStart;
  const soldout = event.status === 'soldout';
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 'clamp(320px,46vw,520px)',
      overflow: 'hidden',
      background: 'linear-gradient(135deg,#3a6b4e,#1f472f 65%,#0f241a)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    referrerPolicy: "no-referrer",
    src: event.image,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-bottom)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      height: '100%',
      padding: '0 var(--gutter)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 24
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      background: 'rgba(255,255,255,0.92)',
      border: 'none',
      borderRadius: 'var(--radius-pill)',
      padding: '9px 16px',
      cursor: 'pointer',
      fontFamily: 'var(--font-text)',
      fontWeight: 700,
      fontSize: 14,
      color: 'var(--brand-primary)'
    }
  }, /*#__PURE__*/React.createElement(I.back, null), " Tutte le uscite")), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 28,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      marginBottom: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "solid"
  }, event.cat), event.status && /*#__PURE__*/React.createElement(StatusBadge, {
    status: event.status
  })), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(30px,4.4vw,52px)',
      lineHeight: 1.04,
      letterSpacing: '-0.02em',
      margin: 0,
      maxWidth: '20ch',
      textShadow: '0 2px 24px rgba(15,36,26,0.4)'
    }
  }, event.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      marginTop: 16,
      flexWrap: 'wrap',
      fontFamily: 'var(--font-text)',
      fontWeight: 600,
      fontSize: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement(I.pin, null), event.regions.join(' · ')), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement(I.cal, null), range), event.time && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement(I.clock, null), event.time))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'clamp(40px,6vw,72px) var(--gutter)',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.6fr) minmax(280px,1fr)',
      gap: 'clamp(28px,4vw,56px)',
      alignItems: 'start'
    },
    className: "veb-detail"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "L'esperienza"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-h2)',
      margin: '12px 0 16px',
      letterSpacing: '-0.02em'
    }
  }, "Cosa ci aspetta"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.7,
      color: 'var(--text-secondary)',
      maxWidth: '62ch'
    }
  }, event.blurb), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))',
      gap: 14,
      margin: '32px 0'
    }
  }, facts.map(([Ic, k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      background: 'var(--surface-raised)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: '16px 18px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--brand-accent)',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(Ic, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 17,
      marginTop: 3
    }
  }, v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--green-50)',
      border: '1px solid var(--green-200)',
      borderRadius: 'var(--radius-lg)',
      padding: '20px 24px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 18,
      margin: '0 0 10px'
    }
  }, "Cosa \xE8 incluso"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: 0,
      listStyle: 'none',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
      gap: 8,
      color: 'var(--text-secondary)',
      fontSize: 15
    }
  }, ['Accompagnatore AIGAE', 'Briefing di sicurezza', 'Traccia GPS del percorso', 'Assicurazione collettiva'].map(x => /*#__PURE__*/React.createElement("li", {
    key: x,
    style: {
      display: 'flex',
      gap: 9,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--green-500)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }))), x))))), /*#__PURE__*/React.createElement("aside", {
    style: {
      position: 'sticky',
      top: 90,
      background: 'var(--surface-raised)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-xl)',
      padding: 24,
      boxShadow: 'var(--shadow-md)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 40,
      letterSpacing: '-0.02em',
      color: 'var(--brand-primary)'
    }
  }, "\u20AC", event.price), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 14
    }
  }, "a persona")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--border-subtle)',
      margin: '18px 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      fontSize: 14.5,
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement(Row, {
    I: I.cal,
    label: "Date",
    value: range
  }), /*#__PURE__*/React.createElement(Row, {
    I: I.pin,
    label: "Ritrovo",
    value: event.regions[0]
  }), /*#__PURE__*/React.createElement(Row, {
    I: I.up,
    label: "Difficolt\xE0",
    value: event.diff
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(DSd.Button, {
    variant: soldout ? 'secondary' : 'accent',
    size: "lg",
    fullWidth: true,
    disabled: soldout,
    onClick: () => onBook(event)
  }, soldout ? 'Sold-out' : 'Prenota il tuo posto')), !soldout && /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      fontSize: 12.5,
      color: 'var(--text-muted)',
      margin: '12px 0 0'
    }
  }, "Posti limitati \xB7 cancellazione gratuita fino a 7 giorni prima"))));
}
function Row({
  I,
  label,
  value
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--brand-accent)'
    }
  }, /*#__PURE__*/React.createElement(I, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontWeight: 700,
      color: 'var(--text-primary)',
      textAlign: 'right'
    }
  }, value));
}
window.VEBEventDetail = EventDetail;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/detail.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.StatusBadge = __ds_scope.StatusBadge;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.EventCard = __ds_scope.EventCard;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.NewsletterForm = __ds_scope.NewsletterForm;

})();
