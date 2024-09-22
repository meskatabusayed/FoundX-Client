import envConfig from "@/src/config/envConfig";


const getRecentPost = async () => {
  const res = await fetch(
    `${envConfig.baseApi}/items?sortBy=-createdAt&limit=9`
  );

  return res.json();
};

export default getRecentPost;
