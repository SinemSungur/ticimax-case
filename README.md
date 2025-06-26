# Product List Application

A comprehensive Vue 2 product list application designed for migration to Vue 3. Features a responsive table view with advanced functionality including pagination, sorting and state management.

## Project Overview

This project demonstrates a production-ready product list application built with Vue 2, featuring a comprehensive table view with advanced functionality. The project is **specifically designed and structured for seamless migration to Vue 3**, following best practices that ensure easy transition to Composition API and Pinia.

**Key Design Principles:**
- **Migration-Ready Architecture**: Component structure optimized for Vue 3 migration
- **Modular Design**: Atomic Design principles for easy component updates
- **Clean Code**: Well-organized codebase with clear separation of concerns
- **Future-Proof**: Built with Vue 3 migration in mind from the start

## Features

- **Product Table**: Displays products in a responsive table format with 15+ columns
- **Pagination**: Navigate through product pages with First/Previous/Next/Last buttons
- **Sorting**: Sort products by price (ascending/descending)
- **State Management**: Vuex store for centralized state management
- **API Integration**: Fetches data from DummyJSON API with pagination
- **Loading States**: Loading indicators and comprehensive error handling
- **Query Parameters**: URL state management for page and sort persistence
- **Responsive Design**: Mobile-friendly interface
- **Atomic Design**: Organized component structure following design principles
- **Error Handling**: Retry functionality and user-friendly error messages

## Tech Stack

### Current Implementation (Vue 2)
- **Vue 2.6.14** - Core framework (migration-ready structure)
- **Vuex 3.6.2** - State management (will be replaced with Pinia)
- **Vue Router 3.5.3** - Routing (will be upgraded to 4.x)
- **Axios 0.27.2** - HTTP client (Vue 3 compatible)
- **SCSS** - Styling (framework agnostic)
- **ESLint 8.x** - Code quality (will be updated for Vue 3)

### Planned Migration (Vue 3)
- **Vue 3.x** - Latest Vue framework with Composition API
- **Pinia** - Modern state management (replacing Vuex)
- **Vue Router 4.x** - Updated routing system
- **Composition API** - Modern Vue 3 development pattern
- **TypeScript** - Type safety and better DX
- **Vite** - Modern build tool (replacing Vue CLI)
- **Updated Dependencies** - All packages compatible with Vue 3

## Project Structure

```
src/
├── components/
│   ├── atoms/          # Basic UI components (BaseButton, BaseSelect, etc.)
│   │   └── cells/      # Table cell components
│   ├── molecules/      # Composite components (DataTable, SortControl, etc.)
│   ├── organisms/      # Complex components (ProductGrid)
│   └── templates/      # Page layouts (ProductListTemplate)
├── constants/          # Application constants and configurations
├── pages/             # Page components
├── router/            # Vue Router configuration
├── store/             # Vuex store modules (will be replaced with Pinia)
├── utils/             # Utility functions
└── assets/
    └── styles/        # Global styles and variables
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run serve
   ```

3. Build for production:
   ```bash
   npm run build
   ```

4. Run linting:
   ```bash
   npm run lint
   npm run lint:fix
   ```

## API Integration

The application fetches product data from the DummyJSON API:
- **Base URL**: `https://dummyjson.com/products`
- **Pagination**: Uses `limit` and `skip` parameters
- **Sorting**: Supports `sortBy=price&order=asc/desc` parameters
- **Response**: Includes products array and total count

## Component Architecture

The application follows Atomic Design principles:

### Atoms
- **BaseButton**: Reusable button component
- **BaseSelect**: Dropdown select component
- **BaseSpinner**: Loading spinner
- **TableCell**: Dynamic table cell with multiple cell types
- **NoData**: Empty state component

### Molecules
- **DataTable**: Main table component with sorting and pagination
- **SortControl**: Price sorting dropdown
- **BasePagination**: Navigation controls

### Organisms
- **ProductGrid**: Complete product display with table and controls

### Templates
- **ProductListTemplate**: Page layout wrapper

## State Management

### Current Implementation (Vuex)
The Vuex store manages:
- Product data and metadata
- Loading states
- Error handling
- Pagination state (current page, total pages)
- Sorting state
- API request management

**Migration Note**: Vuex store is structured to be easily converted to Pinia stores.

### Planned Migration (Pinia)
Will be migrated to Pinia stores with:
- **Composition API syntax** - Modern Vue 3 patterns
- **Better TypeScript support** - Enhanced type safety
- **Improved developer experience** - Simpler store definition
- **Modular store structure** - Better code organization
- **Automatic tree-shaking** - Smaller bundle size
- **DevTools integration** - Better debugging experience

## Styling

The application uses SCSS with:
- CSS custom properties for theming
- Responsive design patterns
- Consistent spacing and typography
- Modern color palette
- Atomic Design component styling
