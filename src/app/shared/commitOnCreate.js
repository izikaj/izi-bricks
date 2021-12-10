import firstExisting from './firstExisting';

function created() {
  const value = firstExisting(this.value, this.default, undefined);
  const path = this.path;
  this.$store.commit('update', {
    id: this.rootID,
    path,
    value
  });
}

export default created;
