<template>
    <div class="Home">
        <!-- Slider main container -->
        <div class="swiper">
            <Swiper :cssMode="true" :loop="true" :mousewheel="true" :keyboard="true" :modules="modules"
                :navigation="{ prevEl: '.swiper-button-prev-custom', nextEl: '.swiper-button-next-custom' }"
                :pagination="{ el: '.custom-pagination', clickable: true, type: 'bullets' }" class="mySwiper">
                <SwiperSlide><img src="../assets/swipper1.png" alt="" class="swipper-img"></SwiperSlide>
                <SwiperSlide><img src="../assets/swipper1.png" alt="" class="swipper-img"></SwiperSlide>
                <SwiperSlide><img src="../assets/swipper1.png" alt="" class="swipper-img"></SwiperSlide>

                <!-- 自定义左右按钮 -->
                <div class="swiper-btn swiper-button-prev-custom">
                    <span class="iconfont icon-zuoyouanniu"></span>
                </div>
                <div class="swiper-btn swiper-button-next-custom" ref="nextButton">
                    <span class="iconfont icon-zuoyouanniu"></span>
                </div>

                <!-- 自定义分页容器 -->
                <div class="custom-pagination"></div>
            </Swiper>
        </div>
        <div class="section-wrapper">
            <div class="left-main">
                <div class="top-main">
                    <div class="creatorBenifit">
                        <span class="creatorBenifit-title">创作者福利</span>
                        <div class="creatorBenifitDetail">
                            <span class="creatorBenifit-span1">了解福利</span>
                            <span class="iconfont icon-zuoyouanniu creatorBenifit-span2"></span>
                        </div>
                    </div>
                    <div class="writerCorner">
                        <span class="writerCorner-title">作家专区</span>
                        <div class="submissionGuidelines">
                            <span class="submissionGuidelines-span1">投稿指南</span>
                            <span class="iconfont icon-zuoyouanniu submissionGuidelines-span2"></span>
                        </div>
                        <div class="submitSelf">
                            <span class="submitSelf-span1">我要投稿</span>
                            <span class="iconfont icon-zuoyouanniu submitSelf-span2"></span>
                        </div>
                    </div>
                </div>
                <div class="bottom-main">
                    <div class="left-bottom-main-wrapper">
                        <span class="left-bottom-main-title">剧本游戏</span><br />
                        <span class="left-bottom-main-desc">剧情沉浸，烧脑</span>
                    </div>
                    <div class="left-bottom-main-wrapper">
                        <span class="left-bottom-main-title">有声书</span><br />
                        <span class="left-bottom-main-desc">让好内容被听见</span>
                    </div>
                    <div class="left-bottom-main-wrapper">
                        <span class="left-bottom-main-title">版权中心</span><br />
                        <span class="left-bottom-main-desc">维权服务、版权合作</span>
                    </div>
                </div>
            </div>
            <div class="right-main">
                <div class="right-main-top">
                    <div class="right-main-top-title">
                        <span class="latestNotice-title">最新公告</span>
                        <a href="https://www.cmread.com/wenxuenew/announcementList" class="noticeDetail">
                            <span>更多</span>
                            <span class="iconfont icon-zuoyouanniu noticeDetail-icon"></span>
                        </a>
                    </div>
                    <div class="right-main-top-list">
                        <a href="" class="noticeList" v-for="notice in noticeList">
                            <div class="noticeTitle">
                                {{ notice.title }}
                            </div>
                            <div class="noticeTime">
                                {{ notice.time }}
                            </div>
                        </a>
                    </div>
                </div>
                <div class="right-main-bottom">
                    <a href="">
                        <div class="right-main-bottom1">
                            <div>咪咕文学院</div>
                            <span>新手入门，高阶研修</span>
                        </div>
                    </a>
                    <a href="">
                        <div class="right-main-bottom2">
                            <div>咪咕文学院</div>
                            <span>新手入门，高阶研修</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts" name="home">
    // 导入 Swiper Vue 组件
    import { Swiper, SwiperSlide } from "swiper/vue"

    // 导入 Swiper 样式
    import "swiper/css"
    import "swiper/css/navigation"
    import "swiper/css/pagination"
    import "swiper/css/autoplay"
    import "@/styles/Home.css"

    // 导入所需功能模块
    import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper/modules"
    import { reactive } from "vue"
    // 模块要通过 props 传给 Swiper
    const modules = [Navigation, Pagination, Mousewheel, Keyboard, Autoplay]

    let noticeList = reactive([
        { title: "关于微短剧《铭心》项目开放合作公告", time: "09-04" },
        { title: "关于微短剧《君心似我心》项目开放合作公告", time: "09-02" },
        { title: "关于微短剧《玄学真千金归来，飒翻全京城》项目开放合作公告", time: "09-01" },
        { title: "关于微短剧《纨绔夫妻互捧日常》项目开放合作公告", time: "09-01" }
    ])

</script>

<style scoped src="../styles/Home.css"></style>