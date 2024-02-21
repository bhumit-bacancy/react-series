import React, { useEffect, useState } from "react";
import appwriteService from "../../appwrite/config";
import { Container, PostCard } from "../index";
import { useSelector } from "react-redux";

function Home() {
  const authStatus = useSelector((state) => state.status);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // appwriteService.getPosts().then((posts) => {
    //   if (posts) {
    //     setPosts(posts.documents);
    //   }
    // });
  }, [authStatus]);

  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:text-gray-500">
                Login to read posts
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard $id={post.$id} title={post.title} featuredImage={post.featuredImage} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
