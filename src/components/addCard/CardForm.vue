<template>
  <div>
    <h2>Add A New Card</h2>
    <app-card :newCard="newCard"></app-card>
    <form class="cardform">
      <label for="cardNumber">Card Number</label>
      <input type="number" v-model="newCard.number" />
      <label for="cardName">Cardholder Name</label>
      <input type="text" v-model="newCard.name" />
      <div>
        <label for="valid">Valid Thru</label>
        <input type="date" v-model="newCard.valid" />
        <label for="ccv">CCV</label>
        <input type="number" v-model="newCard.ccv" />
      </div>
      <label for="vendor">Vendor</label>
      <select id="vendor" v-model="newCard.vendor">
        <option value="bitcoin">Bitcoin</option>
        <option value="evilcorp">Evilcorp</option>
        <option value="ninja bank">Ninja Bank</option>
        <option value="blockchain">Blockchain</option>
      </select>
      <button @click.prevent="submitCard">Add New Card</button>
    </form>
  </div>
</template>

<script>
import EventBus from "../../main.js";
import Card from "./Card";
import cardMixin from "./cardMixin";

export default {
  data() {
    return {};
  },
  mixins: [cardMixin],
  methods: {
    submitCard() {
      if (this.checkCard(this.newCard)) {
        alert("Please Fill Out Form");
        return;
      } else {
        this.$router.push("/");
        EventBus.$emit("newCard", this.newCard);
      }
    },
    checkCard(obj) {
      for (var key in obj) {
        if (obj[key] !== null && obj[key] != "") return false;
      }
      return true;
    }
  },
  components: {
    appCard: Card
  }
};
</script>

<style scoped>
.cardform {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
}
</style>