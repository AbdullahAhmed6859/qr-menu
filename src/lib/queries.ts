import { client } from './sanity'

export async function getRestaurants() {
  return client.fetch(`
    *[_type == "restaurant"] {
      _id,
      name,
      description,
      logo,
      "categories": categories[]-> {
        _id,
        name,
        description,
        image,
        "items": items[]-> {
          _id,
          name,
          description,
          price,
          image,
          isAvailable,
          ingredients,
          allergens
        } | order(name asc)
      } | order(name asc)
    } | order(name asc)
  `)
}

export async function getRestaurantById(id: string) {
  const query = `*[_type == "restaurant" && _id == $id][0] {
    _id,
    name,
    description,
    logo,
    "categories": categories[]-> {
      _id,
      name,
      description,
      image,
      "items": items[]-> {
        _id,
        name,
        description,
        price,
        image,
        isAvailable,
        ingredients,
        allergens
      } | order(name asc)
    } | order(name asc)
  }`

  console.log('Fetching restaurant with ID:', id)
  const result = await client.fetch(query, { id })
  console.log('Query result:', JSON.stringify(result, null, 2))
  return result
} 