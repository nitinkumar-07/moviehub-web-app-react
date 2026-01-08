import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { GenresProvider } from './context/genres.context.tsx'
import { SearchProvider } from './context/searchResult.context.tsx';
import { ThemeProvider } from "./context/theme.context";
import ScrollToTop from 'react-scroll-to-top'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <SearchProvider>
        <GenresProvider>
          <ThemeProvider>
            <App />
            <ScrollToTop smooth color='white' style={{ backgroundColor: '#1f1e55', display: 'flex', alignItems: 'center', justifyContent: 'center', }} />
          </ThemeProvider>
        </GenresProvider>
      </SearchProvider>
    </BrowserRouter>
  </StrictMode>,
)
