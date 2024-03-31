import knex from '../database/connection'

class ItemsController {
  async index(request: any, response: any) {
    const items = await knex('items').select('*')
  
    const serializedItems = items.map((item: any) => {
      return {
        id: item.id,
        name: item.title,
        image_url: `http://localhost:3333/uploads/${item.image}`
      }
    })
  
    return response.json(serializedItems)
  }
}

export default ItemsController