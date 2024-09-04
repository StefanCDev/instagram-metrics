const fetch = require('node-fetch');

// Define your Instagram account ID and access token
const accountId = "17841465989170608";
const accessToken = "IGQWRNWkVaaUFVeFJVLXJiUWhxM0dIa3h6RDRYeGhLYXcxWlh5d3hvRmQzZAkxCTDlaTFhNelZA4LW5MYkJvY0ZAUYnlZAa0syRWNOYzFneHQ0NjdOell1anQyNEc2bDJuSl91U01NVkRsSFg2N1dzVWkxejdqMmowZAzgZD";

// Function to fetch media details
const fetchMediaDetails = async () => {
    const mediaUrl = `https://graph.instagram.com/v17.0/${accountId}/media?fields=id,like_count,comments_count,media_type,media_url&access_token=${accessToken}`;
    
    try {
        const response = await fetch(mediaUrl);
        return await response.json();
    } catch (error) {
        throw new Error("Error fetching media details: " + error.message);
    }
};

// Function to fetch follower count
const fetchFollowerCount = async () => {
    const followerUrl = `https://graph.instagram.com/v17.0/${accountId}?fields=followers_count&access_token=${accessToken}`;
    
    try {
        const response = await fetch(followerUrl);
        return await response.json();
    } catch (error) {
        throw new Error("Error fetching follower count: " + error.message);
    }
};

// The main function that Netlify will execute
exports.handler = async function(event, context) {
    try {
        const mediaData = await fetchMediaDetails();
        const followersData = await fetchFollowerCount();
        
        return {
            statusCode: 200,
            body: JSON.stringify({ mediaData, followersData }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
};
