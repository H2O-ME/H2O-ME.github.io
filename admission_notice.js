$(document).ready(function() {
    // Set initial state
    const nameOverlay = $('#nameOverlay');
    const noticeContainer = $('.notice-container');
    const downloadBtn = $('#downloadBtn');
    
    nameOverlay.addClass('hidden');
    noticeContainer.removeClass('visible');
    downloadBtn.prop('disabled', true);

    // Function to enable/disable download button
    function updateDownloadButtonState(enabled) {
        downloadBtn.prop('disabled', !enabled);
    }

    // Function to capture and download the notice
    function downloadNotice() {
        const noticePreview = $('.notice-preview')[0];
        const studentName = $('#studentName').val().trim();
        
        // Use html2canvas to capture the notice
        html2canvas(noticePreview, {
            backgroundColor: null,
            scale: 2, // Higher scale for better quality
            useCORS: true,
            logging: false
        }).then(canvas => {
            // Create download link
            const link = document.createElement('a');
            link.download = `录取通知书_${studentName || '学生'}.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
        }).catch(err => {
            console.error('Error generating image:', err);
            alert('生成图片时出错，请重试');
        });
    }

    // Handle download button click
    downloadBtn.on('click', function() {
        if (!$(this).prop('disabled')) {
            downloadNotice();
        }
    });

    // Handle generate button click
    $('#generateBtn').click(function() {
        const studentName = $('#studentName').val().trim();
        
        if (!studentName) {
            alert('请输入您的姓名！');
            return;
        }
        
        // Enable download button when generating notice
        updateDownloadButtonState(true);

        // Update name overlay
        nameOverlay.text(studentName);
        nameOverlay.removeClass('hidden');

        // Show notice container with animation
        noticeContainer.addClass('visible');

        // Position the name overlay based on the image dimensions
        const noticeImage = $('#noticeImage');
        const imageWidth = noticeImage.width();
        const imageHeight = noticeImage.height();

        // Position percentages (adjust these values to position the name correctly on the image)
        // These are percentages of the image dimensions (0.0 to 1.0)
        const nameXPercent = 0.57;  // 57% from left
        const nameYPercent = 0.37;  // 37% from top

        // Calculate position in pixels
        const nameX = imageWidth * nameXPercent;
        const nameY = imageHeight * nameYPercent;

        // Apply the position
        nameOverlay.css({
            left: nameX + 'px',
            top: nameY + 'px',
            fontSize: '18px',  
            fontWeight: 'bold',
            color: '#333',
            position: 'absolute',
            transform: 'translate(-50%, -50%)' // Centers the name at the position
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

            // Use the same percentage positions as in the click handler
            const nameXPercent = 0.57;
            const nameYPercent = 0.37;
            
            const nameX = imageWidth * nameXPercent;
            const nameY = imageHeight * nameYPercent;

            nameOverlay.css({
                left: nameX + 'px',
                top: nameY + 'px',
                transform: 'translate(-50%, -50%)'
            });
        }
    });
});
