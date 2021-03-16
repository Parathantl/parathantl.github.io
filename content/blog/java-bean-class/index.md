---
title: Java Bean Class
date: "2018-10-13T15:00:37.121Z"
tags: ["Java"]
---
Java Bean class is a Simple class that encapsulates many object in to a single object. Usually Bean contains the following conventions

1.  **implements Serialize interface**

Serialization is the process of changing objects into a byte stream. The byte stream is the data type which is used to store in a physical file, memory or database. So, serialization process is much important according to programming.

Usage of Serialization are

-   save/persist state of an object.
-   To travel an object across a network.

**2. should have a public no-arg constructor.**

**3.All properties in java bean must be private with public getters and setter methods.**

Shall We have a Sample code:
```
// Java Program of JavaBean class

public class Book implements java.io.Serializable {
	private int id;
	private String book_name;
  
	//Public Constructor with No Arguments
	public Book() { } //Following are getter & setter methods
	
	public void setId(int id) {
		this.id = id;
	}

	public int getId() {
		return** id;
	}

	public void setBook_name( String book_name){
		this.book_name= book_name;
	}

	public String getBook_name(){
		return book_name;
	}

}
```
Some syntax used for Setter method

-   It is in public
-   return type should be void : As it sets the value only
-   It is written with “set” prefix and the name Eg: **setBook_name**
-   It should take some arguments like without no arguments is invalid

Some syntax used for Getter methods

-   It is in public
-   return type should be the data type of the respective requirement data
-   Method be prefixed with “get” Eg: **getBook_name**
-   should not take any arguments

Here, you may get some doubt of POJO class & Bean Class are same.

Am I right..? If you refer the database entity code class, that is called POJO class.

That means, all POJO class are Bean class but not Bean class are POJO. Just keep in mind.

This is a answer found on StackOverFlow :

> A Java Bean follows certain conventions. Getter/setter naming, having a public default constructor, being serializeable etc.
> 
> A POJO (plain-old-Java-object) isn’t rigorously defined. It’s a Java object that doesn’t have a requirement to implement a particular interface or derive from a particular base class, or make use of particular annotations in order to be compatible with a given framework, and can be any arbitrary (often relatively simple) Java object.

This may be helpful to you.

Thank you.

Happy Coding Forks….!!


