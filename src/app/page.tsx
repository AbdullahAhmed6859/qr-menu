import Image from 'next/image'
import Link from 'next/link'
import { getRestaurants } from '@/lib/queries'
import { urlFor } from '@/lib/sanity'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default async function Home() {
  const restaurants = await getRestaurants()

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-center text-4xl font-bold">Our Restaurants</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {restaurants.map((restaurant: any) => (
          <Link key={restaurant._id} href={`/menu/${restaurant._id}`}>
            <Card className="transform transition-transform hover:scale-105">
              <CardHeader>
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
                <CardTitle className="text-center">{restaurant.name}</CardTitle>
                {restaurant.description && (
                  <CardDescription className="text-center">
                    {restaurant.description}
                  </CardDescription>
                )}
              </CardHeader>
              <CardContent>
                <div className="space-y-1 text-center text-sm text-muted-foreground">
                  <p>{restaurant.categories?.length || 0} categories</p>
                  <p>
                    {restaurant.categories?.reduce(
                      (total: number, cat: any) =>
                        total + (cat.items?.length || 0),
                      0
                    )}{' '}
                    items
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  )
}
