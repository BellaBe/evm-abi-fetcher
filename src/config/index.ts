import dotenv from 'dotenv';
import { Config } from '../types/config';

dotenv.config();

export const loadConfig = (): Config => {
    const bscScanApiKey = process.env.BSCSCAN_API_KEY;
    const bscScanBaseUrl = process.env.BSCSCAN_BASE_URL;
    const predictionContractAddress = process.env.PREDICTION_CONTRACT_ADDRESS;


    if (!bscScanApiKey || !bscScanBaseUrl || !predictionContractAddress) {
        throw new Error('Missing API keys in environment variables');
    }

    return {
        bscScanApiKey,
        bscScanBaseUrl,
        predictionContractAddress,
    };
};