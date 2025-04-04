# Database SQL Notes

## Terminologies
`Foreign Key:` A key that connects a specific table to another table using the primary key of 
that table.

## Data Types
- `CHAR(size):` Fixed size even if less than size.
- `VARCHAR(size):` Automatically adjust the size. 
- `TEXT:` More conventional type compare to CHAR and VARCHAR.


## Common Constraints
- `PRIMARY KEY:` A unique identifier of each row in a table.
- `NOT NULL`
- `SERIAL`

```sql
CREATE TABLE <table_name> (
    <field1> SERIAL PRIMARY KEY,
    <field2> VARCHAR(45),
    <field3> VARCHAR(45)
);
```


```sql
CREATE TABLE table_name (
    Column1 STRING NOT NULL,
    Column2 INT NOT NULL,
    COL3 STRING,
    COL4 STRING
    PRIMARY KEY (Column1)
    FOREIGN KEY (Column2) REFERENCES another_table (Column_From_Another_Table)
)
```
- `NOT NULL` indicates that it is a required data for the row and cannot be null.




### Database Connection Setup
#### JavaScript
```
import 
```