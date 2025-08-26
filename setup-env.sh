#!/bin/bash

echo "🔧 Setting up environment for BloomChain..."

# Check which network to use
if [ "$1" = "mainnet" ]; then
    echo "📡 Setting up mainnet environment..."
    if [ -f "env.mainnet" ]; then
        export $(cat env.mainnet | xargs)
        echo "✅ Mainnet environment loaded"
        echo "🌐 Network: $NETWORK"
        echo "🔧 Backend: $CANISTER_ID_BLOOMCHAIN_BACKEND"
        echo "🌐 Frontend: $CANISTER_ID_BLOOMCHAIN_FRONTEND"
    else
        echo "❌ env.mainnet file not found. Run deploy-mainnet.sh first."
        exit 1
    fi
else
    echo "🏠 Setting up local environment..."
    if [ -f "env.local" ]; then
        export $(cat env.local | xargs)
        echo "✅ Local environment loaded"
        echo "🌐 Network: $NETWORK"
        echo "🔧 Backend: $CANISTER_ID_BLOOMCHAIN_BACKEND"
        echo "🌐 Frontend: $CANISTER_ID_BLOOMCHAIN_FRONTEND"
    else
        echo "❌ env.local file not found. Run deploy-local.sh first."
        exit 1
    fi
fi

echo ""
echo "💡 To use this environment in your current shell, run:"
echo "   source setup-env.sh [local|mainnet]"
