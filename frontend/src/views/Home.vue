<template>
  <div id="home">
    <!-- 메인 배너 -->
    <section class="main-banner">
      <img src="@/assets/img/main-banner.jpg" alt="메인배너" />
    </section>

    <!-- 공지사항 & FAQ -->
    <section class="info-section">
      <div class="info-box">
        <div class="info-link">
          <h3>NOTICE</h3>
          <a href="#"> <i class="fa fa-angle-right"></i> </a>
        </div>
        <ul>
          <li>
            <a href="#">Li Europan lingues es membres del sam familie. </a>
          </li>
          <li><a href="#">Lor separat existentie es un myth.</a></li>
          <li>
            <a href="#"
              >Por scientie, musica, sport etc, litot Europa usa li sam
              vocabular.</a
            >
          </li>
          <li>
            <a href="#"
              >Li lingues differe solmen in li grammatica, li pronunciation e li
              plu commun vocabules.</a
            >
          </li>
          <li>
            <a href="#"
              >Omnicos directe al desirabilite de un nov lingua franca:</a
            >
          </li>
        </ul>
      </div>
      <div class="info-box">
        <div class="info-link">
          <h3>FAQ</h3>
          <a href="#"> <i class="fa fa-angle-right"></i> </a>
        </div>
        <ul>
          <li><a href="#">Lorem ipsum dolor sit amet.</a></li>
          <li><a href="#">Consectetur adipiscing elit.</a></li>
          <li><a href="#">Sed do eiusmod tempor incididunt.</a></li>
          <li><a href="#">Ut labore et dolore magna aliqua.</a></li>
          <li><a href="#">Maecenas nec odio et ante tincidunt tempus.</a></li>
        </ul>
      </div>
    </section>

    <div class="divider">
        <hr>
    </div>

    <!-- 아티스트 -->
    <section class="artist-section">
      <div class="info-link">
        <h3>ARTISTS</h3>
        <a href="#"> <span>자세히</span> &gt; </a>
      </div>
      <div class="artist">
        <div class="artist-left">
          <img class="artist-mainimg" src="@/assets/img/artist.jpg" />
        </div>
        <div class="artist-right">
          <div class="artist-info">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
            semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
            porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
            ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
            nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
            Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies
            nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget
            condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem
            neque sed ipsum.
          </div>

          <div class="artist-imglist">
            <div class="artist-subimg" v-for="(item, index) in 4">
              <img :key="index" src="@/assets/img/artist_sub.jpg" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="divider">
        <hr>
    </div>

    <!-- 제품리스트 -->
    <section class="product-section">
      <div class="info-link">
        <h3>PRODUCTS</h3>
        <a href="#"> <span>전체보기</span> &gt; </a>
      </div>
      <div class="product-list">
        <div class="product" v-for="(item, index) in 8" :key="index">
          <img src="@/assets/img/product.jpg" />
          <div class="product-info">
            <div class="product-detail">
              <b>Product Name</b>
              <p>30,000</p>
            </div>
            <div class="product-link">
              <i class="fa fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script></script>

<style lang="scss">


</style>
