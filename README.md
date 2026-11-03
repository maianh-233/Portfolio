# Do Mai Anh — Portfolio

Software Developer · Java · Spring Boot · React
📧 maianhdo20042303@gmail.com · 🐙 [github.com/maianh-233](https://github.com/maianh-233) · 📄 [CV (PDF)](cv/Do-Mai-Anh-CV.pdf)

Open **`index.html`** (or the GitHub Pages site) to browse everything: three projects with demo videos, a filterable gallery of 79 website themes (each card opens the live theme), and a short about section. Light and dark mode follow the system, with a toggle in the nav.

**Role links.** The "View as" switch highlights the work for one role. Share a tailored link with `?role=frontend` or `?role=fullstack`, for example `https://<user>.github.io/<repo>/?role=fullstack`.

**Personal details** (interests, hobbies) live in [`assets/js/profile.js`](assets/js/profile.js). The page is vanilla HTML/CSS/JS plus GSAP from a CDN, no build step.

## What's inside

| Folder | Contents |
|---|---|
| [`cv/`](cv/) | CV in PDF |
| [`fashion-system/`](fashion-system/) | Lunaria Boutique — multi-store fashion e-commerce: 13 demo videos (storefront, sales, inventory, system admin) |
| [`layout-agent/`](layout-agent/) | Layout_Agent — demo video of the SRS-to-website AI tool (the tool behind the themes) |
| [`freshmart/`](freshmart/) | FreshMart — demo video of the Java Swing store management app |
| [`themes/`](themes/) | 79 website themes built during my internship at Samset Solutions, grouped by industry |
| `assets/` | Styles, scripts, data and thumbnails for the portfolio page |

### Themes by industry

| Folder | Industry | Themes |
|---|---|---|
| [`01-thoi-trang`](themes/01-thoi-trang) | Fashion | 7 |
| [`02-du-lich-trai-nghiem`](themes/02-du-lich-trai-nghiem) | Travel & culture | 6 |
| [`03-resort`](themes/03-resort) | Resort | 10 |
| [`04-tham-my-vien`](themes/04-tham-my-vien) | Aesthetic clinic | 10 |
| [`05-salon-barber-nail`](themes/05-salon-barber-nail) | Salon · barber · nail | 10 |
| [`06-tiem-banh-tra-sua`](themes/06-tiem-banh-tra-sua) | Bakery & tea (incl. a full storefront + admin prototype) | 11 |
| [`07-giao-duc-dao-tao`](themes/07-giao-duc-dao-tao) | Education | 7 |
| [`08-portfolio-ca-nhan`](themes/08-portfolio-ca-nhan) | Personal portfolio | 10 |
| [`09-co-khi-cong-nghe`](themes/09-co-khi-cong-nghe) | Industry & tech | 4 |
| [`10-phu-kien-xe`](themes/10-phu-kien-xe) | Automotive commerce | 2 |
| [`11-thu-cung`](themes/11-thu-cung) | Pet care (incl. a full storefront + admin prototype) | 2 |

Each theme folder keeps its brief (`request.md`), design concept (`concept.md`) and the site itself (`web/`, `prototype/` or root `index.html`). All themes are static HTML/CSS/JS and run directly in the browser — no build step.

## Run locally

```bash
npx serve .
# or simply open index.html in a browser
```

## Publish with GitHub Pages

Settings → Pages → Source: *Deploy from a branch* → `main` / root. All links are relative, so the site works under `https://<user>.github.io/<repo>/`.

## Adding a theme

1. Put it in the matching `themes/<category>/` folder.
2. Add an entry to `assets/js/themes-data.js` (`slug`, `cat`, `name`, `sub`, `pages`, `kind`, `href`, `thumb`) and a 960×600 screenshot in `assets/thumbs/`.
