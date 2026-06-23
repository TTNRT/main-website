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
}
export class Other {
}