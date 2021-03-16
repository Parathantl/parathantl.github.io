---
title: Design Patterns — Zero to Hero — Singleton Pattern
date: "2020-06-17T21:30:37.121Z"
tags: ["Design Patterns"]
---
In our day-to-day coding occurrences, we may have come across some implementations where a class needs to be instantiated only once and no need to instantiate again and again.

## Some example instances are as follows

-   Objects used for logging
-   Objects that act as device drivers to devices like printers and graphic cards
-   Objects containing registry settings and caches related details

For these kinds of instances if we allowed instantiating objects many times we may have to run out of resources or may get into some troubles like incorrect program behavior. To resolve these issues we need to instantiate the object only one time and when the object instantiated more than one time, it needs to return the object instance which created at first.

> **The Singleton Pattern** ensures a class has only one instance, and provide a global point of access to it.

## Before getting into what is Singleton, We have to know how an object instance of a class can be created?

-   When you are creating a new object of a class that class needs to be public (Public is access modifier; anywhere in the program the class’s object can be created). If the class is not public, only classes in the same package can instantiate it. Even though, those same package classes can create many objects for that class.

In Singleton, We need to implement the code to instantiate a class only once and thereafter, no more instantiation of the class

-   Therefore, we need to make the constructor of the class as **Private** (Private can only be accessed within the declared class itself.)
-   If the constructor is **private** no other classes can instantiate the class. But we can make static methods in that class and try to create a new instance of the class
```
public Singleton{
	//Private Constructor  
	private Singleton() {}
	
	// getInstance method will return Singleton class object  

	public static Singleton getInstance() {
	//Implementation for creating new Singleton class objects
	}
}
```
Making static methods will enable us to do lazy initialization. Declaring the method as static will enable us this feature.

So, when we are going to access a method of a class without initializing a class object we need to make that particular method as static. So, that method can be accessed by the following structure

Singleton.getInstance();

Now, what we have to do is creating a new instance of the class inside the getInstance() method.
```
public Singleton{
	// This static variable will hold the one instance of the      class Singleton

	private static Singleton uniqueInstance;
	//Private Constructor

	private Singleton(){}
	// getInstance method will return Singleton class object
	
	public static Singleton getInstance() { 
		//Implementation for creating new Singleton class objects 
		if(uniqueInstance == null){  
			uniqueInstance = new Singleton();  
			System.out.println("New Singleton Object Instantiated")  
		}  
	        return uniqueInstance;
	}
}
```
This uniqueInstance variable will be assigned to a new class object instance of Singleton class if it is not created already. If it already created it will give the one that already exists. So, this is what Singleton’s implementation is. You will just create only one instance of the object.

**But you may think that is that implementation would work in a Multi-thread environment too?**

> Before know about Multi-Thread execution, You should have an understanding of handling/creating Threads in Java. Then only you could be able to understand this without any hustle. I am attaching reference YouTube videos so that you can refer it too.

It won’t because every thread will create its own Singleton’s object instance as they are executed separately. For example, when you implemented 2 Threads and run the above code you will get the following output.

**New Singleton Object Instantiated  
New Singleton Object Instantiated**

## Following are some of the steps to improve Multi-Threading scenario

1.  **Do nothing if the performance is not critical in the program**: If you the implemented way is not overhead the program you created, then leave it as it is. No issues. Synchronizing a method would be straightforward and effective. But, synchronizing will reduce the performance of the code. Keep all these in mind and implement your code
```
public Singleton {
	// This static variable will hold the one instance of the      class Singleton

	private static Singleton uniqueInstance;
	//Private Constructor

	private Singleton(){ }
	// getInstance method is set to synchronized, therfore the Threads will wait till the getInstance method is unlocked by other thread 

	public static synchronized Singleton getInstance() {
		//Implementation for creating new Singleton class objects 
		if(uniqueInstance == null){  
			uniqueInstance = new Singleton();  
			System.out.println("New Singleton Object Instantiated"); 
		} 
	           return uniqueInstance; 
	}
}
```
2. **Create instance while declaring the class object variable**: If your application always creates and uses an instance of the class of the object instantiation is not an overhead for your application; just create the instance while declaring the variable instance of the class. Something as like follows
```
public class Singleton {
	//This one is a Thread-safe when instantiating class object while assigning it to the static initializer

	private static Singleton uniqueInstance = new Singleton();

	private Singleton(){}

	private static Singleton getInstance(){  
	          return uniqueInstance  
	}
}
```
The above method will not be a problem when running in a multiple thread environment.

3. **use of “double-checked locking” to reduce the use of synchronization:** With this method, the code will check to see if an instance is created or not. If it is created then it will synchronize. By using this way, synchronization will happen only once and that is only for the first time.
```
public Singleton 
{ 
	// Volatile keyword ensures multiple threads handle the variable correctly when it initilized

	private volatile static Singleton uniqueInstance; 
	//Private Constructor

	private Singleton(){

	} 

	public static Singleton getInstance(){  
	        if(uniqueInstance == null) {
	        synchronized (Singleton.class){ 
		        if (uniqueInstance == null){  
			        uniqueInstance = new Singleton();  
				System.out.println("New Singleton Object Instantiated")  
			}
	        }
	}  
	      return uniqueInstance;
	}
}
```
I hope you were able to understand the explanation. If any doubts leave a comment below. Let's meet with another Design Pattern soon.

I hope you were able to understand the explanation. If any doubts leave a comment below. Let's meet with another Design Pattern soon.

## Reference:

-   Head First Design Pattern — A Brain-Friendly Guide
-   [Multithreading Synchronized Keyword](https://www.youtube.com/watch?v=RH7G-N2pa8M)
-   [Synchronization in Java Multithreading — Complete Theory with Examples in Hindi and English](https://www.youtube.com/watch?v=4CJ2sjka8Uw)

