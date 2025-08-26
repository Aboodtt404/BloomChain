# BloomChain Deployment Guide

## Prerequisites

1. **DFX Identity**: Make sure you have a DFX identity with ICP tokens for mainnet
2. **Internet Connection**: Stable connection for mainnet deployment
3. **Unity Game**: Ensure your Unity game is built and copied to `bloomchain-landing/public/game/`

## Local Development Deployment

```bash
# Deploy to local network
./deploy-local.sh

# Set up local environment
source setup-env.sh local
```

## Mainnet Production Deployment

### 1. Set Your Identity
```bash
export DFX_IDENTITY=your_identity_name
dfx identity use your_identity_name
```

### 2. Deploy to Mainnet
```bash
./deploy-mainnet.sh
```

### 3. Set Up Mainnet Environment
```bash
source setup-env.sh mainnet
```

## Environment Files

- `env.local` - Local development configuration
- `env.mainnet` - Mainnet production configuration

## Canister IDs

After deployment, your canister IDs will be:
- **Frontend**: Accessible at `https://[FRONTEND_ID].ic0.app`
- **Backend**: Used by frontend for game logic
- **Internet Identity**: Standard ICP identity service

## Troubleshooting

### Common Issues

1. **Build Failure**: Ensure Unity game files are in `bloomchain-landing/public/game/`
2. **Deployment Failure**: Check your DFX identity has sufficient ICP tokens
3. **Environment Issues**: Run `source setup-env.sh [local|mainnet]` to load variables

### Useful Commands

```bash
# Check canister status
dfx canister status bloomchain_frontend --network mainnet
dfx canister status bloomchain_backend --network mainnet

# View canister logs
dfx canister call bloomchain_backend --network mainnet

# Check your identity balance
dfx ledger balance --network mainnet
```

## Next Steps

After successful deployment:
1. Test your game on mainnet
2. Set up monitoring and analytics
3. Configure custom domain (optional)
4. Set up CI/CD for future updates
