# Instagram Metrics

This project is a Node.js application that fetches Instagram metrics, including follower count and media data, from the Instagram Graph API.

## Features

1. **Fetch Followers Count**: Retrieves the total number of followers for a specified Instagram user.
2. **Fetch Media Data**: Retrieves media data for a specified Instagram user, including `id`, `like_count`, `comments_count`, and `media_type`, but excludes `media_url`.

## Requirements

- Node.js (version 14 or above)
- Access to the Instagram Graph API

## Setup

1. **Clone the Repository**

   
   git clone https://github.com/yourusername/your-repository.git
   cd your-repository
Install Dependencies

npm install

Configuration

Environment Variables: Create a .env file in the root directory of the project with the following content:

env

ACCESS_TOKEN=your-access-token
USER_ID=your-user-id
Replace your-access-token and your-user-id with your actual Instagram Graph API access token and user ID.

Run the Application


node instagram-metrics.js
API Rate Limits
The Instagram Graph API rate limit for access tokens is 200 requests per hour.
Tokens expire after 90 days. Make sure to regenerate and update the token periodically to maintain access.
