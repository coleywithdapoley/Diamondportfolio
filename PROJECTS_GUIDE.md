# How to Add Your Projects

## Step 1: Open the File
Open `components/ProjectsShowcase.tsx` in your editor.

## Step 2: Find the Projects Array
Look for the `const projects: Project[] = [...]` array (around line 26).

## Step 3: Replace with Your Projects

Each project follows this structure:

```typescript
{
  id: 'unique-id',                    // Unique identifier (e.g., '1', '2', '3')
  title: 'Your Project Title',         // Project name
  category: 'PR & Crisis',            // One of: 'All', 'PR & Crisis', 'Social Justice', 'Beauty & Lifestyle', 'Creative Tech'
  description: 'Two-line description of your project. This should be concise and compelling.',
  highlights: [                       // Exactly 3 bullet points
    'First key achievement or result',
    'Second key achievement or result',
    'Third key achievement or result'
  ],
  skills: [                            // Array of skills/tags (4-6 items recommended)
    'Skill 1',
    'Skill 2',
    'Skill 3',
    'Skill 4'
  ],
  gradient: 'from-purple-600 to-purple-800',  // Color gradient (see options below)
  imageUrl: '/images/project-1.jpg',   // Optional: path to project image
  pdfUrl: '/pdfs/project-presentation.pdf',  // Optional: path to PDF
  detailsUrl: '#'  // Optional: link to project details page or external URL
}
```

## Step 4: Category Options
Choose ONE category for each project:
- `'PR & Crisis'`
- `'Social Justice'`
- `'Beauty & Lifestyle'`
- `'Creative Tech'`

## Step 5: Gradient Color Options
Choose a gradient that matches your project's theme:

**Purple/Blue (PR & Crisis):**
- `'from-purple-600 to-purple-800'`
- `'from-purple-700 to-violet-800'`
- `'from-blue-600 to-indigo-800'`

**Pink/Rose (Beauty & Lifestyle):**
- `'from-pink-500 to-rose-600'`
- `'from-rose-500 to-pink-600'`

**Amber/Orange (Creative Tech):**
- `'from-amber-500 to-orange-600'`
- `'from-orange-500 to-amber-600'`

**Green (Social Justice/Lifestyle):**
- `'from-green-500 to-emerald-600'`
- `'from-emerald-500 to-teal-600'`

## Example Project Entry

```typescript
{
  id: '1',
  title: 'Adobe Creative Campaign',
  category: 'Creative Tech',
  description: 'Developed comprehensive marketing strategy for Adobe targeting creative professionals. Created multi-channel campaign that increased brand engagement by 200%.',
  highlights: [
    'Increased brand engagement by 200%',
    'Reached 5M+ creative professionals',
    'Generated $2M in qualified leads'
  ],
  skills: ['Campaign Strategy', 'Content Marketing', 'Brand Positioning', 'B2B Marketing'],
  gradient: 'from-amber-500 to-orange-600',
  imageUrl: '/images/adobe-campaign.jpg',
  pdfUrl: '/pdfs/adobe-pitch-team-3.pdf',
  detailsUrl: 'https://example.com/project-details'
}
```

## Step 6: Adding Images (Optional)
1. Add your project images to: `public/images/`
2. Reference them in `imageUrl`: `/images/your-image.jpg`

## Step 7: Adding PDFs (Optional)
1. Add your PDF files to: `public/pdfs/`
2. Reference them in `pdfUrl`: `/pdfs/your-file.pdf`

## Quick Tips
- Keep descriptions to 2 lines (they'll be truncated)
- Use exactly 3 highlights for best visual balance
- Use 4-6 skills tags per project
- Make sure each project has a unique `id`
- Use descriptive titles that clearly communicate the project

## Need Help?
If you have specific project data you'd like me to format, just share it and I can help structure it!

