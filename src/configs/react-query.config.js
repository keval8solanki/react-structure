import { useQueryClient } from 'react-query'

export const DEFAULT_QUERY_CONFIG = {
	retry: false,
	staleTime: 60000,
}
