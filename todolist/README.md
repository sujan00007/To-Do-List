# TaskMaster - Modern To-Do List App

A production-ready, feature-rich To-Do List application built with React, Vite, and Tailwind CSS.

## Features

✅ Add, edit, and delete tasks
✅ Mark tasks as completed
✅ Filter tasks (All / Active / Completed)
✅ Task counter (total, completed, active)
✅ LocalStorage persistence
✅ Dark mode toggle
✅ Fully responsive design
✅ Modern UI with smooth transitions
✅ Empty state handling

## Tech Stack

- **React 18** - Functional components with hooks
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Beautiful icons
- **LocalStorage** - Data persistence

## Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # App header with dark mode toggle
│   ├── Footer.jsx          # App footer
│   ├── TodoInput.jsx       # Input form for new tasks
│   ├── TodoList.jsx        # List container with empty state
│   ├── TodoItem.jsx        # Individual task item
│   ├── FilterButtons.jsx   # Filter controls
│   └── TaskCounter.jsx     # Task statistics
├── pages/
│   └── TodoPage.jsx        # Main page with state management
├── App.jsx                 # Root component
├── main.jsx                # Entry point
└── index.css               # Tailwind directives
```

## Usage

1. **Add Task**: Type in the input field and click "Add" or press Enter
2. **Complete Task**: Click the circle checkbox to mark as done
3. **Edit Task**: Click the edit icon to modify task text
4. **Delete Task**: Click the trash icon to remove task
5. **Filter Tasks**: Use All/Active/Completed buttons
6. **Dark Mode**: Toggle with the moon/sun icon in navbar

## Browser Support

Works on all modern browsers (Chrome, Firefox, Safari, Edge)

## License

MIT
