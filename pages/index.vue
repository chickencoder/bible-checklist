<template>
  <div>
  <header class="container mx-auto text-center px-4 my-12">
    <h1 class="text-xl">
      <span class="block text-gray-700">Wilf &amp; Jesse's</span>
      <span class="block text-4xl font-bold">Bible Ticklist</span>
    </h1>
      <h2 class="text-gray-700 text-xl">({{ percent }}% complete)</h2>
  </header>
  <main class="container mx-auto px-4 pb-12">
    <section class="mb-12">
      <ProgressBar :percent="10" />
    </section>
    <section>
      <ol>
        <li v-for="book in $store.state.books" class="mb-4">
          <CheckBox :label="book.key" :state="book.status" />
        </li>
      </ol>
    </section>
  </main>
  </div>
</template>

<script>
import CheckBox from '~/components/CheckBox'
import ProgressBar from '~/components/ProgressBar'

export default {
  components: {
    CheckBox,
    ProgressBar
  },
  computed: {
    books() {
      return this.$store.state.books
    },
    percent() {
      // Which books have we read?
      const readBooks = this.books.filter(book => {
        return book.status === 'complete'
      })
      
      // Sum all the verses from each read book
      const readVerses = readBooks.reduce((acc, book) => {
        return acc + book['val']
      }, 0)
      
      const totalVerses = this.$store.state.total
      const percent = ((readVerses / totalVerses) * 100).toFixed(1)
      return percent
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 680px;
}
</style>