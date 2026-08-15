import type {UserProfile_Data} from './types'
export class Control {
    static preventScroll() {
        const bodyEl = document.body
        bodyEl?.setAttribute('style', 'overflow: hidden;')
    }
    static allowScroll() {
        const bodyEl = document.body
        bodyEl?.removeAttribute('style')
    }
    static add_backdrop() {
        const bodyEl = document.body
        const createElement = document.createElement('div')
        createElement.setAttribute('class', 'backdrop blurbg')
        bodyEl?.appendChild(createElement)
    }
    static remove_backdrop() {
        const bodyEl = document.body
        const getElement = bodyEl.querySelector('.backdrop')
        getElement?.remove()
    }
}
export class Create {
    static Dialog(id: string, title: string, body: string) {
        const bodyEl = document.body
        const dialogEl = document.createElement('dialog')
        dialogEl.setAttribute('class', 'modal')
        dialogEl.setAttribute('id', id)
        dialogEl.innerHTML =`<div class="modal-box"><form method="dialog"><button type="button" class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" id="closeDialog"><span class="iconify fa6-solid--xmark"></span></button></form><h2 class="text-lg font-bold mb-0">${title}</h2><div class="h-full">${body}</div></div>`
        if (document.querySelector(id)) {
            console.error(`Cannot create dialog element that is already apended! Try using a different ID!`)
        } else {
            bodyEl.appendChild(dialogEl)
            dialogEl.showModal()
            Control.preventScroll()
            dialogEl.querySelector('#closeDialog')?.addEventListener('click', function (event: Event) {
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
}
export class Other {
}
export class Fetch {
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
        } catch(error) {
            const errorMsg = error instanceof Error ? error.message : "Something went wrong! Cannot continue!"
            console.error(errorMsg)
            return Error(errorMsg)
        }
    }
}