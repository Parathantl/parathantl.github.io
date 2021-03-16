---
title: Design Patterns — Zero to Hero — Decorator Pattern
date: "2020-10-31T21:30:37.121Z"
tags: ["Design Patterns"]
---
In this article we are going to learn about a new Decorator Pattern which is belongs to Structural Design Pattern. The Decorator Pattern allows users to add new functionalities to an existing object without making any changes to previously written classes/code structure. This pattern act as a wrapper to the existing class/classes.

According to Open-closed principle classes should be open for extension, but closed for modification. The main thing we need to consider when writing code is to allow classes to be easily extended to incorporate new behavior without modifying existing code. Even though, Open-closed principle is good coding practice we need to be careful at which place we are using it. Because applying this principle everywhere is wasteful and unnecessary.

**Class Diagram of Decorator Pattern**

![](/images/1.png)

**Coding Example**

The following is a sample coding part taken as an example to demonstrate Decorator Pattern. A food and beverages delivering application is having variety of food items. Eg: Vegetarian, Non-vegetarian food and beverages with different flavors. If a user orders a Veg food he/she can order different variety of curries for it. For example Vegetarian Food with Indian vegetarian food curries or Chinese vegetarian food. At the same time for non-vegetarian food can be ordered along with Indian vegetarian curries or Chinese food curies.
```
public abstract class Item { 

	String description = "Unknown Description";  
	// getDescription is implemented

	public String getDescription(){  
		return description;  
	} 
	
	// need to implement Cost in the sub-classes who extends Item Class

	public abstract double cost();
}
```
Abstract Decorator Class Implementation. This Decorator class will be extended by the concrete decorator classes.
```
public abstract class ItemDecorator extends Item {  
        public abstract String getDescription();  
}
```
Implementing Concrete Class Vegetarian Food
```
public class VegetarianFood extends Item { 

	public VegetarianFood(){  
		description = "Basic Vegetarian Food";   
		// description is a variable inherited from Item
	}
	
	public double cost()  
		return 100;  
	}
}
```
Similarly, We can define a class for Non-Veg too.
```
public class NonVegetarianFood extends Item {

	public NonVegetarianFood() {  
		description = "Basic Non-Vegetarian Food with curries";   
		// description is a variable inherited from Item 
	}
	
	public double cost()  
		return 150;  
	}
}
```
Now, Implement Concrete Decorator Pattern
```
public class IndianVegFood extends ItemDecorator{ 

	Item item;  

	// instance variable to hold the item we are going to wrap
	public IndianVegFood(Item item){  
		this.item = item;    
		// passing the wrapping item
	}  
	   
	publich String getDescription(){  
		return beverage.getDescription() + ", Indian Veg Curries";  
	}  
	   
	public double cost(){  
		return  item.cos() + 50;  
	}

}
	
// Implementation For ChineseVegFoodpublic

class ChineseVegFood extends ItemDecorator { 
	Item item;  
	
	// instance variable to hold the item we are going to wrap
	public IndianVegFood(Item item){  
		this.item = item;    
		// passing the wrapping item
	}
	
	publich String getDescription(){  
		return item.getDescription() + ", Chinese Veg Curries";  
	}  
	   
	public double cost(){  
		return item.cos() + 70;  
	}

}
```
Calling the app from Main Class
```
public class MainApp{ 

	public static void main (String args[]) { 
		Item item = new VegetarianFood();
		
		System.out.println(item.getDescription + " $"+ item.cost());
		Item item1 = new NonVegetarianFood();  
		item2 = new IndianVegFood(item1);  
		item2 = new IndianVegFood(item1);  
		item2 = new ChineseVegFood(item1);
		
		System.out.println(item1.getDescription + " $"+ item1.cost());
	}
}
```
Output:

Basic Vegetarian Food $100  
Basic Non-Vegetarian Food with curries, Indian Veg Curries, Indian Veg Curries, Chinese Veg Curries $320

**Real World Application usage of Decorator Pattern:**

-   Decorator Pattern is used in Java IO classes: FileInputStream acts as abstract decorator pattern.

![](/images/2.png)

**Characteristics of Decorators Patterns**

-   Decorators have the same super type as the objects they decorate
-   Can use one or more decorators to wrap an object
-   **decorator adds its own behavior either before and/or after delegating to the object it decorates to do the rest of the job**
-   Objects can be decorated at any time, so we can decorate objects dynamically at runtime with as many decorators as we like
-   The Decorator Pattern provides an alternative alternative to sub classing for extending behavior.
-   The Decorator Pattern involves a set of decorator classes that are used to wrap concrete components

# For Note:

-   If a lot of small classes are created as a decorators for objects it would become more complex for a one to read or implement the other part of the code (introducing decorators can increase the complexity of the code)

**_References:_**

[Decorator Design Pattern in Java Example](https://www.journaldev.com/1540/decorator-design-pattern-in-java-example)

**Book: Head First Design Patterns**

