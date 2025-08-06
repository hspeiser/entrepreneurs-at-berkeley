import Airtable from 'airtable'

// Configure Airtable only if environment variables are available
let base: any = null
if (process.env.AIRTABLE_API_KEY && process.env.AIRTABLE_BASE_ID) {
  base = new Airtable({
    apiKey: process.env.AIRTABLE_API_KEY,
  }).base(process.env.AIRTABLE_BASE_ID)
}

// Define the structure of a coffee chat record
export interface CoffeChatRecord {
  id: string
  fields: {
    Name: string
    Title: string
    Company: string
    Date: string
    Time: string
    Location: string
    Description: string
    Image?: string
    Tags: string[]
    Status: 'upcoming' | 'completed' | 'cancelled'
    'Created At': string
    'Updated At': string
  }
}

export const coffeeChatsTable = base ? base(process.env.AIRTABLE_TABLE_NAME || 'Coffee Chats') : null

// Fetch all coffee chats from Airtable
export async function getCoffeeChats(): Promise<CoffeChatRecord[]> {
  if (!coffeeChatsTable) {
    throw new Error('Airtable not configured - missing API key or base ID')
  }
  
  try {
    const records = await coffeeChatsTable
      .select({
        // Sort by date, newest first
        sort: [{ field: 'Date', direction: 'desc' }],
        // Only get published chats
        filterByFormula: "NOT({Status} = 'cancelled')",
      })
      .all()

    return records.map(record => ({
      id: record.id,
      fields: {
        Name: record.get('Name') as string,
        Title: record.get('Title') as string,
        Company: record.get('Company') as string,
        Date: record.get('Date') as string,
        Time: record.get('Time') as string,
        Location: record.get('Location') as string,
        Description: record.get('Description') as string,
        Image: record.get('Image') as string,
        Tags: (record.get('Tags') as string)?.split(',').map(tag => tag.trim()) || [],
        Status: record.get('Status') as 'upcoming' | 'completed' | 'cancelled',
        'Created At': record.get('Created At') as string,
        'Updated At': record.get('Updated At') as string,
      }
    }))
  } catch (error) {
    console.error('Error fetching coffee chats from Airtable:', error)
    throw new Error('Failed to fetch coffee chats')
  }
}

// Create a new coffee chat record
export async function createCoffeeChat(data: Partial<CoffeChatRecord['fields']>) {
  if (!coffeeChatsTable) {
    throw new Error('Airtable not configured - missing API key or base ID')
  }
  
  try {
    const record = await coffeeChatsTable.create({
      Name: data.Name,
      Title: data.Title,
      Company: data.Company,
      Date: data.Date,
      Time: data.Time,
      Location: data.Location,
      Description: data.Description,
      Image: data.Image,
      Tags: data.Tags?.join(', '),
      Status: data.Status || 'upcoming',
    })
    return record
  } catch (error) {
    console.error('Error creating coffee chat:', error)
    throw new Error('Failed to create coffee chat')
  }
}

// Update a coffee chat record
export async function updateCoffeeChat(id: string, data: Partial<CoffeChatRecord['fields']>) {
  if (!coffeeChatsTable) {
    throw new Error('Airtable not configured - missing API key or base ID')
  }
  
  try {
    const updates: any = {}
    
    if (data.Name) updates.Name = data.Name
    if (data.Title) updates.Title = data.Title
    if (data.Company) updates.Company = data.Company
    if (data.Date) updates.Date = data.Date
    if (data.Time) updates.Time = data.Time
    if (data.Location) updates.Location = data.Location
    if (data.Description) updates.Description = data.Description
    if (data.Image) updates.Image = data.Image
    if (data.Tags) updates.Tags = data.Tags.join(', ')
    if (data.Status) updates.Status = data.Status

    const record = await coffeeChatsTable.update(id, updates)
    return record
  } catch (error) {
    console.error('Error updating coffee chat:', error)
    throw new Error('Failed to update coffee chat')
  }
}

// Delete a coffee chat record
export async function deleteCoffeeChat(id: string) {
  if (!coffeeChatsTable) {
    throw new Error('Airtable not configured - missing API key or base ID')
  }
  
  try {
    const record = await coffeeChatsTable.destroy(id)
    return record
  } catch (error) {
    console.error('Error deleting coffee chat:', error)
    throw new Error('Failed to delete coffee chat')
  }
}