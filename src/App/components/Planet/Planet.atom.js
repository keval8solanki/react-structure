import { atom } from '../../../configs/recoil.config'

export const planetAtom = atom({
	key: 'planets',
	default: {},
})

export const planetPage = atom({
	key: 'planetPage',
	default: 1,
})
