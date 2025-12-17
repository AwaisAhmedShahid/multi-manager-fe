# Frontend Authentication App

A modern React + Vite frontend application with complete authentication flow supporting four user roles: User, Manager, Admin, and Super Admin.

## Features

- ✨ Modern, premium UI design with Tailwind CSS
- 🔐 Complete authentication flow (Login/Signup)
- 👥 Four user roles with role-based access control
- 📝 Form validation with Zod and React Hook Form
- 🚀 Data fetching with TanStack Query
- 🎨 shadcn/ui components
- 🔔 Toast notifications
- 📱 Fully responsive design
- ⚡ Lightning-fast with Vite

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **React Router** - Routing
- **React Hook Form** - Form management
- **Zod** - Schema validation
- **TanStack Query** - Data fetching
- **Axios** - HTTP client
- **Sonner** - Toast notifications
- **Lucide React** - Icons

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy `.env.example` to `.env` and configure your API URL:
   ```bash
   cp .env.example .env
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## User Roles

The application supports four distinct user roles:

1. **User** - Standard user with basic access
2. **Manager** - Team manager with elevated permissions
3. **Admin** - Administrator with advanced system access
4. **Super Admin** - Super Administrator with full system control

## API Integration

This frontend expects a backend API with the following endpoints:

- `POST /api/auth/login` - User login
- `POST /api/auth/signup` - User registration
- `GET /api/auth/me` - Get current user (requires authentication)

### Expected API Response Format

**Login/Signup Response:**
```json
{
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "email": "user@example.com",
    "name": "User Name",
    "role": "user" | "manager" | "admin" | "super_admin"
  }
}
```

## Project Structure

```
src/
├── api/              # API service layer
├── components/       # React components
│   ├── forms/       # Form components
│   └── ui/          # shadcn/ui components
├── contexts/        # React contexts
├── hooks/           # Custom hooks
├── lib/             # Utility functions
├── pages/           # Page components
├── schemas/         # Zod validation schemas
└── types/           # TypeScript type definitions
```

## Development Notes

- The application uses localStorage for token persistence
- Authentication state is managed via React Context
- All forms include comprehensive validation
- Protected routes automatically redirect to login if not authenticated
- Role-based access control is implemented but can be extended

## License

MIT
