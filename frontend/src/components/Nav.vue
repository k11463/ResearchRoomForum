<template>
    <div id="bg">
        <transition name="fade">
            <v-toolbar class="box" v-show="show">
                <div class="left center">
                    <img src="@/assets/logo.png" alt="">
                </div>
                <div class="right">
                    <div class="guides">

                    </div>
                    <div class="infos">
                        <div class="info-single center" v-for="i in info[0][0]" :key="i">
                            <i class="fas fa-sign-in-alt"></i>
                            {{ i }}
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
        var vue = this;
        window.addEventListener('scroll', () => {
            var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
            if (scrollTop > this.scrollValue) {
                this.ScrollControl();
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
                    ["登入", "註冊"]
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
        }
    },
}
</script>

<style lang="scss" scoped>
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
            border: 1px solid #000;
            float: left;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            .info-single {
                width: 16%;
                height: 56%;
                border: 1px solid #000;
                margin-right: 4%;
                font-weight: bold;
                color: rgb(139, 80, 2);
                font-size: 16px;
                i {
                    margin-right: 8%;
                }
            }
        }
    }
}
.li {
    border: 1px solid #000;
}
</style>
