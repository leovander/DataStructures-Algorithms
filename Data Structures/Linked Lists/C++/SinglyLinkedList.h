/*
  Singly Linked List - Header
*/

#include "Node.h"
#include <iostream>

#ifndef SINGLYLINKEDLIST_H
#define SINGLYLINKEDLIST_H

class SinglyLinkedList {
public:
  SinglyLinkedList();
  ~SinglyLinkedList();
  void insertFront(int value);
  bool deleteNode(int value);
  std::string printList();
private:
  Node *head;
  int length;
};

#endif
