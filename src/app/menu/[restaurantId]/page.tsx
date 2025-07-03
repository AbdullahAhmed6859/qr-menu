import Image from 'next/image'
import { getRestaurantById } from '@/lib/queries'
import { urlFor } from '@/lib/sanity'
import MenuCard from '@/components/MenuCard'
import { Skeleton } from '@/components/ui/skeleton'

interface PageProps {
  params: {
    restaurantId: string
  }
}

export default async function RestaurantMenu({ params }: PageProps) {
  const { restaurantId } = params
  const restaurant = await getRestaurantById(restaurantId)

  if (!restaurant) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-center text-2xl font-bold">Restaurant not found</h1>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        {restaurant.logo && (
          <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full">
            <Image
              src={urlFor(restaurant.logo).url()}
              alt={restaurant.name}
              fill
              className="object-cover"
            />
          </div>
        )}
        <h1 className="mt-4 text-3xl font-bold">{restaurant.name}</h1>
        {restaurant.description && (
          <p className="mt-2 text-gray-600">{restaurant.description}</p>
        )}
      </div>

      {restaurant.categories?.length > 0 ? (
        restaurant.categories.map((category: any) => (
          <div key={category._id} className="mb-12">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold">{category.name}</h2>
              {category.description && (
                <p className="mt-1 text-gray-600">{category.description}</p>
              )}
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {category.items?.map((item: any) => (
                <MenuCard key={item._id} {...item} />
              ))}
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-600">No menu categories available</p>
      )}
    </div>
  )
} 