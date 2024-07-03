document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.item');
    
    items.forEach(item => {
        const question = item.querySelector('.question');
        question.addEventListener('click', () => {
            const answer = item.querySelector('.answer');
            const icon = question.querySelector('.icon');

            // Diğer tüm cevapları kapat ve ikonlarını sıfırla
            items.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.querySelector('.answer').style.display = 'none';
                    const otherIcon = otherItem.querySelector('.icon');
                    if (otherIcon) {
                        otherIcon.classList.remove('icon-active');
                    }
                }
            });

            // Mevcut cevabı değiştir
            const isAnswerVisible = answer.style.display === 'block';
            answer.style.display = isAnswerVisible ? 'none' : 'block';
            
            // Mevcut ikonu değiştir
            if (icon) {
                icon.classList.toggle('icon-active', !isAnswerVisible);
            }
        });
    });
});
