#include "Node.h"

#ifndef SINGLYLINKEDLIST_H
#define SINGLYLINKEDLIST_H

class SinglyLinkedList {
public:
  SinglyLinkedList();
  ~SinglyLinkedList();
  void insertFront(int value);
  bool deleteNode(int value);
private:
  Node *head;
  int length;
}

#endif
