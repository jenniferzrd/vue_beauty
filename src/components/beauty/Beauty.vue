<template lang="html">
    <div class="beauty">
      <h1> Lipsticks collection </h1>
      <ul>
        <li v-for="(cat, n) in categories" :style="{backgroundImage: 'url(' + cat.imgBanner + ')'}" @click="toggleTab($event)" class="tab">
          <header class="header">
            <span class="title">
              {{ cat.title}}
            </span>
            <i class="fa fa-plus"></i>
          </header>
          <div class="wrap">
            <img class="img" v-for="(img,i) in cat.imgLips" :src="img" alt="nice lips">
          </div>
        </li>
      </ul>
    </div>
</template>

<script>

export default {
  data() {
    return {
      categories: [
        {
          title: "Exposed",
          imgBanner: "/src/assets/beauty/img/lsmm-desktop-accordion-exposed.jpg",
          imgLips: [
            "/src/assets/beauty/img/lsmm-lip-shades-exposed-1.jpg",
            "/src/assets/beauty/img/lsmm-lip-shades-exposed-2.jpg",
            "/src/assets/beauty/img/lsmm-lip-shades-exposed-3.jpg",
            "/src/assets/beauty/img/lsmm-lip-shades-exposed-4.jpg",
            "/src/assets/beauty/img/lsmm-lip-shades-exposed-5.jpg",

          ]
        },
        {
          title: "Mauve Mist",
          imgBanner: "/src/assets/beauty/img/lsmm-desktop-accordion-mauve-mist.jpg",
          imgLips: [
            "/src/assets/beauty/img/lsmm-lip-shades-mauve-mist-1.jpg",
            "/src/assets/beauty/img/lsmm-lip-shades-mauve-mist-2.jpg",
            "/src/assets/beauty/img/lsmm-lip-shades-mauve-mist-3.jpg",
            "/src/assets/beauty/img/lsmm-lip-shades-mauve-mist-4.jpg",
            "/src/assets/beauty/img/lsmm-lip-shades-mauve-mist-5.jpg",
          ]
        },
        {
          title: "Bella",
          imgBanner: "/src/assets/beauty/img/lsmm-desktop-accordion-bella.jpg",
          imgLips: [
            "/src/assets/beauty/img/lsmm-lip-shades-bella-1.jpg",
            "/src/assets/beauty/img/lsmm-lip-shades-bella-2.jpg",
            "/src/assets/beauty/img/lsmm-lip-shades-bella-3.jpg",
            "/src/assets/beauty/img/lsmm-lip-shades-bella-4.jpg",
            "/src/assets/beauty/img/lsmm-lip-shades-bella-5.jpg",

          ]
        },
        {
          title: "New era",
          imgBanner: "/src/assets/beauty/img/lsmm-desktop-accordion-new-era.jpg",
          imgLips: [
            "/src/assets/beauty/img/lsmm-lip-shades-new-era-1.jpg",
            "/src/assets/beauty/img/lsmm-lip-shades-new-era-2.jpg",
            "/src/assets/beauty/img/lsmm-lip-shades-new-era-3.jpg",
            "/src/assets/beauty/img/lsmm-lip-shades-new-era-4.jpg",
            "/src/assets/beauty/img/lsmm-lip-shades-new-era-5.jpg",
          ]
        },
        {
          title: "Neat nude",
          imgBanner: "/src/assets/beauty/img/lsmm-desktop-accordion-neat-nude.jpg",
          imgLips: [
            "/src/assets/beauty/img/lsmm-lip-shades-neat-nude-1.jpg",
            "/src/assets/beauty/img/lsmm-lip-shades-neat-nude-2.jpg",
            "/src/assets/beauty/img/lsmm-lip-shades-neat-nude-3.jpg",
            "/src/assets/beauty/img/lsmm-lip-shades-neat-nude-4.jpg",
            "/src/assets/beauty/img/lsmm-lip-shades-neat-nude-5.jpg",
          ]
        },
        {
          title: "Buzz kill",
          imgBanner: "/src/assets/beauty/img/lsmm-desktop-accordion-buzzkill.jpg",
          imgLips: [
            "/src/assets/beauty/img/lsmm-lip-shades-buzzkill-1.jpg",
            "/src/assets/beauty/img/lsmm-lip-shades-buzzkill-2.jpg",
            "/src/assets/beauty/img/lsmm-lip-shades-buzzkill-3.jpg",
            "/src/assets/beauty/img/lsmm-lip-shades-buzzkill-4.jpg",
            "/src/assets/beauty/img/lsmm-lip-shades-buzzkill-5.jpg",
          ]
        },
        {
          title: "Acme",
          imgBanner: "/src/assets/beauty/img/lsmm-desktop-accordion-acme.jpg",
          imgLips: [
            "/src/assets/beauty/img/lsmm-lip-shades-acme-1.jpg",
            "/src/assets/beauty/img/lsmm-lip-shades-acme-2.jpg",
            "/src/assets/beauty/img/lsmm-lip-shades-acme-3.jpg",
            "/src/assets/beauty/img/lsmm-lip-shades-acme-4.jpg",
            "/src/assets/beauty/img/lsmm-lip-shades-acme-5.jpg",

          ]
        },
        {
          title: "Modern maven",
          imgBanner: "/src/assets/beauty/img/lsmm-desktop-accordion-modern-maven.jpg",
          imgLips: [
            "/src/assets/beauty/img/lsmm-lip-shades-modern-maven-1.jpg",
            "/src/assets/beauty/img/lsmm-lip-shades-modern-maven-2.jpg",
            "/src/assets/beauty/img/lsmm-lip-shades-modern-maven-3.jpg",
            "/src/assets/beauty/img/lsmm-lip-shades-modern-maven-4.jpg",
            "/src/assets/beauty/img/lsmm-lip-shades-modern-maven-5.jpg",
          ]
        },
        {
          title: "Pure society",
          imgBanner: "/src/assets/beauty/img/lsmm-desktop-accordion-pure-society.jpg",
          imgLips: [
            "/src/assets/beauty/img/lsmm-lip-shades-pure-society-1.jpg",
            "/src/assets/beauty/img/lsmm-lip-shades-pure-society-2.jpg",
            "/src/assets/beauty/img/lsmm-lip-shades-pure-society-3.jpg",
            "/src/assets/beauty/img/lsmm-lip-shades-pure-society-4.jpg",
            "/src/assets/beauty/img/lsmm-lip-shades-pure-society-5.jpg",
          ]
        },
      ]
    }
  },
  methods: {
    toggleTab(e) {
      const tab = e.target || e.srcElement;
      tab.classList.toggle("is-active");
    }
  }


  // name: 'app',
  // data () {
  //   todos: [
  //     {
  //       img:"",
  //       text:"Exposed"
  //     }
  //     {
  //       img:"",
  //       text:"Mauve Mist"
  //     }
  //   ]
  //   }
  // },
  // methods: {
  //   addNewTodo: function () {
  //     this.todos.push({
  //     })
  //   }
  // }
}
</script>


<style lang="scss" scoped>
.beauty {
  max-width: 800px;
  margin: 20px auto;
}
.text {
  max-width: 320px;
  margin:0 auto;
  margin-bottom: 20px;
}
.credit {
  font-size: .85rem;
  display: block;
  margin-bottom: 20px;
}
.tab {
  position: relative;
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.17);
  color: black;
  cursor: pointer;
  background-repeat: no-repeat;
  background-size: 100%;
}

.tab > * {
  pointer-events: none;
  // empeche les enfants direct des tabs de capturer les clicks
}

.tab .header {
  position: relative;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 44px;
  color: white;
}

.tab .header .title {
  font-weight: bold;
}

.tab .fa {
  position: absolute;
  right: 24px;
  transition: transform .3s linear;
}

.tab.is-active .fa {
  transform: rotate(45deg);
}

.tab .wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 0;
  height: 0;
  opacity: 0;
  transition: all .3s linear;
  overflow: hidden;
}

.tab.is-active .wrap {
  height: 100vh;
  max-height: 200px;
  opacity: 1;
  transition: all .3s linear;
}
.tab .wrap .img {
  height: 120px;
  width: 120px;
}
</style>
