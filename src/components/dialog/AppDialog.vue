<template>
  <div class="app_dialog" :class="{ dimmed }" @click.self="$close(noValue)">
    <div class="dialog_content">
      <p v-if="title" class="title">{{ title }}</p>
      <p v-if="description" class="description" v-html="description"/>

      <p class="action">
        <template v-if="dialogType === 'confirm'">
          <button type="button" @click="$close(noValue)">{{ no }}</button>
          <button type="button" class="primary" @click="$close(yesValue)">{{ yes }}</button>
        </template>
        <template v-else-if="dialogType === 'alert'">
          <button type="button" @click="$close">{{ ok }}</button>
        </template>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppDialog',
  props: {
    dialogType: {
      type: String,
      default: 'confirm'
    },
    title: {
      type: String
    },
    description: {
      type: String
    },
    yes: {
      type: String,
      default: 'Yes'
    },
    no: {
      type: String,
      default: 'No'
    },
    ok: {
      type: String,
      default: 'OK'
    },
    yesValue: {
      default: true
    },
    noValue: {
      default: false
    },
    dimmed: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss">
.app_dialog {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  &.dimmed {
    background-color: rgba(0, 0, 0, 0.5);
  }

  .dialog_content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 430px;
    box-sizing: border-box;
    padding: 30px;
    background-color: #fff;
    border: 1px solid #333;
    text-align: center;

    .title {
      font-size: 20px;
      font-weight: bold;
      color: #444;
      margin-bottom: 10px;
    }

    .description {
      font-size: 14px;
      color: #2f2f2f;
      margin-bottom: 28px;
      line-height: 1.5;
    }

    .action {
      button {
        width: 86px;
        height: 38px;
        border: solid 1px #bbb;
        background-color: #fff;
        font-size: 14px;
        font-weight: bold;
        color: #444;
        margin: 0 3px;
      }
      .primary {
        border: solid 1px #ec0047;
        color: #ec0047;
      }
    }
  }
}
</style>
