<template>
    <div class="card" :style="{ backgroundColor: bgColor }" @click="activeCard">
        <p class="logo"></p>
        <h2 class="cardNumber">{{ card.cardNumber | space }}</h2>
        <div class="cardHolder">
            <p>cardholder name</p>
            <p>{{ card.cardName }}</p>
        </div>
        <div>
            <p>valid thru</p>
            <P>{{ card.valid }}</P>
        </div>
    </div>
</template>

<script>
export default {
    name: 'appCard',
    data() {
        return {};
    },
    props: {
        card: Object
    },
    filters: {
        space(str, after) {
            if (!str) {
                return false;
            }
            after = after || 4;
            var v = str.replace(/[^\dA-Z]/g, ''),
                reg = new RegExp('.{' + after + '}', 'g');
            return v.replace(reg, function(a) {
                return a + ' ';
            });
        }
    },
    computed: {
        bgColor() {
            if (this.card.vendor === 'bitcoin') {
                return 'orange';
            } else if (this.card.vendor === 'evilcorp') {
                return 'darkred';
            } else if (this.card.vendor === 'ninja bank') {
                return 'gray';
            } else if (this.card.vendor === 'blockchain') {
                return 'blueviolet';
            }
            return '';
        }
    },
    methods: {
        activeCard() {
            this.$emit('activeCard', this.card);
        }
    }
};
</script>

<style scoped>
.card {
    border: 1px solid black;
    width: 500px;
    height: 100%;
    cursor: pointer;
}
</style>
