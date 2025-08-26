#!/bin/bash

echo "🚀 Deploying BloomChain to local network..."

# Build the frontend
echo "📦 Building frontend..."
cd bloomchain-landing
npm run build
cd ..

# Deploy to local network
echo "🔧 Deploying canisters to local network..."
dfx deploy --network local

echo "✅ Local deployment complete!"
echo "🌐 Frontend: http://localhost:4943/?canisterId=$(dfx canister id bloomchain_frontend --network local)"
echo "🔧 Backend: $(dfx canister id bloomchain_backend --network local)"
