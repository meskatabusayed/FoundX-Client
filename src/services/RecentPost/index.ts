import envConfig from "@/src/config/envConfig";


const getRecentPost = async () => {
  const fetchOptions = {
    next : {
      tags : [
        "posts"
      ]
    }
  }

  const res = await fetch(
    `${envConfig.baseApi}/items?sortBy=-createdAt&limit=9`,
    fetchOptions
  );

  return res.json();
};

export default getRecentPost;
