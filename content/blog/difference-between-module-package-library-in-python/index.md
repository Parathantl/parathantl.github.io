---
title: The difference between Module, Package and Library in Python
date: "2020-12-10T13:00:37.121Z"
tags: ["Python"]
---

I started learning Python a year back and implemented some simple scripts to automate some manual tasks.

E.g:

-   Read CSV files and analyzing
-   Download YouTube videos by giving the link
-   Updating Webpages through Rest API

So, while implementing all theses I have gone through the keywords like Module, Package and Library. I was bit confused why there are different names used and browsed over the Internet to clear my doubt.

At then end, I cleared and able to manage with some of my colleagues and juniors regarding what these words really meant. Lets get into this brief post to know what they mean.

## Module

Module is a simple Python (executable file) file which contain collections of functions and global variables inside it. These files has the extension as **.py** [ Since, its just a Python File ]

E.g:
```
def addNumbers(num1, num2):   
    return num1+num2
```

Just save this as **demo.py** and create a new Python file as **test.py** and inside it write the following lines of code

```
import demox = demo.addNumbers(5,6) 
print(x)
```

You will see the output as **11**

## Package

The collections of modules organized together and kept into a directory. That directory is known as Package. There can be several number of modules can be found. Inside this directory there will be **__init__.py** file. This file is the one which will always be recognized and run by the compiler.

### Before getting more into this lets see what is __init__ in Python

__init__ will be considered as a constructor when we are implementing Object Oriented Programming in Python.

What is the functionality of constructor in Object Oriented Programming?

-   When initializing an object from anywhere in the code the class variables can be initialized. That means initiating the state of objects.
-   Constructors are the one which executed at the very beginning when an object is instantiated

  ```
#a Sample class with init method

class Device:     
 
    # init method or constructor      
    def __init__(self, name):     
        self.name = name     
        
    # Sample Method      
    def say_hi(self):     
        print('Hello, my device is', self.name)     
        
p = Device('Personal Computer')     
p.say_hi()
```

So, you will get the following as an output

```
Hello, my device is Personal Computer
```

So, I hope you may have got some clear understanding on why **__init__** used in Python. Similarly, when creating a package **__init__.py** will be recognized as the constructor and will be executed when the Package is called for execution at run-time. The package may also can contain sub-packages.
```
Student(Package)  
| __init__.py (Constructor)  
| details.py (Module)  
| marks.py (Module)  
| collegeDetails.py (Module)
```
## Library

Library is having a collection of related already written functionalities and code segments which you don’t have to re-write by your own and allows you to perform many tasks by just importing the Library. Simply say, Library can also be considered as a collection of Packages.

Some examples for Library are:

-   Pandas — CSV manipulations can be done
-   PyPDF2 — PDF file handling Library for Python
```
import pandas as pd   
df = pd.read_csv(“file_name.csv”)
```
According to the above code, We are just importing Pandas as pd to use pd keyword in the below code lines to access the methods. read_csv method in Pandas library will read the CSV file into a Data Frame.

That’s it. I hope you have you get a better picture right now from the above explanations.

Happy Coding….

Keep supporting my blog as much as you can. This is my sole intention is to share my learning with Dev community and to make use of this learning in my future developments

Follow me on [Twitter](https://twitter.com/parathantl)

## Reference:
[Modules](https://www.youtube.com/watch?v=DdGVBZv46PI&feature=emb_title)
[Modules, Packages and Libraries in Python Explained](https://www.youtube.com/watch?v=V27FQ6UBTPY&feature=emb_title)

