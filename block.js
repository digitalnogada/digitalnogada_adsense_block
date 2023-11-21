// 클릭 횟수를 로컬 스토리지에서 가져오기
let clickCount = parseInt(localStorage.getItem('adClickCount')) || 0;

// 클릭 횟수 증가
clickCount++;

// 클릭 횟수를 로컬 스토리지에 저장
localStorage.setItem('adClickCount', clickCount);

// 클릭 횟수가 5회 이상인 경우
if (clickCount >= 5) {
    // 차단 이미지 표시
    const blockImage = new Image();
    blockImage.src = 'https://raw.githubusercontent.com/digitalnogada/digitalnogada_adsense_block/main/warning_115257.png'; // 차단 이미지 URL을 설정하세요
    document.body.appendChild(blockImage);

    // 경고창 표시
    alert('애드센스 광고 클릭이 5회 이상 감지되었습니다. 접근을 차단하였으며, IP는 서버 로그에 기록되었습니다. 무효클릭 공격시 민형사상의 책임을 묻겠습니다.');
    
    // 로그를 콘솔에 기록
    console.log('사용자 차단: 애드센스 광고 클릭이 5회 이상 감지됨');
}
