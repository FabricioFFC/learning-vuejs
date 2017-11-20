import Home from './components/layouts/Home.vue'
import Portfolio from './components/features/portfolio/Portfolio.vue'
import Stocks from './components/features/stocks/List.vue'

export default [
  { path: '', component: Home },
  { path: '/portfolio', component: Portfolio },
  { path: '/stocks', component: Stocks }
]
