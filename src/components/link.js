import { html } from "@arrow-js/core"

export default function Link(href, children) {
  return html`
    <a target="_blank" class="text-sky-400 underline" href="${href}">
      ${children}
    </a>
  `
}
