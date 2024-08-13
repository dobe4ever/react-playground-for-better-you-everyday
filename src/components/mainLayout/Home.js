import React from 'react';

const Home = () => {
  return (
    <div className="space-y-8">
      <div className="p-6 flex items-center justify-center">
        <img src={`${process.env.PUBLIC_URL}/assets/primary-logo.svg`} alt='logo' className="w-full max-w-xs mx-auto" />
      </div>

      {/* p */}
      <div>
        <p>This full-stack application is designed to help users track and manage their daily habits and todos. It combines customizable todo lists with a comprehensive habit tracking system, enhanced by AI coaching and community features.</p>
      </div>

      {/* h2 */}
      <h2 className="font-bold bg-gradient-orange py-4 text-transparent bg-clip-text">Key Features</h2>
      <h3>1. List Management</h3>
      <ul>
        <li>Two main types of lists: Todos and Habits</li>
        <li>Responsive design with drag-and-drop functionality</li>
        <li>Progress tracking and analytics</li>
      </ul>

      <h3>2. Todo List</h3>
      <ul>
        <li>Fully customizable by users</li>
        <li>Features:
          <ul>
            <li>Add, edit, and delete items</li>
            <li>Check/uncheck completion status</li>
            <li>Add notes to items</li>
            <li>Set deadlines</li>
            <li>Additional customizable fields</li>
          </ul>
        </li>
      </ul>

      <h3>3. Habit List</h3>
      <ul>
        <li>Connected to a large database of predefined habits</li>
        <li>Search functionality for adding habits</li>
        <li>Each habit represented by a reusable card component</li>
      </ul>

      <h3>4. Card Components</h3>
      <ul>
        <li>Todo Card:
          <ul>
            <li>Custom fields based on user input</li>
            <li>Basic editing and management features</li>
          </ul>
        </li>
        <li>Habit Card:
          <ul>
            <li>Standardized format for all habits</li>
            <li>Pulls information from the habit database</li>
            <li>Displays front and back of the card</li>
            <li>Back of card contains info & media content for the specific habit</li>
            <li>Back of card space used for monetization:
              <ul>
                <li>Sponsored links</li>
                <li>Sale of related products</li>
                <li>Pay-to-access content</li>
                <li>Other monetization ideas</li>
              </ul>
            </li>
            <li>Similar to Trello card functionality</li>
          </ul>
        </li>
      </ul>

      <h3>5. User Interface</h3>
      <ul>
        <li>Top Bar:
          <ul>
            <li>Hamburger menu icon (top-left) to open full-page sidebar</li>
            <li>Notification icon with counter (top-right)</li>
            <li>User profile icon (top-right)</li>
          </ul>
        </li>
        <li>Bottom Navigation:
          <ul>
            <li>5 circular icons with text labels</li>
            <li>'More' icon opens additional options</li>
          </ul>
        </li>
        <li>Contextual Menus:
          <ul>
            <li>For notifications, user profile, and additional options</li>
            <li>Include icons and text labels</li>
          </ul>
        </li>
        <li>Card Interface:
          <ul>
            <li>Multiple options and settings (notes, alarms, edit, mark complete, etc.)</li>
            <li>'3 dots' menu for additional options</li>
          </ul>
        </li>
        <li>List Management:
          <ul>
            <li>Options like 'hide/show completed tasks'</li>
          </ul>
        </li>
      </ul>

      <h3>6. AI Chatbot Coach</h3>
      <ul>
        <li>Assists users with progress and goal-setting</li>
        <li>Conversations stored for simulated memory</li>
      </ul>

      <h3>7. Community Features</h3>
      <ul>
        <li>User interaction and sharing capabilities</li>
        <li>Specific features still under consideration</li>
      </ul>

      <h3>8. Monetization</h3>
      <ul>
        <li>Various business ideas integrated into the app</li>
        <li>Utilizes back of habit cards for sponsored content and product sales</li>
      </ul>

      <h2>Technical Stack</h2>
      <ul>
        <li>Frontend: React.js with Tailwind CSS and react-lucide</li>
        <li>Backend: Not specified (assumed to be in development)</li>
        <li>Database:
          <ul>
            <li>Large-scale for storing predefined habits</li>
            <li>User app usage tracking for progress display via dashboard</li>
            <li>Storage of user conversations with AI coach</li>
            <li>User account data and information</li>
          </ul>
        </li>
      </ul>

      <h2 className="font-bold bg-gradient-orange py-4 text-transparent bg-clip-text">UI/UX Design</h2>
      <ul>
        <li>Consistent use of icons throughout the app</li>
        <li>Color scheme defined (details to be implemented)</li>
        <li>Responsive design for various screen sizes</li>
      </ul>

      <h2 className="font-bold bg-gradient-orange py-4 text-transparent bg-clip-text">Development Approach</h2>
      <ul>
        <li>Component-based architecture</li>
        <li>Reusable components for common elements (e.g., cards, menus)</li>
        <li>Integration of AI for code generation based on requirements</li>
      </ul>
    </div>
  );
};

export default Home;
