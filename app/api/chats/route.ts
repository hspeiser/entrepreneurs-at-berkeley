import { NextResponse } from 'next/server'
import { getCoffeeChats } from '@/lib/airtable'

export async function GET() {
  try {
    const records = await getCoffeeChats()
    
    // Transform Airtable records to match the frontend interface
    const chats = records.map(record => ({
      id: record.id,
      name: record.fields.Name,
      title: record.fields.Title,
      company: record.fields.Company,
      date: record.fields.Date,
      time: record.fields.Time,
      location: record.fields.Location,
      description: record.fields.Description,
      image: record.fields.Image,
      tags: record.fields.Tags,
      status: record.fields.Status,
    }))

    return NextResponse.json(chats)
  } catch (error) {
    console.error('Error fetching chats:', error)
    return NextResponse.json(
      { error: 'Failed to fetch coffee chats' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // TODO: Add validation here
    const { createCoffeeChat } = await import('@/lib/airtable')
    
    const record = await createCoffeeChat({
      Name: body.name,
      Title: body.title,
      Company: body.company,
      Date: body.date,
      Time: body.time,
      Location: body.location,
      Description: body.description,
      Image: body.image,
      Tags: body.tags,
      Status: body.status || 'upcoming',
    })

    return NextResponse.json({ id: record.id, success: true })
  } catch (error) {
    console.error('Error creating chat:', error)
    return NextResponse.json(
      { error: 'Failed to create coffee chat' },
      { status: 500 }
    )
  }
}