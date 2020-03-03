<template>
    <div class="hello">
        <div style="margin-top: 46px"/>


        <br>k
        <h1>Testttt</h1>

        <van-button type="default" @click="onClickTest">默认按钮</van-button><br><br>
        <van-button type="primary">主要按钮</van-button><br><br>
        <van-button type="info">信息按钮</van-button><br><br>
        <van-button type="warning">警告按钮</van-button><br><br>
        <van-button type="danger">危险按钮</van-button><br><br>
        <van-button loading type="info" loading-text="加载中..." /><br><br>
        <van-button color="linear-gradient(to right, #4bb0ff, #6149f6)">渐变色按钮</van-button><br><br>



        <van-tabbar fixed>
            <van-tabbar-item icon="home-o">标签</van-tabbar-item>
            <van-tabbar-item icon="search">标签</van-tabbar-item>
            <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
            <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
        </van-tabbar>
        <van-nav-bar
                title="标题"
                left-text="返回"
                right-text="按钮"
                left-arrow
                fixed
                @click-left="onClickLeft"
                @click-right="onClickRight"

        />
    </div>
</template>

<script>
    import { Dialog } from 'vant';

    export default {
        name: 'Test',
        props: {
        },
        components:{
            // [Dialog.Component.name]: Dialog.Component

        },
        methods: {
            onClickLeft() {
                this.$router.back();
            },
            onClickRight() {
                window.android.showToast('这是一条Android原生的Toast！');
            },
            onClickTest(){
                Dialog.confirm({
                    title: '标题',
                    message: '弹窗内容',
                    closeOnClickOverlay: true
                }).then(() => {
                    // on confirm
                }).catch(() => {
                    // on cancel
                });
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
</style>
