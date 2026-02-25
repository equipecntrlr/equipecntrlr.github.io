import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
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
      <main className="pt-16">
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
