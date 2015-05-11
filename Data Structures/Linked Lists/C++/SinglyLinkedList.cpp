/*
  SinglyLinkedList
*/
#include "SinglyLinkedList.h"

SinglyLinkedList::SinglyLinkedList() {
  head = NULL;
  length = 0;
}

void SinglyLinkedList::insertFront(int value) {
  Node *newNode;
  newNode = new Node(value);

  if(head == NULL) {
    head = newNode;
  } else {
    newNode.setNext(head);
    head = newNode;
  }

  length++;
}

bool SinglyLinkedList::deleteNode(int value) {
  if(head == NULL) {
    return false;
  }

  Node *current;

  if(head.getValue() == value) {
    current = head;
    head = head.getNext();
    delete current;
    current = NULL;
    return true;
  }

  current = head.getNext();
  Node *tail = head;

  while(current != NULL) {
    if(current.getValue() == value) {
      tail.setNext(current.getNext());
      delete current;
      current = NULL;
      length--;
      return true;
    }

    tail = current;
    current = current.getNext();
  }

  return false;
}

SinglyLinkedList::~SinglyLinkedList() {
  Node *current;

  while(head != NULL) {
    current = head;
    head = head.getNext();
    delete current;
    current = NULL;
  }
}
