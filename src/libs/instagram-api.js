/* eslint-disable quotes */

const IntagramApi = {
  getInstgramPosts: () => {
    const url = `https://www.instagram.com/graphql/query/?query_hash=eddbde960fed6bde675388aac39a3657&variables={"id":"4116114819","first":20}`;

    return new Promise((resolve, reject) => {
      fetch(url)
        .then(res => res.json())
        .then(response => {
          resolve(response);
        })
        .catch(e => reject(e));
    });
  }
};

export default IntagramApi;
