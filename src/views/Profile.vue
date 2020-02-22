<template>
  <div class="profile">
    <img src="img.jpg" alt="John" style="width:100%" />
    <h1>John Doe</h1>
    <p class="title">CEO & Founder, Example</p>
    <p>Harvard University</p>
    <a href="#"><i class="fa fa-dribbble"></i></a>
    <a href="#"><i class="fa fa-twitter"></i></a>
    <a href="#"><i class="fa fa-linkedin"></i></a>
    <a href="#"><i class="fa fa-facebook"></i></a>
    <p><button>Contact</button></p>
  </div>
</template>

<style>
.profile {
  max-width: 300px;
  text-align: center;
}

.title {
  color: grey;
  font-size: 18px;
}

button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

a {
  text-decoration: none;
  font-size: 22px;
  color: black;
}

button:hover,
a:hover {
  opacity: 0.7;
}
</style>
