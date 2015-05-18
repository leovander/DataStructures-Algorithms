#include "DoublyLinkedList.h"
#include <assert.h>
#include <string>

DoublyLinkedList::DoublyLinkedList() {
  head = NULL;
  length = 0;
}

DoublyLinkedList::~DoublyLinkedList() {
  // TODO
}

void DoublyLinkedList::insertFront(int value) {
  DoubleNode *newNode;

  if(head == NULL) {
    head = newNode;
  } else {
    newNode->setNext(head);
    head->setPrevious(newNode);
    head = newNode;
  }
  
  length++;
}
