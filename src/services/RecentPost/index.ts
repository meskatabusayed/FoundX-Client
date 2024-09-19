import envConfig from "@/src/config/envConfig";
import { delay } from "@/src/utils/dely";


const getRecentPost = async () => {

  const res = await fetch(`${envConfig.baseApi}/items?sortBy=-createdAt&limit=9`);
  
  await delay(5000);

  return res.json();
}

export default getRecentPost;