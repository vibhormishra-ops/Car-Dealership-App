"use Client"
type CarCardProps = {
  id: string
  title: string
  brand: string
  model: string
  year: number
  price: number
  mileage: number
  fuelType?: 'PETROL' | 'DIESEL' | 'ELECTRIC'
  imageURL: string
  // onView?: (carId: string) => void
}

export function Car({
  id,
  title,
  brand,
  model,
  year,
  price,
  mileage,
  fuelType = 'PETROL',
  imageURL,
  // onView,
}: CarCardProps) {
  return (
    
    <div className="bg-white rounded-lg shadow hover:shadow-md transition">
      <img
        src={imageURL}
        alt={title}
        className="h-48 w-full object-cover rounded-t-lg"
      />

      <div className="p-4">
        <h3 className="font-semibold text-lg">
          {title}
        </h3>

        <p className="text-sm text-gray-500">
          {brand} {model} • {year}
        </p>

        <p className="text-sm text-gray-500">
          {mileage.toLocaleString()} km • {fuelType}
        </p>

        <div className="mt-3 flex justify-between items-center">
          <span className="text-lg font-bold">
            ₹{price.toLocaleString()}
          </span>

          <button
            // onClick={() => onView?.(id)}
            className="text-sm px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            View
          </button>
        </div>
      </div>
    </div>
  )
}