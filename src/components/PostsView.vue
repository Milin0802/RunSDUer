<template>
    <div class="hello">
        <div style="margin-top: 46px"/>
        <van-notice-bar text="欢迎使用 Run! SDUer! 奔跑吧！SDUer！" left-icon="volume-o"  color="#1989fa"
                        background="#ecf9ff"/>

        <van-tabs v-model="active" @click="onClick" animated swipeable>
            <van-tab title="全部动态">
                <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
                    <van-cell v-for="item in list" :key="item" :title="item" to="test" clickable/>
                </van-list>
            </van-tab>
            <van-tab title="我的关注">
                <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
                    <van-cell v-for="item in list" :key="item" :title="item" to="test" clickable/>
                </van-list>
            </van-tab>
        </van-tabs>

        <van-nav-bar
                title="Run! SDUer!"
                left-text="返回"
                right-text="按钮"
                left-arrow
                fixed
                @click-left="onClickLeft"
                @click-right="onClickRight"
        />
        <van-tabbar fixed v-model="active2" animated>
            <van-tabbar-item icon="bar-chart-o">排行榜</van-tabbar-item>
            <van-tabbar-item icon="star-o">动态</van-tabbar-item>
            <van-tabbar-item icon="user-circle-o">我的</van-tabbar-item>
            <!--            <van-tabbar-item icon="setting-o">标签</van-tabbar-item>-->
        </van-tabbar>
    </div>
</template>

<script>
    export default {
        name: 'PostsView',
        props: {
            msg: String,
        },
        data() {
            return {
                active2: 1,
                active: 0,
                loading: false,
                finished: false,
                list: [],
                timer: 0,
            }
        },
        methods: {
            // eslint-disable-next-line no-unused-vars
            onClick(name, title) {
                // this.loading=false;
                // this.finished=false;
                // this.list=[];
            },
            onClickLeft() {
                this.$router.back();
            },
            onClickRight() {
                window.android.showToast('这是一条Android原生的Toast！');
                // this.$router.go('/test')
                // this.$router.push('/test');
            },
            onLoad() {
                // 异步更新数据
                // setTimeout 仅做示例，真实场景中一般为 ajax 请求
                setTimeout(() => {
                    for (let i = 0; i < 10; i++) {
                        this.list.push('这是一条动态'+(this.list.length + 1));
                    }
                    // 加载状态结束
                    this.loading = false;
                    // 数据全部加载完成
                    if (this.list.length >= 100) {
                        this.finished = true;
                    }
                }, 800);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
