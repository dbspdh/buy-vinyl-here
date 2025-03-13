<template>
  <header>
    <!-- 공지사항 -->
    <div class="notice-bar">공지사항</div>

    <!-- 상단바 -->
    <div class="top-bar">
      <div class="logo">BVH</div>
      <input
        type="text"
        class="search-bar"
        placeholder="검색어를 입력하세요."
      />
      <button class="login-btn">로그인</button>
    </div>

    <!-- 네비게이션바 -->
    <nav class="nav-bar">
      <ul class="nav-links">
        <li class="menu-item"><a href="#">BEST</a></li>
        <li class="menu-item"><a href="#">NEW</a></li>
        <li>|</li>
        <li class="menu-item">
          <a href="#">국내</a>
          <ul class="submenu">
            <li><a href="#">발라드</a></li>
            <li><a href="#">댄스</a></li>
            <li><a href="#">랩/힙합</a></li>
            <li><a href="#">R&B/Soul</a></li>
            <li><a href="#">인디음악</a></li>
            <li><a href="#">록/메탈</a></li>
            <li><a href="#">트로트</a></li>
            <li><a href="#">포크/블루스</a></li>
          </ul>
        </li>
        <li class="menu-item">
          <a href="#">해외</a>
          <ul class="submenu">
            <li><a href="#">POP</a></li>
            <li><a href="#">록/메탈</a></li>
            <li><a href="#">일렉트로니카</a></li>
            <li><a href="#">랩/힙합</a></li>
            <li><a href="#">R&B/Soul</a></li>
            <li><a href="#">트로트</a></li>
            <li><a href="#">포크/블루스/컨트리</a></li>
          </ul>
        </li>
        <li class="menu-item">
          <a href="#">기타</a>
          <ul class="submenu">
            <li><a href="#">OST</a></li>
            <li><a href="#">클래식</a></li>
            <li><a href="#">재즈</a></li>
            <li><a href="#">뉴에이지</a></li>
            <li><a href="#">J-POP</a></li>
            <li><a href="#">월드뮤직</a></li>
            <li><a href="#">CCM</a></li>
            <li><a href="#">어린이/태교</a></li>
            <li><a href="#">종교음악</a></li>
            <li><a href="#">국악</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>

  <body>
    <div>
      <router-view></router-view>
    </div>
  </body>

  <footer class="footer">&copy;dbspdh</footer>
</template>

<script></script>

<style lang="scss">

</style>
