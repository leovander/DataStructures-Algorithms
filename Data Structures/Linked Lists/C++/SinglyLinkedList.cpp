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
  } else {
    Node *current = head.getNext();
    Node *tail = head;

    while(current != NULL) {
      if(current.value() == value) {
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
}

SinglyLinkedList::~SinglyLinkedList() {

}
