/* Sinh tự động bởi SRS & Prototype Builder từ srs/_design-tokens.json — không sửa tay. Sửa SRS rồi dựng lại prototype. */
// Nạp NGAY SAU <script src="https://cdn.tailwindcss.com"></script>.
// Bảng màu chỉ gồm token: primary, neutral, success, warning, danger, info (không có blue-500, gray-200…).
tailwind.config = {
  "theme": {
    "colors": {
      "transparent": "transparent",
      "current": "currentColor",
      "inherit": "inherit",
      "primary": {
        "50": "rgb(var(--c-primary-50) / <alpha-value>)",
        "100": "rgb(var(--c-primary-100) / <alpha-value>)",
        "200": "rgb(var(--c-primary-200) / <alpha-value>)",
        "300": "rgb(var(--c-primary-300) / <alpha-value>)",
        "400": "rgb(var(--c-primary-400) / <alpha-value>)",
        "500": "rgb(var(--c-primary-500) / <alpha-value>)",
        "600": "rgb(var(--c-primary-600) / <alpha-value>)",
        "700": "rgb(var(--c-primary-700) / <alpha-value>)",
        "800": "rgb(var(--c-primary-800) / <alpha-value>)",
        "900": "rgb(var(--c-primary-900) / <alpha-value>)"
      },
      "neutral": {
        "0": "rgb(var(--c-neutral-0) / <alpha-value>)",
        "50": "rgb(var(--c-neutral-50) / <alpha-value>)",
        "100": "rgb(var(--c-neutral-100) / <alpha-value>)",
        "200": "rgb(var(--c-neutral-200) / <alpha-value>)",
        "300": "rgb(var(--c-neutral-300) / <alpha-value>)",
        "400": "rgb(var(--c-neutral-400) / <alpha-value>)",
        "500": "rgb(var(--c-neutral-500) / <alpha-value>)",
        "600": "rgb(var(--c-neutral-600) / <alpha-value>)",
        "700": "rgb(var(--c-neutral-700) / <alpha-value>)",
        "800": "rgb(var(--c-neutral-800) / <alpha-value>)",
        "900": "rgb(var(--c-neutral-900) / <alpha-value>)"
      },
      "success": {
        "50": "rgb(var(--c-success-50) / <alpha-value>)",
        "100": "rgb(var(--c-success-100) / <alpha-value>)",
        "500": "rgb(var(--c-success-500) / <alpha-value>)",
        "600": "rgb(var(--c-success-600) / <alpha-value>)",
        "700": "rgb(var(--c-success-700) / <alpha-value>)"
      },
      "warning": {
        "50": "rgb(var(--c-warning-50) / <alpha-value>)",
        "100": "rgb(var(--c-warning-100) / <alpha-value>)",
        "500": "rgb(var(--c-warning-500) / <alpha-value>)",
        "600": "rgb(var(--c-warning-600) / <alpha-value>)",
        "700": "rgb(var(--c-warning-700) / <alpha-value>)"
      },
      "danger": {
        "50": "rgb(var(--c-danger-50) / <alpha-value>)",
        "100": "rgb(var(--c-danger-100) / <alpha-value>)",
        "500": "rgb(var(--c-danger-500) / <alpha-value>)",
        "600": "rgb(var(--c-danger-600) / <alpha-value>)",
        "700": "rgb(var(--c-danger-700) / <alpha-value>)"
      },
      "info": {
        "50": "rgb(var(--c-info-50) / <alpha-value>)",
        "100": "rgb(var(--c-info-100) / <alpha-value>)",
        "500": "rgb(var(--c-info-500) / <alpha-value>)",
        "600": "rgb(var(--c-info-600) / <alpha-value>)",
        "700": "rgb(var(--c-info-700) / <alpha-value>)"
      },
      "secondary": {
        "50": "rgb(var(--c-secondary-50) / <alpha-value>)",
        "100": "rgb(var(--c-secondary-100) / <alpha-value>)",
        "200": "rgb(var(--c-secondary-200) / <alpha-value>)",
        "300": "rgb(var(--c-secondary-300) / <alpha-value>)",
        "400": "rgb(var(--c-secondary-400) / <alpha-value>)",
        "500": "rgb(var(--c-secondary-500) / <alpha-value>)",
        "600": "rgb(var(--c-secondary-600) / <alpha-value>)",
        "700": "rgb(var(--c-secondary-700) / <alpha-value>)",
        "800": "rgb(var(--c-secondary-800) / <alpha-value>)",
        "900": "rgb(var(--c-secondary-900) / <alpha-value>)"
      },
      "white": "rgb(var(--c-neutral-0) / <alpha-value>)",
      "black": "rgb(var(--c-neutral-900) / <alpha-value>)"
    },
    "fontFamily": {
      "sans": [
        "var(--font-sans)"
      ],
      "mono": [
        "var(--font-mono, ui-monospace, monospace)"
      ]
    },
    "fontSize": {
      "xs": [
        "var(--text-xs)",
        {
          "lineHeight": "var(--leading-xs)"
        }
      ],
      "sm": [
        "var(--text-sm)",
        {
          "lineHeight": "var(--leading-sm)"
        }
      ],
      "base": [
        "var(--text-base)",
        {
          "lineHeight": "var(--leading-base)"
        }
      ],
      "lg": [
        "var(--text-lg)",
        {
          "lineHeight": "var(--leading-lg)"
        }
      ],
      "xl": [
        "var(--text-xl)",
        {
          "lineHeight": "var(--leading-xl)"
        }
      ],
      "2xl": [
        "var(--text-2xl)",
        {
          "lineHeight": "var(--leading-2xl)"
        }
      ],
      "3xl": [
        "var(--text-3xl)",
        {
          "lineHeight": "var(--leading-3xl)"
        }
      ],
      "4xl": [
        "var(--text-4xl)",
        {
          "lineHeight": "var(--leading-4xl)"
        }
      ]
    },
    "borderRadius": {
      "none": "0",
      "sm": "var(--radius-sm)",
      "md": "var(--radius-md)",
      "lg": "var(--radius-lg)",
      "xl": "var(--radius-xl)",
      "2xl": "var(--radius-2xl)",
      "full": "var(--radius-full)",
      "DEFAULT": "var(--radius-md)"
    },
    "boxShadow": {
      "none": "none",
      "sm": "var(--shadow-sm)",
      "md": "var(--shadow-md)",
      "lg": "var(--shadow-lg)",
      "brand": "var(--shadow-brand)",
      "DEFAULT": "var(--shadow-sm)"
    },
    "screens": {
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1536px"
    },
    "extend": {
      "spacing": {
        "sidebar": "var(--layout-sidebar)",
        "sidebar-collapsed": "var(--layout-sidebar-collapsed)",
        "topbar": "var(--layout-topbar)",
        "site-header": "var(--layout-site-header)",
        "content": "var(--layout-content)",
        "table-row": "var(--layout-table-row)",
        "control": "var(--layout-control)"
      }
    }
  }
};
