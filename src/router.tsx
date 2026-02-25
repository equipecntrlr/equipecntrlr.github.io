import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  Link,
} from "@tanstack/react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Somos from "./pages/Somos";
import Projects from "./pages/Projects";
import Competitions from "./pages/Competitions";
import ContactUs from "./pages/ContactUs";

// Root Route
const rootRoute = createRootRoute({
  component: () => (
    <>
      <Header />
      <div className="flex justify-center border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-16 z-40">
        <div className="flex gap-4 p-2 overflow-x-auto">
          <Link
            to="/"
            activeProps={{
              className: "text-primary font-bold border-b-2 border-primary",
            }}
            className="px-4 py-2 transition-colors hover:text-primary whitespace-nowrap"
          >
            Início
          </Link>
          <Link
            to="/somos"
            activeProps={{
              className: "text-primary font-bold border-b-2 border-primary",
            }}
            className="px-4 py-2 transition-colors hover:text-primary whitespace-nowrap"
          >
            Somos
          </Link>
          <Link
            to="/projects"
            activeProps={{
              className: "text-primary font-bold border-b-2 border-primary",
            }}
            className="px-4 py-2 transition-colors hover:text-primary whitespace-nowrap"
          >
            Projetos
          </Link>
          <Link
            to="/competitions"
            activeProps={{
              className: "text-primary font-bold border-b-2 border-primary",
            }}
            className="px-4 py-2 transition-colors hover:text-primary whitespace-nowrap"
          >
            Competições
          </Link>
          <Link
            to="/contact"
            activeProps={{
              className: "text-primary font-bold border-b-2 border-primary",
            }}
            className="px-4 py-2 transition-colors hover:text-primary whitespace-nowrap"
          >
            Contato
          </Link>
        </div>
      </div>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  ),
});

// Index Route (Home)
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

// Somos Route
const somosRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/somos",
  component: Somos,
});

// Projects Route
const projectsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/projects",
  component: Projects,
});

// Competitions Route
const competitionsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/competitions",
  component: Competitions,
});

// Contact Route
const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactUs,
});

// Route Tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  somosRoute,
  projectsRoute,
  competitionsRoute,
  contactRoute,
]);

// Router Instance
export const router = createRouter({ routeTree });

// Type Safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
