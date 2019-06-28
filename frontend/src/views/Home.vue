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
                    <div class="selected" @mouseenter="SelectFocus(true)" @click="SelectFocus(false)">
                      {{ selectValue }}
                    </div>
                    <button class="selects" ref="select">
                      <div class="select" v-for="(sb, id) in selectBox" :key="id" @click="SelectFocus(false); ChangeSelectValue(sb)">
                        {{ sb }}
                      </div>
                    </button>
                  </div>
                  <div class="search">
                    <input type="text" size="20" @focus="searchBoxFocus = true" @blur="searchBoxFocus = false">
                    <div class="placeholder">
                      <div class="phtext" v-if="searchBoxFocus">
                        搜尋中...
                      </div>
                      <div class="phtext" v-if="!searchBoxFocus">
                        搜尋{{ selectValue }}
                      </div>
                    </div>
                  </div>
                  <div class="send">
                    <button>搜尋</button>
                  </div>
                </v-flex>
                <v-flex class="slf slr" lg4>
                  <div class="createArticle">
                    發文
                  </div>
                </v-flex>
              </v-layout>
            </div>
            <div class="classBox">

            </div>
            <div class="articleList">
              <div class="articleBox" v-for="(i, id) in 10" :key="id" @mouseenter="aritcleBoxHoverId = id" @mouseleave="aritcleBoxHoverId = -1">
                <transition name="fade">
                  <div class="articleArrow" v-if="id == aritcleBoxHoverId"></div>
                </transition>
                <v-layout class="abl">
                  <v-flex class="ablf" lg2>
                    <div class="articleClass">
                      <v-icon class="articleIcon">star_border</v-icon>
                      文章分類
                    </div>
                  </v-flex>
                  <v-flex class="ablf" lg8>
                    <div class="articleTitle">
                      文章標題
                    </div>
                  </v-flex>
                  <v-flex class="ablf" lg2>
                    <div class="isuser">
                      發文者
                    </div>
                    <div class="postTime">
                      時間
                    </div>
                  </v-flex>
                </v-layout>
              </div>
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
      selectBox: ["標題", "發布者", "時間"],
      selectValue: "標題",
      searchBoxFocus: false,
      aritcleBoxHoverId: -1,
    }
  },
  methods: {
    SelectFocus(bool) {
      if(bool) {
        this.$refs.select.focus();
      }
      else {
        this.$refs.select.blur();
      }
    },
    ChangeSelectValue(val) {
      this.selectValue = val;
    }
  }
}
</script>


<style lang="scss" scoped>
.bd {
  border: 1px solid #000;
}
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}
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
          background: linear-gradient(rgb(255, 250, 238), rgb(241, 235, 219));
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
                  letter-spacing: 4px;
                  padding-left: 2px;
                  font-size: 16px;
                  font-weight: bold;
                  color: rgb(139, 80, 2);
                  cursor: pointer;
                }
                .selects {
                  position: absolute;
                  width: 100%;
                  height: 0;
                  border-radius: 0 0 4px 4px;
                  background-color: #fff;
                  opacity: 0;
                  transition: 0.6s;
                  overflow: hidden;
                  letter-spacing: 4px;
                  z-index: 1;
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
                .selects:focus {
                  opacity: 1;
                  height: 300%;
                  border: none;
                  outline: none;
                  border: 1px solid rgb(255, 153, 0);
                }
              }
              .search {
                width: 64%;
                height: 120%;
                position: relative;
                input {
                  width: 100%;
                  height: 100%;
                  background-color: rgb(255, 232, 189);
                  font-size: 15px;
                  padding-left: 2.8%;
                  font-weight: bold;
                  border: 1px solid rgb(255, 153, 0);
                  border-left: none;
                  padding-top: 0.4%;
                }
                input:focus {
                  outline: 2px solid rgb(255, 129, 56);
                  background-color: #fff;
                }
                input:focus + .placeholder {
                  transform: translate(-8%, -104%);
                  color: rgb(139, 80, 2);
                }
                .placeholder {
                  position: absolute;
                  top: 16%;
                  letter-spacing: 2px;
                  padding-left: 2%;
                  color: rgb(160, 141, 141);
                  font-weight: bold;
                  transition: 0.8s;
                }
              }
              .send {
                width: 12%;
                height: 120%;
                button {
                  width: 100%;
                  height: 100%;
                  border: 1px solid rgb(255, 153, 0);
                  border-left: none;
                  border-radius: 0 4px 4px 0;
                  font-size: 16px;
                  letter-spacing: 4px;
                  font-weight: bold;
                  background: linear-gradient(rgb(255, 219, 164), rgb(241, 199, 120));
                  color: rgb(153, 105, 17);
                }
              }
            }
            .slr {
              display: flex;
              align-items: center;
              justify-content: flex-end;
              .createArticle {
                width: 24%;
                height: 120%;
                border: 1px solid rgb(255, 153, 0);
                background: linear-gradient(rgb(255, 227, 184), rgb(247, 211, 145));
                cursor: pointer;
                border-radius: 4px;
                font-size: 16px;
                display: flex;
                align-items: center;
                justify-content: center;
                letter-spacing: 2px;
                font-weight: bold;
                color: rgb(153, 105, 17);
                padding-right: 2px;
                transition: 0.6s;
              }
              .createArticle:hover {
                box-shadow: 0px 0px 6px 2px rgba($color: #000000, $alpha: 0.4);
              }
            }
          }
        }
        .classBox {
          height: 6%;
          background-color: rgb(255, 233, 174);
        }
        .articleList {
          border: 4px solid rgb(255, 233, 174);;
          height: 80%;
          background-color: #fff;
          .articleBox {
            height: 10%;
            border: 1px solid rgb(255, 197, 122);
            position: relative;
            .abl {
              height: 100%;
              .ablf {
                .articleIcon {
                  padding-right: 8%;
                }
                .articleClass {
                  height: 100%;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  font-size: 16px;
                  font-weight: bold;
                  color: rgb(139, 114, 100);
                  padding-right: 4%;
                }
                .articleTitle {
                  height: 100%;
                  display: flex;
                  align-items: center;
                  padding-left: 2.8%;
                  font-size: 16px;
                  color: rgb(139, 114, 100);
                  border-left: 1px solid rgba(255, 197, 122, 0.8);
                  border-right: 1px solid rgba(255, 197, 122, 0.8);
                }
                .isuser {
                  height: 50%;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  font-size: 14px;
                  letter-spacing: 2px;
                  color: rgb(139, 114, 100);
                  border-bottom: 1px solid rgba(255, 197, 122, 0.8);
                }
                .postTime {
                  height: 50%;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  font-size: 14px;
                  letter-spacing: 2px;
                  color: rgb(139, 114, 100);
                }
              }
            }
            .articleArrow {
              width: 8%;
              height: 100%;
              left: -8.4%;
              position: absolute;
              background-image: url('../assets/articleListArrow.gif');
              background-size: 100%;
              top: 8%;
            }
          }
          .articleBox:hover {
            background-color: rgb(255, 252, 240);
            cursor: pointer;
          }
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
