<template>
  <v-card>검사중</v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({ components: {} })
export default class SurveyCheckView extends Vue {
  async tokenCheck() {
    const type = this.$route.query.type;

    if (type === 'quantitative') {
      const token = this.$store.getters.surveyTokenQuantitative;
      if (!token) {
        await this.getToken(type);
      }
    } else if (type === 'qualitative') {
      const token = this.$store.getters.surveyTokenQualitative;
      if (!token) {
        await this.getToken(type);
      }
    } else {
      alert('type 을 조작하지 말아주세요');
    }

    this.$store.commit('setSurveyType', type);
  }

  async getToken(type: 'quantitative' | 'qualitative') {
    const { data } = await this.axios.post('/survey/check', {
      type,
    });
    this.setToken(type, data);
  }

  setToken(type: 'quantitative' | 'qualitative', token: string) {
    if (type === 'quantitative') {
      this.$store.commit('setSurveyTokenQuantitative', token);
    } else if (type === 'qualitative') {
      this.$store.commit('setSurveyTokenQualitative', token);
    }
  }

  mounted() {
    this.tokenCheck();
    this.$router.push('/survey');
  }
}
</script>

<style scoped></style>
