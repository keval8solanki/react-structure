import { QueryClient, QueryClientProvider } from 'react-query'
import { RecoilRoot } from 'recoil'

const client = new QueryClient()

export default function RootProvider({ children }) {
	return (
		<QueryClientProvider client={client}>
			<RecoilRoot>{children}</RecoilRoot>
		</QueryClientProvider>
	)
}
