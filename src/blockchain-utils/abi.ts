import axios from 'axios';
import { GetContractABIParams } from '../types/abi';


export const getContractABI = async (params: GetContractABIParams): Promise<string> => {

    const { explorerBaseUrl, explorerApiKey, contractAddress } = params;
    try {
        const response = await axios.get(`${explorerBaseUrl}/api?module=contract&action=getabi&address=${contractAddress}&apikey=${explorerApiKey}`);
        return response.data.result;
    } catch (error) {
        console.error('Error retrieving contract ABI:', error);
        throw error;
    }
};