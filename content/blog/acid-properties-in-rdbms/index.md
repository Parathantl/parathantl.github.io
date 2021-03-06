---
title: ACID Properties in RDBMS
date: "2021-03-14T21:30:37.121Z"
tags: ["Database"]
---
Relational Database Management System is working under main properties. Those properties abbreviated term is called as ACID.
Before or after a transactions happen in a database, these 4 properties will be followed to maintain the integrity of a database management system.

**Atomicity**: A transaction must be atomic. Transaction should happen or not. It **can not be at a middle state**. If a transaction became failure while happening no changes would have happen to database. It will be at the previous state where that transaction happened before.
In Atommicity 2 operations are involved.
1. **Abort**: Changes made to database are not visible that means they are not saved in the database
2. **Commit**: Changes made to the database are visible and saved successfully.

**Consistency**:  The correctness of the **integrity constraints** must be maintained before or after a transaction happened at database to keep the database system always at consistent state. Data type of a record in DB and Foreign key, Primary key are considered as Integrity constraints. So, when a transaction happens DB should check whether the data are right.

**Isolation**: The transactions happening in database should be in an isolation state. It should be public once the transaction is happened successfully. Otherwise, there would be many issues arise. Every transactions happening in the database are independent of others. While a data/record executed during a particular transaction another transaction accessing that data/record is prohibited. The another transaction is only allowed to make use of that data only after the previous transaction done its work.

**Durability**: When a database is updated it will remain in the memory (RAM) for a certain period of time and then it will moved to database. In case of any memory failure databases should update themselves with latest updates before the memory gets crashed. The sole purpose of this property is to ensure that the updates done through transactions must become permanent until it changed by any authorized people.

Lets take an example to see how each of these properties are evident in making the RDBMS properties:
Consider person A and person B. Person A (has $500) is going to send $100 to person B ($200)
While person A transferring the money

 - power failures may have occurred in the middle of the transaction process (where A's amount deducted but B's account not added with the amount transferred) and the system would have gone through power failure. At this point after system starts A's amount deducted and B's not yet being updated is considered as one of the biggest issue. By considering these **abort** operation Atomicity property will be executed to abort the transaction so that the transaction is failed and respective people amount is same as it is before.
 - Consistency property is to check whether the respective updated data is correct according to the integrity constraint defined while creating the database. We can put address in the record space where money has to be put as the value.
 - While transaction happening another transaction can not query for the person A's account details and person B's details, even though it happens it will give a wrong details. Let's say while person A is deducted and person B not yet got that if we check for both people's account details person A has $400 and person B $200. The sum of money before the transaction is ($500 + $200 = $700). When another transaction querying ($400 + $200 = $600). So, this illustrates us that there is no data inconsistency. So, while one transactions happening data involving in the transactions should be isolated.
 - As how its described in the **Durability** section sum of the final amount of each person before transaction and after transaction should be equal.

So, that's all for now. 

Were you able to understand basic on how RDBMS works?

 **Let me here from you now.
 parathan19@gmail.com**
