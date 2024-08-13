import React from 'react';

const Home = () => {
  return (
    <div className="space-y-8 p-6">
      <div className="flex items-center justify-center">
        <img
          src={`${process.env.PUBLIC_URL}/assets/primary-logo.svg`}
          alt="logo"
          className="w-full max-w-xs mx-auto"
        />
      </div>

      <h1 className="font-bold text-center py-4 text-4xl text-transparent bg-clip-text bg-gradient-orange">
        A Habit and Todo Tracking App
      </h1>

      <p className="text-gray-700">
        This full-stack application is designed to help users track and manage their daily habits and todos. It combines customizable todo lists with a comprehensive habit tracking system, enhanced by AI coaching and community features.
      </p>

      <h2 className="font-bold py-4 text-transparent bg-clip-text bg-gradient-orange">
        Key Features
      </h2>

      <section>
        <h3 className="font-semibold text-lg">1. List Management</h3>
        <ul className="list-disc pl-5">
          <li>Two main types of lists: Todos and Habits</li>
          <li>Responsive design with drag-and-drop functionality</li>
          <li>Progress tracking and analytics</li>
        </ul>
      </section>

      <section>
        <h3 className="font-semibold text-lg">2. Todo List</h3>
        <ul className="list-disc pl-5">
          <li>Fully customizable by users</li>
          <li>
            Features:
            <ul className="list-disc pl-5">
              <li>Add, edit, and delete items</li>
              <li>Check/uncheck completion status</li>
              <li>Add notes to items</li>
              <li>Set deadlines</li>
              <li>Additional customizable fields</li>
            </ul>
          </li>
        </ul>
      </section>

      <section>
        <h3 className="font-semibold text-lg">3. Habit List</h3>
        <ul className="list-disc pl-5">
          <li>Connected to a large database of predefined habits</li>
          <li>Search functionality for adding habits</li>
          <li>Each habit represented by a reusable card component</li>
        </ul>
      </section>

      <section>
        <h3 className="font-semibold text-lg">4. Card Components</h3>
        <ul className="list-disc pl-5">
          <li>
            Todo Card:
            <ul className="list-disc pl-5">
              <li>Custom fields based on user input</li>
              <li>Basic editing and management features</li>
            </ul>
          </li>
          <li>
            Habit Card:
            <ul className="list-disc pl-5">
              <li>Standardized format for all habits</li>
              <li>Pulls information from the habit database</li>
              <li>Displays front and back of the card</li>
              <li>
                Back of card contains info & media content for the specific habit
                <ul className="list-disc pl-5">
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
      </section>

      <section>
        <h3 className="font-semibold text-lg">5. User Interface</h3>
        <ul className="list-disc pl-5">
          <li>
            Top Bar:
            <ul className="list-disc pl-5">
              <li>Hamburger menu icon (top-left) to open full-page sidebar</li>
              <li>Notification icon with counter (top-right)</li>
              <li>User profile icon (top-right)</li>
            </ul>
          </li>
          <li>
            Bottom Navigation:
            <ul className="list-disc pl-5">
              <li>5 circular icons with text labels</li>
              <li>'More' icon opens additional options</li>
            </ul>
          </li>
          <li>
            Contextual Menus:
            <ul className="list-disc pl-5">
              <li>For notifications, user profile, and additional options</li>
              <li>Include icons and text labels</li>
            </ul>
          </li>
          <li>
            Card Interface:
            <ul className="list-disc pl-5">
              <li>Multiple options and settings (notes, alarms, edit, mark complete, etc.)</li>
              <li>'3 dots' menu for additional options</li>
            </ul>
          </li>
          <li>
            List Management:
            <ul className="list-disc pl-5">
              <li>Options like 'hide/show completed tasks'</li>
            </ul>
          </li>
        </ul>
      </section>

      <section>
        <h3 className="font-semibold text-lg">6. AI Chatbot Coach</h3>
        <ul className="list-disc pl-5">
          <li>Assists users with progress and goal-setting</li>
          <li>Conversations stored for simulated memory</li>
        </ul>
      </section>

      <section>
        <h3 className="font-semibold text-lg">7. Community Features</h3>
        <ul className="list-disc pl-5">
          <li>User interaction and sharing capabilities</li>
          <li>Specific features still under consideration</li>
        </ul>
      </section>

      <section>
        <h3 className="font-semibold text-lg">8. Monetization</h3>
        <ul className="list-disc pl-5">
          <li>Various business ideas integrated into the app</li>
          <li>Utilizes back of habit cards for sponsored content and product sales</li>
        </ul>
      </section>

      <h2 className="font-bold py-4 text-transparent bg-clip-text bg-gradient-orange">
        Technical Stack
      </h2>
      <ul className="list-disc pl-5">
        <li>Frontend: React.js with Tailwind CSS and react-lucide</li>
        <li>Backend: Not specified (assumed to be in development)</li>
        <li>
          Database:
          <ul className="list-disc pl-5">
            <li>Large-scale for storing predefined habits</li>
            <li>User app usage tracking for progress display via dashboard</li>
            <li>Storage of user conversations with AI coach</li>
            <li>User account data and information</li>
          </ul>
        </li>
      </ul>

      <h2 className="font-bold py-4 text-transparent bg-clip-text bg-gradient-orange">
        UI/UX Design
      </h2>
      <ul className="list-disc pl-5">
        <li>Consistent use of icons throughout the app</li>
        <li>Color scheme defined (details to be implemented)</li>
        <li>Responsive design for various screen sizes</li>
      </ul>

      <h2 className="font-bold py-4 text-transparent bg-clip-text bg-gradient-orange">
        Development Approach
      </h2>
      <ul className="list-disc pl-5">
        <li>Component-based architecture</li>
        <li>Reusable components for common elements (e.g., cards, menus)</li>
        <li>Integration of AI for code generation based on requirements</li>
      </ul>
    </div>
  );
};

export default Home;
