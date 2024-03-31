#!/bin/bash

# Set your project name
PROJECT_NAME="your-project-name"

# Create project directory and enter it
mkdir $PROJECT_NAME
cd $PROJECT_NAME

# Initialize Node.js project
npm init -y

# Install TypeScript and other required dependencies
npm install --save-dev ts-node typescript @types/node dotenv axios

# Initialize tsconfig.json with default settings
npx tsc --init

# Create src directory and subdirectories
mkdir -p src/config src/blockchain-utils src/types

# Create TypeScript files with initial placeholder content
echo "// Config function for environment variables" > src/config/index.ts
echo "// Function to retrieve smart contract ABIs" > src/blockchain-utils/abi.ts
echo "// Type definitions for ABI-related functions" > src/types/abi.ts
echo "// Type definitions for config-related functions" > src/types/config.ts
echo "// Module entry point, exporting functions" > src/index.ts

# Create .env with specified content
echo "BSCSCAN_API_KEY=your_bscscan_api_key
BSCSCAN_BASE_URL=https://api.bscscan.com/api
PREDICTION_CONTRACT_ADDRESS=0x18B2A687610328590Bc8F2e5fEdDe3b582A49cdA" > .env

# Create .gitignore with specified content
echo "/node_modules
/.env" > .gitignore

echo "Project structure created and dependencies installed successfully."