import { html, reactive } from "@arrow-js/core"
import { XIcon } from "./icons"

export default function TrackCard(props) {
  const { icon, name, description, questions, resources } = props
  const state = reactive({
    modalOpened: false,
  })

  const toggleModal = () => (state.modalOpened = !state.modalOpened)

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      state.modalOpened = false
    }
  })

  return html`
    <div
      @click="${toggleModal}"
      class="flex flex-col items-center rounded-lg p-4 text-center text-base hover:bg-neutral-800"
    >
      ${icon}
      <h3 class="mt-4 font-extrabold">${name}</h3>
      <p>${description}</p>
    </div>
    ${() =>
      state.modalOpened &&
      html`
        <div
          tabindex="-1"
          aria-hidden="true"
          @click="${(e) => {
            if (e.target.closest(".modal") === null) toggleModal()
          }}"
          class="fixed inset-0 top-0 left-0 right-0 z-50 flex w-full items-center justify-center overflow-y-auto overflow-x-hidden p-4 backdrop-blur-sm md:h-full"
        >
          <div class="relative w-full lg:w-1/2">
            <!-- Modal content -->
            <div
              class="modal relative rounded-lg border border-neutral-600 bg-neutral-800 shadow"
            >
              <!-- Modal header -->
              <div class="relative rounded-t border-b border-neutral-600 p-4">
                <h3 class="text-center font-extrabold text-2xl">${name}</h3>
                <button
                  type="button"
                  class="absolute right-4 top-0 bottom-0 my-auto mx-0 inline-flex h-8 items-center rounded-lg bg-transparent p-1 hover:bg-neutral-600 hover:text-white"
                  @click="${toggleModal}"
                >
                  ${XIcon}
                </button>
              </div>
              <!-- Modal body -->
              <div class="space-y-6 p-6 text-left">
                <div>
                  <h4 class="font-bold text-lg">Guiding Questions</h4>
                  <ul class="ml-6 list-disc">
                    ${questions.map((e) => html` <li>${e}</li> `)}
                  </ul>
                </div>
                <div>
                  <h4 class="font-bold text-lg">Resources</h4>
                  <ul class="ml-6 list-disc">
                    ${resources.map((e) => html` <li>${e}</li> `)}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      `}
  `
}
