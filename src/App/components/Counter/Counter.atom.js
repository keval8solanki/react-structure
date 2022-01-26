import { atom } from '../../../configs/recoil.config'

export const counterAtom = atom({
	key: 'counter',
	default: 0,
	persist: true,
})
