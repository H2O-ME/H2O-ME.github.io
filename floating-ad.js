document.addEventListener('DOMContentLoaded', function() {
    const floatingAd = document.querySelector('.floating-ad');
    
    // 添加自动隐藏功能
    setTimeout(() => {
        floatingAd.style.opacity = '0';
        floatingAd.style.transition = 'opacity 0.5s ease-out';
        setTimeout(() => {
            floatingAd.style.display = 'none';
        }, 500);
    }, 4000); // 4秒后自动隐藏

    // 添加鼠标悬停时停止自动隐藏的功能
    floatingAd.addEventListener('mouseenter', function() {
        clearTimeout(this.hideTimer);
    });

    floatingAd.addEventListener('mouseleave', function() {
        this.hideTimer = setTimeout(() => {
            this.style.opacity = '0';
            this.style.transition = 'opacity 0.5s ease-out';
            setTimeout(() => {
                this.style.display = 'none';
            }, 500);
        }, 4000);
    });
});
