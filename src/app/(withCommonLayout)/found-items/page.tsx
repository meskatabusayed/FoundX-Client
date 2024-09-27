import Container from "@/src/components/ui/Container";
import Post from "@/src/components/ui/Post";
import { AxiosInstance } from "@/src/lib/AxiosInstance";

import { IPost } from "@/src/types";

export default async function FoundItems() {
  const { data } = await AxiosInstance.get(`/items`);

  return (
    <Container>
      <div className="mx-auto my-3 max-w-[720px]">
        {data?.data?.map((post: IPost) => <Post key={post?._id} post={post} />)}
      </div>
    </Container>
  );
}
