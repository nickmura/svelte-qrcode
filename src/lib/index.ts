// place files you want to import through the `$lib` alias in this folder.
import { writable } from 'svelte/store'

export const qrSVG = writable<string>()
export const inputText = writable<string>()