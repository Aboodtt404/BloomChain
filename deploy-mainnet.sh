#!/bin/bash

echo "🚀 Deploying BloomChain to mainnet..."

# Check if identity is set
if [ -z "$DFX_IDENTITY" ]; then
    echo "❌ Error: DFX_IDENTITY environment variable not set"
    echo "Please set your mainnet identity: export DFX_IDENTITY=your_identity_name"
    exit 1
fi

# Build the frontend
echo "📦 Building frontend..."
cd bloomchain-landing
npm run build
cd ..

# Deploy to mainnet
echo "🔧 Deploying canisters to mainnet..."
dfx deploy --network mainnet

# Get canister IDs and update env file
echo "📝 Updating environment file..."
BACKEND_ID=$(dfx canister id bloomchain_backend --network mainnet)
FRONTEND_ID=$(dfx canister id bloomchain_frontend --network mainnet)

echo "CANISTER_ID_BLOOMCHAIN_BACKEND=$BACKEND_ID" > env.mainnet
echo "CANISTER_ID_BLOOMCHAIN_FRONTEND=$FRONTEND_ID" >> env.mainnet
echo "CANISTER_ID_INTERNET_IDENTITY=rdmx6-jaaaa-aaaaa-aaadq-cai" >> env.mainnet

echo "✅ Mainnet deployment complete!"
echo "🌐 Frontend: https://$FRONTEND_ID.ic0.app"
echo "🔧 Backend: $BACKEND_ID"
echo "📝 Environment updated in env.mainnet"
