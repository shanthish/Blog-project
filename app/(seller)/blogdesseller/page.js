import { Suspense } from 'react';
import BlogDesSeller from './BlogDesSeller';

export default function BlogDesSellerPage() {
  return (
    <Suspense fallback={<div>Loading blog...</div>}>
      <BlogDesSeller />
    </Suspense>
  );
}
