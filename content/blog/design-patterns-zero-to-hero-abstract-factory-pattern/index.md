---
title: Design Patterns — Zero to Hero — Abstract Factory Pattern
date: "2020-07-01T21:30:37.121Z"
tags: ["Design Patterns"]
---

The Abstract Factory is called a factory of factories. In the previous article, we have seen the Simple Factory and Factory Method patterns. This patter too comes under the Creational Pattern category. This provides one of the best ways to create an object.

> Abstract Factory **relies on object composition**. Object creation is implemented in methods exposed in the Factory interface.
> 
> **Intent of the Abstract Factory Pattern is to create families of related objects without having to depend on their concrete class.**

## Let's take an example of a scenario to implement this pattern in real-word.

I want to implement a system for the Cloth showroom where Men and Women wares sold. To get particular people wares we have come up with Abstract Factory Pattern where it uses interface/abstract classes to hide the concrete classes and wrap up all those into an Abstract Factory class.

While execution this Abstract Factory class chooses which sub-class Factory class has to be executed and gives the output.

![](/images/1.png)


**MaterialType Interface**: Through this interface, all the type of cloth class will be implemented. This can be an interface or an abstract class. If you define abstract you declare and define variables for the sub-classes who extend.
```
public interface MaterialType {  
   void getName();  
}
```
**LongSleeveTop**
```
public class LongSleeveTop implements MaterialType {  
   @Override  
   public void getName() {  
      System.out.println("Long Sleeve Top for Woman");  
   }  
}
```
**Scarf class**
```
public class Scarf implements MaterialType {  
   @Override  
   public void getName() {  
      System.out.println("Scarf for Woman");  
   }  
}
```
**MenShirt Class**
```
public class MenShirt implements MaterialType {  
   @Override  
   public void getName() {  
      System.out.println("Shirt for Men");  
   }  
}
```
**AbstractFactory:** Acts as an Abstract Factory to choose which sub-class factory to execute during the run-time
```
public abstract class AbstractFactory {  
   abstract Shape getMaterialType(String mateType) ;  
}
```
**MenWearFactory:** Chooses which concrete classes of MaterialType interface to be executed at run-time for men related material types.
```
public class MenWearFactory extends AbstractFactory {@Override  
   public Shape getMaterialType(String mateType){      
      if(mateType.equalsIgnoreCase("MenShirt")){  
         return new MenShirt();           
      }else if(mateType.equalsIgnoreCase("MenTrouser")){  
         return new MenTrouser();  
      }	   
      return null;  
   }}
```
**WomenWearFactory:** Selects which concrete class to be executed for Women related MaterialType classes.
```
public class WomenWearFactory extends AbstractFactory {
	@Override  
	public Shape getMaterialType(String mateType){      
		if(mateType.equalsIgnoreCase("Scarf")){  
			return new Scarf();           
		}else if(mateType.equalsIgnoreCase("LongSleeveTop")){  
			return new LongSleeveTop();  
		}	   
		return null;  
	}
}
```
**FactoryProducer:** Selects which Factory to be executed according to the parameter passed from the Client code
```
public class FactoryProducer { 
	public static AbstractFactory getFactory(boolean men){     
		if(men){  
			return new MenWearFactory();           
		}else{  
			return new WomenWearFactory();  
		}  
	}
}
```
**Client class: (Main Program)**
```
public class Client { 
	public static void main(String[] args) { 
		//get MenWear factory  
		AbstractFactory menFactory = FactoryProducer.getFactory(false); 
		
		//get an object of MaterialType Men Shirt  
		MaterialType cl1 = menFactory.getMaterialType("MenShirt"); 

		//call getName method of MaterialType MenShirt  
		cl1.getName(); 
		
		//get an object of MaterialType Trousers  
		MaterialType cl2 = menFactory.getMaterialType("Trousers"); 

		//call getName method of MaterialType Trousers  
		cl2.getName(); 
		
		//get WomenWearFactory  
		AbstractFactory womenFactory = FactoryProducer.getFactory(true); 
		
		//get an object of Shape Rectangle  
		MaterialType cl3= womenFactory.getMaterialType("Scarf"); 

		//call getName method of MaterialType Scarf  
		cl3.getName(); 
	}
}
```
By implementing the abstract factory we **reduce the coupling between classes by using abstract/interfaces and extending/implementing those base classes by concrete classes.**

The concrete classes here are MenShirt, Scarf, LongSleeveTop, and Trouser. So, what we have done is creating interfaces and abstractions to hide all these implemented classes and just let the program to choose which class to be executed at the run-time.

I hope you enjoyed this.

