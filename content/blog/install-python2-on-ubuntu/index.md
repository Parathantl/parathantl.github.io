---
title: How to install python2 and pip on Ubuntu 20.04
date: "2021-03-11T15:00:37.121Z"
tags: ["Python"]
---

#### Why to install Python2

Most of the applications are now shifted to Python3 and becoming re-written source code. But somehow, some of the not evolving scripts which were written on Python2 needs to be executed with the help of Python2.

#### To install Python2

```
sudo apt install python-minimal
```
The above command will download the Python2 last version (2.7.15).

Check the version using the following command

```
python2 --version
```

To check python3 version

```
python3 --version
```

To manage the Python packages we need to install pip.

##### Install pip for python2

```
wget https://bootstrap.pypa.io/pip/2.7/get-pip.py
```
a new file named get-pip.py will be downloaded.

Then execute the following command in the terminal

```
python2 get-pip.py
```

Now, you have installed pip for python2

I am going to download a python2 supported package using pip for python2
In my case, wikitools

```
python2 -m pip install wikitools
```

##### That's it. We have installed the Packages for Python2