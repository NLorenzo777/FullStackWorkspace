# Database SQL Notes

## Data Types
- `CHAR(size):` Fixed size even if less than size.
- `VARCHAR(size):` Automatically adjust the size. 
- `TEXT:` More conventional type compare to CHAR and VARCHAR.


## Common Constraints
- `PRIMARY KEY`
- `NOT NULL`
- `SERIAL`

```sql
CREATE TABLE <table_name> (
    <field1> SERIAL PRIMARY KEY,
    <field2> VARCHAR(45),
    <field3> VARCHAR(45)
);
```

### Database Connection Setup
#### JavaScript
```
import 
```