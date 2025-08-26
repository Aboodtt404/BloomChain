# BloomChain - Web3 Gardening Game on ICP

A decentralized Web3 gardening game built on the Internet Computer Protocol (ICP) with Unity game integration, Internet Identity authentication, and blockchain-powered features.

## 🏗️ Project Structure

```
BloomChain/
├── dfx.json                        # ICP project configuration
├── src/
│   └── bloomchain_backend/         # Motoko backend canister
│       └── main.mo                 # Backend logic
├── bloomchain-landing/             # React frontend (asset canister)
│   ├── src/
│   │   ├── contexts/AuthContext.tsx # Internet Identity auth context
│   │   ├── components/
│   │   │   ├── AuthButton.tsx      # Login/logout component
│   │   │   ├── ProfilePage.tsx     # User profile page
│   │   │   ├── GameSection.tsx     # Unity game integration
│   │   │   ├── Navigation.tsx      # Navigation with auth state
│   │   │   └── ...                 # Other React components
│   │   └── vite.config.ts          # Configured for ICP deployment
├── unity/                          # Unity project source files
├── deploy-local.sh                 # Local deployment script
├── deploy-mainnet.sh               # Mainnet deployment script
├── setup-env.sh                    # Environment setup helper
├── env.local                       # Local environment variables
├── env.mainnet                     # Mainnet environment variables
└── DEPLOYMENT.md                   # Deployment guide
```

## 🚀 Current Features

### ✅ **Implemented & Working**

- **🌐 Internet Identity Authentication**: Secure, decentralized login system
- **🎮 Unity Game Integration**: WebGL game embedded directly in the dApp
- **🔒 Protected Game Access**: Game only accessible to authenticated users
- **👤 User Profile System**: Profile page with user information and logout
- **🏗️ Backend Canister**: Motoko-based smart contract infrastructure
- **🎨 Modern UI/UX**: Beautiful, responsive design with Tailwind CSS
- **📱 Responsive Design**: Works on desktop, tablet, and mobile
- **🚀 Deployment Ready**: Local and mainnet deployment scripts
- **🔧 Environment Management**: Separate configs for local/mainnet

### 🎯 **Game Features (Current)**

- **🎮 Unity WebGL Game**: Core gardening gameplay mechanics
- **🔐 Authentication Required**: Login wall protects game access
- **📊 Game Statistics**: Display of game features and capabilities
- **🎨 Beautiful Game Section**: Themed UI with game preview for non-authenticated users

## 🚧 **In Development / Planned**

### **Phase 2: Enhanced Game Integration**
- [ ] **Game Progress Tracking**: Save/load game state on-chain
- [ ] **Player Statistics**: Track achievements, scores, and progress
- [ ] **Multiplayer Features**: Player interaction and trading
- [ ] **Leaderboards**: Competitive gameplay elements

### **Phase 3: Web3 & NFT Features**
- [ ] **NFT Integration**: Mint game items as NFTs
- [ ] **Token Economics**: In-game currency and rewards
- [ ] **Marketplace**: Trade game items and NFTs
- [ ] **Staking System**: Earn rewards for participation

### **Phase 4: Advanced Features**
- [ ] **Seasonal Events**: Time-based challenges and rewards
- [ ] **Guild System**: Community organization and collaboration
- [ ] **Cross-Chain Integration**: Bridge to other blockchains
- [ ] **Mobile App**: Native mobile application

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

1. **Node.js** (v16 or higher)
2. **dfx** (Internet Computer SDK)
   ```bash
   sh -ci "$(curl -fsSL https://internetcomputer.org/install.sh)"
   ```
3. **Git**
4. **Unity** (for game development and builds)

## 🛠️ Setup Instructions

### 1. Install Dependencies

```bash
# Install frontend dependencies
cd bloomchain-landing
npm install
```

### 2. Prepare Unity Game

```bash
# Copy your Unity WebGL build to the public directory
cp -r your-unity-build/* bloomchain-landing/public/game/
```

### 3. Start Local ICP Replica

```bash
# In the root directory
dfx start --clean --background
```

### 4. Deploy Canisters

```bash
# Use the deployment script for easier setup
./deploy-local.sh

# Or deploy manually
dfx deploy
```

### 5. Set Up Environment

```bash
# Load local environment variables
source setup-env.sh local
```

## 🧪 Testing the Application

### 1. Access the Frontend
Open the frontend canister URL in your browser.

### 2. Test Internet Identity
1. Click "Login with Internet Identity"
2. Create a new identity or use existing one
3. Complete the authentication flow
4. You should see "✓ Connected" in the navigation

### 3. Test Game Access
1. **Before Login**: Game section shows "Game Locked" with login button
2. **After Login**: Game section shows Unity game iframe
3. **Game Controls**: Fullscreen and save progress buttons available

### 4. Test Profile System
1. Click "Profile" in navigation after login
2. View your principal ID and game stats
3. Use logout button to return to landing page

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

# Deploy to mainnet
./deploy-mainnet.sh
```

## 🎮 Game Integration Details

### **Unity Game Setup**
- **Build Target**: WebGL
- **Output Directory**: `bloomchain-landing/public/game/`
- **File Structure**: Must include `index.html` and all game assets
- **Authentication**: Game only loads for authenticated users

### **Game Access Control**
- **Unauthenticated**: See game preview with login prompt
- **Authenticated**: Full game access with iframe embedding
- **Profile Integration**: User progress and statistics tracking

## 🔒 Security Features

- **🔐 Authentication Required**: Game access protected by Internet Identity
- **🚫 Anonymous Rejection**: Backend rejects anonymous users
- **✅ Input Validation**: Message length and content validation
- **🔑 Principal-based Authorization**: User identification via ICP principals
- **🛡️ Secure Communication**: All backend calls are authenticated

## 🚀 Deployment

### **Local Development**
```bash
./deploy-local.sh
```

### **Mainnet Production**
```bash
# Set your identity
export DFX_IDENTITY=your_identity_name

# Deploy to mainnet
./deploy-mainnet.sh
```

### **Environment Management**
```bash
# Load local environment
source setup-env.sh local

# Load mainnet environment
source setup-env.sh mainnet
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

- **AuthContext**: Manages Internet Identity authentication state
- **AuthButton**: Handles II login/logout
- **ProfilePage**: User profile display and management
- **GameSection**: Unity game integration with auth protection
- **Navigation**: Shows connection status and navigation
- **Newsletter**: Integrated with backend for message submission

## 🐛 Troubleshooting

### Common Issues

1. **Game not loading**: Ensure Unity build is in `bloomchain-landing/public/game/`
2. **Authentication failures**: Check Internet Identity canister ID
3. **Build errors**: Ensure all dependencies are installed
4. **Deployment issues**: Check DFX identity and network configuration

### Getting Help

- Check the [ICP Documentation](https://internetcomputer.org/docs)
- Visit the [Developer Forum](https://forum.dfinity.org/)
- Join the [Developer Discord](https://discord.gg/cA7y6ezyE2)

## 🗺️ Roadmap

### **Q1 2024** ✅
- [x] Basic ICP dApp structure
- [x] Internet Identity integration
- [x] Unity game integration
- [x] Authentication system
- [x] Local deployment

### **Q2 2024** 🚧
- [ ] Game progress tracking
- [ ] Player statistics
- [ ] Basic multiplayer features
- [ ] Mainnet deployment

### **Q3 2024** 📋
- [ ] NFT integration
- [ ] Token economics
- [ ] Marketplace
- [ ] Mobile app development

### **Q4 2024** 📋
- [ ] Advanced multiplayer
- [ ] Cross-chain features
- [ ] Community features
- [ ] Performance optimization

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### **Areas for Contribution**
- Game mechanics and balance
- UI/UX improvements
- Smart contract development
- Testing and documentation
- Performance optimization

---

**Built with ❤️ on the Internet Computer**

*BloomChain - Where Web3 Meets Gardening* 🌱🎮 