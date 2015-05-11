/*
  Node
*/

#include "Node.h"
#include <cstring>

Node::Node(int value) {
  next = NULL;
  data = value;
}

int Node::value() {
  return data;
}

void Node::setData(int value) {
  data = value;
}

void Node::setNext(Node *next) {
  this->next = next;
}

Node * Node::getNext() {
  return next;
}
