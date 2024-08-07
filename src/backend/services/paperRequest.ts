import search from "arXiv-api-ts";

const papers = await search({
    searchQueryParams: [
        {
            include: [{ name: 'RNN' }, { name: 'Deep learning' }],
            exclude: [{ name: 'LSTM' }],
        },
        {
            include: [{ name: 'GAN' }],
        },
    ],
    start: 0,
    maxResults: 10,
});

console.log(papers);