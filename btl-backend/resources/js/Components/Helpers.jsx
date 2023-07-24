export const isLikedByUser = (currentUserId, postLikes) =>
{
    return (
        postLikes.length &&
        postLikes.filter((postLike)=> parseInt(postLike.user_id) === parseInt(currentUserId)).length
    );
}
export const isFollowedByUser = (currentUserId, users) =>
{
    return (
        users.length &&
        users.filter((user)=> parseInt(user.id) === parseInt(currentUserId)).length
    );
}
