require('dotenv').config(); // Load environment variables from .env

// Fetch Followers Count
async function fetchFollowersCount() {
  const accessToken = process.env.IG_ACCESS_TOKEN;
  const userId = process.env.IG_USER_ID;
  const url = `https://graph.instagram.com/v17.0/${userId}?fields=followers_count&access_token=${accessToken}`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log('Followers Count:', data.followers_count);
  } catch (error) {
    console.error('Error fetching followers count:', error);
  }
}

// Fetch Media Data without media_url and calculate total like_count and comments_count
async function fetchMediaData() {
  const accessToken = process.env.IG_ACCESS_TOKEN;
  const userId = process.env.IG_USER_ID;
  const url = `https://graph.instagram.com/v17.0/${userId}/media?fields=id,like_count,comments_count,media_type&access_token=${accessToken}`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    
    let totalLikes = 0;
    let totalComments = 0;
    data.data.forEach(item => {
      totalLikes += item.like_count || 0;
      totalComments += item.comments_count || 0;
    });

    console.log('Media Data (without media_url):', data.data);
    console.log('Total Likes:', totalLikes);
    console.log('Total Comments:', totalComments);
  } catch (error) {
    console.error('Error fetching media data:', error);
  }
}

// Call the functions
fetchFollowersCount();
fetchMediaData();
