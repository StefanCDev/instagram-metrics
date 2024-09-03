
# Instagram Metrics Fetcher

This Netlify function interacts with the Instagram Graph API to retrieve various metrics for an Instagram user, such as the number of followers and details about media posts, including likes, comments, and views.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Error Handling](#error-handling)
- [Troubleshooting](#troubleshooting)
- [License](#license)

## Installation

To use this project, clone the repository and install the necessary dependencies.

```bash
git clone https://github.com/yourusername/instagram-metrics.git
cd instagram-metrics
npm install
Ensure you have Node.js installed.

Configuration
You need to set the userId and accessToken in the Netlify function file (instagram-metrics.js) to your Instagram User ID and Access Token:

javascript
Copy code
const userId = "YOUR_USER_ID"; // Replace with your actual Instagram User ID
const accessToken = "YOUR_ACCESS_TOKEN"; // Replace with your actual Access Token
These values should be obtained from the Instagram Graph API. Ensure the access token has the necessary permissions (instagram_basic, instagram_manage_insights) to retrieve the required data.

Usage
You can run the function locally using Netlify's CLI:


Run command " netlify dev"
This will start a local development server.

To test the function, you can use curl or any HTTP client like Postman:

bash
Copy code
curl -X POST http://localhost:8888/.netlify/functions/instagram-metrics -d '{"accessToken": "YOUR_ACCESS_TOKEN", "userId": "YOUR_USER_ID"}' -H "Content-Type: application/json"
Replace YOUR_ACCESS_TOKEN and YOUR_USER_ID with your actual Instagram access token and user ID.

Endpoints
POST /
Fetch Instagram user metrics.

Request Body
accessToken: Your Instagram API access token.
userId: Your Instagram User ID.
Example request body:

json
Copy code
{
  "accessToken": "YOUR_ACCESS_TOKEN",
  "userId": "YOUR_USER_ID"
}
Response
Returns a JSON object containing user metrics:

json
Copy code
{
  "user": {
    "followers_count": 1234
  },
  "media": {
    "like_count": 100,
    "comments_count": 20,
    "video_views": 500
  }
}
If no media is found:

json
Copy code
{
  "user": {
    "followers_count": 1234
  },
  "media": "No media found for this user."
}
Error Handling
If an error occurs during the API calls, the function will return a 500 status code with an error message:

json
Copy code
{
  "error": "Error message here"
}
Common errors include invalid access tokens, missing permissions, or network issues.

Troubleshooting
Empty Media Array: If the media array is empty, ensure that your Instagram account has posted media and that your access token has the necessary permissions.
Invalid Token: If the token is invalid, re-authenticate your Instagram app to obtain a valid access token.
Permission Issues: Ensure your access token has instagram_basic and instagram_manage_insights scopes.