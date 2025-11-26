// DOM이 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
    
    // Swiper 초기화 - AI 카드
    const aiSwiper = new Swiper('.ai-swiper', {
        slidesPerView: 2.2,
        spaceBetween: 12,
        freeMode: true,
        grabCursor: true
    });

    // Swiper 초기화 - 카드 슬라이더들
    const cardSwipers = document.querySelectorAll('.card-swiper');
    cardSwipers.forEach(swiperEl => {
        new Swiper(swiperEl, {
            slidesPerView: 2.2,
            spaceBetween: 12,
            freeMode: true,
            grabCursor: true
        });
    });

    // Swiper 초기화 - 포토 슬라이더
    const photoSwiper = new Swiper('.photo-swiper', {
        slidesPerView: 3,
        spaceBetween: 12,
        freeMode: true,
        grabCursor: true
    });

    // 하단 네비게이션 탭 전환
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            // 모든 탭에서 active 클래스 제거
            navItems.forEach(nav => nav.classList.remove('active'));
            
            // 클릭된 탭에 active 클래스 추가
            this.classList.add('active');
            
            // 탭 데이터 가져오기
            const tabName = this.getAttribute('data-tab');
            console.log('Tab switched to:', tabName);
            
            // 여기에 탭별 콘텐츠 전환 로직 추가 가능
        });
    });

    // 검색 기능
    const searchInput = document.querySelector('.search-bar input');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const searchTerm = this.value.trim();
                if (searchTerm) {
                    console.log('검색:', searchTerm);
                    // 실제 검색 로직 구현 가능
                    alert(`"${searchTerm}" 검색 중...`);
                }
            }
        });
    }

    // 지도에서 업체 찾기 버튼
    const mapButton = document.querySelector('.map-button');
    if (mapButton) {
        mapButton.addEventListener('click', function() {
            console.log('지도 열기');
            alert('지도에서 업체 찾기 기능');
        });
    }

    // AI 질문 버튼
    const aiQuestionBtn = document.querySelector('.ai-question-btn');
    if (aiQuestionBtn) {
        aiQuestionBtn.addEventListener('click', function() {
            console.log('AI 질문하기');
            alert('AI에게 질문하기');
        });
    }

    // 카카오톡 상담 버튼
    const kakaoButton = document.querySelector('.kakao-button');
    if (kakaoButton) {
        kakaoButton.addEventListener('click', function() {
            console.log('카카오톡 상담 열기');
            alert('카카오톡 채팅 상담을 시작합니다!');
        });
    }

    // SNS 버튼들
    const snsButtons = document.querySelectorAll('.sns-icon-btn');
    snsButtons.forEach((btn, index) => {
        btn.addEventListener('click', function() {
            const snsNames = ['블로그', 'Threads', 'YouTube', 'Instagram'];
            const snsName = snsNames[index] || 'SNS';
            console.log(`${snsName} 열기`);
            alert(`${snsName} 페이지로 이동합니다.`);
        });
    });

    // 더보기 링크들
    const moreLinks = document.querySelectorAll('.section-more');
    moreLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionTitle = this.previousElementSibling.textContent;
            console.log('더보기 클릭:', sectionTitle);
            alert(`${sectionTitle} 더보기`);
        });
    });

    // 카드 클릭 이벤트
    const cards = document.querySelectorAll('.slider-card, .ai-card, .photo-card');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            const title = this.querySelector('h3')?.textContent || 
                         this.querySelector('.slider-card-title')?.textContent ||
                         this.querySelector('span')?.textContent || '카드';
            console.log('카드 클릭:', title);
            
            // 부드러운 클릭 피드백
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 100);
        });
    });

    // 설정 버튼
    const settingsBtn = document.querySelector('.header-settings');
    if (settingsBtn) {
        settingsBtn.addEventListener('click', function() {
            console.log('설정 열기');
            alert('설정 화면');
        });
    }

    // 스크롤 이벤트 - 헤더 그림자 효과
    let lastScroll = 0;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 0) {
            header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    });

    // PWA 기능 - 홈 화면에 추가 안내
    let deferredPrompt;
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        console.log('PWA 설치 가능');
    });

    // 초기 로딩 애니메이션
    const sections = document.querySelectorAll('.section');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        sectionObserver.observe(section);
    });

    console.log('CEO members 웹앱 로드 완료! 🎉');
});

// 페이지 로드 시 스크롤 위치 복원 방지
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}
