import { Layout } from './components/Layout/Layout'
import { LibraryPage } from './pages/LibraryPage/LibraryPage'
import { books } from './constants/mock'

export const App = () => {
    return <Layout>
        <div>
            <LibraryPage books={ books }/>
        </div>
    </Layout>
}