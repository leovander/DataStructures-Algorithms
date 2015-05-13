/*
  Singly Linked List
*/

#include "SinglyLinkedList.h"
#include <assert.h>
#include <string>

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
    newNode->setNext(head);
    head = newNode;
  }

  length++;
}

bool SinglyLinkedList::deleteNode(int value) {
  if(head == NULL) {
    return false;
  }

  Node *current;

  if(head->value() == value) {
    current = head;
    head = head->getNext();
    delete current;
    current = NULL;
    length--;
    return true;
  }

  current = head->getNext();
  Node *tail = head;

  while(current != NULL) {
    if(current->value() == value) {
      tail->setNext(current->getNext());
      delete current;
      current = NULL;
      length--;
      return true;
    }

    tail = current;
    current = current->getNext();
  }

  return false;
}

SinglyLinkedList::~SinglyLinkedList() {
  Node *current;

  while(head != NULL) {
    current = head;
    head = head->getNext();
    delete current;
    current = NULL;
  }
}

std::string SinglyLinkedList::printList() {
  Node *current = head;
  std::string output = "";

  while(current != NULL) {
    output.append(std::to_string(current->value()));

    if(current->getNext() != NULL) {
      output.append(" ");
    }

    current = current->getNext();
  }

  return output;
}

int main() {
  SinglyLinkedList *list = new SinglyLinkedList();

  list->insertFront(6);
  list->insertFront(9);
  list->insertFront(10);
  list->insertFront(13);

  std::cout << "Expected: 13 10 9 6\n";
  assert(list->printList() == "13 10 9 6");
  std::cout << list->printList();

  list->deleteNode(9);

  std::cout << "\nExpected: 13 10 6\n";
  assert(list->printList() == "13 10 6");
  std::cout << list->printList() << std::endl;

  return 0;
}
