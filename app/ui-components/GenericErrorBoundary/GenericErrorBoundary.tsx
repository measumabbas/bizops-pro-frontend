import { useMemo } from 'react';
import { useRouteError } from '@remix-run/react';

export function GenericErrorBoundary() {
  const error = useRouteError();

  const formattedError = useMemo(() => {
    if (error instanceof Error) {
      return (
        <div>
          <h1>{error.message}</h1>
          <div>{error.stack}</div>
        </div>
      );
    }
  }, [error]);

  return (
    <div>
      <h1>Something went wrong.</h1>
      <p>
        If the issue persists, please contact Navace with the below error
        details and we'll fix it up. <br /> Apologies for the inconvenience.
      </p>
      <div>
        <h1>Raw Error</h1>
        <p>{formattedError}</p>
      </div>
    </div>
  );
}
