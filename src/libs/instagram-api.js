/* eslint-disable quotes */

const PANDINOID = '4116114819';

const handleResponse = response => {
  const purePosts = response.data.user.edge_owner_to_timeline_media.edges;

  const topComments = [];

  const handlePosts = purePosts.map(edge => {
    const { node } = edge;

    const comments = node.edge_media_to_comment.edges;

    if (comments.length > 0) {
      const commentsFiltered = comments.filter(
        nodeCommentItem => nodeCommentItem.node.owner.id !== PANDINOID
      );

      if (commentsFiltered.length > 0) {
        const nodeComment = commentsFiltered[commentsFiltered.length - 1].node;

        const constHandleComment = {
          comment: nodeComment.text,
          autor: nodeComment.owner.username,
          avatar: nodeComment.owner.profile_pic_url
        };

        topComments.push(constHandleComment);
      }
    }

    return {
      imageUrl: node.display_url,
      videoUrl: node.is_video && node.video_url,
      isVideo: node.is_video
    };
  });

  return {
    posts: handlePosts,
    topComments
  };
};

const IntagramApi = {
  getInstgramPosts: () => {
    const url = `https://www.instagram.com/graphql/query/?query_hash=eddbde960fed6bde675388aac39a3657&variables={"id":"4116114819","first":24}`;

    return new Promise((resolve, reject) => {
      fetch(url)
        .then(res => res.json())
        .then(response => {
          resolve(handleResponse(response));
        })
        .catch(e => reject(e));
    });
  }
};

export default IntagramApi;
