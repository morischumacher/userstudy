// Vercel Serverless Function to expose configuration variables to the client frontend.
export default function handler(req, res) {
  res.status(200).json({
    videoUrl: process.env.TUTORIAL_VIDEO_URL || "tutorial.mp4",
    saveEndpoint: process.env.RESULTS_SAVE_ENDPOINT || "https://script.google.com/macros/s/AKfycbx88GVD3UqyDOSz978SMnib57sSR_sflRrjdImRVnAY7RHUrkq4M1JlMwAfPjxf8AsD/exec"
  });
}
