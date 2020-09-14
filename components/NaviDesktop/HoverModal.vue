<template>
  <Container1640 class="border-gray-200 border-b-2 border-solid bg-white min-w-full">
    <div class="flex" style="min-height : 200px;">
      <div style="min-width : 180px" class="border-gray-200 border-r-2 border-solid text-right p-4">
        <ul class="mt-2">
          <li
            v-for="(sub,i) in subs"
            :key="i"
            @click="$router.push(`/category/${sub.alias}`)"
            class="text-right; pb-3 text-xs font-bold hover:text-hovercolor cursor-pointer"
          >{{sub.name}}</li>
        </ul>
      </div>
      <div class="flex-grow ml-4 mt-4">
        <div class="flex justify-center items-center">
          <BlockItem v-for="n in 4" :key="n" class="p-2" />
        </div>
        <div class="pl-2 pb-4">
          <i
            class="far fa-caret-square-left text-gray-500 text-2xl mr-1 hover:text-black cursor-pointer"
          ></i>
          <i
            class="far fa-caret-square-right text-gray-500 text-2xl hover:text-black cursor-pointer"
          ></i>
        </div>
      </div>
    </div>
  </Container1640>
</template>

<script>
import Container1640 from "@/components/containers/Container1640";
import BlockItem from "@/components/BlockItem/BlockItem";
export default {
  components: {
    Container1640,
    BlockItem
  },
  props: {
    subs: {
      type: Array
    },
    currentPosts: {
      type: Array
    }
  }
};
</script>