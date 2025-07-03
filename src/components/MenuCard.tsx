import Image from 'next/image'
import { urlFor } from '@/lib/sanity'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface MenuItemProps {
  name: string
  description?: string
  price: number
  image?: any
  isAvailable?: boolean
  ingredients?: string[]
  allergens?: string[]
}

export default function MenuCard({
  name,
  description,
  price,
  image,
  isAvailable = true,
  ingredients,
  allergens,
}: MenuItemProps) {
  return (
    <Card className={!isAvailable ? 'opacity-50' : ''}>
      {image && (
        <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
          <Image
            src={urlFor(image).url()}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
      )}
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{name}</CardTitle>
          <span className="text-lg font-semibold">${price.toFixed(2)}</span>
        </div>
        {description && (
          <CardDescription>{description}</CardDescription>
        )}
      </CardHeader>
      <CardContent className="space-y-2">
        {ingredients && ingredients.length > 0 && (
          <div className="text-sm text-muted-foreground">
            <span className="font-medium">Ingredients:</span> {ingredients.join(', ')}
          </div>
        )}
        {allergens && allergens.length > 0 && (
          <div className="text-sm text-destructive">
            <span className="font-medium">Allergens:</span> {allergens.join(', ')}
          </div>
        )}
        {!isAvailable && (
          <Button variant="secondary" className="w-full" disabled>
            Currently unavailable
          </Button>
        )}
      </CardContent>
    </Card>
  )
} 