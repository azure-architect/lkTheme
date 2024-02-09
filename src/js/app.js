import Swup from 'swup';
const swup = new Swup()
import Alpine from 'alpinejs'
import morph from '@alpinejs/morph'
import anchor from '@alpinejs/anchor'
import collapse from '@alpinejs/collapse'
import persist from '@alpinejs/persist'
import intersect from '@alpinejs/intersect'
import mask from '@alpinejs/mask'
window.Alpine = Alpine
Alpine.start()
Alpine.plugin(morph)
Alpine.plugin(anchor)
Alpine.plugin(collapse)
Alpine.plugin(persist)
Alpine.plugin(intersect)
Alpine.plugin(mask)

 
 