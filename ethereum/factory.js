import web3 from './web3'
import CampaignFactory from './build/CampaignFactory.json'

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface), 
    '0xC135531f67C0cB71Db7af15fe0260e8112624241'
)

export default instance