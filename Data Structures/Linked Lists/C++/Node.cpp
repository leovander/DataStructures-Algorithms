#include "Node.h"

Node::Node(int value) {
  next = NULL;
  data = value;
}

const int Node::value() {
  return data;
}

void Node::setData(int value) {
  data = value;
}

void Node::setNext(Node *next) {
  this->next = next;
}

Node Node::*getNext() {
  return next;
}
