---
title: Detecting Common Words in Python
date: 2016-09-01
layout: post
---

While working on a mapping project I needed to identify cities whose names are also common nouns, like Bend, Oregon.  This method, which uses Unix's built-in wordlist normally saved in */usr/share/dict/words*, was a quick addition:

```python
common_words = [l.rstrip() for l in open('/usr/share/dict/words', 'r')
                if l == l.lower()]

def is_common_word(word):
    return True if word.lower() in common_words else False
```
