import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;

  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!id) return;

    fetch(`https://esanfoods.onrender.com/api/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div style={{ padding: 20 }}>
      <h1>{product.name}</h1>

      <img
        src={`https://esanfoods.onrender.com/uploads/${product.image}`}
        width="300"
      />

      <p>{product.description}</p>
      <h2>₹{product.price}</h2>
    </div>
  );
}