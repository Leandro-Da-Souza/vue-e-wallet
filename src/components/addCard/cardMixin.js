const cardMixin = {
    data() {
        return {
            newCard: {
                number: null,
                name: null,
                valid: null,
                ccv: null,
                vendor: null
            }
        };
    }
};

export default cardMixin;
