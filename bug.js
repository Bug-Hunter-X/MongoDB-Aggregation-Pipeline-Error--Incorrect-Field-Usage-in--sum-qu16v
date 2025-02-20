```javascript
//Incorrect aggregation pipeline causing unexpected results
db.collection.aggregate([
  {$match: { /* filter criteria */ }},
  {$group: {_id: "$field", sum: {$sum: "$anotherfield"}}}, //Error: Incorrect field usage
  {$sort: {sum: -1}}
])
```