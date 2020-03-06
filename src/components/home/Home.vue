<template>
  <div>
    <h1>E-Wallet</h1>
    <app-card :card="isActiveCard"></app-card>
    <app-card-stack
      v-for="card in cardArr"
      :key="card.id"
      :card="card"
      v-on:activeCard="activeCard"
    ></app-card-stack>
    <router-link to="/addCard" tag="button" class="btn">Add A New Card</router-link>
  </div>
</template>

<script>
import EventBus from "../../main.js";
import Card from "./Card.vue";
import CardStack from "./CardStack.vue";

export default {
  data() {
    return {
      activatedCard: null,
      cardArr: [
        {
          cardNumber: "1234567891234567",
          cardName: "Leandro Da Souza",
          valid: "12 / 29",
          ccv: 742,
          vendor: "bitcoin"
        },
        {
          cardNumber: "1234567891234567",
          cardName: "Leandro Da Souza",
          valid: "12 / 29",
          ccv: 742,
          vendor: "blockchain"
        },
        {
          cardNumber: "1234567891234567",
          cardName: "Leandro Da Souza",
          valid: "12 / 29",
          ccv: 742,
          vendor: "ninja bank"
        },
        {
          cardNumber: "1234567891234567",
          cardName: "Leandro Da Souza",
          valid: "12 / 29",
          ccv: 742,
          vendor: "evilcorp"
        }
      ]
    };
  },
  components: {
    appCard: Card,
    appCardStack: CardStack
  },
  methods: {
    addId() {
      let id = 0;
      this.cardArr.forEach(card => {
        card.id = id++;
      });
    },
    activeCard(card) {
      this.activatedCard = card;
      console.log(this.activatedCard);
    },
    addNewCard(card) {
      console.log(card);
      this.cardArr.push(card);
      console.log(this.cardArr);
    }
  },
  computed: {
    isActiveCard() {
      if (this.activatedCard === null) {
        return this.cardArr[0];
      }
      return this.activatedCard;
    }
  },
  created() {
    this.addId();
  },
  updated() {
    this.addId();
  },
  mounted() {
    EventBus.$on("newCard", this.addNewCard);
  }
};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.btn {
  margin: 20px 0;
  padding: 15px 30px;
  cursor: pointer;
  font-size: 20px;
  background-color: #fff;
  box-shadow: 1px 1px 0;
}
.btn:hover {
  background-color: #666;
  color: #fff;
}
</style>
