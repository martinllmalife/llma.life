import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MarketingHome from './pages/MarketingHome'
import BlogIndex from './pages/BlogIndex'
import BlogPost from './pages/BlogPost'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MarketingHome />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </Router>
  )
}
