function generateNews( p_news ) {
    return `<div class="post-preview">
                <a href="/news/news_1">
                    <h2 class="post-title">${ p_news.title }</h2>
                    <h3 class="post-subtitle" id="subtitle">${ p_news.subtitle }</h3>
                </a>
                <p class="post-meta">
                    Posted by
                    <a href="/">Voksenopplæring</a>
                    on ${ p_news.posted_at}
                </p>
            </div>
            <hr class="my-4" />`
}


function printNews( news )
{
    // posts.reverse();

    let html = ``;
    news.forEach( post => {
        html += generateNews( post );
    });
  return html;
}



module.exports = {
  printNews
}