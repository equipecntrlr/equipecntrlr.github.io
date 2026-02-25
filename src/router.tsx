import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  Link,
} from "@tanstack/react-router";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import CardsGrid from "./components/CardsGrid";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";

// Root Route
const rootRoute = createRootRoute({
  component: () => (
    <>
      <Header />
      <div className="flex justify-center border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-16 z-40">
        <div className="flex gap-4 p-2">
          <Link
            to="/"
            activeProps={{
              className: "text-primary font-bold border-b-2 border-primary",
            }}
            className="px-4 py-2 transition-colors hover:text-primary"
          >
            Início
          </Link>
          <Link
            to="/about"
            activeProps={{
              className: "text-primary font-bold border-b-2 border-primary",
            }}
            className="px-4 py-2 transition-colors hover:text-primary"
          >
            Sobre
          </Link>
          <Link
            to="/cards"
            activeProps={{
              className: "text-primary font-bold border-b-2 border-primary",
            }}
            className="px-4 py-2 transition-colors hover:text-primary"
          >
            Serviços
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

// Index Route (Hero)
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HeroSection,
});

// About Route
const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutSection,
});

// Cards Route
const cardsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/cards",
  component: CardsGrid,
});

// Route Tree
const routeTree = rootRoute.addChildren([indexRoute, aboutRoute, cardsRoute]);

// Router Instance
export const router = createRouter({
  routeTree,
  defaultNotFoundComponent: NotFound,
});

// Type Safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
