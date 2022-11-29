import { Layout } from './components/Layout/Layout'
import { BookPage } from './pages/BookPage/BookPage'
import { LibraryPage } from './pages/LibraryPage/LibraryPage'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Category } from './components/Category/Category';
import { store } from "./store";
import { Provider } from "react-redux";
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage'

export const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path="/" element={<LibraryPage />}>
                            <Route path="/categories/:categoryId" element={<Category />}/>
                        </Route>
                        <Route path="/books/:bookId" element={<BookPage />}/>
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </Provider>
    )
}