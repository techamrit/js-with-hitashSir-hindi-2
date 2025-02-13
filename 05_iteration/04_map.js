// map

const map = new Map();
map.set("IN", "india");
map.set("usa", "United States of America");
map.set("fr", "france");
for (const [key, value] of map) {
  console.log(key, ":-", value);
}
