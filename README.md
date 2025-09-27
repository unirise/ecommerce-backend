# E-commerce Backend

A NestJS-based backend API for an e-commerce application built with TypeScript, TypeORM, and PostgreSQL.

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [pnpm](https://pnpm.io/) package manager
- [PostgreSQL](https://www.postgresql.org/) database

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/unirise/ecommerce-backend.git
   cd ecommerce-backend
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Environment Setup**
   ```bash
   cp env.template .env
   ```
   Edit the `.env` file with your database configuration and other environment variables.

4. **Build the application**
   ```bash
   pnpm run build
   ```

## 🔧 Development

### Running in Development Mode
```bash
pnpm run start:dev
```
This will start the application in watch mode, automatically restarting when files change.

### Running in Production Mode
```bash
pnpm run build
pnpm start
```

## 📚 Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm run build` | Build the application for production |
| `pnpm start` | Start the production server |
| `pnpm run start:dev` | Start development server with hot reload |
| `pnpm run start:debug` | Start development server in debug mode |
| `pnpm run lint` | Run ESLint to check code quality |
| `pnpm run format` | Format code using Prettier |
| `pnpm run test` | Run unit tests |
| `pnpm run test:watch` | Run tests in watch mode |
| `pnpm run test:cov` | Run tests with coverage report |
| `pnpm run test:e2e` | Run end-to-end tests |

## 🗄️ Database

### Database Setup
1. Create a PostgreSQL database
2. Update your `.env` file with database credentials
3. Run migrations:
   ```bash
   pnpm run migration:run
   ```

### Generate New Migration
```bash
pnpm run migration:generate
```

## 🔌 API Endpoints

The application runs on `http://localhost:3000` by default.

### Available Routes
- `GET /` - Health check endpoint
- `GET /categories` - Get all categories
- More endpoints will be documented as they are implemented

## 🏗️ Project Structure

```
src/
├── app.controller.ts       # Main app controller
├── app.module.ts          # Root application module
├── app.service.ts         # Main app service
├── main.ts               # Application entry point
├── typeorm.config.ts     # Database configuration
└── category/             # Category module
    ├── category.controller.ts
    ├── category.service.ts
    ├── category.module.ts
    ├── dto/              # Data Transfer Objects
    └── entities/         # Database entities
```

## 🧪 Testing

### Running Tests
```bash
# Unit tests
pnpm run test

# Watch mode
pnpm run test:watch

# Coverage
pnpm run test:cov

# E2E tests
pnpm run test:e2e
```

## 🚀 Deployment

1. **Build the application**
   ```bash
   pnpm run build
   ```

2. **Set environment variables**
   Ensure all production environment variables are set.

3. **Run database migrations**
   ```bash
   pnpm run migration:run
   ```

4. **Start the application**
   ```bash
   pnpm start
   ```

## 🔧 Troubleshooting

### Common Issues

1. **Build fails with "dist directory not found"**
   - Make sure TypeScript compilation is successful
   - Run `pnpm run build` before `pnpm start`

2. **Database connection errors**
   - Verify PostgreSQL is running
   - Check database credentials in `.env` file
   - Ensure database exists

3. **Port already in use**
   - Change the PORT in your `.env` file
   - Or kill the process using the port: `lsof -ti:3000 | xargs kill`

## 📄 License

This project is [UNLICENSED](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Submit a pull request

