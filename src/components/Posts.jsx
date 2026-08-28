import articles from "../Data/Articles";
import PostsCards from "./PostsCards";

let latestArticles = [...articles]; // je copie mon tableau manga

// je les affiche par date de sortie
// let articlesReleasedByDates = articles.sort((a, b) =>
//     a.name.localeCompare(b.name)
// )

function Posts() {
  return (

          <section className="pb-15 bg-white overflow-hidden pt-25">
          {/* Div container */}
            <div className="max-w-[960px] z-10 relative px-3.75  mx-auto flex flex-wrap items-center justify-center">
              <div className="mb-10 ">
                <h2 className="text-black text-4xl font-bold mb-10 text-center">Les derniers articles</h2>
                <p className="text-black text-center">Consultez les dernières actualités et articles de notre blog</p>
              </div>
              
               {/* Posts "*/}
                <div className="w-full min-w-0">
                  <ul className="max-w-7xl mx-auto w-full grid md:grid-cols-3 sm:grid-cols-3 gap-6 cursor-pointer">
                      {latestArticles.map((article) => (
                          <li key={article.id}> {}
                            <PostsCards img={article.img} title={article.title} author={article.author} date={article.date} tags={article.tags } />
                          </li>
                      ) )}
                  </ul>
                </div>

            </div>

      </section>
      

    
  );
}

export default Posts;
