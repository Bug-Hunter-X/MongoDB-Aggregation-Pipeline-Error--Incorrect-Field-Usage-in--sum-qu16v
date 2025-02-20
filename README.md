# MongoDB Aggregation Pipeline Error: Incorrect Field Usage in $sum
This repository demonstrates a common error in MongoDB aggregation pipelines: using a field in the `$sum` accumulator that either doesn't exist in the documents or has an incorrect field path.

The `bug.js` file contains the erroneous code, which uses `"$anotherfield"` in `$sum` when it should be `$anotherfield` (without quotes).  This causes the aggregation to fail or produce unexpected results.

The `bugSolution.js` file shows the corrected code.