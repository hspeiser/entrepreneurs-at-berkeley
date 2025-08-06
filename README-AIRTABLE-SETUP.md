# Airtable Coffee Chats Integration Setup

This guide will help you set up the Airtable integration for the Coffee Chats feature.

## 1. Create Airtable Base

1. Go to [Airtable](https://airtable.com) and create a new base
2. Create a table called "Coffee Chats" with the following fields:

### Required Fields:
- **Name** (Single line text) - Guest's full name
- **Title** (Single line text) - Guest's job title
- **Company** (Single line text) - Guest's company
- **Date** (Date) - Date of the coffee chat
- **Time** (Single line text) - Time of the coffee chat (e.g., "2:00 PM")
- **Location** (Single line text) - Coffee shop or location
- **Description** (Long text) - Description of what will be discussed
- **Tags** (Single line text) - Comma-separated tags (e.g., "AI, Product Management, Career")
- **Status** (Single select) - Options: "upcoming", "completed", "cancelled"

### Optional Fields:
- **Image** (Attachment or URL) - Guest's profile photo
- **Created At** (Created time) - Auto-generated
- **Updated At** (Last modified time) - Auto-generated

## 2. Get Airtable Credentials

1. Go to your [Airtable Account](https://airtable.com/account) page
2. Generate a **Personal Access Token** (recommended) or use your API key
3. Get your **Base ID** from the API documentation page of your base
   - Go to your base → Help → API documentation
   - The Base ID looks like: `appXXXXXXXXXXXXXX`

## 3. Set Environment Variables

1. Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

2. Fill in your Airtable credentials in `.env.local`:
```env
AIRTABLE_API_KEY=your_personal_access_token_here
AIRTABLE_BASE_ID=appXXXXXXXXXXXXXX
AIRTABLE_TABLE_NAME=Coffee Chats
```

## 4. Test the Integration

1. Add some sample records to your Airtable base
2. Start your development server:
```bash
npm run dev
```

3. Visit `http://localhost:3000/chats` to see your coffee chats displayed

## 5. Sample Data Structure

Here's an example of how your Airtable records should look:

| Name | Title | Company | Date | Time | Location | Description | Tags | Status |
|------|-------|---------|------|------|----------|-------------|------|--------|
| Sarah Chen | Product Manager | Google | 2024-01-15 | 2:00 PM | Blue Bottle Coffee, Berkeley | Discussing AI product strategy | AI, Product Management, Google | completed |
| Alex Rodriguez | Founder & CEO | TechFlow (YC W23) | 2024-01-20 | 10:30 AM | Philz Coffee | Y Combinator insights | Entrepreneurship, YC, B2B SaaS | upcoming |

## 6. API Endpoints

The integration provides the following API endpoints:

- `GET /api/chats` - Fetch all coffee chats
- `POST /api/chats` - Create a new coffee chat

## 7. Features

The coffee chats page includes:

- **Gallery view** with cards for each chat
- **Search functionality** by name, company, title, or tags
- **Filter by status** (all, upcoming, completed)
- **Responsive design** that works on mobile and desktop
- **Loading states** and error handling
- **Mock data fallback** if Airtable is unavailable

## 8. Troubleshooting

### Common Issues:

1. **"Failed to fetch coffee chats"** error:
   - Check your API key and base ID
   - Ensure your Airtable base has the correct table name
   - Verify field names match exactly

2. **Empty gallery with no error**:
   - Check that your records have Status ≠ "cancelled"
   - Verify the Date field format is correct

3. **Build errors**:
   - Make sure all environment variables are set
   - Check that the Airtable package is installed: `npm install airtable`

### Testing Without Airtable:
The page will automatically fall back to mock data if Airtable is unavailable, so you can still see the UI working while setting up your integration.

## 9. Customization

You can customize:
- **Fields**: Add more fields to the Airtable base and update the TypeScript interfaces
- **Styling**: Modify the card design in `/app/chats/page.tsx`
- **Filtering**: Add more filter options (by company, tags, etc.)
- **Search**: Enhance search to include more fields