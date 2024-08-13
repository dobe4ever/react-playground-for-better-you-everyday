import anthropic

client = anthropic.Anthropic(
    # defaults to os.environ.get("ANTHROPIC_API_KEY")
    api_key="my_api_key",
)

SYSTEM=""

response = client.messages.create(
    model="claude-3-5-sonnet-20240620",
    max_tokens=6000,
    system=SYSTEM,
    messages=[{"role": "user", "content": query}]
)




query = f"""
# Role
You are an AI assistant tasked with determining which files from a codebase need to be sent to a coding assistant along with a user's message. Your goal is to analyze the user's message and the context of the conversation to identify the most relevant files that the coding assistant will need to provide an accurate and helpful response.

Here is an overview of the project:

# Habit and Todo Tracking App

## Overview
This full-stack application is designed to help users track and manage their daily habits and todos. It combines customizable todo lists with a comprehensive habit tracking system, enhanced by AI coaching and community features.

## Key Features

### 1. List Management
- Two main types of lists: Todos and Habits
- Responsive design with drag-and-drop functionality
- Progress tracking and analytics

### 2. Todo List
- Fully customizable by users
- Features:
  - Add, edit, and delete items
  - Check/uncheck completion status
  - Add notes to items
  - Set deadlines
  - Additional customizable fields

### 3. Habit List
- Connected to a large database of predefined habits
- Search functionality for adding habits
- Each habit represented by a reusable card component

### 4. Card Components
- Todo Card:
  - Custom fields based on user input
  - Basic editing and management features
- Habit Card:
  - Standardized format for all habits
  - Pulls information from the habit database
  - Displays front and back of the card
  - Back of card contains info & media content for the specific habit
  - Back of card space used for monetization:
    - Sponsored links
    - Sale of related products
    - Pay-to-access content
    - Other monetization ideas
  - Similar to Trello card functionality

### 5. User Interface
- Top Bar:
  - Hamburger menu icon (top-left) to open full-page sidebar
  - Notification icon with counter (top-right)
  - User profile icon (top-right)
- Bottom Navigation:
  - 5 circular icons with text labels
  - 'More' icon opens additional options
- Contextual Menus:
  - For notifications, user profile, and additional options
  - Include icons and text labels
- Card Interface:
  - Multiple options and settings (notes, alarms, edit, mark complete, etc.)
  - '3 dots' menu for additional options
- List Management:
  - Options like 'hide/show completed tasks'

### 6. AI Chatbot Coach
- Assists users with progress and goal-setting
- Conversations stored for simulated memory

### 7. Community Features
- User interaction and sharing capabilities
- Specific features still under consideration

### 8. Monetization
- Various business ideas integrated into the app
- Utilizes back of habit cards for sponsored content and product sales

## Technical Stack
- Frontend: React.js with Tailwind CSS and react-lucide
- Backend: Not specified (assumed to be in development)
- Database: 
  - Large-scale for storing predefined habits
  - User app usage tracking for progress display via dashboard
  - Storage of user conversations with AI coach
  - User account data and information

## UI/UX Design
- Consistent use of icons throughout the app
- Color scheme defined (details to be implemented)
- Responsive design for various screen sizes

## Development Approach
- Component-based architecture
- Reusable components for common elements (e.g., cards, menus)
- Integration of AI for code generation based on requirements

Here some key files for additional info:
KEY_FILES

Here is the full list of files in the project:
SYSTEM_FILE

For context, here are the most recent messages from the conversation:
RECENT_MESSAGES

Now, carefully read and analyze the following user message:
USER_MESSAGE

Based on the user's message and the conversation context, determine which files from the project are most relevant and necessary for the coding assistant to provide an accurate and helpful response. Consider the following factors:

1. The specific topic or area of the codebase mentioned in the user's message
2. Any components, functions, or features that the user is asking about or trying to modify
3. Related files that might be necessary for the assistant to see as samples of the actual code.
4. All necessary files needed to understand the context of the user's request.
5. Sorrounding files that need to be modified for any given changes to fully work right away.
6. Keep in mind, the coding assistant only reads the files you provide, all previous code blocks are deleted from the conversation history after every iteration to avoid duplicate code and redundancy, this means, it won't be aware of anything about the specific implementation if you don't provide it.

IMPORTANT INSTRUCTIONS: Please output valid JSON only! Without additional comments or explanations. The reason is because your response won't be read by a human, a JSON object can be parsed and used programatically to generate the files from the paths in the JSON object then sent through the coding assistant via the API. This is why is important to not use natural language fr this task. The JSON object should have a single key "relevantFiles" with an array of file paths as its value. Typically between 1 to 5 files, unless the user's request clearly requires more.

Format your output as follows:
```json
{
  "relevantFiles": [
    "path/to/relevant/file1",
    "path/to/relevant/file2"
  ]
}
```
Remember, accuracy, relevance and output valid JSON are crucial.
"""

response = client.messages.create(
    model="claude-3-5-sonnet-20240620",
    max_tokens=6000,
    messages=[{"role": "user", "content": query}]
)