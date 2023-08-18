document.addEventListener('DOMContentLoaded', () => {
  const urlInput = document.getElementById('urlInput');
  const loadThumbnailsButton = document.getElementById('loadThumbnails');
  const thumbnailList = document.getElementById('thumbnailList');

  loadThumbnailsButton.addEventListener('click', () => {
    const videoId = extractVideoId(urlInput.value);
    if (videoId) {
      thumbnailList.innerHTML = '';
      const thumbnailFormats = ['default', 'hqdefault', 'mqdefault', 'sddefault', 'maxresdefault'];

      thumbnailFormats.forEach(format => {
        const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/${format}.jpg`;

        const thumbnailContainer = document.createElement('div');
        thumbnailContainer.className = 'thumbnail-container';

        const thumbnailImage = document.createElement('img');
        thumbnailImage.className = 'thumbnail';
        thumbnailImage.src = thumbnailUrl;

        const downloadButton = document.createElement('a');
        downloadButton.className = 'download-button';
        downloadButton.textContent = 'Download';
        downloadButton.href = thumbnailUrl;
        downloadButton.download = `thumbnail_${format}.jpg`;

        thumbnailContainer.appendChild(thumbnailImage);
        thumbnailContainer.appendChild(downloadButton);
        thumbnailList.appendChild(thumbnailContainer);
      });
    }
  });

  function extractVideoId(url) {
    const regex = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)/i;
    const match = url.match(regex);
    return match ? match[1] : null;
  }
});
