const userId = ""; // Replace with actual user ID
const accessToken = ""; // Replace with actual access token

exports.handler = async (event) => {
    const fetch = (await import('node-fetch')).default;  // Dynamic import for ES module

    try {
        // Fetch user details (followers count)
        const userResponse = await fetch(`https://graph.instagram.com/${userId}?fields=followers_count&access_token=${accessToken}`);
        const userData = await userResponse.json();

        // Fetch media objects to get media IDs
        const mediaListResponse = await fetch(`https://graph.instagram.com/${userId}/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${accessToken}`);
        const mediaListData = await mediaListResponse.json();
        const mediaId = mediaListData.data[0].id; // Example: Use the first media ID

        // Fetch media details (likes, views)
        const mediaResponse = await fetch(`https://graph.instagram.com/${mediaId}?fields=like_count,comments_count,video_views&access_token=${accessToken}`);
        const mediaData = await mediaResponse.json();

        // Return the fetched data
        return {
            statusCode: 200,
            body: JSON.stringify({
                user: {
                    followers_count: userData.followers_count
                },
                media: {
                    like_count: mediaData.like_count,
                    comments_count: mediaData.comments_count,
                    video_views: mediaData.video_views
                }
            })
        };
    } catch (error) {
        // Handle errors
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    }
};