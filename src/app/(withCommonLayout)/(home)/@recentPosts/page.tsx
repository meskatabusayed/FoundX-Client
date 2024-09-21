import { Button } from "@nextui-org/button";
import Link from "next/link";

import Container from "@/src/components/ui/Container";
import Card from "@/src/components/ui/Card";
import getRecentPost from "@/src/services/RecentPost";



export default async function RecentPosts() {
  
  const {data : posts} =await  getRecentPost();

  
  return (
    <Container>
      <div className="section-title my-8">
        <h2 className="mb-2 text-center text-2xl">Recently Found Items para</h2>
        <p className="text-center">
          A list of items that have been recently found and reported.
        </p>
      </div>
      <div className="my-8 grid justify-center gap-10 sm:grid-cols-1 md:grid-cols-4">
        
        {
          posts?.map((post) => (
            <Card key={post} post={post}/>
          ))
        }
      </div>
      <div className="flex justify-center">
        <Button className="rounded-md bg-default-900 text-default" size="md">
          <Link href="/found-items">See All</Link>
        </Button>
      </div>
    </Container>
  );
}
