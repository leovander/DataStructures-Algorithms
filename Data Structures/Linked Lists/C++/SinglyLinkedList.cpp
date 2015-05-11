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
}

void SinglyLinkedList::deleteNode(int value) {

}

SinglyLinkedList::~SinglyLinkedList() {

}
