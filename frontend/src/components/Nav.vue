<template>
    <div id="bg">
        <transition name="fade">
            <v-toolbar class="box" v-show="CanShow">
                <div class="left center">
                    <img src="@/assets/logo.png" alt="" @click="() => { this.$router.push('/'); }" style="cursor: pointer;">
                </div>
                <div class="right">
                    <div class="guides">

                    </div>
                    <div class="infos">
                        <div class="info-single center" v-for="(i, id) in info[0][loginStatus]" :key="id">
                            <i :class="i.icon"></i>
                            {{ i.text }}
                            <div class="botLine"></div>
                        </div>
                    </div>
                </div>
            </v-toolbar>
        </transition>
    </div>
</template>

<script>
export default {
    mounted() {
        window.addEventListener('scroll', () => {
            var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
            if (scrollTop == 0) {
                this.show = true;
                window.clearTimeout(this.timeout);
            }
            else {
                this.show = false;
                if (scrollTop < this.scrollValue) {
                    this.ScrollControl();
                }
            }
            this.scrollValue = scrollTop;
        })
    },
    data() {
        return {
            show: true,
            scrollValue: 0,
            timeout: null,
            loginStatus: 0, // 0未登入 1已登入
            info: [
                [
                    [
                        {
                            text: "註冊",
                            icon: "fas fa-user-plus"
                        },
                        {
                            text: "登入",
                            icon: "fas fa-sign-in-alt"
                        },
                    ]
                ],
                [
                    ["登出"]
                ]
            ]
        }
    },
    methods: {
        ScrollControl() {
            window.clearTimeout(this.timeout);
            this.show = true;
            this.timeout = window.setTimeout(() => {
                this.show = false;
                window.clearTimeout(this.timeout);
            }, 2000);
        },
    },
    computed: {
        CanShow() {
            if (this.$store.state.pageNotFound) {
                return false;
            }
            else {
                if (this.show) {
                    return true;
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
* {
    user-select: none;
}
.fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}
.box {
    background: linear-gradient(rgb(255, 210, 143),rgb(255, 182, 73));
    position: fixed;
    .left {
        width: 15%;
        height: 100%;
        img {
            width: 40%;
            margin-right: 8%;
        }
    }
    .right {
        width: 85%;
        height: 100%;
        .guides {
            width: 70%;
            height: 100%;
            border: 1px solid #000;
            float: left;
        }
        .infos {
            width: 30%;
            height: 100%;
            float: left;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            .info-single {
                width: 16%;
                height: 56%;
                margin-right: 4%;
                font-weight: bold;
                color: rgb(139, 80, 2);
                font-size: 16px;
                cursor: pointer;
                position: relative;
                i {
                    margin-right: 8%;
                }
                .botLine {
                    border: 1px solid rgb(255, 245, 229);
                    position: absolute;
                    width: 88%;
                    top: 120%;
                    transition: 0.8s;
                    opacity: 0;
                }
            }
            .info-single:hover {
                color: rgb(255, 245, 229);
            }
            .info-single:hover > .botLine {
                top: 100%;
                opacity: 1;
            }
        }
    }
}
.li {
    border: 1px solid #000;
}
</style>
