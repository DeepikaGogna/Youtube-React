const GOOGLE_API_KEY ='AIzaSyDptFnOmLVcIVEucuplOLQOeh0vpX7vQgc'
export const YOUTUBE_VIDEO= 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key='+GOOGLE_API_KEY
export const MOST_POPULAR_VIDEO = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=IN&key='+GOOGLE_API_KEY
export const AUTO_SEARCH ='http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=';
export const YOUTUBE_COMMENTS= "https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=VIDEO_ID&key="+GOOGLE_API_KEY;
export const CHILD_COMMENTS= "https://www.googleapis.com/youtube/v3/comments?part=snippet&parentId=COMMENT_ID&key="+GOOGLE_API_KEY;
export const LIVE_CHAT= "https://www.googleapis.com/youtube/v3/videos?part=liveStreamingDetails&id=VIDEO_ID&key="+GOOGLE_API_KEY;
export const LIVE_MESSAGES = "https://www.googleapis.com/youtube/v3/liveChat/messages?liveChatId=LIVECHAT_ID&part=snippet,authorDetails&key="+GOOGLE_API_KEY