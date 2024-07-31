// script.js
document.getElementById('downloadBtn').addEventListener('click', function() {
    const videoUrl = document.getElementById('videoUrl').value;
    const videoId = getVideoIdFromUrl(videoUrl);

    if (videoId) {
        const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
 displayThumbnail(thumbnailUrl);
        createDownloadLink(thumbnailUrl);
    } else {
        alert('Please enter a valid YouTube Shorts URL.');
    }
});

function getVideoIdFromUrl(url) {
    const regex = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/shorts\/([a-zA-Z0-9_-]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
}

function displayThumbnail(url) {
    const thumbnailContainer = document.getElementById('thumbnailContainer');
    thumbnailContainer.innerHTML = `<img src="${url}" alt="YouTube Thumbnail" class="thumbnail">`;
}

function createDownloadLink(url) {
    const downloadLink = document.getElementById('downloadLink');
   
	    downloadLink.style.display = 'inline-block';
	downloadLink.download = url;
 downloadLink.href = url;

    
}
document.addEventListener('DOMContentLoaded', function() {
    const faqCards = document.querySelectorAll('.faq-card');

    faqCards.forEach(card => {
        const question = card.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            const answer = card.querySelector('.faq-answer');
            const isVisible = answer.style.display === 'block';

            // Hide all answers
            document.querySelectorAll('.faq-answer').forEach(answer => {
                answer.style.display = 'none';
            });

            // Toggle the clicked answer
            if (!isVisible) {
                answer.style.display = 'block';
            }
        });
    });
});
