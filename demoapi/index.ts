import { AnonymousAuthenticationProvider } from '@microsoft/kiota-abstractions';
import { FetchRequestAdapter } from '@microsoft/kiota-http-fetchlibrary';
import { createDemoclc } from './democlc';
import { Post } from './models/index';

// API requires no authentication, so use the anonymous
// authentication provider
const authProvider = new AnonymousAuthenticationProvider();
// Create request adapter using the fetch-based implementation
const adapter = new FetchRequestAdapter(authProvider);
// Create the API client
const client =createDemoclc(adapter);

async function main(): Promise<void> {
  try {
    // GET /posts
    const allPosts = await client.posts.get();
    console.log(`Retrieved ${allPosts?.length} posts.`);

    // GET /posts/{id}
    const specificPostId = 5;
    const specificPost = await client.posts.byPostId(specificPostId).get();
    console.log(`Retrieved post - ID: ${specificPost?.id}, Title: ${specificPost?.title}, Body: ${specificPost?.body}`);

    // POST /posts
    const newPost: Post = {
      userId: 42,
      title: 'Testing Kiota-generated API client',
      body: 'Hello world!',
    };

    const createdPost = await client.posts.post(newPost);
    console.log(`Created new post with ID: ${createdPost?.id}`);

   
    // DELETE /posts/{id}
    await client.posts.byPostId(specificPostId).delete();
  } catch (err) {
    console.log(err);
  }
}

main();