import Link from "next/link"
const SimilarProduct = ({
  id,
  title,
  price,
  quantity,
  imageUrl = "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
}) => {
  return (
    <div className="group relative">
      <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
        <img
          src={imageUrl}
          alt="Front of men&#039;s Basic Tee in black."
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <Link href={`/products/${id}/product`}>
              <span aria-hidden="true" className="absolute inset-0"></span>
              {title}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            {quantity} stock disponible
          </p>
        </div>
        <p className="text-sm font-medium text-gray-900">{price} TTC</p>
      </div>
    </div>
  )
}

export default SimilarProduct
