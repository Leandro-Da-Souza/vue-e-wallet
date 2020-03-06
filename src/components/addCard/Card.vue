<template>
  <div class="container">
    <div class="card" :style="{ backgroundColor: bgColor }">
      <p class="logo"></p>
      <h3 class="cardNumber">{{ numberFilled }}</h3>
      <div class="cardHolder">
        <p>cardholder name</p>
        <p>{{ newCard.cardName }}</p>
      </div>
      <div>
        <p>valid thru</p>
        <P>{{ newCard.valid }}</P>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    newCard: Object
  },
  filters: {
    space(str, after) {
      if (!str) {
        return false;
      }
      after = after || 4;
      var v = str.replace(/[^\dA-Z]/g, ""),
        reg = new RegExp(".{" + after + "}", "g");
      return v.replace(reg, function(a) {
        return a + " ";
      });
    }
  },
  computed: {
    bgColor() {
      if (this.newCard.vendor === "bitcoin") {
        return "orange";
      } else if (this.newCard.vendor === "evilcorp") {
        return "darkred";
      } else if (this.newCard.vendor === "ninja bank") {
        return "gray";
      } else if (this.newCard.vendor === "blockchain") {
        return "blueviolet";
      }
      return "";
    },
    numberFilled() {
      if (this.newCard.number !== null) {
        return this.newCard.number;
      }
      return "**** **** **** ****";
    }
  }
};
</script>

<style scoped>
.card {
  border: 1px solid black;
  width: 500px;
  height: 100%;
}
.container {
  display: flex;
  justify-content: center;
  margin: 20px;
}
</style>
