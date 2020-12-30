import React from "react";
import MainLayout from "../layouts/Main";
import AdminView from "../views/Admin";
import ContactView from "../views/Contact";
import GalleryView from "../views/Gallery";
import HomeView from "../views/Home";
import LoginView from "../views/Login";
import PaintingView from "../views/Painting";
import { ROUTES } from "./routes";
import RouteWithLayout from "./RouteWithLayout";

const RootRouter = () => {
  return (
    <>
      <RouteWithLayout
        exact
        path={ROUTES.HOME}
        layout={MainLayout}
        component={HomeView}
      />
      <RouteWithLayout
        exact
        path={ROUTES.GALLERY}
        layout={MainLayout}
        component={GalleryView}
      />
      <RouteWithLayout
        path={ROUTES.PAINTING}
        layout={MainLayout}
        component={PaintingView}
      />
      <RouteWithLayout
        exact
        path={ROUTES.CONTACT}
        layout={MainLayout}
        component={ContactView}
      />
      <RouteWithLayout
        exact
        path={ROUTES.LOGIN}
        layout={MainLayout}
        component={LoginView}
      />
      <RouteWithLayout
        exact
        path={ROUTES.ADMIN}
        layout={MainLayout}
        component={AdminView}
      />
    </>
  );
};

export default RootRouter;
