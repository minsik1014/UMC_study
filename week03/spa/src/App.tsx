import { NavLink } from 'react-router-dom'

export default function App() {
  return (
    <div className="container">
      <nav className="nav">
        <NavLink to="/" end className={({isActive}) => isActive ? 'link active' : 'link'}>홈</NavLink>
        <NavLink to="/1" className={({isActive}) => isActive ? 'link active' : 'link'}>1페이지</NavLink>
        <NavLink to="/2" className={({isActive}) => isActive ? 'link active' : 'link'}>2페이지</NavLink>
        <NavLink to="/3" className={({isActive}) => isActive ? 'link active' : 'link'}>3페이지</NavLink>
      </nav>
      <section className="page">
        <h1>홈</h1>
        <p> SPA </p>
      </section>
      <footer className="footer">© Simple Vite SPA</footer>
    </div>
  )
}
