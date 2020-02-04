import {
  useParams,
  useLocation,
  useHistory,
  useRouteMatch,
} from 'react-router-dom';
import { useMemo } from 'react';
import { convertParamsToObject } from 'utils/url';

const useRouter = () => {
  const params = useParams();
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();
  return useMemo(
    () => ({
      push: history.push,
      replace: history.replace,
      back: history.goBack,
      pathname: location.pathname,
      query: {
        ...convertParamsToObject(location.search), // Convert string to object
        ...params,
      },
      match,
      location,
      history,
    }),
    [params, match, location, history],
  );
};

export default useRouter;
