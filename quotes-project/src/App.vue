<template>
    <div class="container">
        <app-progress-bar :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-progress-bar>
        <app-quote-creation @quoteAdded="newQuote"></app-quote-creation>
        <app-quotes-list :quotes="quotes" @quoteDeleted="deleteQuote"></app-quotes-list>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import AppProgressBar from './components/ProgressBar.vue';
    import AppQuoteCreation from './components/QuoteCreation.vue';
    import AppQuotesList from './components/QuotesList.vue';
    import AppFooter from './components/Footer.vue';

    export default {
        components: {
          AppProgressBar,
          AppQuoteCreation,
          AppQuotesList,
          AppFooter
        },
        data: () => {
          return {
            maxQuotes: 10,
            quotes: []
          }
        },
        methods: {
            newQuote(quote) {
                if (this.quotes.length >= this.maxQuotes) {
                    return alert('Please delete Quotes first!');
                }
                this.quotes.push(quote);
            },
            deleteQuote(index) {
                this.quotes.splice(index, 1);
            }
        },
    }
</script>

<style>
</style>
