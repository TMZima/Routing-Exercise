import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <NavBar />
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
