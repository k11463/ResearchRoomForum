<template>
  <div class="bg">
    <div class="navbox"></div>
    <div class="body">
      <div class="left"></div>
      <div class="mid">
        <v-layout class="midLayout" row>
          <v-flex lg8>
            <div class="searchBox">
              <v-layout class="searchLayout">
                <v-flex class="slf" lg8>
                  <div class="selectBox">
                    <button class="selected">
                      文章
                    </button>
                    <div class="selects">
                      <div class="select" v-for="(sb, id) in selectBox" :key="id">
                        {{ sb }}
                      </div>
                    </div>
                  </div>
                </v-flex>
                <v-flex class="slf" lg4>
                  4
                </v-flex>
              </v-layout>
            </div>
            <div class="classBox">

            </div>
          </v-flex>
          <v-flex lg4>
            4
          </v-flex>
        </v-layout>
      </div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectBox: ["文章", "發布者", "時間"]
    }
  }
}
</script>


<style lang="scss" scoped>
* {
  user-select: none;
}
.bg {
  .navbox {
    width: 100vw;
    height: 6.8vh;
    background-color: rgb(255, 250, 238);
  }
  .body {
    width: 100vw;
    height: 120vh;
    background-color: rgb(255, 250, 238);
    .left {
      width: 15%;
      height: 100%;
      float: left;
    }
    .mid {
      width: 70%;
      height: 100%;
      float: left;
      .midLayout {
        height: 100%;
        padding-top: 2%;
        .searchBox {
          border: 1px solid #000;
          height: 6%;
          .searchLayout {
            height: 100%;
            padding: 2%;
            .slf {
              display: flex;
              align-items: center;
              .selectBox {
                width: 16%;
                height: 120%;
                position: relative;
                .selected {
                  width: 100%;
                  height: 100%;
                  background-color: #fff;
                  border: 1px solid rgb(255, 153, 0);
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  border-radius: 4px 0 0 4px;
                  letter-spacing: 12px;
                  padding-left: 12px;
                  font-size: 16px;
                  font-weight: bold;
                  color: rgb(139, 80, 2);
                }
                .selects {
                  width: 100%;
                  height: 300%;
                  border: 1px solid rgb(255, 153, 0);
                  border-radius: 0 0 4px 4px;
                  background-color: #fff;
                  .select {
                    height: 33%;
                    font-size: 16px;
                    font-weight: bold;
                    color: rgb(139, 80, 2);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  }
                  .select:hover {
                    background-color: rgb(255, 241, 227);
                    color: rgb(255, 181, 70);
                    cursor: pointer;
                  }
                }
              }
            }
          }
        }
        .classBox {

        }
      }
    }
    .right {
      width: 15%;
      height: 100%;
      float: left;
    }
  }
}
</style>
