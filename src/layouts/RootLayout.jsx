import { NavLink, Outlet } from "react-router-dom";
import GoBackButton from "../components/GoBackButton";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="mars">Mars</NavLink>
          <NavLink to="venus">Venus</NavLink>
          <NavLink to="nebula">Orion Nebula</NavLink>
          <NavLink to="andromeda">Andromeda Galaxy</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <GoBackButton />
      </footer>
    </div>
  );
}
