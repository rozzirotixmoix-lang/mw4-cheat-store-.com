# mw4cheatstore.com

Static site for [mw4cheatstore.com](https://mw4cheatstore.com): Astro 7, multilingual (en, es, de, fr), Cloudflare Workers deploy.

Conversion workflow: start with [AGENTS.md](AGENTS.md), the [architecture reference](docs/architecture.md), [example conversion intake](docs/conversion.example.json), and [follow-up defects](docs/template-defects.md). The example is documentation only; changing it does not change the website.

Every authorized new-site conversion includes the [content workflow](docs/content-workflow.md): Codex plans/writes commercial copy, articles and disclosed editorial forum starters in all four languages. The npm commands prepare/check/install the generated data; ordinary MW4 builds never generate or replace copy.

## Develop

```bash
npm ci
npm run dev
```
