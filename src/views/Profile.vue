<template>
  <div class="profile">
    <div class="first card">
      <img class="w-100" src="@/assets/hiking.jpg" alt="John" />
      <h1>John Doe</h1>
      <p class="title">Software developer, Company</p>
      <p>Some University</p>
      <div class="social">
        <a href="#"><i class="fab fa-facebook-square fa-2x"></i></a>
        <a href="#"><i class="fab fa-dribbble fa-2x"></i></a>
        <a href="#"><i class="fab fa-twitter-square fa-2x"></i></a>
        <a href="#"><i class="fab fa-linkedin fa-2x"></i></a>
        <button>Contact</button>
      </div>
    </div>

    <div class="second card">
      <h2>Employment</h2>
      <ul>
        <li>
          Parturient suscipit nibh imperdiet nunc dictumst imperdiet interdum
          feugiat convallis vel accumsan ridiculus scelerisque ante tempus fames
          dis ipsum primis.
        </li>
        <li>
          Amet ac consequat nunc molestie nulla velit dolor nostra velit justo
          faucibus bibendum sollicitudin cras sociis quisque litora erat quis.
        </li>
        <li>
          Dictumst volutpat sociosqu aptent dui massa iaculis cras aliquam
          accumsan litora ornare, habitasse quam ac egestas sit ad pharetra
          nisl.
        </li>
      </ul>
      <h2>Education</h2>
      <ul>
        <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
        <li>Aliquam tincidunt mauris eu risus.</li>
        <li>Vestibulum auctor dapibus neque.</li>
      </ul>
      <p>
        Hendrerit tempor scelerisque ultricies dictum. Sociosqu vulputate
        lacinia commodo? Mauris natoque diam conubia justo congue mi morbi.
        Torquent curabitur tristique vestibulum convallis suspendisse. Vivamus
        lacus integer nullam gravida luctus taciti euismod dis netus mi. Ligula
        iaculis faucibus, facilisis volutpat pretium phasellus dignissim
        pharetra tincidunt sodales class. Habitasse magna, nulla integer
        egestas. Etiam porttitor tempor nec donec; faucibus dictumst magna risus
        augue vitae. Malesuada eu nisi magna ultrices porta gravida massa
        venenatis sociis ultricies. Turpis, nullam risus sit magnis dui lobortis
        laoreet! Elementum scelerisque gravida ornare aenean hac duis metus non
        consequat? Lacinia facilisis varius lacinia. Maecenas elit fames, sed
        natoque amet. Fusce velit, pellentesque mi class. Luctus!
      </p>
      <p>
        Image by
        <a
          href="https://pixabay.com/users/Sorbyphoto-725076/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=772991"
          >Henning Sørby</a
        >
        from
        <a
          href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=772991"
          >Pixabay</a
        >
      </p>
    </div>
  </div>
</template>

<style>
.profile .card {
  float: left;
  box-sizing: border-box;
}

.title {
  color: rgb(170, 169, 169);
  font-size: 18px;
}

.social button {
  width: 100%;
  margin-top: 15px;
}

.social a i {
  margin-right: 15px;
}

.social {
  padding-top: 15px;
  background-color: #3e4e62;
}
.first.card {
  width: 30%;
  margin-right: 20px;
  text-align: center;
  padding: 0;
}

.second.card {
  width: 68%;
}
@media (max-width: 640px) {
  .profile .card {
    width: 100%;
    margin-bottom: 20px;
  }

  .first.card {
    margin-right: 0;
  }
}
</style>
