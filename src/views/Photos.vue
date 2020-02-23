<template>
  <div class="photos">
    <h2>PHOTOS</h2>
    <p>Lorem ipsum dolor sit amet, tempor prodesset eos no.</p>

    <div class="row">
      <div class="column">
        <div class="content">
          <img src="@/assets/p1.jpg" alt="Mountains" style="width:100%" />
          <h3>My Work</h3>
          <p>
            Image by
            <a
              href="https://pixabay.com/users/domelaci-2136711/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1244132"
              >Laci Döme.</a
            >

            Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus
            necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit
            amet, tempor prodesset eos no.
          </p>
        </div>
      </div>
      <div class="column">
        <div class="content">
          <img src="@/assets/p2.jpg" alt="Lights" style="width:100%" />
          <h3>My Work</h3>
          <p>
            Image by
            <a
              href="https://pixabay.com/users/TeeFarm-199315/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1645078"
              >TeeFarm.</a
            >

            Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus
            necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit
            amet, tempor prodesset eos no.
          </p>
        </div>
      </div>
      <div class="column">
        <div class="content">
          <img src="@/assets/p3.jpg" alt="Nature" style="width:100%" />
          <h3>My Work</h3>
          <p>
            Image by
            <a
              href="https://pixabay.com/users/Walkerssk-1409366/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1899264"
              >Walkerssk.</a
            >

            Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus
            necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit
            amet, tempor prodesset eos no.
          </p>
        </div>
      </div>
      <div class="column">
        <div class="content">
          <img src="@/assets/p4.jpg" alt="Mountains" style="width:100%" />
          <h3>My Work</h3>
          <p>
            Image by
            <a
              href="https://pixabay.com/users/kewl-24755/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=90388"
              >kewl.</a
            >

            Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus
            necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit
            amet, tempor prodesset eos no.
          </p>
        </div>
      </div>
    </div>

    <div class="content">
      <img src="@/assets/p5.jpg" alt="Bear" style="width:100%" />
      <h3>Some Other Work</h3>
      <p>
        Image by
        <a
          href="https://pixabay.com/users/TeeFarm-199315/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1681485"
          >TeeFarm.
        </a>
        Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus
        necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit
        amet, tempor prodesset eos no.
      </p>
      <p>
        Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus
        necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit
        amet, tempor prodesset eos no.
      </p>
    </div>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}

.photos {
  background-color: #445871;
  padding: 20px;
  color: white;
}

.photos h1 {
  font-size: 50px;
  word-break: break-all;
}

.content {
  background-color: #232d36;

  padding: 10px;
}

.row {
  margin: 8px -16px;
}

.row,
.row > .column {
  padding: 8px;
}

.column {
  float: left;
  width: 25%;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

@media screen and (max-width: 900px) {
  .column {
    width: 50%;
  }
}

@media screen and (max-width: 600px) {
  .column {
    width: 100%;
  }
}
</style>
