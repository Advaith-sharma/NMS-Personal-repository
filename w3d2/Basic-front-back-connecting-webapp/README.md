# Role-Based Authentication App

This is a full-stack role-based authentication system built using:

- **Frontend**: React.js (`RoleClient`)
- **Backend**: ASP.NET Core Web API with JWT Authentication (`RoleApi`)
- **Database**: MS SQL Server (via Dapper ORM)

## 📁 Folder Structure
/ProjectRoot
│
├── role-client/ # React frontend
│ └── src/
│
└── RoleApi/ # ASP.NET Core Web API backend
  └── Controllers/
  └── Data/
  └── Models/
  
---

## 🚀 How to Run the Project

### 🧩 Prerequisites

- [.NET 7+ SDK](https://dotnet.microsoft.com/download)
- [Node.js + npm](https://nodejs.org/)
- SQL Server (Express or LocalDB)
- React Vite (comes with client)
- CORS must allow `http://localhost:5173`

---

### 🔧 Backend Setup (`RoleApi`)

1. Navigate to the backend folder:
   ```bash
   cd RoleApi

2. Configure your appsettings.json (if needed):
```bash
  "ConnectionStrings": {
    "DefaultConnection": "Server=localhost;Database=RoleDB;Trusted_Connection=True;"
  },
  "Jwt": {
    "Key": "ThisIsASecretKeyForJWT1234567890",
    "Issuer": "RoleApiAuthServer"
  }
```
3. Run the backend:

```bash
  dotnet run
```
4. The API will run at:

```
  http://localhost:5234
```

Public endpoint: GET /api/user (Returns all users)
Auth endpoint: POST /api/auth/login (Returns JWT token)

🖥️ Frontend Setup (RoleClient)
1. Navigate to the frontend folder:
```
cd RoleClient
```

2. Install dependencies:
```
npm install
```

3. Start the React development server:
```
npm run dev
```

4. The frontend will run at:
```
http://localhost:5173
```
