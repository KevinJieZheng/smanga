<template>
  <div class="history-list">
    <!--列表-->
    <div class="chapter-list-box">
      <chapter v-for="(i,k) in list" :key="k" :chapterInfo="i" :bookmark="true" @click="go_browse(i)" @contextmenu.prevent="context_menu(i,k)"/>
    </div>

    <!--分页-->
    <media-pager ref="pager" :count="count" @page-change="page_change"/>

    <!--功能菜单-->
    <right-sidebar :info="chapterInfo" :menuPoster="menuPoster" @reload="page_change"/>
  </div>
</template>

<script src='./script/index.ts' lang="ts"></script>

<style src='@/style/chapter-list.less' scoped lang='less'></style>
