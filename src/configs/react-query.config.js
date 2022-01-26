import { useQueryClient } from 'react-query'

export const DEFAULT_QUERY_CONFIG = {
	retry: false,
	staleTime: 60000,
}

export const useGetQueryState = (key) => {
	const hashKey = JSON.stringify(key)
	const queryClient = useQueryClient()
	const queryState = queryClient.getQueryState(hashKey)
}
