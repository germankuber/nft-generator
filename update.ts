import axios from 'axios';
const updateAll = async () => {
  const promises = new Array<Promise<void>>();
  for (let index = 0; index < 50000; index++) {
    
    await update(index);
    await delay(1000);
    console.log(index)
  }
  await Promise.all(promises);
};
function delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}
async function update(index: number) {
  try {
    const response = await axios.get(
      `https://testnets-api.opensea.io/api/v1/asset/0x01b643017C72599146F01F89e6621A05fde66e03/${index}/?force_update=true`,
    );
  } catch (error) {
    console.log(error)
  }
}

updateAll()
  .then((e) => console.log(e))
  .catch((e) => console.log(e));
