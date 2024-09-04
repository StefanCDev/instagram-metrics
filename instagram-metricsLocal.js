
// // Node this js file and for the id and the token displayed, data will be retrieved from the corresponding instagram account


// // Define your Instagram account ID and access token
// const accountId = "17841465989170608";
// const accessToken = "IGQWRNWkVaaUFVeFJVLXJiUWhxM0dIa3h6RDRYeGhLYXcxWlh5d3hvRmQzZAkxCTDlaTFhNelZA4LW5MYkJvY0ZAUYnlZAa0syRWNOYzFneHQ0NjdOell1anQyNEc2bDJuSl91U01NVkRsSFg2N1dzVWkxejdqMmowZAzgZD";

// // Function to fetch media details
// const fetchMediaDetails = async () => {
//     const mediaUrl = `https://graph.instagram.com/v17.0/${accountId}/media?fields=id,like_count,comments_count,media_type,media_url&access_token=${accessToken}`;
    
//     try {
//         const response = await fetch(mediaUrl);
//         const data = await response.json();
//         console.log("Media Details:", data);
//     } catch (error) {
//         console.error("Error fetching media details:", error);
//     }
// };

// // Function to fetch follower count
// const fetchFollowerCount = async () => {
//     const followerUrl = `https://graph.instagram.com/v17.0/${accountId}?fields=followers_count&access_token=${accessToken}`;
    
//     try {
//         const response = await fetch(followerUrl);
//         const data = await response.json();
//         console.log("Follower Count:", data);
//     } catch (error) {
//         console.error("Error fetching follower count:", error);
//     }
// };

// // Fetch both media details and follower count
// const fetchInstagramData = async () => {
//     await fetchMediaDetails();
//     await fetchFollowerCount();
// };

// // Call the function to execute the API requests
// fetchInstagramData();
