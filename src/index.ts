import { getContractABI } from "./blockchain-utils/abi";
import { loadConfig } from "./config";

const config = loadConfig();

const main = async () => {
    const abi = await getContractABI({
        explorerBaseUrl: config.bscScanBaseUrl,
        explorerApiKey: config.bscScanApiKey,
        contractAddress: config.predictionContractAddress,
    });
    return abi;
}

main().then((abi) => {
    console.log(abi);
}).catch((error) => {
    console.error(error);
});
