class Header extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback(){

    
    this.innerHTML = `
      
      <header id="header">
        <nav>
          <div id="headerBox">
            <ul>
              <li><a href="./index.html">Logo</a></li>
            </ul>
            <ul>
              <li><a href="./lectures-list.html">수업과정</a></li>
              <li><a href="./about.html">About</a></li>
              <li><a href="./contact.html">연락하기</a></li>
            </ul>
            <ul>
              <li><a href="./signup.html">로그인</a></li>
              <li><a href="./cart.html">장바구니</a></li>
            </ul>
          </div>
        </nav>
      </header>
    `;
    }
  }
  
  customElements.define('header-component', Header);



  class Footer extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback(){

    
    this.innerHTML = `
      
      <footer id="footer">
        <div id="footerBox1">
          <div>
            <h3>About</h3>
            <h6>현재 월 900명 신규수강중입니다.</h6>
            <ul>
              <li>(09:00~20:00) 빠른 상담은 카톡 플러스친구 코딩애플 (링크)</li>
              <li> admin@codingapple.com</li>
              <li>이용약관</li>
              <li>ⓒ Codingapple, 강의 예제, 영상 복제 금지</li>
            </ul>
          </div>

          <div>
            right side
          </div>

        </div>
        <div id="footerBox2">
          © CODINGAPPLE, ALL RIGHTS RESERVED. 슈퍼로켓 에듀케이션 / 서울특별시 강동구 고덕로 19길 30 /대표 : 박해윤 / 사업자등록번호 : 212-26-14752 온라인 교육학원업 / 통신판매업신고번호 : 제 2017-서울강동-0002 호 / 개인정보관리자 : 박종흠 
        </div>
      </footer>
    `;
    }
  }
  
  customElements.define('footer-component', Footer);