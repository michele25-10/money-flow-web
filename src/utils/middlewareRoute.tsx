import { Routes, Route, useNavigate } from "react-router-dom";

type Props = {
  component: any;
  onBeforeEnter?: (props: any) => boolean;
  path?: string;
};

const ProtectedRoute = ({
  component: Component,
  onBeforeEnter,
  ...rest
}: Props) => {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route
        {...rest}
        render={(props: any): any => {
          if (typeof onBeforeEnter === "function") {
            const canActivate = onBeforeEnter(props);

            if (!canActivate) {
              console.log("Sono qui");
              navigate("login");
              return;
            }
          }

          return <Component {...props} />;
        }}
      />
    </Routes>
  );
};

export default ProtectedRoute;
