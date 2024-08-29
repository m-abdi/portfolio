import React, { Suspense } from 'react';

import Comments from './Comments';
import ErrorBoundary from './error';
import Loading from './loading';

export default function Index() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        <Comments data={[{ id: '', content: '' }]} />
      </Suspense>
    </ErrorBoundary>
  );
}
