#include "DoubleNode.h"
#include <iostream>

#ifndef DOUBLYLINKEDLIST_H
#define DOUBLYLINKEDLIST_H

class DoublyLinkedList {
public:
  DoublyLinkedList();
  ~DoublyLinkedList();
  void insertFront(int value);
  bool deleteNode(int value);
  std:string printList(std::string start); // start = "head" or "tail"
private:
  DoubleNode *head;
  int length;
}

#endif
