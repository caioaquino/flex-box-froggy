import { defineStore } from "pinia";

export const PositionStore = defineStore({
  id: "position",
  state: () => ({
    position: "",
    referenceFrog: null,
    referenceLily: null,
  }),
  getters: {
    getPosition: (state) => state.position,
  },
  actions: {
    savePosition(position: string) {
      this.position = position;
    },
    resetPosition() {
      this.position = "";
    },
    saveReferenceFrog(ref: any) {
      this.referenceFrog = ref;
    },
    saveReferenceLily(ref: any) {
      this.referenceLily = ref;
    },
  },
});
