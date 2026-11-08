import type {UserProfile_Data, AccessibilitySettings_Types} from "./types"
export class Control {
  static preventScroll() {
    const bodyEl = document.body
    bodyEl?.setAttribute("style", "overflow: hidden;")
  }
  static allowScroll() {
    const bodyEl = document.body
    bodyEl?.removeAttribute("style")
  }
  static add_backdrop() {
    const bodyEl = document.body
    const createElement = document.createElement("div")
    createElement.setAttribute("class", "backdrop blurbg")
    bodyEl?.appendChild(createElement)
  }
  static remove_backdrop() {
    const bodyEl = document.body
    const getElement = bodyEl.querySelector(".backdrop")
    getElement?.remove()
  }
}
export class Create {
  static Dialog(id: string, title: string, body: string) {
    const bodyEl = document.body
    const dialogEl = document.createElement("dialog")
    dialogEl.setAttribute("class", "modal")
    dialogEl.setAttribute("id", id)
    dialogEl.innerHTML = `<div class="modal-box"><form method="dialog" class="flex flex-row justify-between"><h2 class="text-lg font-bold mb-0">${title}</h2><button type="button" class="btn btn-sm btn-circle btn-ghost" id="closeDialog"><span class="iconify fa6-solid--xmark"></span></button></form><div class="h-full">${body}</div></div>`
    if (document.getElementById(id)) {
      console.error(`Cannot create dialog element that is already apended! Try using a different ID!`)
    } else {
      bodyEl.appendChild(dialogEl)
      dialogEl.showModal()
      Control.preventScroll()
      dialogEl.querySelector("#closeDialog")?.addEventListener("click", function (event: Event) {
        dialogEl?.remove()
        Control.allowScroll()
        event.preventDefault()
      })
    }
  }
  static ErrorMessage(content: string, target: Element) {
    const textElement = document.createElement("p")
    textElement.setAttribute("class", "")
  }
  static AccessibilityWidget() {
    const getSettings = Fetch.AccessibilitySettings()
    const bodyEl = document.body
    const buttonEl = document.createElement("button")
    buttonEl.setAttribute("id", "accessibility_btn")
    buttonEl.setAttribute("class", "fixed z-50 bottom-6 right-6 h-13 w-13 ring-1 ring-sky-500 transition duration-[0.3s] hover:ring-2 hover:ring-sky-300 rounded-full shadow-md bg-2xl bg-blue-500 cursor-pointer text-white items-center justify-center flex")
    buttonEl.setAttribute("aria-label", "Accessibility Settings")
    buttonEl.title = "Accessibility Settings"
    buttonEl.innerHTML = `<span class="iconify fa6-solid--universal-access text-2xl"></span>`
    bodyEl?.appendChild(buttonEl)
    buttonEl.addEventListener("click", function(event) {
      const element_id = "accessibility_dialog"
      const dialog_element = document.getElementById(element_id)
      const settingsBody = `
        <form method="dialog" class="flex flex-col gap-[0.5em]" id="settings">
            <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4 mb-1">
              <legend class="fieldset-legend">Vision</legend>
              <label class="label" for="vision_text_size">Text Size</label>
              <select class="select" id="vision_text_size" name="vision_text_size">
                <option disabled selected value="none">Select your text size</option>
                <option value="extra_large" ${getSettings.text_size === "extra_large" ? `selected` : ``}>Extra Large</option>
                <option value="large" ${getSettings.text_size === "large" ? `selected` : ``}>Large</option>
                <option value="medium" ${getSettings.text_size === "medium" ? `selected` : ``}>Medium</option>
                <option value="small" ${getSettings.text_size === "small" ? `selected` : ``}>Small</option>
                <option value="default" ${getSettings.text_size === "default" ? `selected` : ``}>Default</option>
              </select>
              <label class="label" for="vision_invert_colors">
                <input type="checkbox" class="checkbox" id="vision_invert_colors" name="vision_invert_colors" ${getSettings.color_invert ? `checked` : ``} />
                Invert The Colors
              </label>
              <label class="label" for="vision_no_colors">
                <input type="checkbox" class="checkbox" id="vision_no_colors" name="vision_no_colors" ${getSettings.no_color ? `checked` : ``} />
                No Colors
              </label>
            </fieldset>
            <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4 mb-1">
              <legend class="fieldset-legend">Motion</legend>
              <label class="label" for="motion_no_transitions">
                <input type="checkbox" class="checkbox" id="motion_no_transitions" name="motion_no_transitions" ${getSettings.no_motion ? `checked` : ``} />
                Reduce Transitions
              </label>
            </fieldset>
            <button class="btn btn-success" type="submit" title="Apply my changes"><span aria-hidden="true" class="iconify fa6-solid--circle-check h-6 w-6 shrink-0 stroke-current m r-1"></span>Apply my changes</button>
          </form>
      `
      Create.Dialog(element_id, "Accessibility Settings", settingsBody)
      document.querySelector<HTMLFormElement>(dialog_element + ", #settings")?.addEventListener("submit", function(event2) {
        const formData = new FormData(this!)
        const formObject = Object.fromEntries(formData)
        localStorage.setItem("accessibility_settings", JSON.stringify({
          no_motion: formObject.motion_no_transitions === "on" ? true : false,
          text_size: formObject.vision_text_size,
          color_invert: formObject.vision_invert_colors === "on" ? true : false,
          no_color: formObject.vision_no_colors === "on" ? true : false,
        }))
        document.getElementById(element_id)?.remove()
        Control.allowScroll()
        window.location.reload()
        event2.preventDefault()
      })
      event.preventDefault()
    })
  }
}
export class Other {
  static ApplyAccessibility() {
    const getSettings = Fetch.AccessibilitySettings()
    const styleElement = document.createElement("style")
    const headElement = document.querySelector("head")
    const styleSheetData = `
      ${getSettings.no_motion ? `* {transition: unset !important;}` : ``}
      ${getSettings.text_size === "extra_large" ? `* {font-size: var(--text-2xl) !important; line-height: var(--text-2xl--line-height) !important;}`: ``}
      ${getSettings.text_size === "large" ? `* {font-size: var(--text-xl) !important; line-height: var(--text-xl--line-height) !important;}`: ``}
      ${getSettings.text_size === "medium" ? `* {font-size: var(--text-lg) !important; line-height: var(--text-lg--line-height) !important;}`: ``}
      ${getSettings.text_size === "small" ? `* {font-size: var(--text-sm) !important; line-height: var(--text-sm--line-height) !important;}`: ``}
      ${getSettings.no_color ? `header, main, footer, dialog, section {filter: grayscale(100%) !important;} #accessibility_btn {filter: grayscale(100%) !important;}`: ``}
      ${getSettings.color_invert ? `header, main, footer, dialog {filter: invert(100%) !important;} #accessibility_btn {filter: invert(100%) !important;}`: ``}
    `
    styleElement.innerHTML = styleSheetData
    headElement?.appendChild(styleElement)
  }
}
export class Fetch {
  static AccessibilitySettings() {
    const defaultSettings: AccessibilitySettings_Types = {
      no_motion: false,
      text_size: "default",
      color_invert: false,
      no_color: false
    }
    const checkSettings = localStorage.getItem("accessibility_settings")
    if (!checkSettings) {
      localStorage.setItem("accessibility_settings", JSON.stringify(defaultSettings))
      return <AccessibilitySettings_Types>JSON.parse(checkSettings!)
    } else {
      return <AccessibilitySettings_Types>JSON.parse(checkSettings)
    }
  }
  static async UserProfile(user_id: string | number) {
    try {
      const request = await fetch("https://my.ttnrtsite.me/user_profile?id=" + user_id, {
        method: "GET"
      })
      if (!request.ok) {
        const response_error = await request.json()
        throw new Error(response_error.message || "Server didn't respond correctly! Try again later!")
      }
      const response = await request.json()
      return <UserProfile_Data>response
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : "Something went wrong! Cannot continue!"
      console.error(errorMsg)
      return Error(errorMsg)
    }
  }
}
