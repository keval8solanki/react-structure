import { atom as _atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'
const { persistAtom } = recoilPersist()

export const atom = (configs) => {
	if (configs?.persist) {
		configs.effects_UNSTABLE = [persistAtom]
	}
	return _atom(configs)
}
