import React from "react";
import { Route } from "react-router-dom";
import { RouteProps } from "react-router-dom";

type Props = {
  layout: React.ComponentType;
  component: React.ComponentType;
} & RouteProps;

const RouteWithLayout = (props: Props) => {
  const { layout: Layout, component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <Layout>
          <Component {...matchProps} />
        </Layout>
      )}
    />
  );
};

export default RouteWithLayout;
