import * as dotenv from 'dotenv'
import { resolve } from 'path'

// Load environment variables from .env.local
dotenv.config({ path: resolve(process.cwd(), '.env.local') })

// Debug log to check if token is loaded
console.log('Token available:', !!process.env.SANITY_TOKEN)

import { client } from '../src/lib/sanity'

// Define types for our data structures
interface Restaurant {
  _id?: string
  _type: string
  name: string
  description: string
  categories?: Array<{ _type: string; _ref: string }>
}

interface Category {
  _id?: string
  _type: string
  name: string
  description: string
  items?: Array<{ _type: string; _ref: string }>
}

interface MenuItem {
  _id?: string
  _type: string
  name: string
  description: string
  price: number
  isAvailable: boolean
  ingredients: string[]
  allergens: string[]
}

// Create a new client instance specifically for seeding with token
const tokenClient = client.withConfig({
  token: process.env.SANITY_TOKEN,
  useCdn: false,
})

const sampleData = {
  restaurants: [
    {
      _type: 'restaurant',
      name: 'Cafe to Go',
      description: 'Your favorite fast food spot for quick, delicious meals',
      categories: [],
    },
    {
      _type: 'restaurant',
      name: 'Sky Dhaba',
      description: 'Traditional chai and desi breakfast spot with a view',
      categories: [],
    },
    {
      _type: 'restaurant',
      name: 'Tapal',
      description: 'Authentic Pakistani cuisine in a warm atmosphere',
      categories: [],
    },
    {
      _type: 'restaurant',
      name: 'TCF',
      description: 'Home-style Pakistani dishes and comfort food',
      categories: [],
    },
    {
      _type: 'restaurant',
      name: 'Gureto',
      description: 'Healthy and nutritious options for the health-conscious',
      categories: [],
    },
  ],
  categories: {
    'Cafe to Go': [
      {
        _type: 'category',
        name: 'Burgers',
        description: 'Juicy and flavorful burgers',
        items: [],
      },
      {
        _type: 'category',
        name: 'Sandwiches',
        description: 'Fresh and tasty sandwiches',
        items: [],
      },
      {
        _type: 'category',
        name: 'Sides',
        description: 'Perfect accompaniments to your meal',
        items: [],
      },
      {
        _type: 'category',
        name: 'Beverages',
        description: 'Refreshing drinks',
        items: [],
      },
    ],
    'Sky Dhaba': [
      {
        _type: 'category',
        name: 'Chai',
        description: 'Various types of traditional tea',
        items: [],
      },
      {
        _type: 'category',
        name: 'Parathas',
        description: 'Freshly made stuffed flatbreads',
        items: [],
      },
      {
        _type: 'category',
        name: 'Eggs',
        description: 'Egg specialties',
        items: [],
      },
    ],
    'Tapal': [
      {
        _type: 'category',
        name: 'Rice Dishes',
        description: 'Traditional Pakistani rice specialties',
        items: [],
      },
      {
        _type: 'category',
        name: 'Curries',
        description: 'Rich and flavorful curries',
        items: [],
      },
      {
        _type: 'category',
        name: 'Breads',
        description: 'Fresh baked breads',
        items: [],
      },
    ],
    'TCF': [
      {
        _type: 'category',
        name: 'BBQ',
        description: 'Grilled specialties',
        items: [],
      },
      {
        _type: 'category',
        name: 'Karahi',
        description: 'Traditional Pakistani karahi dishes',
        items: [],
      },
      {
        _type: 'category',
        name: 'Daal',
        description: 'Lentil specialties',
        items: [],
      },
    ],
    'Gureto': [
      {
        _type: 'category',
        name: 'Healthy Bowls',
        description: 'Nutritious and delicious bowls',
        items: [],
      },
      {
        _type: 'category',
        name: 'Smoothies',
        description: 'Fresh fruit and vegetable smoothies',
        items: [],
      },
      {
        _type: 'category',
        name: 'Salads',
        description: 'Fresh and crispy salads',
        items: [],
      },
    ],
  },
  menuItems: {
    'Burgers': [
      {
        _type: 'menuItem',
        name: 'Classic Beef Burger',
        description: 'Juicy beef patty with lettuce, tomato, and special sauce',
        price: 12.99,
        isAvailable: true,
        ingredients: ['Beef Patty', 'Lettuce', 'Tomato', 'Onion', 'Special Sauce'],
        allergens: ['Gluten', 'Dairy'],
      },
      {
        _type: 'menuItem',
        name: 'Crispy Chicken Burger',
        description: 'Crispy fried chicken with coleslaw and mayo',
        price: 10.99,
        isAvailable: true,
        ingredients: ['Chicken', 'Coleslaw', 'Mayo', 'Bun'],
        allergens: ['Gluten', 'Eggs'],
      },
    ],
    'Sandwiches': [
      {
        _type: 'menuItem',
        name: 'Club Sandwich',
        description: 'Triple-decker with chicken, egg, and beef bacon',
        price: 9.99,
        isAvailable: true,
        ingredients: ['Chicken', 'Egg', 'Beef Bacon', 'Lettuce', 'Tomato'],
        allergens: ['Gluten', 'Eggs'],
      },
    ],
    'Chai': [
      {
        _type: 'menuItem',
        name: 'Doodh Patti',
        description: 'Strong milk tea brewed to perfection',
        price: 2.99,
        isAvailable: true,
        ingredients: ['Tea', 'Milk', 'Sugar'],
        allergens: ['Dairy'],
      },
      {
        _type: 'menuItem',
        name: 'Elaichi Chai',
        description: 'Cardamom flavored milk tea',
        price: 3.49,
        isAvailable: true,
        ingredients: ['Tea', 'Milk', 'Cardamom', 'Sugar'],
        allergens: ['Dairy'],
      },
    ],
    'Parathas': [
      {
        _type: 'menuItem',
        name: 'Aloo Paratha',
        description: 'Flatbread stuffed with spiced potatoes',
        price: 4.99,
        isAvailable: true,
        ingredients: ['Wheat Flour', 'Potatoes', 'Spices', 'Oil'],
        allergens: ['Gluten'],
      },
      {
        _type: 'menuItem',
        name: 'Cheese Paratha',
        description: 'Flatbread stuffed with melted cheese',
        price: 5.99,
        isAvailable: true,
        ingredients: ['Wheat Flour', 'Cheese', 'Oil'],
        allergens: ['Gluten', 'Dairy'],
      },
    ],
    'Eggs': [
      {
        _type: 'menuItem',
        name: 'Anda Bhurji',
        description: 'Spiced scrambled eggs',
        price: 4.99,
        isAvailable: true,
        ingredients: ['Eggs', 'Onions', 'Tomatoes', 'Spices'],
        allergens: ['Eggs'],
      },
    ],
    'Rice Dishes': [
      {
        _type: 'menuItem',
        name: 'Chicken Biryani',
        description: 'Aromatic rice with tender chicken and spices',
        price: 14.99,
        isAvailable: true,
        ingredients: ['Basmati Rice', 'Chicken', 'Spices', 'Onions'],
        allergens: [],
      },
    ],
    'Curries': [
      {
        _type: 'menuItem',
        name: 'Butter Chicken',
        description: 'Creamy tomato-based curry with tender chicken',
        price: 15.99,
        isAvailable: true,
        ingredients: ['Chicken', 'Tomatoes', 'Cream', 'Butter', 'Spices'],
        allergens: ['Dairy'],
      },
    ],
    'BBQ': [
      {
        _type: 'menuItem',
        name: 'Seekh Kabab',
        description: 'Grilled minced meat skewers with spices',
        price: 12.99,
        isAvailable: true,
        ingredients: ['Minced Meat', 'Onions', 'Spices'],
        allergens: [],
      },
    ],
    'Karahi': [
      {
        _type: 'menuItem',
        name: 'Chicken Karahi',
        description: 'Chicken cooked with tomatoes and green chilies',
        price: 16.99,
        isAvailable: true,
        ingredients: ['Chicken', 'Tomatoes', 'Green Chilies', 'Spices'],
        allergens: [],
      },
    ],
    'Healthy Bowls': [
      {
        _type: 'menuItem',
        name: 'Quinoa Power Bowl',
        description: 'Quinoa with roasted vegetables and avocado',
        price: 13.99,
        isAvailable: true,
        ingredients: ['Quinoa', 'Mixed Vegetables', 'Avocado', 'Seeds'],
        allergens: ['Nuts'],
      },
    ],
    'Smoothies': [
      {
        _type: 'menuItem',
        name: 'Green Detox',
        description: 'Spinach, apple, cucumber, and mint smoothie',
        price: 6.99,
        isAvailable: true,
        ingredients: ['Spinach', 'Apple', 'Cucumber', 'Mint'],
        allergens: [],
      },
      {
        _type: 'menuItem',
        name: 'Berry Blast',
        description: 'Mixed berries with banana and almond milk',
        price: 7.99,
        isAvailable: true,
        ingredients: ['Mixed Berries', 'Banana', 'Almond Milk'],
        allergens: ['Nuts'],
      },
    ],
    'Salads': [
      {
        _type: 'menuItem',
        name: 'Corn & Chickpea Salad',
        description: 'Fresh corn, chickpeas, and mixed greens',
        price: 9.99,
        isAvailable: true,
        ingredients: ['Corn', 'Chickpeas', 'Mixed Greens', 'Olive Oil'],
        allergens: [],
      },
    ],
  },
}

async function checkExistingData() {
  const query = `count(*[_type == "restaurant"])`
  const count = await tokenClient.fetch(query)
  return count > 0
}

async function clearExistingData() {
  console.log('🗑️ Clearing existing data...')
  
  try {
    // First, remove references from restaurants to categories
    const restaurants = await tokenClient.fetch<Restaurant[]>('*[_type == "restaurant"]')
    await Promise.all(
      restaurants.map(restaurant => 
        tokenClient.patch(restaurant._id!)
          .unset(['categories'])
          .commit()
      )
    )

    // Then remove references from categories to menu items
    const categories = await tokenClient.fetch<Category[]>('*[_type == "category"]')
    await Promise.all(
      categories.map(category =>
        tokenClient.patch(category._id!)
          .unset(['items'])
          .commit()
      )
    )

    // Now we can safely delete all documents
    await tokenClient.delete({ query: '*[_type == "menuItem"]' })
    await tokenClient.delete({ query: '*[_type == "category"]' })
    await tokenClient.delete({ query: '*[_type == "restaurant"]' })

    console.log('✅ Existing data cleared')
  } catch (error) {
    console.error('Error clearing data:', error)
    throw error
  }
}

async function seedData() {
  try {
    console.log('🔍 Checking for existing data...')
    const hasExistingData = await checkExistingData()

    if (hasExistingData) {
      const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
      })

      const answer = await new Promise<string>(resolve => {
        readline.question('⚠️ Existing data found. Do you want to clear it and reseed? (y/n) ', resolve)
      })
      readline.close()

      if (answer.toLowerCase() !== 'y') {
        console.log('❌ Seeding cancelled')
        return
      }

      await clearExistingData()
    }

    console.log('🌱 Starting to seed data...')

    // Create restaurants
    console.log('Creating restaurants...')
    const restaurantDocs = await Promise.all(
      sampleData.restaurants.map(restaurant => tokenClient.create<Restaurant>(restaurant))
    )
    console.log('✅ Restaurants created')

    // Create categories for each restaurant
    console.log('Creating categories...')
    for (const restaurant of restaurantDocs) {
      const restaurantName = restaurant.name as keyof typeof sampleData.categories
      const categories = sampleData.categories[restaurantName]
      const categoryDocs = await Promise.all(
        categories.map(category => tokenClient.create<Category>(category))
      )
      
      // Update restaurant with category references
      await tokenClient.patch(restaurant._id!).set({
        categories: categoryDocs.map(doc => ({
          _type: 'reference',
          _ref: doc._id!,
        })),
      }).commit()

      // Create menu items for each category
      console.log(`Creating menu items for ${restaurant.name}...`)
      for (const category of categoryDocs) {
        const categoryName = category.name as keyof typeof sampleData.menuItems
        const menuItems = sampleData.menuItems[categoryName] || []
        const menuItemDocs = await Promise.all(
          menuItems.map(item => tokenClient.create<MenuItem>(item))
        )

        // Update category with menu item references
        await tokenClient.patch(category._id!).set({
          items: menuItemDocs.map(doc => ({
            _type: 'reference',
            _ref: doc._id!,
          })),
        }).commit()
      }
    }

    console.log('✅ All data seeded successfully!')
  } catch (error) {
    console.error('Error seeding data:', error)
  }
}

// Run the seeding function
seedData() 