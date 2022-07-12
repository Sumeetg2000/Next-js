import { useRouter } from "next/router";

export default function ReviewDetails() {
  const router = useRouter();
  const { productId, reviewId } = router.query;
  console.log(productId, reviewId);
  return (
    <h2>
      Review {reviewId} for product {productId}
    </h2>
  );
}
