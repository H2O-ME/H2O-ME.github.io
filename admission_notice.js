$(document).ready(function() {
    // Set initial state
    const nameOverlay = $('#nameOverlay');
    const noticeContainer = $('.notice-container');
    
    nameOverlay.addClass('hidden');
    noticeContainer.removeClass('visible');

    // Handle generate button click
    $('#generateBtn').click(function() {
        const studentName = $('#studentName').val().trim();
        
        if (!studentName) {
            alert('请输入您的姓名！');
            return;
        }

        // Update name overlay
        nameOverlay.text(studentName);
        nameOverlay.removeClass('hidden');

        // Show notice container with animation
        noticeContainer.addClass('visible');

        // Position the name overlay based on the image dimensions
        const noticeImage = $('#noticeImage');
        const imageWidth = noticeImage.width();
        const imageHeight = noticeImage.height();

        // Adjust these values based on where you want the name to appear
        // These values might need adjustment based on your specific image
        const nameX = imageWidth * 0.57;  // 40% from left (moved left)
        const nameY = imageHeight * 0.37; // 60% from top (moved up)

        nameOverlay.css({
            left: nameX - nameOverlay.width() / 2,
            top: nameY - nameOverlay.height() / 2,
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#333'
        });
    });

    // Handle input changes
    $('#studentName').on('input', function() {
        const studentName = $(this).val().trim();
        if (studentName) {
            $('#generateBtn').prop('disabled', false);
        } else {
            $('#generateBtn').prop('disabled', true);
        }
    });

    // Handle window resize to reposition name
    $(window).resize(function() {
        const nameOverlay = $('#nameOverlay');
        if (!nameOverlay.hasClass('hidden')) {
            const noticeImage = $('#noticeImage');
            const imageWidth = noticeImage.width();
            const imageHeight = noticeImage.height();

            const nameX = imageWidth * 0.5;
            const nameY = imageHeight * 0.7;

            nameOverlay.css({
                left: nameX - nameOverlay.width() / 2,
                top: nameY - nameOverlay.height() / 2
            });
        }
    });
});
