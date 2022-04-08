<template>
    <div class=" flex justify-end"><button @click="removeAll(products)">Remove all</button></div>
</template>

<script>
export default {
    props:{
        products: {
            type: Array,
            reqired: true
        },
    },
    emits: ['removeAll'],
    setup(_,{emit}) {
       const removeAll = (products) => {

           const productsId = products.map(el => {
               return el.product_stock.id
           })
        //    console.log(products)
           emit('removeAll', productsId)
       } 

       return {
        removeAll
       }
    },
}
</script>