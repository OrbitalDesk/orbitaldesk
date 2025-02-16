# Freelancing Company Management Panel

This document provides the full specifications and instructions for developing the **Freelancing Company Management Panel**. The platform will help you manage freelancers, clients, projects, financials, and more, with a strong focus on user management, permissions, and a responsive UI/UX.

---

## Table of Contents

1. App Flow Overview
2. User Management
3. Permission System
4. Product/Service Management
5. Project Management
6. Client Management
7. Financial Tracking
8. Reporting & Analytics
9. Activity Logs
10. File Management
11. Client Portal
12. License Portal
13. Frontend Development
14. Backend Development
15. Setting Up the Application
16. Conclusion

---

## 1. App Flow Overview

### Welcome Screen

Upon opening the app, users are greeted with a **clean and simple welcome screen** that provides an inviting first impression. The screen will display the logo of the platform, a brief tagline, and action buttons for signing up or logging in. The following options will be available:

- **Sign Up**: To create a new account using an email address or Discord account.
- **Log In**: For returning users who have already registered.

The welcome screen is designed to be minimal, focusing on guiding the user towards the next step (signup or login).

---

### Signup and Authentication

The app allows users to sign up through two methods:

1. **Email Sign Up**: Users can register using their email address. After providing an email and password, they receive a verification email to confirm their registration. Upon successful email verification, they can log in to the app.

2. **Discord Authentication**: Users can opt to sign up using their **Discord account**. After choosing the Discord option, the app will redirect the user to the Discord authorization page. Once they log in via Discord and authorize the app, the system automatically registers their account, linking their Discord account to their profile in the platform.

Once signed up or logged in, users are directed to the **Main Dashboard**.

---

### Main Dashboard

Upon successful login, users are directed to the **Main Dashboard**. This is the central hub of the platform where users can manage everything.

- **Admin Dashboard**: Displays an overview of projects, freelancers, clients, and financial data.
- **Freelancer Dashboard**: Displays the freelancer's assigned projects and tasks.
- **Client Dashboard**: Displays the client's ongoing projects, milestones, and downloadable files.

---

## 2. User Management

### Features

- **Add, Edit, and Manage Freelancers**: Admins can add freelancers by inputting their details (name, contact info, specializations).
- **Roles and Permissions**: Define user roles (admin, freelancer, client) and assign permissions to each role. Example: Admins can manage all data, freelancers can view only assigned projects, and clients can only interact with their own projects.
- **Specializations**: Assign freelancers specific skills (e.g., design, development) to ease project assignment.

---

## 3. Permission System

### Overview

The **Permission System** allows administrators to control what actions users can perform. Permissions are structured using `<resource>.<action>`, where `<resource>` refers to the entity and `<action>` specifies what can be done with it.

Example:

- `tickets.view`: Permission to view ticket information.
- `tickets.create`: Permission to create new tickets.
- `tickets.delete`: Permission to delete tickets.

---

## 4. Product/Service Management

### Features

- **Create and Categorize Offerings**: Admins can create services (e.g., design, web development) and categorize them.
- **Pricing**: Set pricing models for each service (e.g., hourly or fixed price).
- **Customizable Options**: Add options like revisions and add-ons to each service.

---

## 5. Project Management

### Features

- **Create and Assign Projects**: Admin can create projects, assign freelancers, and set deadlines.
- **Milestones**: Admin can define milestones to track project progress.
- **Task Assignment and Tracking**: Tasks can be assigned to freelancers, and their progress can be tracked.
- **Communication**: Integrated messaging for freelancers, clients, and admins.
- **Approve Deliverables**: Admins and clients can approve completed deliverables at various stages.

---

## 6. Client Management

### Features

- **Store Client Details**: Admins can store information about clients.
- **Project Association**: Link projects to specific clients.
- **Client-Specific Access**: Clients can only view their own projects and milestones.

---

## 7. Financial Tracking

### Features

- **Log Payments**: Track payments made to freelancers and received from clients.
- **Generate Invoices**: Generate invoices for clients.
- **Revenue/Expense Tracking**: Track company income and expenses.
- **Financial Reports**: Generate reports summarizing financial status.

---

## 8. Reporting & Analytics

### Features

- **Key Metrics**: Visualize metrics such as project completion rates, freelancer performance, and revenue.
- **Custom Reports**: Create custom reports based on specific data needs.

---

## 9. Activity Logs

### Features

- **Track Actions**: Record user actions (e.g., project creation, freelancer assignment).
- **Auditability**: Admins can view logs for auditing purposes.

---

## 10. File Management

### Features

- **Secure Storage**: Store and manage project files securely.
- **Version Control**: Maintain version history of project files.
- **File Permissions**: Control access to project files based on user role.

---

## 11. Client Portal

### Features

- **Project Overview**: Clients can view their active projects and progress.
- **Milestone Approval**: Clients can approve or reject project milestones.
- **File Access**: Clients can download final project files through the License Portal.

---

## 12. License Portal

### Features

- **License Management**: Grant, manage, and revoke access to downloadable project files.
- **Usage Tracking**: Track how many times a client has downloaded files.
- **Automated System**: Automatically handle license distribution and revocation.

---

## 13. Frontend Development

### Technology Stack

- **Frontend Framework**: Next.js (for SSR/SSG and routing).
- **Styling**: TailwindCSS (for utility-first, responsive design).
- **UI Components**: Shadcn UI (for consistent and customizable UI components).
- **Data Fetching**: React Query (TanStack Query) (for efficient server state management).
- **Authentication**: NextAuth.js (for authentication, including Discord OAuth2 integration).
- **Animations**: Framer Motion (for UI animations and interactivity).

---

## 14. Backend Development

### Technology Stack

- **Backend Framework**: Node.js with TypeScript and Express.js (for REST API).
- **Database**: PostgreSQL (or MySQL/SQLite) with Prisma ORM for database interaction and migrations.
- **SQL Queries**: Drizzle (for fast SQL queries without ORM abstraction).
- **Authentication**: JWT (for authentication and authorization).
- **Session Management**: Redis (optional, for caching and session management).

---

## 15. Database Schema

### Users and Authentication

```sql
-- Users table
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255),
    discord_id VARCHAR(255) UNIQUE,
    role VARCHAR(50) NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Permissions table
CREATE TABLE permissions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(100) NOT NULL UNIQUE,
    description TEXT
);

-- Role permissions junction table
CREATE TABLE role_permissions (
    role VARCHAR(50) NOT NULL,
    permission_id UUID NOT NULL,
    PRIMARY KEY (role, permission_id),
    FOREIGN KEY (permission_id) REFERENCES permissions(id)
);
```

### Projects and Tasks

```sql
-- Projects table
CREATE TABLE projects (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    client_id UUID NOT NULL,
    status VARCHAR(50) NOT NULL,
    start_date DATE,
    end_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (client_id) REFERENCES users(id)
);

-- Project assignments
CREATE TABLE project_assignments (
    project_id UUID NOT NULL,
    user_id UUID NOT NULL,
    role VARCHAR(50) NOT NULL,
    PRIMARY KEY (project_id, user_id),
    FOREIGN KEY (project_id) REFERENCES projects(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Tasks table
CREATE TABLE tasks (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    project_id UUID NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    status VARCHAR(50) NOT NULL,
    assigned_to UUID,
    due_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (project_id) REFERENCES projects(id),
    FOREIGN KEY (assigned_to) REFERENCES users(id)
);
```

### Financial Management

```sql
-- Invoices table
CREATE TABLE invoices (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    project_id UUID NOT NULL,
    client_id UUID NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    status VARCHAR(50) NOT NULL,
    due_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (project_id) REFERENCES projects(id),
    FOREIGN KEY (client_id) REFERENCES users(id)
);

-- Payments table
CREATE TABLE payments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    invoice_id UUID NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    payment_date TIMESTAMP NOT NULL,
    payment_method VARCHAR(50),
    FOREIGN KEY (invoice_id) REFERENCES invoices(id)
);
```

### File Management

```sql
-- Files table
CREATE TABLE files (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    project_id UUID NOT NULL,
    name VARCHAR(255) NOT NULL,
    path VARCHAR(512) NOT NULL,
    size BIGINT NOT NULL,
    mime_type VARCHAR(100),
    uploaded_by UUID NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (project_id) REFERENCES projects(id),
    FOREIGN KEY (uploaded_by) REFERENCES users(id)
);

-- File licenses table
CREATE TABLE file_licenses (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    file_id UUID NOT NULL,
    user_id UUID NOT NULL,
    download_count INTEGER DEFAULT 0,
    expires_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (file_id) REFERENCES files(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);
```

## 16. Application Structure

```
freelancing-panel/
├── .github/                    # GitHub Actions workflows
├── .vscode/                    # VS Code settings
├── apps/
│   ├── web/                   # Next.js frontend application
│   │   ├── app/              # App router pages and layouts
│   │   ├── components/       # React components
│   │   │   ├── ui/          # Reusable UI components
│   │   │   └── features/    # Feature-specific components
│   │   ├── hooks/           # Custom React hooks
│   │   ├── lib/             # Utility functions and configurations
│   │   ├── styles/          # Global styles
│   │   └── types/           # TypeScript type definitions
│   │
│   └── api/                  # Express.js backend application
│       ├── src/
│       │   ├── config/      # Configuration files
│       │   ├── controllers/ # Route controllers
│       │   ├── middleware/  # Custom middleware
│       │   ├── models/      # Database models
│       │   ├── routes/      # API routes
│       │   ├── services/    # Business logic
│       │   └── utils/       # Utility functions
│       └── tests/           # Backend tests
│
├── packages/                  # Shared packages
│   ├── database/            # Database related code
│   │   ├── migrations/     # Database migrations
│   │   ├── schema/        # Schema definitions
│   │   └── seed/          # Seed data
│   │
│   ├── eslint-config/      # Shared ESLint configuration
│   ├── typescript-config/  # Shared TypeScript configuration
│   └── ui/                 # Shared UI components
│
├── public/                   # Static files
├── docs/                     # Documentation
├── scripts/                  # Development and build scripts
└── docker/                   # Docker configuration files
```

---

## 16. Conclusion

This document provides all the necessary steps and features for building a **Freelancing Company Management Panel**. By following the steps outlined for both frontend and backend development, you can create a highly scalable and feature-rich platform that enables efficient management of freelancers, clients, projects, and financials.
