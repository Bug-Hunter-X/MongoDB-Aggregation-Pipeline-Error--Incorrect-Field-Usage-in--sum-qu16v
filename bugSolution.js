```javascript
//Corrected aggregation pipeline
db.collection.aggregate([
  {$match: { /* filter criteria */ }},
  {$group: {_id: "$field", sum: {$sum: $anotherfield}}}, //Corrected: Removed quotes
  {$sort: {sum: -1}}
])
```