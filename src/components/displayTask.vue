<template>
  <section class="task">
    <form action="#" class="task__form">
      <input type="text" name ="task__form_header" class="task__form_header" placeholder="Введите название задачи">
      <textarea name="task__form_description" class="task__form_description"></textarea>
      <div class="task__form_accept">
        <input type="checkbox" class="task__form_bot" id="bot"><label for="bot">Подключить уведомление в telegram</label>
        <button class="task__form_btn">Отправить</button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: "DisplayTask",
  data() {
    return {

    }
  }
}
</script>

<style scoped>
  * {
    box-sizing: border-box;

  }

  .task {
    background: #FFFFFF;
    box-shadow: 5px 5px 100px rgba(0, 0, 0, 0.05);
    border-radius: 60px;
    width: 704px;
    height: 616px;
    padding: 80px;
    margin: 0 auto;
    border: none;
  }

  .task__form_header {
    background: rgba(19, 19, 19, 0.03);
    border-radius: 20px;
    height: 78px;
    padding: 26px 30px 30px;
    width: 100%;
    border: none;
    margin-bottom: 30px;
    outline: none;
    font-size: 24px;
  }

  .task__form_header:focus,
  .task__form_header:focus-within {
    outline: none;
  }

  .task__form_description {
    background: rgba(19, 19, 19, 0.03);
    border-radius: 20px;
    resize: none;
    width: 100%;
    height: 240px;
    border: none;
    padding: 20px 30px;
    font-size: 20px;
  }

  .task__form_bot {
    display: none;
  }

  .task__form_bot + label {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    position: relative;
    display: block;
    padding-left: 30px;
  }

  .task__form_bot + label::before {
    position: absolute;
    content: '';
    width: 20px;
    height: 20px;
    left: 0;
    top: -1px;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, .1);
    border-radius: 3px;
  }

  .task__form_bot:checked + label::after {
    position: absolute;
    content: '';
    width: 14px;
    height: 14px;
    left: 4px;
    top: 3px;
    border-radius: 3px;
    background: #ABEC22;
  }

  .task__form_accept {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .task__form_btn {
    background: rgba(171, 236, 34, .2);
    border-radius: 20px;
    width: 185px;
    height: 78px;
    color: #88C900;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
