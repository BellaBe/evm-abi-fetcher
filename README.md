# EVM ABI Fetcher

EVM ABI Fetcher is a TypeScript tool designed to automate the retrieval of Application Binary Interfaces (ABIs) for smart contracts, streamlining development workflows for Ethereum and EVM-compatible blockchain projects.

## Introduction

Smart contract interactions require ABIs, and manual management of these can be cumbersome. EVM ABI Fetcher simplifies this process through automation, enhancing developer productivity and minimizing errors.

## Getting Started

### Prerequisites

- Node.js and npm installed.
- Basic understanding of TypeScript and Node.js.

### Installation

To get started with EVM ABI Fetcher, clone the repository and install its dependencies:

```bash
git clone https://github.com/BellaBe/evm-abi-fetcher.git
cd evm-abi-fetcher
npm install
```

### Configuration

Configure your project by creating a .env file based on .env.example, filling in your API keys

### Usage

Fetch a smart contract's ABI with the following command:

```bash
ts-node src/index.ts
```

### Features

Automates ABI retrieval from blockchain explorers like BscScan.
Configurable for various EVM-compatible blockchains.
Leveraging TypeScript for enhanced type safety and easier debugging.

### Contributing

Your contributions are welcome! Please fork the repository, make your changes, and submit a pull request.
