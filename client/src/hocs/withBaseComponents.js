import { usePathname, useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { memo } from 'react';

const withBaseComponents = (Component) => (props) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const pathName = usePathname();

  return <Component {...props} router={router} dispatch={dispatch} pathName={pathName} />;
}

export default withBaseComponents;
