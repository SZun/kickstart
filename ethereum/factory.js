import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  "0xD96a63CaAEC9a3742acA258F7165F210ac4DC80b"
);

export default instance;
