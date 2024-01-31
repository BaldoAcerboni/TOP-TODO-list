function ListItem(title, description, date, priority, type) {
  this.title = title;
  this.description = description;
  this.date = date;
  this.priority = priority;
  this.type = type;
}

const item1 = new ListItem("bubi", "the bubi", "2024-02-01", 1, "work");
console.log(item1);

const item2 = new ListItem(
  "bobo",
  "the bobo",
  "2024-03-03",
  3,
  "miscellaneous"
);
console.log(item2);
