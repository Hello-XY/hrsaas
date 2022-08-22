import permissionPoint from '@/constant/permission'

export default {
  data() {
    return {
      piont: permissionPoint
    }
  },
  methods: {
    ishas(piont) {
      return this.$store.state.permission.points.includes(piont)
    }
  }
}
