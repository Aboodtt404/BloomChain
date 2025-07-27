# BloomChain - ICP Landing Page with Internet Identity

This project has been converted from a standard React landing page to a full Internet Computer Protocol (ICP) application with Internet Identity authentication.

## 🏗️ Project Structure

```
BloomChain/
├── dfx.json                        # ICP project configuration
├── src/
│   └── bloomchain_backend/         # Motoko backend canister
│       └── main.mo                 # Backend logic
└── bloomchain-landing/             # React frontend (asset canister)
    ├── src/
    │   ├── lib/auth.ts            # Internet Identity integration
    │   ├── contexts/AuthContext.tsx # React auth context
    │   ├── components/AuthButton.tsx # Login/logout component
    │   └── ...                    # Other React components
    ├── package.json               # Updated with ICP dependencies
    └── vite.config.ts             # Configured for ICP deployment
```

## 🚀 Features

- **Internet Identity Authentication**: Secure, decentralized login
- **Backend Canister**: Motoko-based smart contract for data storage
- **Frontend Canister**: React app deployed as an asset canister
- **On-chain Messaging**: Authenticated users can submit messages to the blockchain
- **Responsive Design**: Beautiful, modern UI with Tailwind CSS

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

1. **Node.js** (v16 or higher)
2. **dfx** (Internet Computer SDK)
   ```bash
   sh -ci "$(curl -fsSL https://internetcomputer.org/install.sh)"
   ```
3. **Git**

## 🛠️ Setup Instructions

### 1. Install Dependencies

```bash
# Install frontend dependencies
cd bloomchain-landing
npm install
```

### 2. Start Local ICP Replica

```bash
# In the root directory
dfx start --clean --background
```

### 3. Deploy Canisters

```bash
# Deploy all canisters (backend, frontend, and Internet Identity)
dfx deploy
```

### 4. Get Canister URLs

After deployment, dfx will show you the URLs:

```
URLs:
  Frontend canister via browser
    bloomchain_frontend: http://127.0.0.1:4943/?canisterId=<frontend-canister-id>
  Backend canister via Candid interface
    bloomchain_backend: http://127.0.0.1:4943/?canisterId=<candid-ui-id>&id=<backend-canister-id>
```

### 5. Update Environment Variables

Create or update `bloomchain-landing/.env`:

```env
VITE_BACKEND_CANISTER_ID=<your-backend-canister-id>
VITE_INTERNET_IDENTITY_CANISTER_ID=rdmx6-jaaaa-aaaaa-aaadq-cai
VITE_IC_HOST=http://localhost:4943
VITE_DFX_NETWORK=local
```

### 6. Rebuild Frontend (if needed)

```bash
cd bloomchain-landing
npm run build
dfx deploy bloomchain_frontend
```

## 🧪 Testing the Application

### 1. Access the Frontend
Open the frontend canister URL in your browser.

### 2. Test Internet Identity
1. Click "Login with Internet Identity"
2. Create a new identity or use existing one
3. Complete the authentication flow
4. You should see "✓ Connected" in the navigation

### 3. Test Backend Integration
1. After logging in, scroll to the newsletter section
2. Fill out the form with email and message
3. Click "Send Message On-Chain"
4. Check the browser console for confirmation

### 4. Verify Backend Canister
1. Open the backend Candid interface URL
2. Try calling functions like:
   - `greet("World")` 
   - `getCanisterInfo()`
   - `whoami()` (after authenticating)

## 🔧 Development Workflow

### Local Development
```bash
# Start dfx
dfx start --clean --background

# Deploy backend changes
dfx deploy bloomchain_backend

# For frontend development
cd bloomchain-landing
npm run dev
```

### Building for Production
```bash
# Build frontend
cd bloomchain-landing
npm run build

# Deploy to mainnet (requires cycles)
dfx deploy --network ic
```

## 📊 Backend Canister Functions

The Motoko backend provides these main functions:

- `greet(name: Text)`: Simple greeting function
- `getCanisterInfo()`: Returns canister metadata
- `createOrUpdateProfile()`: User profile management
- `submitMessage(content: Text)`: Submit messages on-chain
- `getMessages(limit: ?Nat)`: Retrieve stored messages
- `whoami()`: Get caller's principal ID

## 🎨 Frontend Components

Key components with ICP integration:

- **AuthButton**: Handles II login/logout
- **AuthContext**: Manages authentication state
- **Navigation**: Shows connection status
- **Newsletter**: Integrated with backend for message submission

## 🔒 Security Features

- **Anonymous Rejection**: Backend rejects anonymous users for write operations
- **Input Validation**: Message length and content validation
- **Principal-based Authorization**: User identification via ICP principals
- **Secure Communication**: All backend calls are authenticated

## 🐛 Troubleshooting

### Common Issues

1. **npm not recognized**: Install Node.js and ensure it's in your PATH
2. **dfx command not found**: Install the IC SDK
3. **Authentication failures**: Check Internet Identity canister ID in .env
4. **Build errors**: Ensure all dependencies are installed

### Getting Help

- Check the [ICP Documentation](https://internetcomputer.org/docs)
- Visit the [Developer Forum](https://forum.dfinity.org/)
- Join the [Developer Discord](https://discord.gg/cA7y6ezyE2)

## 🚀 Deployment to Mainnet

1. **Get Cycles**: You'll need ICP tokens converted to cycles
2. **Update Configuration**: Change network settings to `ic`
3. **Deploy**: `dfx deploy --network ic`
4. **Update Environment**: Point frontend to mainnet URLs

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Built with ❤️ on the Internet Computer** 