import { Layout } from './components/Layout/Layout'
import { BookPage } from './pages/BookPage/BookPage'
import { LibraryPage } from './pages/LibraryPage/LibraryPage'
import { books } from './constants/mock'

export const App = () => {
    return <Layout>
        <div>
            {/* <LibraryPage books={ books }/> */}
            <BookPage book={ books[0] } />
        </div>
    </Layout>
}