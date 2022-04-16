<template>
    <div class=" p-6 bg-slate-200 w-full rounded-md">
        <div class=" uppercase text-xl mb-2">Order summery</div>
        <div class=" flex flex-col divide-y divide-slate-400">
            <div class=" flex py-4 justify-between">
                <span class=" text-slate-500">Subtotal</span>
                <span>{{currency(getSubTotal)}}</span>
            </div>
            <div class=" flex py-4 justify-between">
                <span class=" text-slate-500">Products</span>
                <span>{{getProductsCount}}</span>
            </div>
            <div class=" flex py-4 justify-between font-bold">
                <span class=" text-slate-500">Total</span>
                <span>{{currency(getTotal)}}</span>
            </div>
            
        </div>
    </div>
</template>

<script>
import {computed, ref} from 'vue'
import {currency} from '@/utils/currency'
export default {
    props: {
        products: {
            type: Array,
            required: true
        }
    },
    setup(props) {

        const getSubTotal = computed(() => {
            let subTotal = 0

             props.products.forEach(el => {
                subTotal += el.total
            })
            
            return subTotal
        })

        const getProductsCount = computed(() => {
            let productsTotal = 0
            props.products.forEach(el => productsTotal += el.count)
            return productsTotal
        })

        const getTotal = computed(() => {
            let total = 0

             props.products.forEach(el => {
                total += el.total
            })
            
            return total
        })

        return {
            getSubTotal,
            getProductsCount,
            getTotal,
            currency
        }
    },
}
</script>