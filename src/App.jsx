import { Routes, Route } from 'react-router-dom'
import MarketingHome from './pages/MarketingHome'
import BlogIndex from './pages/BlogIndex'
import BlogPost from './pages/BlogPost'
import FiveTruths from './pages/FiveTruths'
import LavenderTransitionGuide from './pages/LavenderTransitionGuide'
import TheSixPillars from './pages/TheSixPillars'
import Press from './pages/Press'
import Community from './pages/Community'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MarketingHome />} />
      <Route path="/blog" element={<BlogIndex />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/5-truths-that-saved-me" element={<FiveTruths />} />
      <Route path="/lavender-transition-guide" element={<LavenderTransitionGuide />} />
      <Route path="/the-six-pillars" element={<TheSixPillars />} />
      <Route path="/press" element={<Press />} />
      <Route path="/community" element={<Community />} />
    </Routes>
  )
}
