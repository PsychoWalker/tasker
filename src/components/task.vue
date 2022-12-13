<template>
<section class="task__message">
  <p class="task__header"></p>
  <p class="task__text"></p>
  <p class="task__telegram"></p>
  <button class="n-border task__accept"><img src="" alt=""></button>
  <button class="n-border task__close"><img src="" alt=""></button>
</section>
</template>

<script>
export default {
  name: "task"
}
</script>

<style scoped>
  .task__message {
    background: rgba(171, 236, 34, .2);
    box-shadow: 5px 5px 100px rgba(0, 0, 0, 0.05);
    border-radius: 60px;
    width: 704px;
    height: 616px;
    padding: 40px;
    margin: 0 auto;
    border: none;
  }

  .task__header {
    font-weight: 700;
    font-size: 20px;
    line-height: 27px;
    color: #131313;
  }

  .task__text {
    font-size: 16px;
    line-height: 21px;
    font-weight: 400;
    color: #131313;
  }
</style>
