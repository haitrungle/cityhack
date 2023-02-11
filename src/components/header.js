import { html, reactive } from "@arrow-js/core"

import { ListIcon, XIcon } from "./icons"

const sectionIDs = [
  "ABOUT",
  "TRACKS",
  "TIMELINE",
  "PEOPLE",
  "ORGANIZERS",
  "SPONSORS",
]

const navList = html`
  ${() =>
    sectionIDs.map(
      (item) =>
        html`<a class="light-hover font-medium" href="#${item}">${item}</a>`
    )}
`

const state = reactive({
  menuOpened: false,
})

const Header = html`
  <div class="flex items-center justify-between">
    <div>
      <a href="#">
        <img src="/img/logo.png" alt="CityHack logo" class="h-12 w-12 invert" />
      </a>
    </div>
    <button
      type="button"
      @click="${() => {
        state.menuOpened = !state.menuOpened
      }}"
      class="ml-3 inline-flex items-center rounded-lg p-2 hover:bg-neutral-600 sm:hidden"
      aria-controls="mobile-menu"
      aria-expanded="false"
    >
      ${() => (state.menuOpened ? XIcon : ListIcon)}
    </button>
    <nav class="flex hidden justify-between gap-8 sm:inline-flex">
      ${navList}
    </nav>
  </div>
  ${() =>
    state.menuOpened &&
    html`
      <div>
        <div
          class="flex h-[calc(100vh-4rem)] flex-col justify-around pb-16 text-center text-3xl"
        >
          ${navList}
        </div>
      </div>
    `}
`

export default Header
