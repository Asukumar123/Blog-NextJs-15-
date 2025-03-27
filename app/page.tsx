import SearchForm from '../components/SearchForm';
import StartupCard from '../components/StartupCard';
import client from '@/sanity/lib/client';
import { STARTUPS_QUERY } from '@/sanity/lib/queries';

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  // const post = [
  //   {
  //     _createdAt: new Date(),
  //     views: 100,
  //     author: { _id: 1 },
  //     _id: 1,
  //     description: 'This is a description',
  //     image:
  //       'https://www.google.com/url?sa=i&url=https%3A%2F%2Fthetokusource.com%2F2023%2F08%2F09%2Fkaiju-no-8-anime-gets-release-date%2F&psig=AOvVaw0BXLuPgQkFSeDIf_T6N1K4&ust=1742457024961000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNDN57DUlYwDFQAAAAAdAAAAABAE',
  //     category: 'Tech',
  //     title: 'This is a title',
  //   },
  // ];

  const post = await client.fetch(STARTUPS_QUERY);

  console.log(JSON.stringify(post, null, 2));
  return (
    <>
      <section className="pink_container pattern">
        <h1 className="heading">
          Pitch your startup
          <br />
          connect With Entrepreneurs
        </h1>
        <p className="sub-heading ">
          submit Ideas,vote on Pitches ,and Get Noticed in Virtual Hackathon
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">{query ? `search results for ${query}` : 'All startups'}</p>

        <ul className="mt-7 card_grid">
          {post.length > 0 ? (
            post.map((post) => (
              <li key={post._id}>
                <StartupCard post={post} />
              </li>
            ))
          ) : (
            <li>
              <p className="no-results">No results found</p>
            </li>
          )}
        </ul>
      </section>
    </>
  );
}
